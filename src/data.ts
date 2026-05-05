export type DropCategory = "case" | "terminal" | "skin" | "dead-hand";

export type DropItem = {
  id: string;
  category: DropCategory;
  name: string;
  family: string;
  rarity: string;
  chance: number;
  chanceLabel: string;
  price: string;
  image: string;
  marketUrl: string;
};

export type AgentImage = {
  name: string;
  side: "CT" | "T";
  accent: string;
  image: string;
};

export const agents: AgentImage[] = [
  {
    name: "Cmdr. Mae 'Dead Cold' Jamison",
    side: "CT",
    accent: "#7fa7bc",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIa-2lmxU-LR0dnuNm6E8Vl45Iv181z1fh7lk6nz6iNP0OSveq1sLuSWQDGVlbx34-Q8HC3nk012tWzTzY79JHiQOgYpW8B3EeYN40HtxtzlNuz8p1uJLMIs6sE/600fx600f",
  },
  {
    name: "Lt. Commander Ricksaw",
    side: "CT",
    accent: "#7fa7bc",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIa-2lmxU-LR0dnuNm6E8Vl45Iv181z1fh7lk6nz6XRk-fO8YaVjNPndVz-Ul74hsbNoHi21kUly6mrQzNagcijBPQEnCsciTOdY4Rm6m4XvN_SiuVLIl2LQXw/700fx700f",
  },
  {
    name: "3rd Commando Company",
    side: "CT",
    accent: "#7fa7bc",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIa-2lmxU-LR0dnuNm6E8Vl45Iv181z1fh7lk6nz6XRk-fO8YaVjNPvdWTbJwOsm4rI4GnDjx0t3sWWHw934IH_BO1UnWZd1EO8K5kK4l4fgMvSiuVLu5GcAvQ/700fx700f",
  },
  {
    name: "Chem-Haz Specialist",
    side: "CT",
    accent: "#7fa7bc",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIa-2lmxU-LR0dnuNm6E8Vl45Iv181z1fh7lk6nz6iNP0OSveq1sLuSZQGKRmOpyseJsF3rkzR4ht2_TwtugcH7DbAQgW5VyFLIDuxnqmtPiNb78p1uJZinYneA/700fx700f",
  },
  {
    name: "Sir Bloody Miami Darryl",
    side: "T",
    accent: "#c79b52",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIa-2lmxU-LR0dnuNm6E8Vl45Iv181z1fgn8oYby8iRe_OGnZ6psLM-FD3WWkKAv5OVoGyjilkR14mzcmdz4JHiXaQQiDZAkTO5euxW-loC1Zbm25wSPlcsbmmtPiU71/600fx600f",
  },
  {
    name: "Number K",
    side: "T",
    accent: "#c79b52",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIa-2lmxU-LR0dnuNm6E8Vl45Iv181z1fgn8oYby8iRe_OGnZ6psLM-FD3WZj7wuseM-GnG2lh4h5m2EmderdX7DaA9zW8N2QuBbtBG-mty2N-i0tADAy9USaSI87As/700fx700f",
  },
  {
    name: "Getaway Sally",
    side: "T",
    accent: "#c79b52",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIa-2lmxU-LR0dnuNm6E8Vl45Iv181z1fgn8oYby8iRe_OGnZ6psLM-FD3Waj-0h4LM5H3jjzR9-4zmHzIuucXOWaAEkCsR5FrFcsEG5wNGzNeng71TAy9UScc7Ksy8/700fx700f",
  },
  {
    name: "Safecracker Voltzmann",
    side: "T",
    accent: "#c79b52",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIa-2lmxU-LR0dnuNm6E8Vl45Iv181z1fgn8oYby8iRe_OGnZ6psLM-FD3WXj7536LVoFivmkEghsWXQmd37IniRPwUoCMFwEeAItxCwkdXvNr624wXAy9USEc8H9qQ/700fx700f",
  },
];

