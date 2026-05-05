import {
  ArrowSquareOut,
  Clock,
  Crosshair,
  FunnelSimple,
  GlobeHemisphereWest,
  MagnifyingGlass,
  MapPin,
  SlidersHorizontal,
  SortAscending,
  Timer,
} from "@phosphor-icons/react";
import { getAllCountries, getCountry, getTimezone } from "countries-and-timezones";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import { memo, useEffect, useMemo, useState } from "react";
import { feature } from "topojson-client";
import worldAtlas from "world-atlas/countries-110m.json";
import { agents, dropItems, type DropCategory, type DropItem } from "./data";
import { formatClock, formatCountdown, formatInZone, getNextReset } from "./time";

type Page = "timer" | "drops";
type DetectionState = "loading" | "ready" | "fallback" | "error";
type SortKey = "chance" | "price" | "name" | "rarity";

type ZoneBand = {
  id: string;
  label: string;
  short: string;
  timeZone: string;
  offset: string;
};

type CountryPath = {
  id: string;
  name: string;
  d: string;
  side: "ct" | "t";
  zone: ZoneBand;
};

const MAP_WIDTH = 1000;
const MAP_HEIGHT = 520;
const MAP_FIT_EXTENT: [[number, number], [number, number]] = [
  [18, 28],
  [982, 492],
];
const mapProjection = geoNaturalEarth1().fitExtent(MAP_FIT_EXTENT, { type: "Sphere" });
const mapPath = geoPath(mapProjection);

const countryNameAliases: Record<string, string> = {
  "Bosnia and Herz.": "BA",
  "Central African Rep.": "CF",
  Congo: "CG",
  "Côte d'Ivoire": "CI",
  "Dem. Rep. Congo": "CD",
  "Dominican Rep.": "DO",
  "Eq. Guinea": "GQ",
  "Falkland Is.": "FK",
  "Fr. S. Antarctic Lands": "TF",
  Kosovo: "RS",
  "N. Cyprus": "CY",
  "S. Sudan": "SS",
  Somaliland: "SO",
  "Solomon Is.": "SB",
  "United States of America": "US",
  "W. Sahara": "EH",
};

function normalizeCountryName(name: string) {
  return name.toLowerCase().replace(/[^a-z]/g, "");
}

const countryCodesByName = Object.values(getAllCountries()).reduce<Record<string, string>>((acc, country) => {
  acc[normalizeCountryName(country.name)] = country.id;
  return acc;
}, {});

function timezoneDistance(timeZone: string, band: ZoneBand) {
  const source = getTimezone(timeZone);
  const target = getTimezone(band.timeZone);
  if (!source || !target) return Number.POSITIVE_INFINITY;

  const standardDistance = Math.abs(source.utcOffset - target.utcOffset);
  const daylightDistance = Math.abs(source.dstOffset - target.dstOffset);
  const regionBonus = timeZone.split("/")[0] === band.timeZone.split("/")[0] ? -20 : 0;
  return standardDistance + daylightDistance + regionBonus;
}

function resolveZoneBand(timeZone: string) {
  const exact = zoneBands.find((zone) => zone.timeZone === timeZone);
  if (exact) return exact;

  return [...zoneBands].sort((a, b) => timezoneDistance(timeZone, a) - timezoneDistance(timeZone, b))[0] || zoneBands[0];
}

function getCountryCode(name: string) {
  return countryNameAliases[name] || countryCodesByName[normalizeCountryName(name)] || null;
}

function getCountryZone(name: string) {
  const countryCode = getCountryCode(name);
  const country = countryCode ? getCountry(countryCode) : null;
  if (!country) return resolveZoneBand("Etc/UTC");

  const exact = country.timezones.map((timeZone) => zoneBands.find((zone) => zone.timeZone === timeZone)).find(Boolean);
  if (exact) return exact;

  const closest = [...country.timezones].sort((a, b) => {
    const zoneA = resolveZoneBand(a);
    const zoneB = resolveZoneBand(b);
    return timezoneDistance(a, zoneA) - timezoneDistance(b, zoneB);
  })[0];

  return closest ? resolveZoneBand(closest) : resolveZoneBand("Etc/UTC");
}

