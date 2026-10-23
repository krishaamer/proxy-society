"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  chickenMembers,
  chickenMembershipAudit,
  chickenOutreachSnapshot,
  type ChickenAction,
  type ChickenMember,
} from "../chicken-outreach-data";
import type { CivicLocale } from "../chicken-locales";
import { civicPortraits } from "../chicken-portrait-rights";
import styles from "./ChickenOutreachTracker.module.css";

type EvidenceFilter = "all" | "quote" | "action" | "unknown";
type OutreachFilter = "all" | "not_contacted" | "contacted" | "replied";
const PAGE_SIZE = 12;

const text = {
  en: {
    kicker: "FIELD LOG / ESTONIA / 2026",
    heading: "A public record of civic follow-through.",
    description:
      "One human preference, 101 elected representatives, two bills. This register shows what an MP has publicly said or done separately from whether Proxy Society has contacted them. It does not score political beliefs.",
    snapshotLabel: "Evidence snapshot",
    snapshotNote: "Public quotations checked 23 Oct 2026. The full member and committee review dates to 28 Sep 2026. This is a dated research snapshot, not a live parliamentary feed.",
    metrics: {
      members: "MPs in the research map",
      profiles: "MPs with sourced public excerpts",
      quotes: "Reviewed individual quotations",
      contacted: "Emails confirmed sent",
      replies: "Replies recorded",
    },
    coverage: "Attributable evidence coverage",
    quoteLegend: "Direct quotation",
    actionLegend: "Public action only",
    unknownLegend: "No individual cage-specific hook verified",
    coverageNote:
      "An action includes introducing a bill, participating in committee work, or speaking in debate. None is treated as a vote or an inferred position.",
    issue: "Legislation under review",
    billOne: "828 SE",
    billOneStatus: "First reading completed, at second-reading stage",
    billTwo: "970 SE",
    billTwoStatus: "Introduced 17 June 2026, referred to the Rural Affairs Committee",
    noLaw: "Neither proposal is recorded here as an enacted cage ban.",
    timeline: "How this issue reached Parliament",
    source: "Original source ↗",
    quotesTitle: "In their own words",
    quotesIntro:
      "Selected, context-reviewed remarks. Each of the 101 MPs also has an individual, source-linked public excerpt below, including 2026 transcript statements unrelated to cages.",
    originalLanguage: "Original Estonian statement",
    directory: "Every member, every recorded step",
    directoryIntro:
      "All 101 MPs now have an attributable public excerpt and source. Some concern entirely different issues and are never evidence of a view on hens. Open a row for context, official links and outreach history.",
    search: "Find a member",
    searchPlaceholder: "Name, for example Maran or Kruuse",
    evidenceLabel: "Public evidence",
    evidenceAll: "All evidence",
    evidenceQuote: "Verified quotation",
    evidenceAction: "Documented action only",
    evidenceUnknown: "Other parliamentary statements",
    outreachLabel: "Outreach",
    outreachAll: "All outreach statuses",
    notContacted: "Not contacted",
    contacted: "Contacted",
    replied: "Replied",
    count: "matching MPs",
    pagination: "Parliamentary directory pages",
    previousPage: "Previous page",
    nextPage: "Next page",
    pageLabel: "Page",
    nameCol: "Member",
    evidenceCol: "Evidence",
    contactCol: "Contact",
    quoteEvidence: "Verified quotation",
    actionEvidence: "Documented action",
    unknownEvidence: "Other public speech",
    noQuote: "No cage-specific individual quote has yet completed editorial verification for this MP.",
    noAction: "No verified individual position about hen cages has been established; unrelated public speeches must not be used as a substitute.",
    researchTitle: "Public record with original source",
    researchExcerpt: "Recorded public statement",
    researchCaution: "This excerpt is not automatically evidence of a view on hen cages.",
    researchSource: "Read original public source ↗",
    officialDirectory: "Official Riigikogu member register ↗",
    issueCategory: "Speech during 828 SE cage debate; statement, question or procedure must be read in context",
    henCategory: "Mention of hen cages in another parliamentary context",
    welfareCategory: "Other animal-welfare legislation or discussion",
    agricultureCategory: "Agriculture or food-policy statement, not a cage-specific view",
    otherCategory: "Other parliamentary topic; no implication about cages",
    noTranscriptCategory: "Other individually attributed official public statement",
    researchPeriod: "Speech sources reviewed through 22 October 2026",
    actionsTitle: "Documented activity",
    sourceLabel: "View source ↗",
    scope: "Context and attribution limits",
    outreachTitle: "Communication status",
    noSent: "No sent email has been confirmed for this member.",
    sentOn: "Contacted on",
    repliedOn: "Reply recorded on",
    replyCaution: "The reply has not been published here. Private correspondence is reviewed before quotation.",
    empty: "No members match those filters.",
    reset: "Clear filters",
    portraitPhoto: "Licensed photograph",
    portraitSource: "Image source ↗",
    portraitNotEndorse: "Portrait used for identification only; no endorsement implied.",
    noClearedPhoto: "Photo omitted pending rights verification.",
    complianceNote: "This is proportionate, source-linked public-interest documentation, not a political score. Publicly available does not mean copyright-free or exempt from data protection.",
    rightsAndSources: "Privacy, rights and image credits ↗",
    methodology: "How to read this register",
    methods:
      "A quotation must be individually attributable, dated and linked to its source. Bill sponsorship, committee office, debate participation and responses are different types of evidence. Silence is never labeled opposition. Prepared or unsent drafts are not outreach. A public response appears only after verification and an editorial review.",
    sourceCode: "Inspect all 101 public source records ↗",
    footer:
      "Corrections and sourced updates are welcome. Members may supply a link to an existing public statement. Corrections do not automatically overwrite the original historical record.",
    correct: "Suggest a correction ↗",
    eventNote: "This is a source-linked chronology of policy activity, not a prediction of when legislation will pass.",
    actions: {
      initiated828: "Co-initiated bill 828 SE",
      initiated970: "Co-initiated bill 970 SE",
      committee: "Rural Affairs Committee",
      spoke828: "Spoke during the first reading of 828 SE; the fact of speaking alone does not establish a position",
      furBill: "Co-initiated the 2021 fur-farming ban bill (a different animal-welfare issue)",
    },
  },
  et: {
    kicker: "AVALIK REGISTER / EESTI / 2026",
    heading: "Üks soov. Jälgitavad sammud.",
    description:
      "Üks inimese soov, 101 Riigikogu liiget ja kaks eelnõu. Siin on eraldi näha, mida saadikud on avalikult öelnud või teinud ning kas Proxy Society on neile kirjutanud. See pole saadikute ega erakondade edetabel.",
    snapshotLabel: "Andmete seis",
    snapshotNote: "Avalikud tsitaadid kontrollitud 23.10.2026. Saadikute ja komisjonide täielik nimekiri vaadati üle 28.09.2026. See on kuupäevastatud uurimisväljavõte, mitte reaalajas uuenev Riigikogu register.",
    metrics: {
      members: "Kaardistatud saadikuid",
      profiles: "Allikaga avalikke sõnavõtte",
      quotes: "Eraldi üle vaadatud tsitaate",
      contacted: "Kinnitatud saadetud kirju",
      replies: "Saabunud vastuseid"
    },
    coverage: "Isikustatud tõendite kaetus",
    quoteLegend: "Üle vaadatud tsitaat",
    actionLegend: "Ainult dokumenteeritud tegevus",
    unknownLegend: "Puurispidamise kohta seisukoht kinnitamata",
    coverageNote: "Seaduseelnõu algatamine, komisjoni kuulumine ja arutelul sõna võtmine on eri liiki tõendid. Ükski neist ei ole iseenesest tõend saadiku hääletamiskavatsusest.",
    issue: "Menetluses olevad eelnõud",
    billOne: "828 SE",
    billOneStatus: "Esimene lugemine lõpetatud; teise lugemise etapis",
    billTwo: "970 SE",
    billTwoStatus: "Algatatud 17.06.2026; juhtivkomisjon on maaelukomisjon",
    noLaw: "Kumbagi eelnõu ei käsitleta siin juba vastu võetud puurispidamise keeluna.",
    timeline: "Kuidas küsimus Riigikokku jõudis",
    source: "Algallikas ↗",
    quotesTitle: "Saadikute enda sõnadega",
    quotesIntro: "Valik konteksti arvestades üle vaadatud isikustatud sõnavõtte. Kõigi 101 saadiku kohta on allpool ka allikaga avalik väljavõte, kuid osa neist käsitleb muid teemasid.",
    originalLanguage: "Eestikeelne algtsitaat",
    directory: "Kõik 101 Riigikogu liiget",
    directoryIntro: "Otsi saadikut nime järgi. Iga nime juures on kuupäevaga avalik sõnavõtt, algallikas ning meie pöördumise seis. Muul teemal öeldu ei näita saadiku suhtumist kanade puurispidamisse.",
    search: "Otsi saadikut",
    searchPlaceholder: "Näiteks Maran või Kruuse",
    evidenceLabel: "Avalikud tõendid",
    evidenceAll: "Kõik tõendiliigid",
    evidenceQuote: "Üle vaadatud tsitaat",
    evidenceAction: "Dokumenteeritud tegevus ilma tsitaadita",
    evidenceUnknown: "Muu avalik sõnavõtt",
    outreachLabel: "Pöördumise seis",
    outreachAll: "Kõik pöördumised",
    notContacted: "Pole ühendust võetud",
    contacted: "Kiri saadetud",
    replied: "Vastus saabunud",
    count: "sobivat saadikut",
    pagination: "Riigikogu liikmete nimekirja leheküljed",
    previousPage: "Eelmine lehekülg",
    nextPage: "Järgmine lehekülg",
    pageLabel: "Lehekülg",
    nameCol: "Saadik",
    evidenceCol: "Tõend",
    contactCol: "Pöördumine",
    quoteEvidence: "Üle vaadatud tsitaat",
    actionEvidence: "Dokumenteeritud tegevus",
    unknownEvidence: "Muu avalik sõnavõtt",
    noQuote: "Selle saadiku puurispidamist puudutavat isikustatud tsitaati ei ole veel eraldi toimetuslikult kontrollitud.",
    noAction: "Selle saadiku seisukoht kanade puurispidamise kohta pole kinnitatud; muuteemalist sõnavõttu ei tohi selle asemel kasutada.",
    researchTitle: "Avalik sõnavõtt koos algallikaga",
    researchExcerpt: "Avaliku sõnavõtu katkend",
    researchCaution: "Katkend ei tõenda iseenesest saadiku seisukohta kanade puurispidamise suhtes. Loe täielikku stenogrammi ja arutelu konteksti.",
    researchSource: "Loe algallikat ↗",
    officialDirectory: "Riigikogu ametlik liikmete register ↗",
    issueCategory: "Sõnavõtt eelnõu 828 SE arutelul; tegemist võis olla küsimuse või protseduurilise märkusega",
    henCategory: "Puurikanade mainimine muus parlamendiarutelus",
    welfareCategory: "Muu loomakaitse- või loomade heaolu teema",
    agricultureCategory: "Põllumajandus või toidupoliitika, mitte seisukoht puurispidamise suhtes",
    otherCategory: "Muu parlamenditeema; ei tõenda seisukohta puurispidamise suhtes",
    noTranscriptCategory: "Muu isikustatud avalik sõnavõtt ametlikust allikast",
    researchPeriod: "Stenogrammide uurimisperiood kuni 22.10.2026",
    actionsTitle: "Dokumenteeritud tegevus",
    sourceLabel: "Vaata allikat ↗",
    scope: "Tsitaadi kontekst ja omistamise piirid",
    outreachTitle: "Meie kirjavahetuse seis",
    noSent: "Sellele saadikule saadetud kirja ei ole kinnitatud.",
    sentOn: "Kiri saadetud",
    repliedOn: "Vastus saabunud",
    replyCaution: "Vastuse teksti ei ole siin avaldatud. Erakirjavahetuse avaldamist hinnatakse eraldi.",
    empty: "Valitud filtritele vastavaid saadikuid ei leitud.",
    reset: "Tühista filtrid",
    portraitPhoto: "Kasutusloaga foto",
    portraitSource: "Foto algallikas ↗",
    portraitNotEndorse: "Foto aitab isikut tuvastada ega tähenda, et saadik toetab seda projekti.",
    noClearedPhoto: "Fotot ei näidata enne kasutusõiguse kontrollimist.",
    complianceNote: "Avalik, viidatud ja kuupäevastatud uurimisregister. Avalikult leitav teave pole automaatselt autoriõigusest ega isikuandmete kaitsest vaba.",
    rightsAndSources: "Allikad, isikuandmed ja fotode kasutusõigused ↗",
    methodology: "Kuidas registrit lugeda",
    methods: "Isikustatud tsitaadil peab olema kõneleja, kuupäev ja kontrollitav algallikas. Eelnõu algatamine, komisjonitöö, istungil kõnelemine ja vastamine on eri sündmused. Vaikimine ei ole vastuseis. Saatmata kirjamustand ei ole saadetud kiri. Vastuse avaldamine eeldab eraldi kontrolli.",
    sourceCode: "Vaata 101 saadiku avalikke lähteandmeid ↗",
    footer: "Ootame parandusi ja viiteid algallikatele. Saadik võib saata ka lingi varem avaldatud seisukohale. Ajaloolist kirjet ei kirjutata paranduse tõttu märkamatult ümber.",
    correct: "Teata veast või saada täiendus ↗",
    eventNote: "See on allikatega sündmuste ajajoon, mitte ennustus seaduse vastuvõtmise kohta.",
    actions: {
      initiated828: "Eelnõu 828 SE kaasalgataja",
      initiated970: "Eelnõu 970 SE kaasalgataja",
      committee: "Maaelukomisjon",
      spoke828: "Võttis eelnõu 828 SE esimesel lugemisel sõna; see ei näita automaatselt seisukohta",
      furBill: "2021. aasta karusloomakasvanduste keelustamise eelnõu kaasalgataja (eraldiseisev loomakaitseküsimus)"
    }
  },
  "zh-TW": {
    kicker: "實地紀錄 / 愛沙尼亞 / 2026",
    heading: "把公民訴求的後續進展攤開來看。",
    description:
      "一項明確的人類意願、101 位國會議員、兩項法案。這份公開紀錄分開呈現議員說過或做過什麼，以及 Proxy Society 是否已經聯繫對方；不會依政治立場評分。",
    snapshotLabel: "證據資料快照",
    snapshotNote: "公開引言於 2026 年 10 月 23 日核對；完整議員與委員會名單上次全面檢查為 9 月 28 日。這是有日期的研究紀錄，並非即時國會資料。",
    metrics: {
      members: "追蹤的國會議員",
      profiles: "已附來源的議員公開發言",
      quotes: "已審核之個人引言",
      contacted: "確認寄出的信件",
      replies: "已記錄的回覆",
    },
    coverage: "可歸屬證據涵蓋率",
    quoteLegend: "本人公開引言",
    actionLegend: "僅有公開行動紀錄",
    unknownLegend: "尚無蛋雞議題可核實證據",
    coverageNote:
      "公開行動包括提出法案、參與委員會或發言。不能因此推定某位議員投票支持或反對。",
    issue: "相關法案進度",
    billOne: "828 SE",
    billOneStatus: "已完成一讀，目前處於二讀階段",
    billTwo: "970 SE",
    billTwoStatus: "2026 年 6 月 17 日提出，交由農村事務委員會審查",
    noLaw: "本紀錄並未將任一提案視為已經通過的禁養法。",
    timeline: "這項議題如何進入國會",
    source: "原始資料 ↗",
    quotesTitle: "議員親自說過的話",
    quotesIntro: "此處精選經過脈絡檢視的發言。下方 101 位議員各附公開來源引言，其中部分 2026 年國會發言與蛋雞議題無關。",
    originalLanguage: "愛沙尼亞語原文",
    directory: "逐一檢視 101 位議員",
    directoryIntro: "101 位議員均附有來源可追溯的公開發言節錄。部分言論涉及其他議題，不能視為蛋雞籠飼立場；請展開紀錄查看來源、背景與聯繫進度。",
    search: "搜尋議員",
    searchPlaceholder: "姓名，例如 Maran 或 Kruuse",
    evidenceLabel: "公開證據",
    evidenceAll: "全部證據",
    evidenceQuote: "已核實本人引言",
    evidenceAction: "僅有行動紀錄",
    evidenceUnknown: "其他議題的國會發言",
    outreachLabel: "聯繫狀態",
    outreachAll: "全部聯繫狀態",
    notContacted: "尚未聯繫",
    contacted: "已聯繫",
    replied: "已收到回覆",
    count: "位議員符合條件",
    pagination: "國會議員資料分頁",
    previousPage: "上一頁",
    nextPage: "下一頁",
    pageLabel: "第",
    nameCol: "議員",
    evidenceCol: "證據",
    contactCol: "聯繫",
    quoteEvidence: "已核實引言",
    actionEvidence: "有公開行動紀錄",
    unknownEvidence: "其他議題公開發言",
    noQuote: "目前尚未完成此議員蛋雞籠飼相關直接引言的個別編輯審核。",
    noAction: "尚未核實此人在蛋雞籠飼議題上的立場；其他議題的公開言論不能用來替代。",
    researchTitle: "可追溯來源的公開發言紀錄",
    researchExcerpt: "議員本人公開發言節錄",
    researchCaution: "這段引言不一定代表議員對蛋雞籠飼的立場。",
    researchSource: "閱讀原始公開來源 ↗",
    officialDirectory: "Riigikogu 國會議員官方名錄 ↗",
    issueCategory: "828 SE 蛋雞籠飼法案討論；須確認原話是提問、程序說明或個人主張",
    henCategory: "於其他國會議題提及蛋雞籠飼",
    welfareCategory: "其他動物福利法案或討論",
    agricultureCategory: "農業或食品政策言論，不能視為蛋雞籠飼立場",
    otherCategory: "其他議題的國會言論，不能推論蛋雞籠飼立場",
    noTranscriptCategory: "來自其他官方來源的個人公開發言",
    researchPeriod: "涵蓋至 2026 年 10 月 22 日的國會發言",
    actionsTitle: "已記錄的行動",
    sourceLabel: "查看來源 ↗",
    scope: "發言背景與歸屬限制",
    outreachTitle: "聯繫進度",
    noSent: "尚無證據顯示已向這位議員寄出信件。",
    sentOn: "寄信日期",
    repliedOn: "回覆日期",
    replyCaution: "回覆內容尚未公開；私人通信須先經查核與編輯審視。",
    empty: "沒有符合目前篩選條件的議員。",
    reset: "清除篩選",
    portraitPhoto: "已授權的照片",
    portraitSource: "照片原始資料 ↗",
    portraitNotEndorse: "照片僅用來辨識人物，不代表當事人支持本計畫。",
    noClearedPhoto: "照片尚未完成授權確認，因此暫不使用。",
    complianceNote: "本頁記錄涉及公共利益的議會活動，不對政治立場評分。每筆資料都有來源與日期。公開可見不代表自動免除著作權或個資保護義務。",
    rightsAndSources: "個資、使用權利與照片來源 ↗",
    methodology: "閱讀這份紀錄的原則",
    methods:
      "引言須明確出自本人，並記錄日期及來源。提案連署、委員會職務、議場發言與通信回覆是不同類型的證據；未回覆不等於反對。尚未寄出的草稿不算聯繫。公開回覆前必須核實並審視可公開的內容。",
    sourceCode: "查看 101 位議員公開來源紀錄 ↗",
    footer: "歡迎提供更正或公開來源。議員也可以提供既有公開聲明的連結。更正不會直接抹去原始歷史紀錄。",
    correct: "提出資料更正 ↗",
    eventNote: "這是有來源的政策事件紀錄，不代表對法案通過時程的預測。",
    actions: {
      initiated828: "共同提出 828 SE 法案",
      initiated970: "共同提出 970 SE 法案",
      committee: "農村事務委員會",
      spoke828: "曾在 828 SE 一讀發言；僅有發言紀錄不能證明其立場",
      furBill: "曾共同提出 2021 年禁養毛皮動物法案（不同的動物福利議題）",
    },
  },
} as const;

