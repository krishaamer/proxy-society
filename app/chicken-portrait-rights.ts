/**
 * Only images individually checked for reuse rights are added here.
 * Do not add newspaper images, official website portraits, or photo archive
 * images merely because they are publicly accessible.
 *
 * These are Wikimedia Commons file-specific CC grants. Files are served
 * through Next.js's on-site image optimizer and linked to original file,
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
};

export const civicPortraits: Readonly<Record<string, CivicPortrait>> = {
  "Arvo Aller": {
    person: "Arvo Aller",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Arvo_Aller_2023_%28cropped%29.jpg/250px-Arvo_Aller_2023_%28cropped%29.jpg",
    originalFile: "https://commons.wikimedia.org/wiki/File:Arvo_Aller_2023_(cropped).jpg",
    attribution: "Kultuuriministeerium / Ilja Smirnov",
    creditDetails: "Photo by Ilja Smirnov, published by the Estonian Ministry of Culture; Wikimedia Commons crop by Karljohan29.",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    sourceDate: "2023-02-22",
    checkedAt: "2026-10-23",
    editNote: "Commons file was cropped from the originally licensed photograph by Karljohan29. Displayed as a resized, unretouched thumbnail."
  },
  "Urmas Kruuse": {
    person: "Urmas Kruuse",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Urmas_Kruuse.jpg/330px-Urmas_Kruuse.jpg",
    originalFile: "https://commons.wikimedia.org/wiki/File:Urmas_Kruuse.jpg",
    attribution: "Renee Altrov / Riigikantselei",
    creditDetails: "Photo by Renee Altrov for the Estonian Government Office. Wikimedia VRT permission ticket 2021033010001343.",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceDate: "2021-01-25",
    checkedAt: "2026-10-23",
    editNote: "Resized for website display; not otherwise retouched. Image itself remains CC BY-SA 4.0."
  },
  "Züleyxa Izmailova": {
    person: "Züleyxa Izmailova",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Z%C3%BCleyxa_Izmailova_2021._aasta_Arvamusfestivalil.jpg/330px-Z%C3%BCleyxa_Izmailova_2021._aasta_Arvamusfestivalil.jpg",
    originalFile: "https://commons.wikimedia.org/wiki/File:Z%C3%BCleyxa_Izmailova_2021._aasta_Arvamusfestivalil.jpg",
    attribution: "Sillerkiil",
    creditDetails: "Photographed by Sillerkiil at the 2021 Arvamusfestival.",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceDate: "2021-08-14",
    checkedAt: "2026-10-23",
    editNote: "Resized for website display; not otherwise retouched. Image itself remains CC BY-SA 4.0."
  }
} as const;
