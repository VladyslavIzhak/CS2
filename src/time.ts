const RESET_ZONE = "America/Los_Angeles";
const RESET_WEEKDAY = 2;
const RESET_HOUR = 18;

type ZonedParts = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
};

const partFormatterCache = new Map<string, Intl.DateTimeFormat>();
const displayFormatterCache = new Map<string, Intl.DateTimeFormat>();
const clockFormatterCache = new Map<string, Intl.DateTimeFormat>();

function getPartsFormatter(timeZone: string) {
  const cached = partFormatterCache.get(timeZone);
  if (cached) return cached;

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  });

  partFormatterCache.set(timeZone, formatter);
  return formatter;
}

function getZonedParts(date: Date, timeZone: string): ZonedParts {
  const entries = getPartsFormatter(timeZone)
    .formatToParts(date)
    .reduce<Record<string, string>>((acc, part) => {
      if (part.type !== "literal") acc[part.type] = part.value;
      return acc;
    }, {});

  return {
    year: Number(entries.year),
    month: Number(entries.month),
    day: Number(entries.day),
    hour: Number(entries.hour),
    minute: Number(entries.minute),
    second: Number(entries.second),
  };
}

function getTimeZoneOffsetMs(date: Date, timeZone: string) {
  const parts = getZonedParts(date, timeZone);
  const localAsUtc = Date.UTC(
    parts.year,
    parts.month - 1,
    parts.day,
    parts.hour,
    parts.minute,
    parts.second,
  );
  return localAsUtc - date.getTime();
}

function zonedLocalToDate(parts: Omit<ZonedParts, "second">, timeZone: string) {
  const utcGuess = Date.UTC(
    parts.year,
    parts.month - 1,
    parts.day,
    parts.hour,
    parts.minute,
    0,
  );
  const first = new Date(utcGuess - getTimeZoneOffsetMs(new Date(utcGuess), timeZone));
  const refined = new Date(utcGuess - getTimeZoneOffsetMs(first, timeZone));
  return refined;
}

function addDays(parts: Omit<ZonedParts, "hour" | "minute" | "second">, days: number) {
  const date = new Date(Date.UTC(parts.year, parts.month - 1, parts.day + days, 12));
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
  };
}

function weekdayFromParts(parts: Omit<ZonedParts, "hour" | "minute" | "second">) {
  return new Date(Date.UTC(parts.year, parts.month - 1, parts.day)).getUTCDay();
}

export function getNextReset(now = new Date()) {
  const pacific = getZonedParts(now, RESET_ZONE);
  const pacificDate = {
    year: pacific.year,
    month: pacific.month,
    day: pacific.day,
  };
  const todayWeekday = weekdayFromParts(pacificDate);
  const localMinutes = pacific.hour * 60 + pacific.minute;
  const resetMinutes = RESET_HOUR * 60;

  let daysUntil = (RESET_WEEKDAY - todayWeekday + 7) % 7;
  if (daysUntil === 0 && localMinutes >= resetMinutes) {
    daysUntil = 7;
  }

  const resetDate = addDays(pacificDate, daysUntil);
  return zonedLocalToDate(
    {
      year: resetDate.year,
      month: resetDate.month,
      day: resetDate.day,
      hour: RESET_HOUR,
      minute: 0,
    },
    RESET_ZONE,
  );
}

export function formatInZone(date: Date, timeZone: string, options?: Intl.DateTimeFormatOptions) {
  if (options) {
    return new Intl.DateTimeFormat("en-US", {
      timeZone,
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
      ...options,
    }).format(date);
  }

  const cached = displayFormatterCache.get(timeZone);
  if (cached) return cached.format(date);

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  displayFormatterCache.set(timeZone, formatter);
  return formatter.format(date);
}

export function formatClock(date: Date, timeZone: string) {
  const cached = clockFormatterCache.get(timeZone);
  if (cached) return cached.format(date);

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  });

  clockFormatterCache.set(timeZone, formatter);
  return formatter.format(date);
}

export function formatCountdown(ms: number) {
  const safe = Math.max(0, ms);
  const seconds = Math.floor(safe / 1000);
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds: secs,
  };
}