function buildCountryPaths(): CountryPath[] {
  const topology = worldAtlas as unknown as {
    objects: { countries: unknown };
  };
  const collection = feature(worldAtlas as never, topology.objects.countries as never) as unknown as {
    features: Array<{ id?: string | number; geometry: unknown; properties?: Record<string, unknown> }>;
  };

  return collection.features
    .map((country, index) => {
      const d = mapPath(country as never);
      if (!d) return null;
      const [x, y] = mapPath.centroid(country as never);
      const name = String(country.properties?.name || country.id || index);
      const side = (x < MAP_WIDTH / 2 && y < MAP_HEIGHT * 0.76) || index % 7 === 0 ? "ct" : "t";
      return {
        id: String(country.id ?? index),
        name,
        d,
        side,
        zone: getCountryZone(name),
      };
    })
    .filter((country): country is CountryPath => Boolean(country));
}

const zoneBands: ZoneBand[] = [
  { id: "midway", label: "Midway", short: "UTC-11", timeZone: "Pacific/Midway", offset: "-11" },
  { id: "hawaii", label: "Hawaii", short: "HST", timeZone: "Pacific/Honolulu", offset: "-10" },
  { id: "alaska", label: "Alaska", short: "AKT", timeZone: "America/Anchorage", offset: "-9" },
  { id: "pacific", label: "Pacific", short: "PT", timeZone: "America/Los_Angeles", offset: "-8/-7" },
  { id: "mountain", label: "Mountain", short: "MT", timeZone: "America/Denver", offset: "-7/-6" },
  { id: "central", label: "Central", short: "CT", timeZone: "America/Chicago", offset: "-6/-5" },
  { id: "eastern", label: "Eastern", short: "ET", timeZone: "America/New_York", offset: "-5/-4" },
  { id: "atlantic", label: "Atlantic", short: "AT", timeZone: "America/Halifax", offset: "-4/-3" },
  { id: "sao-paulo", label: "Sao Paulo", short: "BRT", timeZone: "America/Sao_Paulo", offset: "-3" },
  { id: "azores", label: "Azores", short: "AZOT", timeZone: "Atlantic/Azores", offset: "-1/0" },
  { id: "london", label: "London", short: "GMT/BST", timeZone: "Europe/London", offset: "0/+1" },
  { id: "paris", label: "Paris", short: "CET", timeZone: "Europe/Paris", offset: "+1/+2" },
  { id: "kyiv", label: "Kyiv", short: "EET", timeZone: "Europe/Kyiv", offset: "+2/+3" },
  { id: "dubai", label: "Dubai", short: "GST", timeZone: "Asia/Dubai", offset: "+4" },
  { id: "karachi", label: "Karachi", short: "PKT", timeZone: "Asia/Karachi", offset: "+5" },
  { id: "kolkata", label: "Kolkata", short: "IST", timeZone: "Asia/Kolkata", offset: "+5:30" },
  { id: "bangkok", label: "Bangkok", short: "ICT", timeZone: "Asia/Bangkok", offset: "+7" },
  { id: "shanghai", label: "Shanghai", short: "CST", timeZone: "Asia/Shanghai", offset: "+8" },
  { id: "tokyo", label: "Tokyo", short: "JST", timeZone: "Asia/Tokyo", offset: "+9" },
  { id: "sydney", label: "Sydney", short: "AET", timeZone: "Australia/Sydney", offset: "+10/+11" },
  { id: "auckland", label: "Auckland", short: "NZT", timeZone: "Pacific/Auckland", offset: "+12/+13" },
];

const countryPaths = buildCountryPaths();

const sortLabels: Record<SortKey, string> = {
  chance: "Chance",
  price: "Price",
  name: "Name",
  rarity: "Rarity",
};

const categoryLabels: Record<DropCategory | "all", string> = {
  all: "All",
  case: "Cases",
  terminal: "Terminals",
  skin: "Collection skins",
  "dead-hand": "Rare terminal skins",
};

function parsePrice(price: string) {
  return Number(price.replace(/[^0-9.]/g, "")) || 0;
}