const chronology = [
  {
    date: "2024-06-13",
    en: "The Rural Affairs Committee calls for deeper analysis of ending cage housing.",
    et: "Maaelukomisjon peab vajalikuks uurida põhjalikumalt kanade puurispidamise lõpetamise mõjusid.",
    zh: "農村事務委員會要求進一步分析廢除籠飼制度。",
    source:
      "https://www.riigikogu.ee/pressiteated/maaelukomisjon-kanade-puurispidamise-lopetamist-on-vaja-suvitsi-analuusida/",
  },
  {
    date: "2026-02-19",
    en: "Eighteen MPs introduce bill 828 SE.",
    et: "18 Riigikogu liiget algatavad eelnõu 828 SE.",
    zh: "18 位議員提出 828 SE 法案。",
    source:
      "https://www.riigikogu.ee/pressiteated/18-riigikogu-liiget-esitas-eeln-u-kanade-puurispidamise-keelustamiseks/",
  },
  {
    date: "2026-02-25",
    en: "Four major egg producers sign a voluntary transition commitment for 2035.",
    et: "Neli suurt munatootjat allkirjastavad vabatahtliku kokkuleppe minna 2035. aastaks üle puurivabale pidamisele.",
    zh: "四家主要雞蛋生產商簽署最晚於 2035 年轉型的自願承諾。",
    source:
      "https://epkk.ee/eesti-suurimad-munatootjad-allkirjastasid-pidulikult-kokkuleppe-uleminekuks-puurivabadele-tootmisviisidele-hiljemalt-2035-aastaks/",
  },
  {
    date: "2026-04-22",
    en: "Bill 828 SE completes its first reading.",
    et: "Eelnõu 828 SE läbib esimese lugemise.",
    zh: "828 SE 法案完成一讀。",
    source:
      "https://www.riigikogu.ee/pressiteated/riigikogus-labis-munakanade-puurispidamist-keelav-eelnou-esimese-lugemise/",
  },
  {
    date: "2026-06-17",
    en: "Seventeen MPs introduce bill 970 SE, assigned to the Rural Affairs Committee.",
    et: "17 Riigikogu liiget algatavad eelnõu 970 SE, mis antakse maaelukomisjoni menetleda.",
    zh: "17 位議員提出 970 SE 法案，交由農村事務委員會。",
    source:
      "https://www.riigikogu.ee/pressiteated/muu-pressiteade-et/menetlusse-voeti-eelnou-tarbijakaitse-kohta/",
  },
  {
    date: "2026-10-20",
    en: "TV3 reports that the legislative process remains stalled. This is reporting, not a parliamentary decision.",
    et: "TV3 kajastab eelnõude menetluse venimist. Tegemist on ajakirjandusliku käsitluse, mitte Riigikogu otsusega.",
    zh: "TV3 報導立法進程停滯；這是新聞報導，並非國會決議。",
    source:
      "https://www.tv3.ee/tv3telekanal/tv3-uudised/tv3-uudised-kanad-jaavad-puuridesse-keelustav-eelnou-istub-riigikogulaste-sahtlis/",
  },
];

