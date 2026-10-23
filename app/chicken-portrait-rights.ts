/**
 * Only images individually checked for reuse rights are added here.
 * Do not add newspaper images, official website portraits, or photo archive
 * images merely because they are publicly accessible.
 *
 * These are Wikimedia Commons file-specific CC grants. Files are served
 * as first-party versioned 256px WebP assets and linked to original file,
 * creator, license and adaptation history. This is a dated rights audit,
 * not a warranty of unrestricted reuse or of personality-rights clearance.
 */
export type CivicPortrait = {
  person: string;
  src: string;
  originalFile: string;
  attribution: string;
  creditDetails: string;
  license: string;
  licenseUrl: string;
  sourceDate: string;
  checkedAt: string;
  editNote: string;
  optimizedBytes: number;
};

export const civicPortraits: Readonly<Record<string, CivicPortrait>> = {
  "Arvo Aller": {
    person: "Arvo Aller",
    src: "/portraits/arvo-aller.webp",
    originalFile: "https://commons.wikimedia.org/wiki/File:Arvo_Aller_2023_(cropped).jpg",
    attribution: "Kultuuriministeerium / Ilja Smirnov",
    creditDetails: "Photo by Ilja Smirnov, published by the Estonian Ministry of Culture; Wikimedia Commons crop by Karljohan29.",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    sourceDate: "2023-02-22",
    checkedAt: "2026-10-23",
    editNote: "Commons original was cropped by Karljohan29. Proxy Society made a technical 256px WebP resize/format conversion, with no further crop or retouching.",
    optimizedBytes: 12244
  },
  "Urmas Kruuse": {
    person: "Urmas Kruuse",
    src: "/portraits/urmas-kruuse.webp",
    originalFile: "https://commons.wikimedia.org/wiki/File:Urmas_Kruuse.jpg",
    attribution: "Renee Altrov / Riigikantselei",
    creditDetails: "Photo by Renee Altrov for the Estonian Government Office. Wikimedia VRT permission ticket 2021033010001343.",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceDate: "2021-01-25",
    checkedAt: "2026-10-23",
    editNote: "Proxy Society made a technical 256px WebP resize/format conversion, with no crop or artistic retouching. The image remains CC BY-SA 4.0.",
    optimizedBytes: 2230
  },
  "Züleyxa Izmailova": {
    person: "Züleyxa Izmailova",
    src: "/portraits/zuleyxa-izmailova.webp",
    originalFile: "https://commons.wikimedia.org/wiki/File:Z%C3%BCleyxa_Izmailova_2021._aasta_Arvamusfestivalil.jpg",
    attribution: "Sillerkiil",
    creditDetails: "Photographed by Sillerkiil at the 2021 Arvamusfestival.",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceDate: "2021-08-14",
    checkedAt: "2026-10-23",
    editNote: "Proxy Society made a technical 256px WebP resize/format conversion, with no crop or artistic retouching. The image remains CC BY-SA 4.0.",
    optimizedBytes: 5148
  }
} as const;