export const dropItems: DropItem[] = [
  {
    id: "kilowatt-case",
    category: "case",
    name: "Kilowatt Case",
    family: "Active case pool",
    rarity: "Container",
    chance: 1.25,
    chanceLabel: "~1.25% each / case slot ~5-10%",
    price: "$0.35",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frnEVvqf_a6VoIfGSXz7Hlbwg57QwSS_mxhl15jiGyN37c3_GZw91W8BwRflK7EfKsa2sfw/360fx360f",
    marketUrl: "https://steamcommunity.com/market/listings/730/Kilowatt%20Case",
  },
  {
    id: "revolution-case",
    category: "case",
    name: "Revolution Case",
    family: "Active case pool",
    rarity: "Container",
    chance: 1.25,
    chanceLabel: "~1.25% each / case slot ~5-10%",
    price: "$0.48",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frnAVvfb6aqduc_TFVjTCxbx05OU4S3jilE9w4DzRnImtIy2Sa1JzDJEhRPlK7EcO4U8gfA/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/Revolution%20Case",
  },
  {
    id: "recoil-case",
    category: "case",
    name: "Recoil Case",
    family: "Active case pool",
    rarity: "Container",
    chance: 1.25,
    chanceLabel: "~1.25% each / case slot ~5-10%",
    price: "$0.62",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frnMVu6b-avA-JqSSCjSWwuhz47U9TCzlxh9yt2WGnNqgIi-fbgUkWMNxFPlK7EdIJF6a2Q/360fx360f",
    marketUrl: "https://steamcommunity.com/market/listings/730/Recoil%20Case",
  },
  {
    id: "dreams-nightmares-case",
    category: "case",
    name: "Dreams & Nightmares Case",
    family: "Active case pool",
    rarity: "Container",
    chance: 1.25,
    chanceLabel: "~1.25% each / case slot ~5-10%",
    price: "$2.22",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frnIV7Kb5OaU-JqfHDzXFle0u4LY8Gy_kkRgisGzcm4v4J3vDOAQmDMdyRvlK7EcmeCU3yw/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/Dreams%20%26%20Nightmares%20Case",
  },
  {
    id: "sealed-genesis-terminal",
    category: "terminal",
    name: "Sealed Genesis Terminal",
    family: "Terminal reward",
    rarity: "Base Grade",
    chance: 0.7,
    chanceLabel: "~0.7-1.5% terminal slot",
    price: "$0.27",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frnRk7P6he6FpbqWXCzSVkL4h6bExTHuwx0wk6mjUmdn_Iy2TbAUkCZslQu8CtBTrkNz5d7S1oNprwEg/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/Sealed%20Genesis%20Terminal",
  },
  {
    id: "sealed-dead-hand-terminal",
    category: "terminal",
    name: "Sealed Dead Hand Terminal",
    family: "Terminal reward",
    rarity: "Base Grade",
    chance: 0.7,
    chanceLabel: "~0.7-1.5% terminal slot",
    price: "$3.25",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frnVk7P6he6FpbqHGCmSTk-hz5rZsHS3mwxgjsGjRytb7dC2VPwYlAschRrFbsBC4xNH5d7S1gfLQnNE/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/Sealed%20Dead%20Hand%20Terminal",
  },
  {
    id: "awp-the-end",
    category: "skin",
    name: "AWP | The End (Well-Worn)",
    family: "Achroma Collection",
    rarity: "Classified",
    chance: 0.06,
    chanceLabel: "~0.06% / Classified+ <1%",
    price: "$20.43",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf7i1e0PC5V7BlJc-WAGOvwPlmj-xsSyCmmFNytzyEydapIy-Ub1AoDMEjFLEJu0LuwYfhMrnq4AGPiYJMyHqojy5K8G81tJciLzvH/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/AWP%20%7C%20The%20End%20(Well-Worn)",
  },
  {
    id: "m4a1-s-party-animal",
    category: "skin",
    name: "M4A1-S | Party Animal (Field-Tested)",
    family: "Harlequin Collection",
    rarity: "Classified",
    chance: 0.06,
    chanceLabel: "~0.06% / Classified+ <1%",
    price: "$19.00",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_iKC1iRz-d7se1WXzu6mwkY6m2WpYL8JSLSMxgkCZZ1ELIOuxe5lNfuP-ng4VCIiYkWnCr4jyhO73lp4OwCAPZz8vLUkUifZtSPDRSF/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/M4A1-S%20%7C%20Party%20Animal%20(Field-Tested)",
  },
  {
    id: "usp-s-sleeping-potion",
    category: "skin",
    name: "USP-S | Sleeping Potion (Minimal Wear)",
    family: "Harlequin Collection",
    rarity: "Restricted",
    chance: 0.32,
    chanceLabel: "~0.32% / mid-tier ~20-30%",
    price: "$11.66",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSM_-WMXeF0_56td5lRi67gVMh4D-Gn4qheH6RPFIoCcAhELVf5kK-xNexMe_rtFfai45EnC_8iH9I8G81tAH9GDu2/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/USP-S%20%7C%20Sleeping%20Potion%20(Minimal%20Wear)",
  },
  {
    id: "glock-18-trace-lock",
    category: "skin",
    name: "Glock-18 | Trace Lock (Field-Tested)",
    family: "Achroma Collection",
    rarity: "Restricted",
    chance: 0.32,
    chanceLabel: "~0.32% / mid-tier ~20-30%",
    price: "$2.31",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1T-825YK15Jc-WCmCV0tF7teVgWiT9xE5-tmjdwor8JyqSZ1AgAsAhF-QN4UTux4WxZLnn51TZjtlAxCio2zQJsHgS8CP4qw/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/Glock-18%20%7C%20Trace%20Lock%20(Field-Tested)",
  },
  {
    id: "desert-eagle-the-daily-deagle",
    category: "skin",
    name: "Desert Eagle | The Daily Deagle (Minimal Wear)",
    family: "Achroma Collection",
    rarity: "Mil-Spec",
    chance: 1.05,
    chanceLabel: "~1.05% / mid-tier ~20-30%",
    price: "$1.05",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk5-urV6dsMs-EHGaA_uJ_t-l9AXm3kxh162qHy9-pd3PEagMmDJMkRuEK4BG4x9zhZe-07gPdiotMyivgznQej0ovEM4/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/Desert%20Eagle%20%7C%20The%20Daily%20Deagle%20(Minimal%20Wear)",
  },
  {
    id: "five-seven-fraise-crane",
    category: "skin",
    name: "Five-SeveN | Fraise Crane (Minimal Wear)",
    family: "Harlequin Collection",
    rarity: "Mil-Spec",
    chance: 1.05,
    chanceLabel: "~1.05% / mid-tier ~20-30%",
    price: "$2.50",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRe6toH-CaAGyvwvx3vuR6cCW6khUz_WmHno2ueSmRbFAmC8MjF7EPsBDtwdDkZe_n41fYithDzyWo2CwY6nx1o7FVHGyLYB0/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/Five-SeveN%20%7C%20Fraise%20Crane%20(Minimal%20Wear)",
  },
  {
    id: "galil-ar-sky-mandala",
    category: "skin",
    name: "Galil AR | Sky Mandala (Field-Tested)",
    family: "Harlequin Collection",
    rarity: "Mil-Spec",
    chance: 1.05,
    chanceLabel: "~1.05% / mid-tier ~20-30%",
    price: "$0.50",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0Pq3bZtoIeKHBlidwOByse1ocCS2kRQyvnOEmdigcnuUaVUnCJtxQeQMt0W9kdHjZuKztgDdj4IQzCn5jSwc6i9p_a9cBhc21sWa/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/Galil%20AR%20%7C%20Sky%20Mandala%20(Field-Tested)",
  },
  {
    id: "ump-45-warm-blooded",
    category: "skin",
    name: "UMP-45 | Warm Blooded (Minimal Wear)",
    family: "Harlequin Collection",
    rarity: "Mil-Spec",
    chance: 1.05,
    chanceLabel: "~1.05% / mid-tier ~20-30%",
    price: "$1.12",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1T9veRfKF-NM-SAG6dwOJJoPNgQT2MwUgYvzSCkpu3dnuUalN2X5IjRe5fsUa9xoeyN-rr7waMiINDnC7_jnlI6ixq5OpWWb1lpPMCclDonA/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/UMP-45%20%7C%20Warm%20Blooded%20(Minimal%20Wear)",
  },
  {
    id: "p2000-grip-tape",
    category: "skin",
    name: "P2000 | Grip Tape (Field-Tested)",
    family: "Achroma Collection",
    rarity: "Mil-Spec",
    chance: 1.05,
    chanceLabel: "~1.05% / mid-tier ~20-30%",
    price: "$0.36",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0OGhbZt9cqDDXliX0-dmo95kSi26gBBp5DnSzdyrcSnGP1d2WMEjRrUL4BKwmoXnZb7g4QKLiIIUm3j42yIc7TErvbgJQMStdQ/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/P2000%20%7C%20Grip%20Tape%20(Field-Tested)",
  },
  {
    id: "p90-aeolian-light",
    category: "skin",
    name: "P90 | Aeolian Light (Factory New)",
    family: "Achroma Collection",
    rarity: "Mil-Spec",
    chance: 1.05,
    chanceLabel: "~1.05% / mid-tier ~20-30%",
    price: "$1.96",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf9Tte0POse7B_IfOHMWyezvpJvOhuRz39zER2tWvVyd2qdXOeaVN2WJV3Qu9Z50GwxNa1NLji4gPfjINDziv8iDQJsHgxRzCSnw/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/P90%20%7C%20Aeolian%20Light%20(Factory%20New)",
  },
  {
    id: "zeus-x27-earth-mandala",
    category: "skin",
    name: "Zeus x27 | Earth Mandala (Minimal Wear)",
    family: "Harlequin Collection",
    rarity: "Mil-Spec",
    chance: 1.05,
    chanceLabel: "~1.05% / mid-tier ~20-30%",
    price: "$1.03",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLln4Xl7x1T9veRbaV_NPisA2aexe96sd5lTBa_nBovp3PWyYr_I3OXbQJxXJIkF7FY4BS_l4e0Ybnl4Vba2INGyy2tiXhAvHw9_a9cBgJStbOC/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/Zeus%20x27%20%7C%20Earth%20Mandala%20(Minimal%20Wear)",
  },
  {
    id: "m4a4-aeolian-dark",
    category: "skin",
    name: "M4A4 | Aeolian Dark (Factory New)",
    family: "Achroma Collection",
    rarity: "Industrial",
    chance: 2.2,
    chanceLabel: "~2.2% / common pool ~65-75%",
    price: "$0.74",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwipC6s2vard5MvGQGlibz-Fij-w9cCW6khUz_TvQnt37cS_EaQAgDMciEbVb4EK4ktzvZb_ltlOI3o4RmHmt23xKvSh1o7FVNKLRyHM/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/M4A4%20%7C%20Aeolian%20Dark%20(Factory%20New)",
  },
  {
    id: "mac-10-snow-splash",
    category: "skin",
    name: "MAC-10 | Snow Splash (Factory New)",
    family: "Achroma Collection",
    rarity: "Industrial",
    chance: 2.2,
    chanceLabel: "~2.2% / common pool ~65-75%",
    price: "$0.36",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1T9veRa6V_H-eBD3fE_uJ_t-l9ASrklhkk4Wrdm9msIy3DblVyA5cmQLMDtxS_ltPmYe_msgbeiY5EziTgznQeYbrm-7Y/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/MAC-10%20%7C%20Snow%20Splash%20(Factory%20New)",
  },
  {
    id: "mp5-sd-snow-splash",
    category: "skin",
    name: "MP5-SD | Snow Splash (Factory New)",
    family: "Achroma Collection",
    rarity: "Industrial",
    chance: 2.2,
    chanceLabel: "~2.2% / common pool ~65-75%",
    price: "$0.31",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsPz-R1T9veRZbQ4H_OSHFiH0-9m5N5lRi67gVMk5WXQztarIHiVbQ8lApF2F7QN5xS_xtfnNujqswTWidhAnyr3jngc8G81tMzA05Bb/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/MP5-SD%20%7C%20Snow%20Splash%20(Factory%20New)",
  },
  {
    id: "r8-revolver-dark-chamber",
    category: "skin",
    name: "R8 Revolver | Dark Chamber (Factory New)",
    family: "Achroma Collection",
    rarity: "Industrial",
    chance: 2.2,
    chanceLabel: "~2.2% / common pool ~65-75%",
    price: "$0.42",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLjm4Dv8TRe_c29Z6dlH-OeAWyV_ulkufF6cCW6khUz_WqGmNatdnzDbAR0CcR2FLQO4UKxxNfuM-rj4QzX3YsTziuqiHgf7351o7FV2A-FKGc/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/R8%20Revolver%20%7C%20Dark%20Chamber%20(Factory%20New)",
  },
  {
    id: "mp7-coral-paisley",
    category: "skin",
    name: "MP7 | Coral Paisley (Factory New)",
    family: "Harlequin Collection",
    rarity: "Industrial",
    chance: 2.2,
    chanceLabel: "~2.2% / common pool ~65-75%",
    price: "$0.88",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf9Tte0OKvYbdhJemsGWaCzNF6ueZhW2fklEV-sGvUzdigdX2WbgciCZQjRe9b50Xqm4bkMevj5gaMgo1AnCiskGoXuQsY-r8v/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/MP7%20%7C%20Coral%20Paisley%20(Factory%20New)",
  },
  {
    id: "ssg-08-calligrafaux",
    category: "skin",
    name: "SSG 08 | Calligrafaux (Minimal Wear)",
    family: "Harlequin Collection",
    rarity: "Industrial",
    chance: 2.2,
    chanceLabel: "~2.2% / common pool ~65-75%",
    price: "$0.28",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1T-828baBSJfSUC3Svx-d4te1gQSyMmRQguynLwov6JHmRagd0WcBxQuYItxWxlYLgM--z4gDXjthGnnmqjXxAvSpqtfFCD_S8UR_TMg/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/SSG%2008%20%7C%20Calligrafaux%20(Minimal%20Wear)",
  },
  {
    id: "tec-9-banana-leaf",
    category: "skin",
    name: "Tec-9 | Banana Leaf (Factory New)",
    family: "Harlequin Collection",
    rarity: "Industrial",
    chance: 2.2,
    chanceLabel: "~2.2% / common pool ~65-75%",
    price: "$0.38",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wipC6s2sabBkK8-WF2KD_vpzs7hWQyC0nQlpsWnRz9atIH3Gag4oCpQjFucP4Rfux9PuNr7j7wDZ3tgTny3_h3xPvzErvbgFFfz3Tg/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/Tec-9%20%7C%20Banana%20Leaf%20(Factory%20New)",
  },
  {
    id: "dual-berettas-silver-pour",
    category: "skin",
    name: "Dual Berettas | Silver Pour (Factory New)",
    family: "Achroma Collection",
    rarity: "Consumer",
    chance: 3.8,
    chanceLabel: "~3.8% / common pool ~65-75%",
    price: "$0.12",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1I4PeRaad_OfyaDViWzeFh495lRi67gVN3tmnTn4yreXvFZgYjD8QlE-QK4EGxkda0Ze20tQbZ2Y9CyS_5iC1K8G81tJXDIHOE/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/Dual%20Berettas%20%7C%20Silver%20Pour%20(Factory%20New)",
  },
  {
    id: "ssg-08-sans-comic",
    category: "skin",
    name: "SSG 08 | Sans Comic (Factory New)",
    family: "Achroma Collection",
    rarity: "Consumer",
    chance: 3.8,
    chanceLabel: "~3.8% / common pool ~65-75%",
    price: "$0.07",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1T9veRa6tgKfOsHW-R0etlj-1gSCGn20wl5W3VmImqcCmWOlAjXpolR-MP50Wwl9DmMOix5QXZ2d5EzSWqi3tXrnE8nx7Jn58/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/SSG%2008%20%7C%20Sans%20Comic%20(Factory%20New)",
  },
  {
    id: "cz75-auto-honey-paisley",
    category: "skin",
    name: "CZ75-Auto | Honey Paisley (Factory New)",
    family: "Harlequin Collection",
    rarity: "Consumer",
    chance: 3.8,
    chanceLabel: "~3.8% / common pool ~65-75%",
    price: "$0.10",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1T9veReKVkM_yWF1iUxP13pN5lRi67gVN2tW3Sntuvd3OROFUoXsB2Q-9Zs0Hqlta0Pujr7waIiYJAxS-sjy0c8G81tBzzAWSY/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/CZ75-Auto%20%7C%20Honey%20Paisley%20(Factory%20New)",
  },
  {
    id: "pp-bizon-thermal-currents",
    category: "skin",
    name: "PP-Bizon | Thermal Currents (Factory New)",
    family: "Harlequin Collection",
    rarity: "Consumer",
    chance: 3.8,
    chanceLabel: "~3.8% / common pool ~65-75%",
    price: "$0.08",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1T9veRb6FiIvmBCnSv0vt4ouh6Sha_nBovp3PRmdysdHLCZwUjDsB1FOcJ4BW4mobhZu3q7wyKj4MTzCj2jHhJu30-_a9cBrr9UcuO/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/PP-Bizon%20%7C%20Thermal%20Currents%20(Factory%20New)",
  },
  {
    id: "r8-revolver-mauve-aside",
    category: "skin",
    name: "R8 Revolver | Mauve Aside (Factory New)",
    family: "Harlequin Collection",
    rarity: "Consumer",
    chance: 3.8,
    chanceLabel: "~3.8% / common pool ~65-75%",
    price: "$0.17",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLjm4Dv8TRe_c29Z6dlH_OcHneV09F3s-JsQT2MhxgxvDGTn53GLSLANkI-C5d5Q7EK4xLpxtDhY-vksleP3d1DzXn52itKvCxstewGVKosqPDTiRaBb-Oa78uGvw/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/R8%20Revolver%20%7C%20Mauve%20Aside%20(Factory%20New)",
  },
  {
    id: "sg-553-safari-print",
    category: "skin",
    name: "SG 553 | Safari Print (Factory New)",
    family: "Harlequin Collection",
    rarity: "Consumer",
    chance: 3.8,
    chanceLabel: "~3.8% / common pool ~65-75%",
    price: "$0.10",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1T9veRaapkLfGfMXeCyOBij-1qcCW6khUz_T_Rn9qoIn-Sb1MkX5B3RecL4EXsltXmP-u0tgbbj4tEyHn7334a6Ch1o7FVNpTVjWQ/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/SG%20553%20%7C%20Safari%20Print%20(Factory%20New)",
  },
  {
    id: "sawed-off-crimson-batik",
    category: "skin",
    name: "Sawed-Off | Crimson Batik (Factory New)",
    family: "Harlequin Collection",
    rarity: "Consumer",
    chance: 3.8,
    chanceLabel: "~3.8% / common pool ~65-75%",
    price: "$0.08",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2mcaFSIvGHB2yvxPdzo95lRi67gVNxsGjUzIz9ci7DblclD5d1Ee5esEO4mt3vN7_g5VeIj4xAzi2r23kb8G81tFlYllZq/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/Sawed-Off%20%7C%20Crimson%20Batik%20(Factory%20New)",
  },
  {
    id: "glock-18-fully-tuned",
    category: "dead-hand",
    name: "Glock-18 | Fully Tuned (Battle-Scarred)",
    family: "Dead Hand Terminal",
    rarity: "Terminal skin",
    chance: 0.04,
    chanceLabel: "<0.05% direct equivalent",
    price: "$61.27",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1c4_2tY5tnJOCWC2yvyet3pvgnG3HkkEom4D7Uy9v7ci-SOw4lWZYmROZZuhK4x9TuYr7l5g2Ki4gRxTK-0H2zB0dUqg/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/Glock-18%20%7C%20Fully%20Tuned%20(Battle-Scarred)",
  },
  {
    id: "awp-queens-gambit",
    category: "dead-hand",
    name: "AWP | Queen's Gambit (Field-Tested)",
    family: "Dead Hand Terminal",
    rarity: "Terminal skin",
    chance: 0.04,
    chanceLabel: "<0.05% direct equivalent",
    price: "$92.00",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_DVL0OO7baFjM8-UD2qSyPpJveRtRjy-201xsmvdnoyqcyqfbgInCpQmEOMOuxGxlt3uY-ix4gTbjIlGzyn4iilXrnE8m6eb_Sc/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/AWP%20%7C%20Queen's%20Gambit%20(Field-Tested)",
  },
  {
    id: "ak-47-crane-flight",
    category: "dead-hand",
    name: "AK-47 | Crane Flight (Field-Tested)",
    family: "Dead Hand Terminal",
    rarity: "Terminal skin",
    chance: 0.04,
    chanceLabel: "<0.05% direct equivalent",
    price: "$32.78",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiNQu6WRa7ZsLvWsCGuZxuZij-xsSyCmmFMk4GjVwouudX-VPQB2WZZ2E7EDt0a6kYfjNe2w41DXi9gQynioiH5J8G81tL5L-Rcg/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/AK-47%20%7C%20Crane%20Flight%20(Field-Tested)",
  },
  {
    id: "desert-eagle-firebreathing",
    category: "dead-hand",
    name: "Desert Eagle | Firebreathing (Minimal Wear)",
    family: "Dead Hand Terminal",
    rarity: "Terminal skin",
    chance: 0.04,
    chanceLabel: "<0.05% direct equivalent",
    price: "$4.97",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk6_evb6hoH_aaHGKS0-t3pOlgQS6MmRQguynLn9ircSiTPFUgCJAkQbELsxXtktDkMurk4lTZ39hEyn_-3HsbvXxj4fFCD_RcNNN-xQ/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/Desert%20Eagle%20%7C%20Firebreathing%20(Minimal%20Wear)",
  },
  {
    id: "usp-s-silent-shot",
    category: "dead-hand",
    name: "USP-S | Silent Shot (Minimal Wear)",
    family: "Dead Hand Terminal",
    rarity: "Terminal skin",
    chance: 0.04,
    chanceLabel: "<0.05% direct equivalent",
    price: "$2.43",
    image:
      "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSNeODHViDyOJzvvVWTSaqqhEutDWR1Nf8cn_CPAQmW8Z5Ee8P4UbuxILmMLu3tAXYj4hByyWsjCscvy89sOYcEf1yCvXTIoM/360fx360f",
    marketUrl:
      "https://steamcommunity.com/market/listings/730/USP-S%20%7C%20Silent%20Shot%20(Minimal%20Wear)",
  },
];