const quoteContextEt: Record<string, string> = {
  "Jaak Aab": "Küsis 828 SE arutelul üleminekuks vajalike investeeringute toetamise kohta. Küsimus ei ütle, kuidas ta eelnõu lõpphääletusel hääletaks.",
  "Anti Allas": "Kritiseeris 19. oktoobril 2026 eelnõu menetluse viibimist. See oli tema sõnavõtt, mitte komisjoni ühine seisukoht.",
  "Arvo Aller": "2024. aasta hinnang puudutas nelja- kuni viieaastast üleminekuaega, mitte hilisemat 2035. aasta tähtaega.",
  "Peeter Ernits": "Küsis 828 SE esimesel lugemisel puurikanade munade müügi võimaliku keelamise kohta. Küsimusest ei saa järeldada tema eelistatud lahendust.",
  "Andre Hanimägi": "Küsis, kas Euroopa Liidu õiguses oleks võimalik piirata puurikanade munade müüki. Väljavõte on lühendatud.",
  "Züleyxa Izmailova": "2026. aasta maikuine erakonna avaldus kirjeldas valitsuse eelnõu toonast viivitust. See ei kinnita eelnõude praegust menetlusstaadiumi.",
  "Madis Kallas": "Meenutas oma varasemat ministritööd ja kohtumisi munatootjatega, mitte kindlat hääletamiskavatsust.",
  "Tanel Kiik": "Rääkis 828 SE esimesel lugemisel muudatuse võimalikest mõjudest. Väljavõte on lühendatud ega hõlma kogu seisukohta.",
  "Mait Klaassen": "Viitas teise teadlase arvamusele kanade puurispidamise kohta. Seda ei saa automaatselt pidada tema enda seisukohaks.",
  "Andrei Korobeinik": "Märkis 14. oktoobril 2026, et puurikanade eelnõu edasine käekäik pole roosiline. See ei kirjelda tema seisukohta eelnõu iga sätte suhtes.",
  "Anastassia Kovalenko-Kõlvart": "ERR omistas 2024. aastal loomakaitse toetusrühma juhile selle avaliku sõnavõtu puurikanade petitsiooni üleandmisel. Sellest ei saa järeldada tema suhtumist 2026. aasta eelnõude kõigisse tingimustesse.",
  "Urmas Kruuse": "Rääkis 2025. aastal maaelukomisjoni esimehena toonastest komisjonis arutatud lahendustest. See ei tõenda tema 2026. aasta isiklikku hääletamiskavatsust.",
  "Helmen Kütt": "Kirjeldas puurikanade pidamistingimusi eelnõu arutelul. Katkend on lühendatud.",
  "Tiit Maran": "2026. aasta veebruarikuine avalik sõnavõtt kutsus üles sätestama puurispidamise lõpetamine seaduses.",
  "Heljo Pikhof": "Võrdles puurikanade kohtlemist kasside ja koerte kohtlemisega 828 SE esimesel lugemisel.",
  "Anti Poolamets": "Tõstatas puurikanade munade müügipiirangu võimaluse. Tegu on arutelumärkuse, mitte hääletustulemusega.",
  "Reili Rand": "Käsitles ostjate valikuid ja puurivabasid mune. Väljavõte ei anna ülevaadet kogu tema võimalikust hääletamiskavatsusest.",
  "Riina Sikkut": "Rääkis õigusliku muudatuse vajalikkusest juhul, kui puurispeetavate kanade osakaal iseenesest ei vähene.",
  "Toomas Uibo": "Käsitles istungil tarbijate valikuid puurikanade munade ostmisel. Lühike väljavõte ei ole tema terviklik poliitiline programm.",
  "Jaak Valge": "Küsis eelnõu valitsuses ettevalmistamise ja menetluse viibimise kohta."
};

