import type { ProjectCase, ProjectLocale } from "./projects-data";

/** Estonian is available for the Chickens, No Cages case and rights notice.
 * Other project cases retain their existing English and Traditional Chinese routes.
 */
export type CivicLocale = ProjectLocale | "et";

export const civicLanguageRoutes = {
  en: "/projects/chickens-no-cages",
  "zh-TW": "/zh-tw/projects/chickens-no-cages",
  et: "/et/projects/chickens-no-cages"
} as const;

export const estonianChickensProject: ProjectCase = {
  number: "06",
  slug: "chickens-no-cages",
  name: "Kanad ilma puurideta",
  domain: "KODANIKUTAHE / TÕENDID",
  year: "2026",
  tagline: "Üks soov. Kontrollitavad faktid.",
  summary: "Ühest selgelt sõnastatud soovist alguse saanud avalik uurimisprojekt. Jälgime munakanade puurispidamist puudutavaid eelnõusid, Riigikogu liikmete allikatega tõendatud sõnavõtte ning enda pöördumiste tegelikku käiku.",
  humanIntent: "Soov on lihtne: munakanu ei tohiks puurides pidada.",
  systemAction: "Süsteem koondab kõigi 101 Riigikogu liikme avalikud sõnavõtud ja seadusandlikud toimingud koos allikate ja kuupäevadega ning hoiab kirjade saatmise ja vastuste saabumise neist lahus. Üksnes 2026. aasta täiskogu kõnedest ei saa järeldada saadiku seisukohta puurispidamise suhtes.",
  boundary: "Saadiku seisukohta ei saa tuletada erakonnast, komisjonikuuluvusest, varasemast muuteemalisest sõnavõtust ega vastamata kirjast. Tsiteerime lühidalt, näitame algallikat ja eristame küsimuse, sõnavõtu, seaduseelnõu algatamise ning hääletustulemuse.",
  evidence: [
    "101 Riigikogu liiget on võrreldud ametliku 2026. aasta koosseisunimekirjaga. Avalik väljavõte ei ole reaalajas uuenev register.",
    "Eelnõu 828 SE läbis esimese lugemise 22. aprillil 2026. 970 SE algatati 17. juunil 2026 ning suunati maaelukomisjoni.",
    "Töös eristatakse 20 eraldi üle vaadatud isikustatud tsitaati ülejäänud avalikest stenogrammikatketest. Pöördumiste saatmist ja vastuseid kajastame ainult kinnitatud sündmuste põhjal."
  ],
  question: "Kuidas saab tehisintellekti abil inimese ühiskondlikku soovi järjekindlalt esindada nii, et tõendid jääksid kontrollitavaks ja ebakindlus nähtavaks?",
  status: "Avalik uurimis- ja pöördumiste register / 23.10.2026 andmeseis",
  links: [
    { label: "Riigikogu eelnõu 828 SE ↗", href: "https://www.riigikogu.ee/tegevus/eelnoud/e5671f5a-d571-4fcb-96d5-cd2afd5734c4/loomakaitseseaduse-muutmise-seadus/" },
    { label: "Eelnõu 970 SE menetlusse võtmine ↗", href: "https://www.riigikogu.ee/pressiteated/muu-pressiteade-et/menetlusse-voeti-eelnou-tarbijakaitse-kohta/" }
  ]
};