function getPageFromHash(): Page {
  return window.location.hash === "#drops" ? "drops" : "timer";
}

function setHash(page: Page) {
  window.location.hash = page === "drops" ? "drops" : "timer";
}

export default function App() {
  const [page, setPage] = useState<Page>(() => getPageFromHash());
  const [selectedZone, setSelectedZone] = useState("Europe/Kyiv");
  const [detectedZone, setDetectedZone] = useState("");
  const [detectionState, setDetectionState] = useState<DetectionState>("loading");

  useEffect(() => {
    const onHashChange = () => setPage(getPageFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const browserZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";

    fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(4500) })
      .then((response) => {
        if (!response.ok) throw new Error("timezone lookup failed");
        return response.json() as Promise<{ timezone?: string }>;
      })
      .then((data) => {
        if (cancelled) return;
        const zone = data.timezone || browserZone;
        setDetectedZone(zone);
        setSelectedZone(zone);
        setDetectionState(data.timezone ? "ready" : "fallback");
      })
      .catch(() => {
        if (cancelled) return;
        setDetectedZone(browserZone);
        setSelectedZone(browserZone);
        setDetectionState("fallback");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="app-shell">
      <SiteNav page={page} onNavigate={setHash} />
      {page === "timer" ? (
        <TimerPage
          selectedZone={selectedZone}
          detectedZone={detectedZone}
          detectionState={detectionState}
          onSelectZone={setSelectedZone}
        />
      ) : (
        <DropsPage />
      )}
    </div>
  );
}

function SiteNav({ page, onNavigate }: { page: Page; onNavigate: (page: Page) => void }) {
  return (
    <nav className="site-nav">
      <button className="brand-mark" onClick={() => onNavigate("timer")} aria-label="Open timer">
        <Crosshair size={21} weight="duotone" />
        <span>Weekly Drop Reset</span>
      </button>
      <div className="nav-pills" aria-label="Pages">
        <button className={page === "timer" ? "active" : ""} onClick={() => onNavigate("timer")}>
          <Timer size={16} weight="bold" />
          Timer
        </button>
        <button className={page === "drops" ? "active" : ""} onClick={() => onNavigate("drops")}>
          <SlidersHorizontal size={16} weight="bold" />
          Drops <span className="beta-tag">Beta</span>
        </button>
      </div>
    </nav>
  );
}

function TimerPage({
  selectedZone,
  detectedZone,
  detectionState,
  onSelectZone,
}: {
  selectedZone: string;
  detectedZone: string;
  detectionState: DetectionState;
  onSelectZone: (zone: string) => void;
}) {
  const activeBand = resolveZoneBand(selectedZone);

  return (
    <main className="timer-page">
      <section className="hero-grid">
        <AgentAtmosphere />
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="live-dot" />
            Counter-Strike 2 weekly care package
          </div>
          <h1>Weekly reset timer.</h1>
          <p>
            Track the CS2 weekly drop reset, translate the next care package window into your
            timezone, and switch zones directly on the world map.
          </p>
        </div>

        <div className="cinematic-map-panel" aria-label="World timezone map">
          <div className="map-panel-header">
            <span className="eyebrow small">World reset grid</span>
            <div className={`detect-pill ${detectionState}`}>
              {detectionState === "loading" ? "Detecting IP timezone" : `Detected: ${detectedZone || selectedZone}`}
            </div>
          </div>
          <CountdownPanel />
          <TimezoneMap selectedZone={selectedZone} activeBand={activeBand} onSelectZone={onSelectZone} />
          <MapPanelFooter selectedZone={selectedZone} activeBand={activeBand} />
        </div>

        <div className="timer-stack">
          <ResetStrip selectedZone={selectedZone} />
        </div>
      </section>
    </main>
  );
}

const AgentAtmosphere = memo(function AgentAtmosphere() {
  return (
    <div className="agent-atmosphere" aria-hidden="true">
      {agents.map((agent, index) => (
        <img
          className={`ambient-agent ambient-${agent.side.toLowerCase()} ambient-${index}`}
          src={agent.image}
          alt=""
          style={{ "--agent-accent": agent.accent } as React.CSSProperties}
          key={agent.name}
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  );
});

function useSecondClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const tick = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(tick);
  }, []);

  return now;
}

function CountdownPanel() {
  const now = useSecondClock();
  const nextReset = useMemo(() => getNextReset(now), [now]);
  const countdown = formatCountdown(nextReset.getTime() - now.getTime());

  return (
    <div className="countdown-panel map-countdown" aria-label="Time remaining">
      <CountdownCell singular="Day" value={countdown.days} />
      <CountdownCell singular="Hour" value={countdown.hours} />
      <CountdownCell singular="Minute" value={countdown.minutes} />
      <CountdownCell singular="Second" value={countdown.seconds} pulse />
    </div>
  );
}

function ResetStrip({ selectedZone }: { selectedZone: string }) {
  const now = useSecondClock();
  const nextReset = useMemo(() => getNextReset(now), [now]);
  const resetLocal = formatInZone(nextReset, selectedZone);
  const resetPacific = formatInZone(nextReset, "America/Los_Angeles");
  const clock = formatClock(now, selectedZone);

  return (
    <div className="reset-strip">
      <TimeBadge icon={<Clock size={17} weight="duotone" />} label="Your time" value={clock} />
      <TimeBadge icon={<MapPin size={17} weight="duotone" />} label="Next reset" value={resetLocal} />
      <TimeBadge icon={<GlobeHemisphereWest size={17} weight="duotone" />} label="Valve reference" value={resetPacific} />
    </div>
  );
}

function MapPanelFooter({ selectedZone, activeBand }: { selectedZone: string; activeBand?: ZoneBand }) {
  const now = useSecondClock();
  const nextReset = useMemo(() => getNextReset(now), [now]);
  const resetLocal = formatInZone(nextReset, selectedZone);

  return (
    <div className="map-panel-footer">
      <span>Selected zone</span>
      <strong>{activeBand?.timeZone === selectedZone ? activeBand.label : selectedZone}</strong>
      <em>{resetLocal}</em>
    </div>
  );
}

function CountdownCell({ singular, value, pulse = false }: { singular: string; value: number; pulse?: boolean }) {
  const label = value === 1 ? singular : `${singular}s`;

  return (
    <div className={`countdown-cell ${pulse ? "pulse" : ""}`}>
      <strong>{String(value).padStart(2, "0")}</strong>
      <span>{label}</span>
    </div>
  );
}

function TimeBadge({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="time-badge">
      <span className="badge-icon">{icon}</span>
      <span>
        <small>{label}</small>
        <strong>{value}</strong>
      </span>
    </div>
  );
}

const TimezoneMap = memo(function TimezoneMap({
  selectedZone,
  activeBand,
  onSelectZone,
}: {
  selectedZone: string;
  activeBand?: ZoneBand;
  onSelectZone: (zone: string) => void;
}) {
  const [hovered, setHovered] = useState<ZoneBand | null>(null);
  const display = hovered || activeBand || zoneBands[0];

  return (
    <div className="map-shell">
      <div className="map-status">
        <span>{display.label}</span>
        <strong>{display.timeZone}</strong>
        <em>{display.short} / UTC {display.offset}</em>
      </div>
      <svg viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`} role="img" aria-label="Interactive timezone map">
        <rect width={MAP_WIDTH} height={MAP_HEIGHT} rx="28" className="map-ocean" />
        <g className="longitude-grid">
          {Array.from({ length: 25 }).map((_, index) => (
            <line key={index} x1={index * (MAP_WIDTH / 24)} x2={index * (MAP_WIDTH / 24)} y1="0" y2={MAP_HEIGHT} />
          ))}
        </g>
        <g className="latitude-grid">
          {Array.from({ length: 7 }).map((_, index) => (
            <line key={index} x1="0" x2={MAP_WIDTH} y1={70 + index * 64} y2={70 + index * 64} />
          ))}
        </g>
        <g className="country-lines">
          {countryPaths.map((country) => (
              <path
                key={country.id}
                className={`country-path ${country.side}-line ${country.zone.id === activeBand?.id ? "selected" : ""} ${
                  country.zone.id === hovered?.id ? "hot" : ""
                }`}
                d={country.d}
                style={
                  {
                    "--zone-accent": zoneBands.indexOf(country.zone) % 2 === 0 ? "#8bb5c4" : "#caa45f",
                  } as React.CSSProperties
                }
                onMouseEnter={() => setHovered(country.zone)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => onSelectZone(country.zone.timeZone)}
                tabIndex={0}
                role="button"
                aria-label={`Select ${country.name}, ${country.zone.label} timezone`}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") onSelectZone(country.zone.timeZone);
                }}
              />
          ))}
        </g>
      </svg>
    </div>
  );
});

function DropsPage() {
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("chance");
  const [category, setCategory] = useState<DropCategory | "all">("all");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return dropItems
      .filter((item) => category === "all" || item.category === category)
      .filter((item) => {
        if (!normalized) return true;
        return [item.name, item.family, item.rarity].some((field) => field.toLowerCase().includes(normalized));
      })
      .sort((a, b) => {
        if (sortKey === "price") return parsePrice(b.price) - parsePrice(a.price);
        if (sortKey === "chance") return b.chance - a.chance;
        if (sortKey === "rarity") return a.rarity.localeCompare(b.rarity);
        return a.name.localeCompare(b.name);
      });
  }, [category, query, sortKey]);

  return (
    <main className="drops-page">
      <section className="drops-hero">
        <div>
          <span className="eyebrow small">Drop catalog <em className="inline-beta">Beta</em></span>
          <h1>Common pool first, rare hits exposed.</h1>
        </div>
        <p>
          Prices are a Steam Market snapshot in USD. Percentages are approximate community ranges
          collapsed into sortable per-item estimates, so treat them as orientation rather than Valve
          odds.
        </p>
      </section>

      <section className="catalog-toolbar">
        <label className="search-field">
          <MagnifyingGlass size={18} weight="bold" />
          <span className="sr-only">Search drops</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search item, collection, rarity" />
        </label>
        <div className="filter-cluster" aria-label="Category filter">
          <FunnelSimple size={17} weight="bold" />
          {(["all", "case", "terminal", "skin", "dead-hand"] as const).map((key) => (
            <button key={key} className={category === key ? "active" : ""} onClick={() => setCategory(key)}>
              {categoryLabels[key]}
            </button>
          ))}
        </div>
        <div className="filter-cluster" aria-label="Sort order">
          <SortAscending size={17} weight="bold" />
          {(Object.keys(sortLabels) as SortKey[]).map((key) => (
            <button key={key} className={sortKey === key ? "active" : ""} onClick={() => setSortKey(key)}>
              {sortLabels[key]}
            </button>
          ))}
        </div>
      </section>

      <section className="drop-list" aria-label="CS2 drop items">
        <div className="list-head">
          <span>Item</span>
          <span>Rarity</span>
          <span>Approx. chance</span>
          <span>Price</span>
        </div>
        {filtered.length === 0 ? (
          <div className="empty-state">No drop matched that filter.</div>
        ) : (
          filtered.map((item, index) => <DropRow item={item} key={item.id} index={index} />)
        )}
      </section>
    </main>
  );
}

function DropRow({ item, index }: { item: DropItem; index: number }) {
  return (
    <a
      className={`drop-row rarity-${item.rarity.toLowerCase().replace(/[^a-z]+/g, "-")}`}
      href={item.marketUrl}
      target="_blank"
      rel="noreferrer"
      style={{ "--index": index } as React.CSSProperties}
    >
      <span className="item-cell">
        <span className="item-image">
          <img src={item.image} alt={item.name} loading="lazy" />
        </span>
        <span>
          <strong>{item.name}</strong>
          <small>{item.family}</small>
        </span>
      </span>
      <span className="rarity-pill">{item.rarity}</span>
      <span className="chance-meter">
        <span style={{ width: `${Math.min(100, Math.max(2, item.chance * 12))}%` }} />
        <em>{item.chanceLabel}</em>
      </span>
      <span className="price-cell">
        <strong>{item.price}</strong>
        <ArrowSquareOut size={16} weight="bold" />
      </span>
    </a>
  );
}