const quoteContextZh: Record<string, string> = {
  "Tiit Maran": "這段 2026 年 2 月的發言呼籲將結束籠飼的承諾寫入法律；不代表可推定後續修正案或最終投票意向。",
  "Urmas Kruuse": "他以農村事務委員會主席身分概述 2025 年委員會當時的看法；不能據此推定他對 2026 年兩項法案的個人投票意向。",
  "Arvo Aller": "這段 2024 年發言是針對當時建議的四至五年轉型期，並非後來提出的 2035 年期限。",
  "Züleyxa Izmailova": "這段 2026 年 5 月的黨部公開聲明描述的是政府版草案當時的延誤，無法確認目前的精確程序狀態。",
};

const counts = {
  members: chickenMembers.length,
  profiles: chickenMembers.filter((m) => m.publicResearch?.source).length,
  quotes: chickenMembers.filter((m) => m.quote !== null).length,
  actionOnly: chickenMembers.filter((m) => m.quote === null && m.actions.length > 0).length,
  contacted: chickenMembers.filter((m) => m.outreach.status !== "not_contacted").length,
  replies: chickenMembers.filter((m) => m.outreach.status === "replied").length,
};
const unverified = counts.members - counts.quotes - counts.actionOnly;

function normalizeName(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function actionDescription(action: ChickenAction, locale: CivicLocale) {
  const t = text[locale].actions;
  if (action.kind === "committee") {
    if (locale === "et") {
      const role = action.detail?.includes("Chair;")
        ? " (esimees, 828 SE juhtivkomisjoni esindaja)"
        : action.detail?.includes("Deputy Chair")
          ? " (aseesimees)"
          : " (liige)";
      return t.committee + role;
    }
    if (locale === "zh-TW") {
      const role = action.detail?.includes("Chair;")
        ? "（主席，828 SE 主責委員會代表）"
        : action.detail?.includes("Deputy Chair")
          ? "（副主席）"
          : "（委員）";
      return t.committee + role;
    }
    return t.committee + (action.detail ? ": " + action.detail : "");
  }
  return t[action.kind];
}

function evidenceKind(member: ChickenMember): EvidenceFilter {
  if (member.quote) return "quote";
  if (member.actions.length) return "action";
  return "unknown";
}

export default function ChickenOutreachTracker({ locale }: { locale: CivicLocale }) {
  const t = text[locale];
  const [query, setQuery] = useState("");
  const [evidence, setEvidence] = useState<EvidenceFilter>("all");
  const [outreach, setOutreach] = useState<OutreachFilter>("all");
  const [page, setPage] = useState(1);

  const featured = useMemo(
    () =>
      chickenMembers
        .filter((member) => ["Tiit Maran", "Urmas Kruuse", "Arvo Aller", "Züleyxa Izmailova", "Riina Sikkut", "Heljo Pikhof"].includes(member.name) && member.quote !== null)
        .sort((a, b) => a.name.localeCompare(b.name, "et")),
    [],
  );

  const visible = useMemo(
    () =>
      chickenMembers
        .filter((m) => normalizeName([m.name, ...(m.knownAs ?? [])].join(" ")).includes(normalizeName(query.trim())))
        .filter((m) => evidence === "all" || evidenceKind(m) === evidence)
        .filter((m) => outreach === "all" || m.outreach.status === outreach)
        .sort((a, b) => {
          const weight = (m: ChickenMember) => (m.quote ? 2 : m.actions.length > 0 ? 1 : 0);
          return weight(b) - weight(a) || a.name.localeCompare(b.name, "et");
        }),
    [query, evidence, outreach],
  );

  // Only 12 entries are hydrated at a time. Otherwise all 101 records,
  // including content hidden under <details>, inflate the initial DOM and RSC payload.
  const pageCount = Math.max(1, Math.ceil(visible.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const pageMembers = visible.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const resetFilters = () => {
    setPage(1);
    setQuery("");
    setEvidence("all");
    setOutreach("all");
  };

  return (
    <section id="outreach" className={styles.tracker} aria-labelledby="outreach-heading">
      <div className={styles.introduction}>
        <div>
          <p className={styles.kicker}>{t.kicker}</p>
          <h2 id="outreach-heading">{t.heading}</h2>
          <p className={styles.lead}>{t.description}</p>
        </div>
        <aside className={styles.snapshot}>
          <span>{t.snapshotLabel}</span>
          <strong>{chickenOutreachSnapshot}</strong>
          <p>{t.snapshotNote}</p>
        </aside>
      </div>

      <div className={styles.rightsRibbon}>
        <p>{t.complianceNote}</p>
        <a href={locale === "en" ? "/projects/chickens-no-cages/rights" : "/zh-tw/projects/chickens-no-cages/rights"}>{t.rightsAndSources}</a>
      </div>

      <div className={styles.stats} role="group" aria-label={t.coverage}>
        {[
          [counts.members, t.metrics.members],
          [counts.profiles, t.metrics.profiles],
          [counts.quotes, t.metrics.quotes],
          [counts.contacted, t.metrics.contacted],
          [counts.replies, t.metrics.replies],
        ].map(([value, label]) => (
          <div className={styles.stat} key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className={styles.coverage}>
        <div className={styles.coverageHeading}>
          <h3>{t.coverage}</h3>
          <span>{counts.quotes} / {counts.members}</span>
        </div>
        <div className={styles.track} role="img" aria-label={
          t.quoteLegend + ": " + counts.quotes + "; " +
          t.actionLegend + ": " + counts.actionOnly + "; " +
          t.unknownLegend + ": " + unverified
        }>
          <div className={styles.quoteFill} style={{ width: (counts.quotes / counts.members * 100) + "%" }} />
          <div className={styles.actionFill} style={{ width: (counts.actionOnly / counts.members * 100) + "%" }} />
          <div className={styles.unknownFill} style={{ width: (unverified / counts.members * 100) + "%" }} />
        </div>
        <div className={styles.legend}>
          <span><i className={styles.quoteKey} />{t.quoteLegend}: <b>{counts.quotes}</b></span>
          <span><i className={styles.actionKey} />{t.actionLegend}: <b>{counts.actionOnly}</b></span>
          <span><i className={styles.unknownKey} />{t.unknownLegend}: <b>{unverified}</b></span>
        </div>
        <p>{t.coverageNote}</p>
      </div>

      <div className={styles.issuePanel}>
        <div className={styles.subhead}>
          <span className={styles.kicker}>01 / {t.issue}</span>
          <h3>{t.issue}</h3>
        </div>
        <div className={styles.billGrid}>
          <a href="https://www.riigikogu.ee/tegevus/eelnoud/e5671f5a-d571-4fcb-96d5-cd2afd5734c4/loomakaitseseaduse-muutmise-seadus/" target="_blank" rel="noreferrer">
            <strong>{t.billOne}</strong><span>{t.billOneStatus}</span><small>{t.source}</small>
          </a>
          <a href="https://www.riigikogu.ee/pressiteated/muu-pressiteade-et/menetlusse-voeti-eelnou-tarbijakaitse-kohta/" target="_blank" rel="noreferrer">
            <strong>{t.billTwo}</strong><span>{t.billTwoStatus}</span><small>{t.source}</small>
          </a>
        </div>
        <p className={styles.noLaw}>{t.noLaw}</p>
      </div>

      <div className={styles.timelineSection}>
        <div className={styles.subhead}>
          <span className={styles.kicker}>02 / {t.timeline}</span>
          <h3>{t.timeline}</h3>
          <p>{t.eventNote}</p>
        </div>
        <ol className={styles.timeline}>
          {chronology.map((event) => (
            <li key={event.date}>
              <time dateTime={event.date}>{event.date}</time>
              <span>{locale === "zh-TW" ? event.zh : locale === "et" ? event.et : event.en}</span>
              <a href={event.source} target="_blank" rel="noreferrer">{t.source}</a>
            </li>
          ))}
        </ol>
      </div>

      <div className={styles.featuredSection}>
        <div className={styles.subhead}>
          <span className={styles.kicker}>03 / {t.quotesTitle}</span>
          <h3>{t.quotesTitle}</h3>
          <p>{t.quotesIntro}</p>
        </div>
        <div className={styles.quoteGrid}>
          {featured.map((member) => {
            const quote = member.quote;
            if (!quote) return null;
            return (
              <article className={styles.quoteCard} key={member.name}>
                <div className={styles.quoteHead}>
                  <strong>{member.name}</strong><time dateTime={quote.date}>{quote.date}</time>
                </div>
                {civicPortraits[member.name] ? (
                  <figure className={styles.portrait}>
                    <Image src={civicPortraits[member.name].src} alt="" width={112} height={112} unoptimized loading="lazy" decoding="async" className={styles.portraitImage} />
                    <figcaption>
                      <span>{t.portraitPhoto}: {civicPortraits[member.name].attribution}</span>
                      <span>
                        <a href={civicPortraits[member.name].originalFile} target="_blank" rel="noreferrer">{t.portraitSource}</a>
                        {" · "}
                        <a href={civicPortraits[member.name].licenseUrl} target="_blank" rel="noreferrer">{civicPortraits[member.name].license}</a>
                      </span>
                      <small>{t.portraitNotEndorse}</small>
                    </figcaption>
                  </figure>
                ) : null}
                <p className={styles.languageNote}>{t.originalLanguage}</p>
                <blockquote lang="et">“{quote.text}”</blockquote>
<p className={styles.citationTitle}>{quote.sourcePublisher}{quote.sourceAuthor ? " · " + quote.sourceAuthor : ""}: <cite>{quote.sourceTitle}</cite></p>
                <a href={quote.source} aria-label={`${t.source}: ${quote.sourcePublisher}: ${quote.sourceTitle}`} target="_blank" rel="noopener noreferrer">{t.source}</a>
              </article>
            );
          })}
        </div>
      </div>

      <div className={styles.directory}>
        <div className={styles.subhead}>
          <span className={styles.kicker}>{locale === "et" ? "04 / 101 RIIGIKOGU LIIGET" : "04 / 101 MEMBERS"}</span>
          <h3>{t.directory}</h3>
          <p>{t.directoryIntro}</p>
        </div>

        <div className={styles.controls}>
          <label>
            <span>{t.search}</span>
            <input
              type="search"
              value={query}
              onChange={(event) => { setQuery(event.target.value); setPage(1); }}
              placeholder={t.searchPlaceholder}
            />
          </label>
          <label>
            <span>{t.evidenceLabel}</span>
            <select value={evidence} onChange={(event) => { setEvidence(event.target.value as EvidenceFilter); setPage(1); }}>
              <option value="all">{t.evidenceAll}</option>
              <option value="quote">{t.evidenceQuote}</option>
              <option value="action">{t.evidenceAction}</option>
              <option value="unknown">{t.evidenceUnknown}</option>
            </select>
          </label>
          <label>
            <span>{t.outreachLabel}</span>
            <select value={outreach} onChange={(event) => { setOutreach(event.target.value as OutreachFilter); setPage(1); }}>
              <option value="all">{t.outreachAll}</option>
              <option value="not_contacted">{t.notContacted}</option>
              <option value="contacted">{t.contacted}</option>
              <option value="replied">{t.replied}</option>
            </select>
          </label>
        </div>

        <div className={styles.resultLine} role="status" aria-live="polite">
          <span>{visible.length === 0 ? "0" : `${(currentPage - 1) * PAGE_SIZE + 1}–${Math.min(currentPage * PAGE_SIZE, visible.length)} / ${visible.length}`} {t.count}</span>
          {(query || evidence !== "all" || outreach !== "all") && (
            <button type="button" onClick={resetFilters}>{t.reset}</button>
          )}
        </div>

        {visible.length > 0 ? (
          <div className={styles.entries}>
            <div className={styles.columnHead} aria-hidden="true">
              <span>{t.nameCol}</span>
              <span>{t.evidenceCol}</span>
              <span>{t.contactCol}</span>
            </div>
            {pageMembers.map((member) => {
              const kind = evidenceKind(member);
              return (
                <details className={styles.entry} key={member.name}>
                  <summary>
                    <strong>{member.name}</strong>
                    <span className={kind === "quote" ? styles.quoteState : styles.mutedState}>
                      {kind === "quote" ? t.quoteEvidence : kind === "action" ? t.actionEvidence : t.unknownEvidence}
                    </span>
                    <span className={styles.contactState}>
                      {member.outreach.status === "not_contacted"
                        ? t.notContacted : member.outreach.status === "replied" ? t.replied : t.contacted}
                    </span>
                    <span className={styles.expand} aria-hidden="true">+</span>
                  </summary>
                  <div className={styles.entryBody}>
                    <div>
                      {member.publicResearch && (
                        <section className={styles.researchRecord} aria-label={t.researchTitle}>
                          <h4>{t.researchTitle}</h4>
                          <p className={styles.researchSubject}>
                            <time dateTime={member.publicResearch.date}>{member.publicResearch.date}</time>
                            {" / "}
                            {member.publicResearch.category === "cage_bill_debate" ? t.issueCategory :
                            member.publicResearch.category === "laying_hen_cages" ? t.henCategory :
                            member.publicResearch.category === "animal_welfare" ? t.welfareCategory :
                            member.publicResearch.category === "agriculture_and_food" ? t.agricultureCategory :
                            member.publicResearch.category === "other_official_statement" ? t.noTranscriptCategory : t.otherCategory}
                          </p>
                          <p className={styles.researchTopic}>{member.publicResearch.sourceTitle}</p>
                          {member.publicResearch.excerpt !== member.quote?.text && (
                            <blockquote lang="et">“{member.publicResearch.excerpt}”</blockquote>
                          )}
                          <p className={styles.researchWarning}>{t.researchCaution}</p>
                          <div className={styles.researchLinks}>
                            <a href={member.publicResearch.source} target="_blank" rel="noopener noreferrer" aria-label={t.researchSource + ": " + member.name + ": " + member.publicResearch.sourceTitle}>{t.researchSource}</a>
                            {member.parliamentarySource && <a href={member.parliamentarySource.officialRoster} target="_blank" rel="noopener noreferrer">{t.officialDirectory}</a>}
                          </div>
                        </section>
                      )}
                        {civicPortraits[member.name] ? (
                          <figure className={styles.portrait}>
                            <Image src={civicPortraits[member.name].src} alt="" width={112} height={112} unoptimized loading="lazy" decoding="async" className={styles.portraitImage} />
                            <figcaption>
                              <span>{t.portraitPhoto}: {civicPortraits[member.name].attribution}</span>
                              <span>
                                <a href={civicPortraits[member.name].originalFile} target="_blank" rel="noreferrer">{t.portraitSource}</a>
                                {" · "}
                                <a href={civicPortraits[member.name].licenseUrl} target="_blank" rel="noreferrer">{civicPortraits[member.name].license}</a>
                              </span>
                              <small>{t.portraitNotEndorse}</small>
                            </figcaption>
                          </figure>
                        ) : null}
                      {member.quote ? (
                        <div className={styles.recordQuote}>
                          <span>{t.originalLanguage} / {member.quote.date}</span>
                          <blockquote lang="et">“{member.quote.text}”</blockquote>
                          <p>{t.scope}: {locale === "zh-TW" ? (quoteContextZh[member.name] ?? member.quote.context) : locale === "et" ? (quoteContextEt[member.name] ?? "Tsitaadi tähendus sõltub täielikust kontekstist. See ei näita iseenesest saadiku hääletamiskavatsust.") : member.quote.context}</p>
<p className={styles.citationTitle}>{member.quote.sourcePublisher}{member.quote.sourceAuthor ? " · " + member.quote.sourceAuthor : ""}: <cite>{member.quote.sourceTitle}</cite></p>
                          <a href={member.quote.source} aria-label={`${t.sourceLabel}: ${member.name}: ${member.quote.sourceTitle}`} target="_blank" rel="noopener noreferrer">{t.sourceLabel}</a>
                        </div>
                      ) : <p className={styles.muted}>{t.noQuote}</p>}
                      {member.actions.length > 0 ? (
                        <div className={styles.actions}>
                          <h4>{t.actionsTitle}</h4>
                          <ul>
                            {member.actions.map((action) => (
                              <li key={action.kind}>
                                <span>{actionDescription(action, locale)} ({action.date})</span>
                                <a href={action.source} aria-label={`${t.sourceLabel}: ${member.name}: ${actionDescription(action, locale)} (${action.date})`} target="_blank" rel="noopener noreferrer">{t.sourceLabel}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : !member.quote ? <p className={styles.muted}>{t.noAction}</p> : null}
                    </div>
                    <aside className={styles.contactDetail}>
                      <h4>{t.outreachTitle}</h4>
                      {member.outreach.contactedAt ? (
                        <p>{t.sentOn}: {member.outreach.contactedAt}</p>
                      ) : <p>{t.noSent}</p>}
                      {member.outreach.repliedAt && (
                        <p>{t.repliedOn}: {member.outreach.repliedAt}. {t.replyCaution}</p>
                      )}
                    </aside>
                  </div>
                </details>
              );
            })}
          </div>
        ) : (
          <div className={styles.empty}>
            <p>{t.empty}</p>
            <button type="button" onClick={resetFilters}>{t.reset}</button>
          </div>
        )}
        {pageCount > 1 && (
          <nav className={styles.pagination} aria-label={t.pagination}>
            <button type="button" onClick={() => setPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1}>
              ← {t.previousPage}
            </button>
            <span aria-live="polite">{t.pageLabel} {currentPage} / {pageCount}</span>
            <button type="button" onClick={() => setPage(Math.min(pageCount, currentPage + 1))} disabled={currentPage === pageCount}>
              {t.nextPage} →
            </button>
          </nav>
        )}
      </div>

      <div className={styles.methods}>
        <div>
          <span className={styles.kicker}>05 / {t.methodology}</span>
          <h3>{t.methodology}</h3>
          <p>{t.methods}</p>
          <small>{t.footer}</small>
        </div>
        <div className={styles.methodLinks}>
          <a href="https://github.com/krishaamer/proxy-society/blob/main/app/chicken-outreach-data.ts" target="_blank" rel="noreferrer">{t.sourceCode}</a>
          <a href={locale === "en" ? "/projects/chickens-no-cages/rights" : "/zh-tw/projects/chickens-no-cages/rights"}>{t.rightsAndSources}</a>
          <a href="mailto:hello@proxysociety.org?subject=Chickens%2C%20No%20Cages%20-%20source%20correction">{t.correct}</a>
          <span>{t.snapshotLabel}: {chickenOutreachSnapshot}</span>
          <span>MP / {chickenMembershipAudit}</span>
        </div>
      </div>
    </section>
  );
}
