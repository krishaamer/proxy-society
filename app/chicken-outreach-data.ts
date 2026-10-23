/**
 * Publishable snapshot from the separate, private Chickens, No Cages research workspace.
 *
 * Updated: 2026-10-23. The 101-member / committee first-pass review is from
 * 2026-09-28; attributed quotations were rechecked on 2026-10-23.
 *
 * Only public parliamentary actions, attributable published quotations and
 * confirmed outreach outcomes belong here. No Gmail draft bodies, addresses,
 * reply text, inferred voting positions or internal research priorities.
 *
 * Update contact dates ONLY after independently confirming that a message
 * was sent and, separately, that a response was received. A lack of contact,
 * quotation or reply does not imply opposition to the policy.
 */
export type ChickenActionKind = "initiated828" | "initiated970" | "committee" | "spoke828" | "furBill";
export type ChickenAction = {
  kind: ChickenActionKind;
  date: string;
  source: string;
  detail?: string;
};
export type ChickenQuote = {
  text: string;
  date: string;
  source: string;
  sourceTitle: string;
  sourcePublisher: string;
  sourceAuthor?: string;
  context: string;
};
export type ChickenMember = {
  name: string;
  profileRecorded: boolean;
  quote: ChickenQuote | null;
  actions: ChickenAction[];
  knownAs?: string[];
  parliamentarySource?: {
    officialRoster: string;
    officialMemberUuid: string;
    checkedAt: string;
    recordedSpeechesIn2026: number;
  };
  publicResearch?: {
    excerpt: string;
    date: string;
    source: string;
    sourceTitle: string;
    category: "cage_bill_debate" | "laying_hen_cages" | "animal_welfare" | "agriculture_and_food" | "other_parliamentary_speech" | "other_official_statement";
    verifiedAttribution: string;
    editorialCaveat: string;
    excerptReview: string;
  };
  outreach: {
    status: "not_contacted" | "contacted" | "replied";
    contactedAt: string | null;
    repliedAt: string | null;
  };
};
export const chickenOutreachSnapshot = "2026-10-23";
export const chickenResearchWindow = "2026-01-01 to 2026-10-22";
export const chickenMembershipAudit = "2026-09-28";
export const chickenMembers: ChickenMember[] = [
  {
    "name": "Jaak Aab",
    "profileRecorded": true,
    "quote": {
      "text": "Kas neid investeeringuid on kuidagi toetatud, et oleks võimalik loobuda kanade puuris pidamisest?",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "sourcePublisher": "Riigikogu ametlik stenogramm",
      "context": "Question about public support for cage-free conversion; not a declared voting position."
    },
    "actions": [
      {
        "kind": "initiated828",
        "date": "2026-02-19",
        "source": "https://www.riigikogu.ee/tegevus/eelnoud/e5671f5a-d571-4fcb-96d5-cd2afd5734c4/loomakaitseseaduse-muutmise-seadus/"
      },
      {
        "kind": "initiated970",
        "date": "2026-06-17",
        "source": "https://www.riigikogu.ee/pressiteated/muu-pressiteade-et/menetlusse-voeti-eelnou-tarbijakaitse-kohta/"
      }
    ],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "6b45cfb5-8a17-481c-b674-80fc00c6cf5d",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 137
    },
    "publicResearch": {
      "excerpt": "Kas neid investeeringuid on kuidagi toetatud, et oleks võimalik loobuda kanade puuris pidamisest?",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "category": "cage_bill_debate",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Named contribution during the first reading of 828 SE. It may be a question, procedural intervention, a cited view or a policy statement; check its context before inferring any position.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Annely Akkermann",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "7655e8d3-b658-49f0-8e09-f6cbc4a2c714",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 198
    },
    "publicResearch": {
      "excerpt": "aasta teise lisaeelarve seaduse eelnõu 1019 teiseks lugemiseks ettevalmistamisel arutas rahanduskomisjon 13.",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211400",
      "sourceTitle": "Riigi 2026. aasta teise lisaeelarve seaduse eelnõu (1019 SE) teine lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Yoko Alender",
    "profileRecorded": true,
    "quote": null,
    "actions": [
      {
        "kind": "furBill",
        "date": "2021",
        "source": "https://www.riigikogu.ee/tegevus/eelnoud/4d3e1a25-2d13-4f2d-a85c-2471a1cd7bc3/loomakaitseseaduse-ja-looduskaitseseaduse-muutmise-seadus/"
      }
    ],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "90074aa2-4938-41a9-8275-3a6efa1cee31",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 58
    },
    "publicResearch": {
      "excerpt": "Kaitsekulude tõus ja defitsiidi vähendamine on loomulikult mõlemad kindlustunde loomiseks vältimatud, aga väga [oluline] on inimestele ka nende kodu.",
      "date": "2026-09-29",
      "source": "https://stenogrammid.riigikogu.ee/202609291000",
      "sourceTitle": "Peaminister Kristen Michali poliitiline avaldus seoses 2027. aasta riigieelarve seaduse eelnõu üleandmisega",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Anti Allas",
    "profileRecorded": true,
    "quote": {
      "text": "Vaieldamatult on see arguse märk, kui ei julgeta ühte seadust lasta saali ehk kanade puurispidamise eelnõu ei lubata suurel saalil arutada.",
      "date": "2026-10-19",
      "source": "https://stenogrammid.riigikogu.ee/202610191500",
      "sourceTitle": "34 Riigikogu liikme kirjalik nõue umbusalduse avaldamiseks Vabariigi Valitsusele",
      "sourcePublisher": "Riigikogu ametlik stenogramm",
      "context": "19 October parliamentary remarks criticize legislative delay; attributed to the speaker, not a committee decision."
    },
    "actions": [
      {
        "kind": "initiated828",
        "date": "2026-02-19",
        "source": "https://www.riigikogu.ee/tegevus/eelnoud/e5671f5a-d571-4fcb-96d5-cd2afd5734c4/loomakaitseseaduse-muutmise-seadus/"
      },
      {
        "kind": "initiated970",
        "date": "2026-06-17",
        "source": "https://www.riigikogu.ee/pressiteated/muu-pressiteade-et/menetlusse-voeti-eelnou-tarbijakaitse-kohta/"
      },
      {
        "kind": "committee",
        "date": "2026-09-28",
        "detail": "Member",
        "source": "https://www.riigikogu.ee/riigikogu/komisjonid/maaelukomisjon/"
      }
    ],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "f6353ede-a0a5-4918-ab8b-790a1957c5cd",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 214
    },
    "publicResearch": {
      "excerpt": "Seda on minule mitmed munatootjad ütelnud, et kui me täna julgeksime ära teha selle otsuse ja annaksime ka selge sõnumi, et me tahame riigina …",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "category": "cage_bill_debate",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Named contribution during the first reading of 828 SE. It may be a question, procedural intervention, a cited view or a policy statement; check its context before inferring any position.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Arvo Aller",
    "profileRecorded": true,
    "quote": {
      "text": "Sektori jaoks oleks see äärmiselt keeruline",
      "date": "2024-06-13",
      "source": "https://www.riigikogu.ee/pressiteated/maaelukomisjon-kanade-puurispidamise-lopetamist-on-vaja-suvitsi-analuusida/",
      "sourceTitle": "Maaelukomisjon: kanade puurispidamise lõpetamist on vaja süvitsi analüüsida",
      "sourcePublisher": "Riigikogu",
      "context": "His remark explicitly concerned a proposed 4-5-year transition, NOT the later 2035 deadline"
    },
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "a39c4392-bbc8-4036-b923-0f5f2b3d9766",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 3697
    },
    "publicResearch": {
      "excerpt": "veebruaril allkirjastasid vabatahtlikult [kokkuleppe] üleminekuks puurivabade kanade pidamisele ja munatootmisele.",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "category": "cage_bill_debate",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Named contribution during the first reading of 828 SE. It may be a question, procedural intervention, a cited view or a policy statement; check its context before inferring any position.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Vladimir Arhipov",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "586335bd-0e3f-4cee-a325-7af602224ca7",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 207
    },
    "publicResearch": {
      "excerpt": "See teine osa, ma mõtlen, et mitte see zoofiilia, vaid loomakaitse, nagu te seda nimetate.",
      "date": "2026-10-14",
      "source": "https://stenogrammid.riigikogu.ee/202610141400",
      "sourceTitle": "Loomakaitseseaduse ja veterinaarseaduse muutmise seaduse eelnõu (899 SE) teine lugemine",
      "category": "animal_welfare",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Remarks concern another animal-welfare issue or animal-protection bill; not a documented position on laying-hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Vadim Belobrovtsev",
    "profileRecorded": true,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "80eac2f1-bb1e-4996-ac5a-4c3dba91bade",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 250
    },
    "publicResearch": {
      "excerpt": "Oskad sa natuke rohkem seletada, mis olukord praegu on tööturul, mis puudutab just noori?",
      "date": "2026-10-22",
      "source": "https://stenogrammid.riigikogu.ee/202610221000",
      "sourceTitle": "Riigikogu otsuse \"Ettepaneku tegemine Vabariigi Valitsusele töötada välja õpilaste töötamisele maksusoodustused\" eelnõu (940 OE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Lea Danilson-Järg",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "7f83e40c-4854-4632-9372-448b3a5dc93a",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 150
    },
    "publicResearch": {
      "excerpt": "Viimaste tundide jooksul oleme saanud taas veenduda, et ega musta valgeks rääkimises ei ole Reformierakonnale vastast.",
      "date": "2026-10-19",
      "source": "https://stenogrammid.riigikogu.ee/202610191500",
      "sourceTitle": "34 Riigikogu liikme kirjalik nõue umbusalduse avaldamiseks Vabariigi Valitsusele",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Enn Eesmaa",
    "profileRecorded": true,
    "quote": null,
    "actions": [
      {
        "kind": "initiated828",
        "date": "2026-02-19",
        "source": "https://www.riigikogu.ee/tegevus/eelnoud/e5671f5a-d571-4fcb-96d5-cd2afd5734c4/loomakaitseseaduse-muutmise-seadus/"
      },
      {
        "kind": "initiated970",
        "date": "2026-06-17",
        "source": "https://www.riigikogu.ee/pressiteated/muu-pressiteade-et/menetlusse-voeti-eelnou-tarbijakaitse-kohta/"
      }
    ],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "07132cc4-5afc-4edb-9537-7c721ec39b2d",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 2
    },
    "publicResearch": {
      "excerpt": "Ma arvan, et see teema, mida fraktsioon püstitas, on küllaltki oluline.",
      "date": "2026-10-22",
      "source": "https://stenogrammid.riigikogu.ee/202610221000",
      "sourceTitle": "Riigikogu otsuse \"Ettepaneku tegemine Vabariigi Valitsusele töötada välja õpilaste töötamisele maksusoodustused\" eelnõu (940 OE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Rain Epler",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "94ffc777-09a5-4472-bf5d-ce16e78a2341",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 283
    },
    "publicResearch": {
      "excerpt": "Olete ikka peaministrina siin, kuigi teie koalitsioonipartneritest keegi teid toetamas ei olnud.",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211200",
      "sourceTitle": "Eesti majanduse olukord, tuleviku väljavaated",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Peeter Ernits",
    "profileRecorded": true,
    "quote": {
      "text": "Aga küsimus on, kas te arutasite komisjonis, miks selle eelnõuga ei taheta keelata ära puurikanade munade müüki.",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "sourcePublisher": "Riigikogu ametlik stenogramm",
      "context": "Asked a question about selling eggs from caged hens during first reading; does not establish support for a particular solution."
    },
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "f8a770b2-916c-4172-84b3-005ba9906a18",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 645
    },
    "publicResearch": {
      "excerpt": "Aga küsimus on, kas te arutasite komisjonis, miks selle eelnõuga ei taheta keelata ära puurikanade munade müüki.",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "category": "cage_bill_debate",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Named contribution during the first reading of 828 SE. It may be a question, procedural intervention, a cited view or a policy statement; check its context before inferring any position.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Ants Frosch",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "c4e3fc0f-80fb-4a3e-b49e-80045c5253d9",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 34
    },
    "publicResearch": {
      "excerpt": "Nimelt, siin mõni nädal tagasi õnnestus mul teid täiendavalt informeerida sellest, et Kaitsepolitseiameti endine peadirektor oli juba 2023.",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211200",
      "sourceTitle": "Muud küsimused",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Kalle Grünthal",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "db532de2-5abd-4b6d-a82c-2d9a75fd9d18",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 149
    },
    "publicResearch": {
      "excerpt": "Täna ju võib öelda seda, sest me menetleme loomade heaolu.",
      "date": "2026-10-14",
      "source": "https://stenogrammid.riigikogu.ee/202610141400",
      "sourceTitle": "Loomakaitseseaduse ja veterinaarseaduse muutmise seaduse eelnõu (899 SE) teine lugemine",
      "category": "animal_welfare",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Remarks concern another animal-welfare issue or animal-protection bill; not a documented position on laying-hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Andre Hanimägi",
    "profileRecorded": true,
    "quote": {
      "text": "Mina olen aru saanud, et ka Euroopa Liidu siseselt on ikkagi võimalik näiteks puurikanade munasid riigiti keelata, nende müüki keelata, kui on põhjendatud argument, …",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "sourcePublisher": "Riigikogu ametlik stenogramm",
      "context": "Question about whether import/sales restrictions could be imposed within EU law; sentence truncated by excerpt limit."
    },
    "actions": [
      {
        "kind": "initiated970",
        "date": "2026-06-17",
        "source": "https://www.riigikogu.ee/pressiteated/muu-pressiteade-et/menetlusse-voeti-eelnou-tarbijakaitse-kohta/"
      }
    ],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "80f542c1-393a-46e2-9fca-99948e59850d",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 176
    },
    "publicResearch": {
      "excerpt": "Mina olen aru saanud, et ka Euroopa Liidu siseselt on ikkagi võimalik näiteks puurikanade munasid riigiti keelata, nende müüki keelata, kui on põhjendatud argument, …",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "category": "cage_bill_debate",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Named contribution during the first reading of 828 SE. It may be a question, procedural intervention, a cited view or a policy statement; check its context before inferring any position.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Anti Haugas",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "07003549-aa42-4764-8bdd-cab06cb94a92",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 28
    },
    "publicResearch": {
      "excerpt": "Mina igal juhul avaldan tunnustust ka Võru inimeste poolt, sest viimastel aastatel, kes on Võrus käinud, on näinud, et linn on ikkagi väga-väga palju …",
      "date": "2026-10-22",
      "source": "https://stenogrammid.riigikogu.ee/202610221000",
      "sourceTitle": "Taristuministri 2026. aasta ettekanne riigi pikaajalise arengustrateegia \"Eesti 2035\" elluviimisest",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Helle-Moonika Helme",
    "profileRecorded": true,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "f4e5d00e-19d1-428a-ba5e-5ce9ae4ef2c2",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 300
    },
    "publicResearch": {
      "excerpt": "Avalikkusele on jäänudki mulje, et põllumajandus- ja regionaalminister on asunud pigem PTA ametnike tegevust õigustama, mitte uurima, kas nende tegevus vastas seadusele, loomakaitse põhimõtetele …",
      "date": "2026-01-28",
      "source": "https://stenogrammid.riigikogu.ee/202601281200",
      "sourceTitle": "Olukord riigis",
      "category": "animal_welfare",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Remarks concern another animal-welfare issue or animal-protection bill; not a documented position on laying-hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Mart Helme",
    "profileRecorded": true,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "4b96f3e5-af5e-41ce-86c9-3fdee3ce51da",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 263
    },
    "publicResearch": {
      "excerpt": "No see oli puhas demagoogia, mida me kuulsime praegu Seedrile vastuseks siin.",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211200",
      "sourceTitle": "Julgeolek",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Martin Helme",
    "profileRecorded": true,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "98008392-64a2-4429-8a41-fb051823e402",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 231
    },
    "publicResearch": {
      "excerpt": "Midagi siin piiksuvad puurikanadest ja ma ei tea mis maksuasjadest, aga põhimõtteliselt hoiate ju võimul seda kampa.",
      "date": "2026-10-19",
      "source": "https://stenogrammid.riigikogu.ee/202610191500",
      "sourceTitle": "34 Riigikogu liikme kirjalik nõue umbusalduse avaldamiseks Vabariigi Valitsusele",
      "category": "laying_hen_cages",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Mentions hen cages in a public statement, potentially as an example or in another debate. Not automatically evidence of a position on 828 SE or 970 SE.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Lauri Hussar",
    "profileRecorded": true,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "64c0141f-371b-4520-8a50-09e65231f775",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 3660
    },
    "publicResearch": {
      "excerpt": "Järgmine päevakorrapunkt on Vabariigi Valitsuse algatatud karistusseadustiku, loomakaitseseaduse ja väärteomenetluse seadustiku muutmise seaduse eelnõu 1009 esimene lugemine.",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211400",
      "sourceTitle": "Karistusseadustiku, loomakaitseseaduse ja väärteomenetluse seadustiku muutmise seaduse eelnõu (1009 SE) esimene lugemine",
      "category": "animal_welfare",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Remarks concern another animal-welfare issue or animal-protection bill; not a documented position on laying-hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Diana Ingerainen",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "8946b072-80c5-436e-95b2-41f928a7c636",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 77
    },
    "publicResearch": {
      "excerpt": "Andrei andis ülevaate, nii nagu praegu ka Lauri, ja siis komisjon natukene arutles asja üle.",
      "date": "2026-10-22",
      "source": "https://stenogrammid.riigikogu.ee/202610221000",
      "sourceTitle": "Riigikogu otsuse \"Ettepaneku tegemine Vabariigi Valitsusele töötada välja õpilaste töötamisele maksusoodustused\" eelnõu (940 OE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Züleyxa Izmailova",
    "profileRecorded": true,
    "quote": {
      "text": "Valitsuse eelnõu toppab juba möödunud aasta sügisest saati ja pole isegi riigikogusse jõudnud.",
      "date": "2026-05-21",
      "source": "https://www.sotsid.ee/sotsiaaldemokraadid-kusivad-peaministrilt-miks-valitsus-ei-liigu-edasi-kanade-puurispidamise-lopetamise-eelnouga/",
      "sourceTitle": "Sotsiaaldemokraadid küsivad peaministrilt: miks valitsus ei liigu edasi kanade puurispidamise lõpetamise eelnõuga?",
      "sourcePublisher": "Sotsiaaldemokraadid",
      "sourceAuthor": "Ann-Marii Nergi",
      "context": "Directly attributed in party-published statement; describes government draft delay as of May 2026; does not establish exact current committee stage or current position"
    },
    "actions": [
      {
        "kind": "initiated828",
        "date": "2026-02-19",
        "source": "https://www.riigikogu.ee/tegevus/eelnoud/e5671f5a-d571-4fcb-96d5-cd2afd5734c4/loomakaitseseaduse-muutmise-seadus/"
      },
      {
        "kind": "initiated970",
        "date": "2026-06-17",
        "source": "https://www.riigikogu.ee/pressiteated/muu-pressiteade-et/menetlusse-voeti-eelnou-tarbijakaitse-kohta/"
      }
    ],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "658c9d00-82c9-4161-8314-48ff1d67e3b7",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 133
    },
    "publicResearch": {
      "excerpt": "Ma olen olnud maaelukomisjoni liige ja näinud oma silmaga seal inimesi, kes ei soovi loomade heaolu parandamist, sest nad reaalselt ei hooli nende elusolendite …",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "category": "cage_bill_debate",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Named contribution during the first reading of 828 SE. It may be a question, procedural intervention, a cited view or a policy statement; check its context before inferring any position.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Jüri Jaanson",
    "profileRecorded": true,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "09500870-255e-416d-8eda-f80e9929adda",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 34
    },
    "publicResearch": {
      "excerpt": "Mul on palju küsimusi, aga Rail Baltic pärnakana on ikkagi A ja O.",
      "date": "2026-10-22",
      "source": "https://stenogrammid.riigikogu.ee/202610221000",
      "sourceTitle": "Taristuministri 2026. aasta ettekanne riigi pikaajalise arengustrateegia \"Eesti 2035\" elluviimisest",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Aleksei Jevgrafov",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "0ef9e676-8ee6-481a-ae29-e1ce75af5aaa",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 63
    },
    "publicResearch": {
      "excerpt": "Kuigi planeerimine edeneb, puuduvad endiselt konkreetsed otsused selle kohta, millal maantee ehitamine algab ja kuidas seda rahastatakse.",
      "date": "2026-10-22",
      "source": "https://stenogrammid.riigikogu.ee/202610221000",
      "sourceTitle": "Taristuministri 2026. aasta ettekanne riigi pikaajalise arengustrateegia \"Eesti 2035\" elluviimisest",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Maria Jufereva-Skuratovski",
    "profileRecorded": true,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "a5af5ad0-6e31-443a-9b12-15769d43e784",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 40
    },
    "publicResearch": {
      "excerpt": "Viimsi vallas elavale naisele helistasid kelmid, kes esinesid Telia, Smart-ID, Eesti Panga ja politsei töötajatena.",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211400",
      "sourceTitle": "Võlaõigusseaduse muutmise ja sellega seonduvalt teiste seaduste muutmise seaduse (finantspettuste ennetamine ja tõkestamine) eelnõu (936 SE) kolmas lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Mario Kadastik",
    "profileRecorded": true,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "53141769-f7bb-4995-8d12-5ff0d9c1eca1",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 81
    },
    "publicResearch": {
      "excerpt": "aastal, selle koosseisu alguses oli erinevate organisatsioonide ja loomakaitsjate, loomaarstide ja teistega suur arutelu.",
      "date": "2026-05-20",
      "source": "https://stenogrammid.riigikogu.ee/202605201400",
      "sourceTitle": "Loomakaitseseaduse ja veterinaarseaduse muutmise seaduse eelnõu (899 SE) esimene lugemine",
      "category": "animal_welfare",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Remarks concern another animal-welfare issue or animal-protection bill; not a documented position on laying-hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Raimond Kaljulaid",
    "profileRecorded": true,
    "quote": null,
    "actions": [
      {
        "kind": "initiated828",
        "date": "2026-02-19",
        "source": "https://www.riigikogu.ee/tegevus/eelnoud/e5671f5a-d571-4fcb-96d5-cd2afd5734c4/loomakaitseseaduse-muutmise-seadus/"
      }
    ],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "989194b6-b6cc-4c8f-9e6a-8eb8913d103e",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 29
    },
    "publicResearch": {
      "excerpt": "Eesti erakondadeülene toetus Ukrainale tugineb tegelikult kõige enam Eesti rahva solidaarsusele Ukraina rahvale, mis on ilmnenud selle täiemahulise sissetungi esimesest päevast peale.",
      "date": "2026-09-30",
      "source": "https://stenogrammid.riigikogu.ee/202609301400",
      "sourceTitle": "Riigikogu avalduse \"Ukraina võidu ja Euroopa julgeoleku tagamiseks\" eelnõu (1015 AE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Madis Kallas",
    "profileRecorded": true,
    "quote": {
      "text": "Mul oli au olla selle valdkonna eest vastutav minister kuskil kolm aastat tagasi ja paaril korral ka munatootjate esindajatega kohtuda.",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "sourcePublisher": "Riigikogu ametlik stenogramm",
      "context": "Recalled personal ministerial meetings with egg producers; describes experience, not a clear vote commitment."
    },
    "actions": [
      {
        "kind": "initiated828",
        "date": "2026-02-19",
        "source": "https://www.riigikogu.ee/tegevus/eelnoud/e5671f5a-d571-4fcb-96d5-cd2afd5734c4/loomakaitseseaduse-muutmise-seadus/"
      },
      {
        "kind": "initiated970",
        "date": "2026-06-17",
        "source": "https://www.riigikogu.ee/pressiteated/muu-pressiteade-et/menetlusse-voeti-eelnou-tarbijakaitse-kohta/"
      }
    ],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "c7f4f213-58a3-4b6f-a236-153644653d17",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 219
    },
    "publicResearch": {
      "excerpt": "Mul oli au olla selle valdkonna eest vastutav minister kuskil kolm aastat tagasi ja paaril korral ka munatootjate esindajatega kohtuda.",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "category": "cage_bill_debate",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Named contribution during the first reading of 828 SE. It may be a question, procedural intervention, a cited view or a policy statement; check its context before inferring any position.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Jaanus Karilaid",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "94351dfe-449e-48db-9396-06cf204ce22e",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 76
    },
    "publicResearch": {
      "excerpt": "Vaadates neid eesmärke, ma arvan, et nende teeside vastu, mis on kirja pandud, ei vaidle keegi.",
      "date": "2026-10-22",
      "source": "https://stenogrammid.riigikogu.ee/202610221000",
      "sourceTitle": "Taristuministri 2026. aasta ettekanne riigi pikaajalise arengustrateegia \"Eesti 2035\" elluviimisest",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Ester Karuse",
    "profileRecorded": true,
    "quote": null,
    "actions": [
      {
        "kind": "initiated828",
        "date": "2026-02-19",
        "source": "https://www.riigikogu.ee/tegevus/eelnoud/e5671f5a-d571-4fcb-96d5-cd2afd5734c4/loomakaitseseaduse-muutmise-seadus/"
      }
    ],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "d5c54f88-dff3-486b-aac6-2cd124577d38",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 37
    },
    "publicResearch": {
      "excerpt": "Hea ettekandja, tänan samuti selle olulise teema püstitamise eest ja selle ettekande eest!",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211400",
      "sourceTitle": "Riigikogu otsuse \"Ettepaneku tegemine Vabariigi Valitsusele töötada välja meetmed laste ja noorte vaimse tervise abi kättesaadavuse parandamiseks ning lapsevanemate toetamiseks nutiseadmete ja sotsiaalmeedia kasutuse piiramisel\" eelnõu (977 OE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Liina Kersna",
    "profileRecorded": true,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "a12ffc5c-0809-46cb-abc4-cc99a7fa3f60",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 67
    },
    "publicResearch": {
      "excerpt": "Esimesel arutelul minister tutvustas eelnõu nii, nagu ta praegu teile seda kenasti tutvustas, aga siis tõstatas nõunik Kristel Möller, õigusnõunik, ka teema, mis puudutab …",
      "date": "2026-10-13",
      "source": "https://stenogrammid.riigikogu.ee/202610131000",
      "sourceTitle": "Alusharidusseaduse muutmise seaduse eelnõu (937 SE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Tanel Kiik",
    "profileRecorded": true,
    "quote": {
      "text": "Minu meelest see muudatus, mida siin välja pakutakse, ei aita mitte ainult loomade ja lindude heaolu [tagada], ei aita meie tarbijat, vaid tegelikult annab …",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "sourcePublisher": "Riigikogu ametlik stenogramm",
      "context": "Framed potential effects of the bill on welfare and producers, within first-reading remarks; excerpt is truncated."
    },
    "actions": [
      {
        "kind": "initiated828",
        "date": "2026-02-19",
        "source": "https://www.riigikogu.ee/tegevus/eelnoud/e5671f5a-d571-4fcb-96d5-cd2afd5734c4/loomakaitseseaduse-muutmise-seadus/"
      }
    ],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "561abe91-76eb-45f3-90b0-efa94c663689",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 278
    },
    "publicResearch": {
      "excerpt": "Minu meelest see muudatus, mida siin välja pakutakse, ei aita mitte ainult loomade ja lindude heaolu [tagada], ei aita meie tarbijat, vaid tegelikult annab …",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "category": "cage_bill_debate",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Named contribution during the first reading of 828 SE. It may be a question, procedural intervention, a cited view or a policy statement; check its context before inferring any position.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Meelis Kiili",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "7251e077-1964-4f2b-9dba-349dc127b56e",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 21
    },
    "publicResearch": {
      "excerpt": "Needsamad diskussioonid ja vaidlused peavad viima meid lõppude lõpuks ikkagi sellisesse olukorda, mis tagab meie riigi kaitse ja kõige parema toime.",
      "date": "2026-10-19",
      "source": "https://stenogrammid.riigikogu.ee/202610191500",
      "sourceTitle": "Arupärimine Aidu tuulepargi arendamise kokkuleppe ja sellest tulenevate riigikaitseliste riskide kohta (nr 1062)",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Signe Kivi",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "71bdc9b2-841d-408f-8ace-909e8c11d7d5",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 19
    },
    "publicResearch": {
      "excerpt": "Minu meelest on tegemist väga olulise valdkonnaga ja tegelikult ka sisuka avaldusega.",
      "date": "2026-10-14",
      "source": "https://stenogrammid.riigikogu.ee/202610141400",
      "sourceTitle": "Riigikogu avalduse \"Kõrghariduse toetuseks\" eelnõu (894 AE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Ando Kiviberg",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "4e2e1744-16b5-4d88-a08a-cf250c776956",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 131
    },
    "publicResearch": {
      "excerpt": "Ma annan lühikese ülevaate selle kohta, mis toimus antud eelnõu arutusel teisipäeval, 13.",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211400",
      "sourceTitle": "Pühade ja tähtpäevade seaduse ning Eesti lipu seaduse muutmise seaduse eelnõu (939 SE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Toomas Kivimägi",
    "profileRecorded": true,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "906f1a0a-0000-4a96-866c-b30f2b6adc49",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 4009
    },
    "publicResearch": {
      "excerpt": "Korra oli keegi kohvitassiga, võib-olla oli see teema, aga sellest oleks ju mööda või üle saanud.",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "category": "cage_bill_debate",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Named contribution during the first reading of 828 SE. It may be a question, procedural intervention, a cited view or a policy statement; check its context before inferring any position.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Mait Klaassen",
    "profileRecorded": true,
    "quote": {
      "text": "Kanade puuris pidamist ei poolda ka sellelsamal teemal omal ajal kandidaadikraadi kaitsnud Renaldo Mändmets.",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "sourcePublisher": "Riigikogu ametlik stenogramm",
      "context": "Cited another researcher's view about caged-hen housing; not automatically the MP's personal position."
    },
    "actions": [
      {
        "kind": "spoke828",
        "date": "2026-04-22",
        "source": "https://www.riigikogu.ee/pressiteated/riigikogus-labis-munakanade-puurispidamist-keelav-eelnou-esimese-lugemise/"
      }
    ],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "122e850b-5e6b-41f6-8b91-830ca8de8450",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 41
    },
    "publicResearch": {
      "excerpt": "Kanade puuris pidamist ei poolda ka sellelsamal teemal omal ajal kandidaadikraadi kaitsnud Renaldo Mändmets.",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "category": "cage_bill_debate",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Named contribution during the first reading of 828 SE. It may be a question, procedural intervention, a cited view or a policy statement; check its context before inferring any position.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Aivar Kokk",
    "profileRecorded": true,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "2dcb35ed-acbc-4bcf-9e9d-9da681842d6d",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 426
    },
    "publicResearch": {
      "excerpt": "Ma tsiteerin ikkagi tänast rahandusministrit, kes ütles väga selgelt juba järgmise aasta riigieelarve kohta, kui me rääkisime kuludest ja ridadest, et see on sulitegemine.",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211400",
      "sourceTitle": "Riigi 2026. aasta teise lisaeelarve seaduse eelnõu (1019 SE) teine lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Rene Kokk",
    "profileRecorded": true,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "694b084f-e151-4f7e-8a5c-2664a40cee7a",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 104
    },
    "publicResearch": {
      "excerpt": "Sa oled täna nüüd päris tugevalt siin rääkinud, kui hästi kõik on.",
      "date": "2026-10-19",
      "source": "https://stenogrammid.riigikogu.ee/202610191500",
      "sourceTitle": "34 Riigikogu liikme kirjalik nõue umbusalduse avaldamiseks Vabariigi Valitsusele",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Andrei Korobeinik",
    "profileRecorded": true,
    "quote": {
      "text": "Puurikanade eelnõu saatus ei ole nii roosiline.",
      "date": "2026-10-14",
      "source": "https://stenogrammid.riigikogu.ee/202610141400",
      "sourceTitle": "Loomakaitseseaduse ja veterinaarseaduse muutmise seaduse eelnõu (899 SE) teine lugemine",
      "sourcePublisher": "Riigikogu ametlik stenogramm",
      "context": "14 October debate remark that the cage-hen bill's progress was difficult; no inference on every provision."
    },
    "actions": [
      {
        "kind": "initiated828",
        "date": "2026-02-19",
        "source": "https://www.riigikogu.ee/tegevus/eelnoud/e5671f5a-d571-4fcb-96d5-cd2afd5734c4/loomakaitseseaduse-muutmise-seadus/"
      },
      {
        "kind": "initiated970",
        "date": "2026-06-17",
        "source": "https://www.riigikogu.ee/pressiteated/muu-pressiteade-et/menetlusse-voeti-eelnou-tarbijakaitse-kohta/"
      },
      {
        "kind": "spoke828",
        "date": "2026-04-22",
        "source": "https://www.riigikogu.ee/pressiteated/riigikogus-labis-munakanade-puurispidamist-keelav-eelnou-esimese-lugemise/"
      }
    ],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "a62b7530-a1fb-4c0b-b041-f10c2cfaa31a",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 113
    },
    "publicResearch": {
      "excerpt": "Mul kindlasti ei lähe nii kaua aega, aga ma tuletan teile meelde, et juba aasta pärast toimuvad Riigikogu valimised.",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "category": "cage_bill_debate",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Named contribution during the first reading of 828 SE. It may be a question, procedural intervention, a cited view or a policy statement; check its context before inferring any position.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Anastassia Kovalenko-Kõlvart",
    "profileRecorded": true,
    "quote": {
      "text": "Loomad ja linnud tunnevad valu, stressi ja muid emotsioone sarnaselt inimestega ning kui inimene seda valu ja piina põhjustab, peab inimene ka selle eest vastutama.",
      "date": "2024-01-18",
      "source": "https://www.err.ee/1609225731/galerii-riigikogu-esimees-sai-petitsiooni-kanade-puurispidamise-keelustamiseks",
      "sourceTitle": "Galerii: riigikogu esimees sai petitsiooni kanade puurispidamise keelustamiseks",
      "sourcePublisher": "ERR",
      "context": "Directly attributed by ERR to the chair of the parliamentary animal-protection group during the presentation of the cage-hen petition; does not establish her 2026 bill preferences."
    },
    "actions": [
      {
        "kind": "initiated828",
        "date": "2026-02-19",
        "source": "https://www.riigikogu.ee/tegevus/eelnoud/e5671f5a-d571-4fcb-96d5-cd2afd5734c4/loomakaitseseaduse-muutmise-seadus/"
      },
      {
        "kind": "initiated970",
        "date": "2026-06-17",
        "source": "https://www.riigikogu.ee/pressiteated/muu-pressiteade-et/menetlusse-voeti-eelnou-tarbijakaitse-kohta/"
      }
    ],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "04510d7c-b12a-48aa-8402-80b0efb114a6",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 215
    },
    "publicResearch": {
      "excerpt": "Sellele loomakaitseseaduse eelnõule, sellele kobar- ja praakeelnõule tuleb kindlalt vastu hääletada.",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211400",
      "sourceTitle": "Loomakaitseseaduse ja veterinaarseaduse muutmise seaduse eelnõu (899 SE) kolmas lugemine",
      "category": "animal_welfare",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Remarks concern another animal-welfare issue or animal-protection bill; not a documented position on laying-hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Eerik-Niiles Kross",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "b2226516-4cd4-4471-b93b-696c40b7a9e2",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 14
    },
    "publicResearch": {
      "excerpt": "Riigikogu enamuse poolt on meil esitatud ja esimesel lugemisel Kaitseliidu seaduse ja kaitseväeteenistuse seaduse muutmise seaduse eelnõu.",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211400",
      "sourceTitle": "Kaitseliidu seaduse ja kaitseväeteenistuse seaduse muutmise seaduse (välisriigi kodanike riigikaitsesse kaasamine) eelnõu (962 SE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Urmas Kruuse",
    "profileRecorded": true,
    "quote": {
      "text": "Seetõttu ei pea me praeguses olukorras vajalikuks täiendavat seadusandlikku sekkumist, vaid toetame jätkuvat dialoogi ja koostööd.",
      "date": "2025-11-10",
      "source": "https://www.riigikogu.ee/pressiteated/maaelukomisjon-arutas-eesti-pollumajandus-kaubanduskoja-poordumist-valitsuse-ja-maaelukomisjoni-poole/",
      "sourceTitle": "Maaelukomisjon arutas Eesti Põllumajandus-Kaubanduskoja pöördumist valitsuse ja maaelukomisjoni poole",
      "sourcePublisher": "Riigikogu",
      "context": "Spoken as Rural Affairs Committee chair, summarising committee position in 2025, NOT automatically his present individual 2026 vote"
    },
    "actions": [
      {
        "kind": "committee",
        "date": "2026-09-28",
        "detail": "Chair; lead-committee representative for 828 SE",
        "source": "https://www.riigikogu.ee/riigikogu/komisjonid/maaelukomisjon/"
      }
    ],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "4a332fbb-be05-4cb2-b6a0-5916eb40fe89",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 100
    },
    "publicResearch": {
      "excerpt": "Ka meie arutelu hetkel kahjuks näitavad viimased uuringud, et kui vahepeal kukkus statistikas konkreetne [puurikanade munade] ostmine kaubanduskettidest kuskile 60% peale, siis praegu on …",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "category": "cage_bill_debate",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Named contribution during the first reading of 828 SE. It may be a question, procedural intervention, a cited view or a policy statement; check its context before inferring any position.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Leo Kunnas",
    "profileRecorded": true,
    "quote": null,
    "actions": [
      {
        "kind": "initiated970",
        "date": "2026-06-17",
        "source": "https://www.riigikogu.ee/pressiteated/muu-pressiteade-et/menetlusse-voeti-eelnou-tarbijakaitse-kohta/"
      }
    ],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "fd2d1dd5-ff19-445e-b190-28aabb07763a",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 15
    },
    "publicResearch": {
      "excerpt": "Küsisin täna siin saalis peaminister Kristen Michalilt, kas Riigi Kaitseinvesteeringute Keskus peaks riiulifirmadega sõlmitud lepingud ära lõpetama.",
      "date": "2026-10-19",
      "source": "https://stenogrammid.riigikogu.ee/202610191500",
      "sourceTitle": "Arupärimine \"Varitseva õhuründemoona raamlepingu\" kohta (nr 1046)",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Helmen Kütt",
    "profileRecorded": true,
    "quote": {
      "text": "On täiesti selge, et need inimesed, kes on näinud, millistes mitteelamisväärsetes tingimustes elavad puurikanad, saavad ka aru, et nende kanade munad ei ole kindlasti …",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "sourcePublisher": "Riigikogu ametlik stenogramm",
      "context": "Discussed housing conditions for caged laying hens during the debate; excerpt is truncated."
    },
    "actions": [
      {
        "kind": "initiated828",
        "date": "2026-02-19",
        "source": "https://www.riigikogu.ee/tegevus/eelnoud/e5671f5a-d571-4fcb-96d5-cd2afd5734c4/loomakaitseseaduse-muutmise-seadus/"
      },
      {
        "kind": "initiated970",
        "date": "2026-06-17",
        "source": "https://www.riigikogu.ee/pressiteated/muu-pressiteade-et/menetlusse-voeti-eelnou-tarbijakaitse-kohta/"
      }
    ],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "1d0b281d-b769-4e94-8c67-faa1cb1b1395",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 209
    },
    "publicResearch": {
      "excerpt": "On täiesti selge, et need inimesed, kes on näinud, millistes mitteelamisväärsetes tingimustes elavad puurikanad, saavad ka aru, et nende kanade munad ei ole kindlasti …",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "category": "cage_bill_debate",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Named contribution during the first reading of 828 SE. It may be a question, procedural intervention, a cited view or a policy statement; check its context before inferring any position.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Kalle Laanet",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "31eee189-0019-469f-8469-7da564bf1af9",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 13
    },
    "publicResearch": {
      "excerpt": "Kelle kanda see jääb kahe erandi puhul, just nimelt valitsuse [otsustatava erandi] ja teise erandi puhul, mis puudutab ka Riigikogu?",
      "date": "2026-10-01",
      "source": "https://stenogrammid.riigikogu.ee/202610011000",
      "sourceTitle": "Kriminaalmenetluse seadustiku, väärteomenetluse seadustiku, elektroonilise side seaduse ja teiste seaduste muutmise seaduse (sideandmete säilitamine ja kasutamine) eelnõu (1007 SE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Lauri Laats",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "1839253a-aec0-4019-995a-1c031db8fd10",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 527
    },
    "publicResearch": {
      "excerpt": "Täna hakkame Keskerakonna fraktsiooni poolt menetlema ühte eelnõu, mis on tegelikult Riigikogu otsuse eelnõu, väga oluline eelnõu, puudutab see meie noori ja tööhõivet ja …",
      "date": "2026-10-22",
      "source": "https://stenogrammid.riigikogu.ee/202610221000",
      "sourceTitle": "Riigikogu otsuse \"Ettepaneku tegemine Vabariigi Valitsusele töötada välja õpilaste töötamisele maksusoodustused\" eelnõu (940 OE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Hanah Lahe",
    "profileRecorded": true,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "d18cee4c-7b30-405f-96f2-4ab6f81efaf2",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 36
    },
    "publicResearch": {
      "excerpt": "Teil on siin eelnõus ettepanek, et selle eelnõu vastuvõtmisel luuakse lapsevanematele üleriigiline praktiline nõuandeliin või tugitelefon ja koostatakse veebipõhised juhendmaterjalid.",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211400",
      "sourceTitle": "Riigikogu otsuse \"Ettepaneku tegemine Vabariigi Valitsusele töötada välja meetmed laste ja noorte vaimse tervise abi kättesaadavuse parandamiseks ning lapsevanemate toetamiseks nutiseadmete ja sotsiaalmeedia kasutuse piiramisel\" eelnõu (977 OE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Alar Laneman",
    "profileRecorded": true,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "563f86fd-db45-4046-b8ed-b66e5a2aec45",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 13
    },
    "publicResearch": {
      "excerpt": "Läheneva võidupüha vaimus on kohane teha midagi olulist meie riigikaitsjate jaoks.",
      "date": "2026-06-17",
      "source": "https://stenogrammid.riigikogu.ee/202606171400",
      "sourceTitle": "Istungi rakendamine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Maris Lauri",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "315ea785-8f59-40e5-a158-3de8b908572f",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 17
    },
    "publicResearch": {
      "excerpt": "Ja neid tuli mitmeid, kusjuures osa arvamusi oli nii, et hiljem tulid ka teised arvamused.",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211400",
      "sourceTitle": "Maksukorralduse seaduse, rahapesu ja terrorismi rahastamise tõkestamise seaduse ning tsiviilkohtumenetluse seadustiku ja täitemenetluse seadustiku rakendamise seaduse muutmise seaduse eelnõu (924 SE) teine lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Mihkel Lees",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "1c173f0d-6c5e-445a-934f-32e7edf903db",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 43
    },
    "publicResearch": {
      "excerpt": "No eks tegelikult neist valitsuse tegevustest võiks ju rääkida päris pikalt.",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211400",
      "sourceTitle": "Riigikogu otsuse \"Ettepaneku tegemine Vabariigi Valitsusele töötada välja meetmed laste ja noorte vaimse tervise abi kättesaadavuse parandamiseks ning lapsevanemate toetamiseks nutiseadmete ja sotsiaalmeedia kasutuse piiramisel\" eelnõu (977 OE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Tõnis Lukas",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "9a8a55b8-c946-47a2-9e17-9978c3fd23f8",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 123
    },
    "publicResearch": {
      "excerpt": "Meil on kõlanud siin mitmed hüüatused, et regionaalpoliitika ja tasakaalu huvides viiakse Tallinnast töökohti maakonnakeskustesse.",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211200",
      "sourceTitle": "Muud küsimused",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Irja Lutsar",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "3febb869-f443-4aba-908e-7c0c30f8c4dd",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 104
    },
    "publicResearch": {
      "excerpt": "Lauri, sa jätad mulle niisuguse vana väsinud mehe mulje, kes kõigest ja kõigist heietab.",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211400",
      "sourceTitle": "Perehüvitise seaduse muutmise seaduse eelnõu (959 SE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Lauri Läänemets",
    "profileRecorded": true,
    "quote": null,
    "actions": [
      {
        "kind": "initiated828",
        "date": "2026-02-19",
        "source": "https://www.riigikogu.ee/tegevus/eelnoud/e5671f5a-d571-4fcb-96d5-cd2afd5734c4/loomakaitseseaduse-muutmise-seadus/"
      },
      {
        "kind": "initiated970",
        "date": "2026-06-17",
        "source": "https://www.riigikogu.ee/pressiteated/muu-pressiteade-et/menetlusse-voeti-eelnou-tarbijakaitse-kohta/"
      }
    ],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "d557812c-971d-415b-827d-aa6a382ec6ef",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 200
    },
    "publicResearch": {
      "excerpt": "Kolleeg Aller küsis ennem siin küsimuse, kuidas me siis nüüd teeme seaduse ega usalda ettevõtjaid.",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "category": "cage_bill_debate",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Named contribution during the first reading of 828 SE. It may be a question, procedural intervention, a cited view or a policy statement; check its context before inferring any position.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Mart Maastik",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "29068268-672d-451a-a08a-5727ec4300f4",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 148
    },
    "publicResearch": {
      "excerpt": "Kui rääkida loomade heaolust ja näiteks ka puurikanadest, siis sotsiaaldemokraadid olid väga mures.",
      "date": "2026-04-23",
      "source": "https://stenogrammid.riigikogu.ee/202604231000",
      "sourceTitle": "Regionaal- ja põllumajandusministri 2026. a ettekanne riigi pikaajalise arengustrateegia \"Eesti 2035\" elluviimisest",
      "category": "laying_hen_cages",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Mentions hen cages in a public statement, potentially as an example or in another debate. Not automatically evidence of a position on 828 SE or 970 SE.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Tiit Maran",
    "profileRecorded": true,
    "quote": {
      "text": "Aeg on ammu küps viia see hea tahe ja kümnete tuhandete inimeste soov ka seadusesse",
      "date": "2026-02-19",
      "source": "https://www.riigikogu.ee/pressiteated/18-riigikogu-liiget-esitas-eeln-u-kanade-puurispidamise-keelustamiseks/",
      "sourceTitle": "18 riigikogu liiget esitas eelnõu kanade puurispidamise keelustamiseks",
      "sourcePublisher": "Riigikogu",
      "context": "Direct public statement urging the cage-ban commitment to become legislation"
    },
    "actions": [
      {
        "kind": "initiated828",
        "date": "2026-02-19",
        "source": "https://www.riigikogu.ee/tegevus/eelnoud/e5671f5a-d571-4fcb-96d5-cd2afd5734c4/loomakaitseseaduse-muutmise-seadus/"
      },
      {
        "kind": "initiated970",
        "date": "2026-06-17",
        "source": "https://www.riigikogu.ee/pressiteated/muu-pressiteade-et/menetlusse-voeti-eelnou-tarbijakaitse-kohta/"
      },
      {
        "kind": "spoke828",
        "date": "2026-04-22",
        "source": "https://www.riigikogu.ee/pressiteated/riigikogus-labis-munakanade-puurispidamist-keelav-eelnou-esimese-lugemise/"
      }
    ],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "9d863d49-8bfb-4314-bd3c-cfa143f518c8",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 76
    },
    "publicResearch": {
      "excerpt": "Muuseas, protsentuaalselt on vaid Maltas rohkem puurikanu kui Eestis.",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "category": "cage_bill_debate",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Named contribution during the first reading of 828 SE. It may be a question, procedural intervention, a cited view or a policy statement; check its context before inferring any position.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Eero Merilind",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "7d6b0605-e425-41c8-9a53-3b92b81f21b1",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 30
    },
    "publicResearch": {
      "excerpt": "Diana Ingerainen küsis, millisel õiguslikul tasandil sätestatakse teenuse korraldust ja patsiendi teekonda käsitlevaid nõudeid.",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211400",
      "sourceTitle": "Tervishoiuteenuste korraldamise seaduse ja Kaitseväe korralduse seaduse muutmise seaduse (tegevusloa ja registreeringuga seotud muudatused) eelnõu (1000 SE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Andres Metsoja",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "d5f3dddb-d809-448a-a94f-adbf208e408a",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 56
    },
    "publicResearch": {
      "excerpt": "Jõukohane riik ei ole alati ei valitsejatele ega ka Riigikogu saalile väga populaarne teema, sest poliitikutel on kombeks lubada ja ettevõtjad kratsivad kukalt, et …",
      "date": "2026-10-20",
      "source": "https://stenogrammid.riigikogu.ee/202610201000",
      "sourceTitle": "2027. aasta riigieelarve seaduse eelnõu (1037 SE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Marko Mihkelson",
    "profileRecorded": true,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "58be6531-1f4b-4b0b-9c21-92566a40ae8b",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 20
    },
    "publicResearch": {
      "excerpt": "67 Riigikogu liikme poolt algatatud avalduse eelnõu \"Ukraina võidu ja Euroopa julgeoleku tagamiseks\" on äärmiselt ajakohane.",
      "date": "2026-09-30",
      "source": "https://stenogrammid.riigikogu.ee/202609301400",
      "sourceTitle": "Riigikogu avalduse \"Ukraina võidu ja Euroopa julgeoleku tagamiseks\" eelnõu (1015 AE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Tõnis Mölder",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "d7d9e4d7-699e-4038-83c3-d13369f644c9",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 56
    },
    "publicResearch": {
      "excerpt": "septembril andis samamoodi eelnõu algataja Toomas Uibo sellest teemast meile ülevaate.",
      "date": "2026-10-01",
      "source": "https://stenogrammid.riigikogu.ee/202609301400",
      "sourceTitle": "Liiklusseaduse muutmise seaduse eelnõu (911 SE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Hanno Pevkur",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "cf42a56a-b91a-4a51-913b-a489305326a2",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 0
    },
    "publicResearch": {
      "excerpt": "Eesti on tugevam, Eesti on paremini relvastatud, Eesti on paremini kaitstud ja Eesti pole kunagi oma liitlastega nii tihedalt seotud olnud kui praegu.",
      "date": "2026-09-15",
      "source": "https://www.riigikogu.ee/pressiteated/kaitseminister-hanno-pevkur-esines-riigikogu-ees-poliitilise-avaldusega/",
      "sourceTitle": "Kaitseminister Hanno Pevkuri poliitiline avaldus riigikaitse arengute kohta",
      "category": "other_official_statement",
      "verifiedAttribution": "official_published_individual_statement",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "manually_source_checked"
    }
  },
  {
    "name": "Heljo Pikhof",
    "profileRecorded": true,
    "quote": {
      "text": "Kui me kasse ja koeri niimoodi kohtleks, nagu me täna puurikanu kohtleme, siis sellele järgneks karistus.",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "sourcePublisher": "Riigikogu ametlik stenogramm",
      "context": "Direct comparison with the treatment of cats and dogs during the first reading."
    },
    "actions": [
      {
        "kind": "initiated828",
        "date": "2026-02-19",
        "source": "https://www.riigikogu.ee/tegevus/eelnoud/e5671f5a-d571-4fcb-96d5-cd2afd5734c4/loomakaitseseaduse-muutmise-seadus/"
      },
      {
        "kind": "initiated970",
        "date": "2026-06-17",
        "source": "https://www.riigikogu.ee/pressiteated/muu-pressiteade-et/menetlusse-voeti-eelnou-tarbijakaitse-kohta/"
      }
    ],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "b5922bb2-56bb-4de6-a7e1-754553191c27",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 106
    },
    "publicResearch": {
      "excerpt": "Te küll mainisite seda, et komisjonis on olnud sellel teemal kaks istungit, ja ütlesite ka seda, et puurivabadele süsteemidele üleminek läheb maksma umbes 50 …",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "category": "cage_bill_debate",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Named contribution during the first reading of 828 SE. It may be a question, procedural intervention, a cited view or a policy statement; check its context before inferring any position.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Õnne Pillak",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "8d9daaeb-dbaf-4887-8311-881b29bedfa9",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 77
    },
    "publicResearch": {
      "excerpt": "See teema on, ma arvan, meil kõigil hinge peal ja kunagi ei saa liiga palju teha.",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211400",
      "sourceTitle": "Riigikogu otsuse \"Ettepaneku tegemine Vabariigi Valitsusele töötada välja meetmed laste ja noorte vaimse tervise abi kättesaadavuse parandamiseks ning lapsevanemate toetamiseks nutiseadmete ja sotsiaalmeedia kasutuse piiramisel\" eelnõu (977 OE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Siim Pohlak",
    "profileRecorded": true,
    "quote": null,
    "actions": [
      {
        "kind": "committee",
        "date": "2026-09-28",
        "detail": "Deputy Chair",
        "source": "https://www.riigikogu.ee/riigikogu/komisjonid/maaelukomisjon/"
      }
    ],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "d8b9f165-31aa-46a4-8dbd-964cbe89cfb8",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 86
    },
    "publicResearch": {
      "excerpt": "Ka Eesti inimesed näevad viimastel aastatel, kuidas ravijärjekorrad pikenevad, pidevalt ka perearstid kurdavad, et tegelikult nad ei tule toime ka sisserändajate vooluga.",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211400",
      "sourceTitle": "Tervishoiuteenuste korraldamise seaduse ja Kaitseväe korralduse seaduse muutmise seaduse (tegevusloa ja registreeringuga seotud muudatused) eelnõu (1000 SE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Anti Poolamets",
    "profileRecorded": true,
    "quote": {
      "text": "Mis tänast teemat puudutab, siis need, kes sooviksid õiglast lähenemist antud teemal, peaks ju mõtlema hoopis sellele, et puurikanade munade müümine tuleks keelata.",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "sourcePublisher": "Riigikogu ametlik stenogramm",
      "context": "Raised the possible ban on selling cage eggs; this is an individual debate comment, not a recorded vote."
    },
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "bc9c1725-2fd8-4f54-a0e3-58b87e9dfe1f",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 242
    },
    "publicResearch": {
      "excerpt": "Mis tänast teemat puudutab, siis need, kes sooviksid õiglast lähenemist antud teemal, peaks ju mõtlema hoopis sellele, et puurikanade munade müümine tuleks keelata.",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "category": "cage_bill_debate",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Named contribution during the first reading of 828 SE. It may be a question, procedural intervention, a cited view or a policy statement; check its context before inferring any position.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Evelin Poolamets",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "afc264da-dc7d-4885-a971-0e645995e6de",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 238
    },
    "publicResearch": {
      "excerpt": "Tootmissisendite hinnad on järsult kasvanud, rohepöörde nõuded karmistuvad, ÜPP toetusi ähvardab ligi 30% ulatuses kärbe ning samal ajal ujutab siseturu üle odav import, mis …",
      "date": "2026-01-26",
      "source": "https://stenogrammid.riigikogu.ee/202601261500",
      "sourceTitle": "33 Riigikogu liikme esitatud kirjalik nõue umbusalduse avaldamiseks regionaal- ja põllumajandusminister Hendrik Johannes Terrasele",
      "category": "animal_welfare",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Remarks concern another animal-welfare issue or animal-protection bill; not a documented position on laying-hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Henn Põlluaas",
    "profileRecorded": true,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "65b1d8bb-7f45-48f5-b4aa-7ba4ca459824",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 115
    },
    "publicResearch": {
      "excerpt": "Mul on au esitada peaaegu veerandi Riigikogu liikmete nimel arupärimine varitseva õhuründemoona raamlepingu kohta.",
      "date": "2026-10-19",
      "source": "https://stenogrammid.riigikogu.ee/202610191500",
      "sourceTitle": "Arupärimine \"Varitseva õhuründemoona raamlepingu\" kohta (nr 1046)",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Juku-Kalle Raid",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "a5d17c31-61e5-4e45-87b0-5834b6728fe6",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 12
    },
    "publicResearch": {
      "excerpt": "Aga see on ju täiesti ajuvaba, kui keegi vaevleb kuskil ja kiirabi peab ootama Päästeametit.",
      "date": "2026-10-15",
      "source": "https://stenogrammid.riigikogu.ee/202610141400",
      "sourceTitle": "Päästeseaduse ja teiste seaduste muutmise seaduse eelnõu (989 SE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Mati Raidma",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "410c0030-7bcd-4977-85c2-27af3439770f",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 6
    },
    "publicResearch": {
      "excerpt": "Ajaloo huvides on oluline ära markeerida selle eelnõu arvestatavalt pikk ajalugu.",
      "date": "2026-06-02",
      "source": "https://stenogrammid.riigikogu.ee/202606021000",
      "sourceTitle": "Kriisiolukorra ja riigikaitse seaduse eelnõu (668 SE) kolmas lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Reili Rand",
    "profileRecorded": true,
    "quote": {
      "text": "Me tarbijatena saame tegelikult juba täna igaüks teha teadliku valiku ja eelistada jaekettides vabapidamisel kanade mune, aga selle eelnõu üks oluline tahk on tõesti …",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "sourcePublisher": "Riigikogu ametlik stenogramm",
      "context": "Discussed consumer choice and cage-free eggs; the excerpt is truncated and must not be read as full voting intention."
    },
    "actions": [
      {
        "kind": "initiated828",
        "date": "2026-02-19",
        "source": "https://www.riigikogu.ee/tegevus/eelnoud/e5671f5a-d571-4fcb-96d5-cd2afd5734c4/loomakaitseseaduse-muutmise-seadus/"
      },
      {
        "kind": "initiated970",
        "date": "2026-06-17",
        "source": "https://www.riigikogu.ee/pressiteated/muu-pressiteade-et/menetlusse-voeti-eelnou-tarbijakaitse-kohta/"
      }
    ],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "988995d4-3cbe-4ea7-acdd-6222d0b658b1",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 185
    },
    "publicResearch": {
      "excerpt": "Te olete ise rõhutanud, et enamik munatootjaid on juba ise valmis minema vabapidamise peale üle.",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "category": "cage_bill_debate",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Named contribution during the first reading of 828 SE. It may be a question, procedural intervention, a cited view or a policy statement; check its context before inferring any position.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Valdo Randpere",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "966e7ccd-b097-4e49-923c-c8d39dae2d62",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 94
    },
    "publicResearch": {
      "excerpt": "Möödunud nädalal andisid Reformierakonna fraktsioon ja Eesti 200 fraktsioon sisse seaduseelnõu, mis annaks sünnijärgsetele Eesti kodanikele võimaluse omandada ka topeltkodakondsus meile sõbralike riikide kodakondsuste …",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211200",
      "sourceTitle": "Segadus valitsuskabinetis",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Marek Reinaas",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "798de8ee-0587-4543-aa2e-89c3f6c8f914",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 45
    },
    "publicResearch": {
      "excerpt": "septembril toimus majanduskomisjonis istung, kus me arutasime selle eelnõu esimesele lugemisele saatmist Riigikogu saali.",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211400",
      "sourceTitle": "Võlaõigusseaduse ja teiste seaduste muutmise seaduse (uue tarbijakrediidi direktiivi ülevõtmine) eelnõu (947 SE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Urmas Reinsalu",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "a78027e5-2480-49f2-a340-ee88daf92d53",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 418
    },
    "publicResearch": {
      "excerpt": "Loomulikult ei ole see mitte riigi intressikulude maksmine, mis on eraldi rida riigivalitsemise programmi all.",
      "date": "2026-10-20",
      "source": "https://stenogrammid.riigikogu.ee/202610201000",
      "sourceTitle": "2027. aasta riigieelarve seaduse eelnõu (1037 SE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Signe Riisalo",
    "profileRecorded": true,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "0e66e826-df65-4fdd-a098-66a7e9a7c911",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 131
    },
    "publicResearch": {
      "excerpt": "See arutelu oli tingitud asjaolust, et meil on käesoleva aasta 14.",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211400",
      "sourceTitle": "Perehüvitiste seaduse muutmise seaduse eelnõu (1022 SE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Maido Ruusmann",
    "profileRecorded": true,
    "quote": null,
    "actions": [
      {
        "kind": "committee",
        "date": "2026-09-28",
        "detail": "Member",
        "source": "https://www.riigikogu.ee/riigikogu/komisjonid/maaelukomisjon/"
      }
    ],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "d4effc9d-0aee-4450-9926-5246efcda08c",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 5
    },
    "publicResearch": {
      "excerpt": "Selle liiklusseaduse muutmise näol on kahtlemata tegemist majanduslikult kasuliku, keskkonda hoidva ja liiklusohutust suurendava muudatusega.",
      "date": "2026-04-15",
      "source": "https://stenogrammid.riigikogu.ee/202604151400",
      "sourceTitle": "Liiklusseaduse muutmise seaduse eelnõu (798 SE) kolmas lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Stig Rästa",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "knownAs": [
      "Raul-Stig Rästa"
    ],
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "6434e7ab-6aba-4945-9812-e7a2e7c8bf3f",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 8
    },
    "publicResearch": {
      "excerpt": ") Kui me vaatame seda klotsi siin käes, siis siiapoole jääb meil ekraan ja siin taga on sajad miljardid dollarid, sajad tuhanded inimesed, kes …",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211400",
      "sourceTitle": "Riigikogu otsuse \"Ettepaneku tegemine Vabariigi Valitsusele töötada välja meetmed laste ja noorte vaimse tervise abi kättesaadavuse parandamiseks ning lapsevanemate toetamiseks nutiseadmete ja sotsiaalmeedia kasutuse piiramisel\" eelnõu (977 OE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Kersti Sarapuu",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "caea357b-12c0-4069-b53e-89f69f517212",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 9
    },
    "publicResearch": {
      "excerpt": "Vastavalt Riigikontrolli seaduse §-le 5 määrab audiitori Riigikontrolli eelarveaasta tegevuse kontrollimiseks rahanduskomisjoni ettepanekul Riigikogu.",
      "date": "2026-09-30",
      "source": "https://stenogrammid.riigikogu.ee/202609301400",
      "sourceTitle": "Riigikogu otsuse \"Audiitori nimetamine Riigikontrolli 2026.–2028. aasta tegevuse kontrollimiseks\" eelnõu (1014 OE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Helir-Valdor Seeder",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "23161df7-bc1b-442e-b4cd-2d1f37627658",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 216
    },
    "publicResearch": {
      "excerpt": "Minu küsimus puudutab noorte ja eakate kodanike teemat ja on jätk meie eelneva kodakondsuse küsimuse arutelule.",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211200",
      "sourceTitle": "Noored ja eakad",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Andrus Seeme",
    "profileRecorded": true,
    "quote": null,
    "actions": [
      {
        "kind": "committee",
        "date": "2026-09-28",
        "detail": "Member",
        "source": "https://www.riigikogu.ee/riigikogu/komisjonid/maaelukomisjon/"
      }
    ],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "fd57045c-5dde-4c26-bf60-e5c294da0e4c",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 11
    },
    "publicResearch": {
      "excerpt": "septembriks ei laekunud ühtegi muudatusettepanekut Riigikogu liikmetelt, fraktsioonidelt ega teistelt komisjonidelt.",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211400",
      "sourceTitle": "Taimekaitseseaduse muutmise seaduse eelnõu (919 SE) teine lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Priit Sibul",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "8940964b-6bfd-482d-a4f5-53f2cccb149d",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 113
    },
    "publicResearch": {
      "excerpt": "Täna oli siin maja ees [aktsioon] ja ma olen saanud terve nädala kirju eri inimestelt, kes seovad ennast organisatsiooniga, kus toetatakse puurikanade pidamise lõpetamist.",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Erakonnaseaduse ja krediidiasutuste seaduse muutmise seaduse eelnõu (585 SE) teine lugemine",
      "category": "laying_hen_cages",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Mentions hen cages in a public statement, potentially as an example or in another debate. Not automatically evidence of a position on 828 SE or 970 SE.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Pipi-Liis Siemann",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "9035e217-d990-40ca-87ed-54c77653c6d7",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 44
    },
    "publicResearch": {
      "excerpt": "oktoobril teiseks lugemiseks ette Vabariigi Valitsuse algatatud isikut tõendavate dokumentide seaduse muutmise ja sellega seonduvalt teiste seaduste muutmise seaduse eelnõu.",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211400",
      "sourceTitle": "Isikut tõendavate dokumentide seaduse muutmise ja sellega seonduvalt teiste seaduste muutmise seaduse eelnõu (905 SE) teine lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Riina Sikkut",
    "profileRecorded": true,
    "quote": {
      "text": "Kui puurikanade osakaalu vähenemine toimuks iseenesest, siis meil ei oleks seda seadust vaja.",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "sourcePublisher": "Riigikogu ametlik stenogramm",
      "context": "Comment on the necessity of regulation if the proportion of caged hens does not fall by itself."
    },
    "actions": [
      {
        "kind": "initiated828",
        "date": "2026-02-19",
        "source": "https://www.riigikogu.ee/tegevus/eelnoud/e5671f5a-d571-4fcb-96d5-cd2afd5734c4/loomakaitseseaduse-muutmise-seadus/"
      },
      {
        "kind": "initiated970",
        "date": "2026-06-17",
        "source": "https://www.riigikogu.ee/pressiteated/muu-pressiteade-et/menetlusse-voeti-eelnou-tarbijakaitse-kohta/"
      }
    ],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "76c477e6-4b49-4d49-ad7b-a4853182a1da",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 245
    },
    "publicResearch": {
      "excerpt": "Kui puurikanade osakaalu vähenemine toimuks iseenesest, siis meil ei oleks seda seadust vaja.",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "category": "cage_bill_debate",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Named contribution during the first reading of 828 SE. It may be a question, procedural intervention, a cited view or a policy statement; check its context before inferring any position.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Kalev Stoicescu",
    "profileRecorded": true,
    "quote": null,
    "actions": [
      {
        "kind": "initiated828",
        "date": "2026-02-19",
        "source": "https://www.riigikogu.ee/tegevus/eelnoud/e5671f5a-d571-4fcb-96d5-cd2afd5734c4/loomakaitseseaduse-muutmise-seadus/"
      },
      {
        "kind": "initiated970",
        "date": "2026-06-17",
        "source": "https://www.riigikogu.ee/pressiteated/muu-pressiteade-et/menetlusse-voeti-eelnou-tarbijakaitse-kohta/"
      },
      {
        "kind": "committee",
        "date": "2026-09-28",
        "detail": "Member",
        "source": "https://www.riigikogu.ee/riigikogu/komisjonid/maaelukomisjon/"
      }
    ],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "knownAs": [
      "Grigore-Kalev Stoicescu"
    ],
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "987e47c7-929b-4437-9385-fab4f4fd7824",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 57
    },
    "publicResearch": {
      "excerpt": "Kuidas me saaksime paremini julgustada loomakaitseorganisatsioone, et nad ka omavahel saaksid paremini läbi ja oleks suurem kooskõla nende vahel?",
      "date": "2026-10-14",
      "source": "https://stenogrammid.riigikogu.ee/202610141400",
      "sourceTitle": "Loomakaitseseaduse ja veterinaarseaduse muutmise seaduse eelnõu (899 SE) teine lugemine",
      "category": "animal_welfare",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Remarks concern another animal-welfare issue or animal-protection bill; not a documented position on laying-hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Timo Suslov",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "0f9372ee-f108-47f9-9192-82ff84cf3efb",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 18
    },
    "publicResearch": {
      "excerpt": "septembril käesoleval aastal ja mõnevõrra teine ettekandja küll, aga sisu on sama, et Riigikogu liikme palk oleks tema osalemisega seotud.",
      "date": "2026-10-15",
      "source": "https://stenogrammid.riigikogu.ee/202610141400",
      "sourceTitle": "Riigikogu liikme staatuse seaduse muutmise seaduse eelnõu (943 SE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Margit Sutrop",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "ee639cdf-b86c-48b7-9b34-fbba9b83826d",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 71
    },
    "publicResearch": {
      "excerpt": "See teema, mille kohta te praegu ettekande tegite, on ülimalt tähtis ja mulle ka väga südamelähedane.",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211400",
      "sourceTitle": "Riigikogu otsuse \"Ettepaneku tegemine Vabariigi Valitsusele töötada välja meetmed laste ja noorte vaimse tervise abi kättesaadavuse parandamiseks ning lapsevanemate toetamiseks nutiseadmete ja sotsiaalmeedia kasutuse piiramisel\" eelnõu (977 OE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Andres Sutt",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "8e9879fd-2967-45ca-892b-42e927b22d75",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 0
    },
    "publicResearch": {
      "excerpt": "Kliimapoliitika on konkurentsivõimepoliitika, kliimapoliitika on julgeolekupoliitika.",
      "date": "2026-04-16",
      "source": "https://www.valitsus.ee/uudised/valitsuse-pressikonverents-16-aprillil-2026",
      "sourceTitle": "Valitsuse pressikonverents: Euroopa Liidu kliimapoliitika",
      "category": "other_official_statement",
      "verifiedAttribution": "official_published_individual_statement",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "manually_source_checked"
    }
  },
  {
    "name": "Aivar Sõerd",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "5650dddf-f2ca-4b94-8888-e7482808f81b",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 50
    },
    "publicResearch": {
      "excerpt": "Me peaksime ikkagi natukene mõtlema, kuidas sellised asjad eelarve baasseaduse tasemel ära lahendada, et Riigikogu otsustaks summade üle, mis on vähemalt ümardatud, alla 1000 …",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211400",
      "sourceTitle": "Riigi 2026. aasta teise lisaeelarve seaduse eelnõu (1019 SE) teine lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Kristina Šmigun-Vähi",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "28e48bd7-9f1f-4d6a-b40c-9c6ff6d445e5",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 25
    },
    "publicResearch": {
      "excerpt": "Kõigepealt ma tõesti tänan teid: alati, kui ma helistan, saan ma vastuse, isegi siis, kui te kohe vastata ei oska.",
      "date": "2026-09-16",
      "source": "https://stenogrammid.riigikogu.ee/202609161400",
      "sourceTitle": "Kultuuriministri 2026. aasta ettekanne riigi pikaajalise arengustrateegia \"Eesti 2035\" elluviimisest (sealhulgas \"Eesti spordipoliitika põhialused aastani 2030\" elluviimisest)",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Kadri Tali",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "2bc608c1-1c67-4db8-968b-94bc3947dfac",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 14
    },
    "publicResearch": {
      "excerpt": "Ma arvan, et kui kultuurikomisjonis eelnõu arutades oleks seda esitatud sellisel kujul, nagu see täna meie ette rullus ja kujunes, siis üksmeel ei oleks …",
      "date": "2026-10-14",
      "source": "https://stenogrammid.riigikogu.ee/202610141400",
      "sourceTitle": "Riigikogu avalduse \"Kõrghariduse toetuseks\" eelnõu (894 AE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Peeter Tali",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "b6f8dff5-7c69-4d4c-b978-be0a2ad6e161",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 73
    },
    "publicResearch": {
      "excerpt": "Mitte see majade soojustamise osa – ma arvan, et see on täitsa okei.",
      "date": "2026-10-22",
      "source": "https://stenogrammid.riigikogu.ee/202610221000",
      "sourceTitle": "Taristuministri 2026. aasta ettekanne riigi pikaajalise arengustrateegia \"Eesti 2035\" elluviimisest",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Tarmo Tamm",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "236e49d6-eecb-4562-8ad4-bedd586bb149",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 5
    },
    "publicResearch": {
      "excerpt": "Täna arutleme eelnõu üle, mille kõige olulisem mõte on lihtne: kui Eestisse tahetakse rajada tootmist, teha suuri investeeringuid või tuua siia uut tööstust, siis …",
      "date": "2026-05-20",
      "source": "https://stenogrammid.riigikogu.ee/202605201400",
      "sourceTitle": "Planeerimisseaduse muutmise ja sellega seonduvalt teiste seaduste muutmise seaduse (strateegiliste investeeringute ekspressrada) eelnõu (906 SE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Tanel Tein",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "4f816f8e-1501-4940-b87a-af029fcd98c0",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 53
    },
    "publicResearch": {
      "excerpt": "Ja veel suurem tänu kõigile tänastele esinejatele ja ettekandjatele, kes sellise üliolulise teema Riigikogu saali tõid!",
      "date": "2026-06-04",
      "source": "https://stenogrammid.riigikogu.ee/202606041000",
      "sourceTitle": "Olulise tähtsusega riikliku küsimuse \"Laste kehalise aktiivsuse tõstmine vaimse ja füüsilise tervise parandamiseks\" arutelu",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Urve Tiidus",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "0c571754-914d-406a-baba-6734212353de",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 70
    },
    "publicResearch": {
      "excerpt": "Vesi on maailmas üks kõige hinnalisemaid ja väga paljudes kohtades ka üsna keeruliselt kättesaadavaid ressursse.",
      "date": "2026-10-22",
      "source": "https://stenogrammid.riigikogu.ee/202610221000",
      "sourceTitle": "Taristuministri 2026. aasta ettekanne riigi pikaajalise arengustrateegia \"Eesti 2035\" elluviimisest",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Madis Timpson",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "429e71ce-d5ba-4617-8db4-d546482d43bc",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 57
    },
    "publicResearch": {
      "excerpt": "Peale ministri oli meil kohal ministeeriumi karistusõiguse ja menetluse talituse nõunik Anna Leena Neering.",
      "date": "2026-10-01",
      "source": "https://stenogrammid.riigikogu.ee/202610011000",
      "sourceTitle": "Karistusseadustiku, kriminaalmenetluse seadustiku ja väärteomenetluse seadustiku muutmise seaduse eelnõu (934 SE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Vilja Toomast",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "7b6823ed-96f9-462b-b931-3dd4faceb09e",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 43
    },
    "publicResearch": {
      "excerpt": "Õiguskomisjon valmistas Vabariigi Valitsuse algatatud kriminaalmenetluse seadustiku muutmise seaduse (rahvusvahelise koostöö lihtsustamine) eelnõu 933 esimeseks lugemiseks ette oma käesoleva aasta esmaspäevasel, 14.",
      "date": "2026-10-01",
      "source": "https://stenogrammid.riigikogu.ee/202610011000",
      "sourceTitle": "Kriminaalmenetluse seadustiku muutmise seaduse (rahvusvahelise koostöö lihtsustamine) eelnõu (933 SE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Aleksandr Tšaplõgin",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "fe6fcd51-6911-4dc6-9232-ddeac5ec1155",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 93
    },
    "publicResearch": {
      "excerpt": "Veel kuu aega tagasi väitsite, et Rail Baltic on valmis aastaks 2030.",
      "date": "2026-10-19",
      "source": "https://stenogrammid.riigikogu.ee/202610191500",
      "sourceTitle": "34 Riigikogu liikme kirjalik nõue umbusalduse avaldamiseks Vabariigi Valitsusele",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Toomas Uibo",
    "profileRecorded": true,
    "quote": {
      "text": "Tänase eelnõu valguses on meil ka selge üleskutse nii sellele saalile kui ka kogu Eesti elanikkonnale, et kui vähegi võimalik, siis ärge ostke puurikanade …",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "sourcePublisher": "Riigikogu ametlik stenogramm",
      "context": "Spoke in the debate about consumer purchases of cage eggs; excerpt is truncated and is not a complete policy platform."
    },
    "actions": [
      {
        "kind": "spoke828",
        "date": "2026-04-22",
        "source": "https://www.riigikogu.ee/pressiteated/riigikogus-labis-munakanade-puurispidamist-keelav-eelnou-esimese-lugemise/"
      }
    ],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "d0d7a6a5-25de-40d0-b5df-09575a7c9bfc",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 30
    },
    "publicResearch": {
      "excerpt": "Tänase eelnõu valguses on meil ka selge üleskutse nii sellele saalile kui ka kogu Eesti elanikkonnale, et kui vähegi võimalik, siis ärge ostke puurikanade …",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "category": "cage_bill_debate",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Named contribution during the first reading of 828 SE. It may be a question, procedural intervention, a cited view or a policy statement; check its context before inferring any position.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Kristo Enn Vaga",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "1600fe77-4b45-44ab-972a-181a5ef71767",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 10
    },
    "publicResearch": {
      "excerpt": "Lisaks arutasime seda ka mitteametlikult eile koos kapo peadirektor Margo Pallosoniga.",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211400",
      "sourceTitle": "Kaitseliidu seaduse ja kaitseväeteenistuse seaduse muutmise seaduse (välisriigi kodanike riigikaitsesse kaasamine) eelnõu (962 SE) esimene lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Jaak Valge",
    "profileRecorded": true,
    "quote": {
      "text": "Teatavasti oli see eelnõu plaanis esialgu esitada valitsuse eelnõuna, aga valitsuses jäi see mingil põhjusel peaministril päevakorda panemata ja see takerdus.",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "sourcePublisher": "Riigikogu ametlik stenogramm",
      "context": "Question about the legislative route and delay of the earlier government draft."
    },
    "actions": [
      {
        "kind": "initiated828",
        "date": "2026-02-19",
        "source": "https://www.riigikogu.ee/tegevus/eelnoud/e5671f5a-d571-4fcb-96d5-cd2afd5734c4/loomakaitseseaduse-muutmise-seadus/"
      },
      {
        "kind": "initiated970",
        "date": "2026-06-17",
        "source": "https://www.riigikogu.ee/pressiteated/muu-pressiteade-et/menetlusse-voeti-eelnou-tarbijakaitse-kohta/"
      }
    ],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "54bc0d5b-7c98-4245-8682-4a3a0b6e0275",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 53
    },
    "publicResearch": {
      "excerpt": "Ma ei kahtle teie pädevuses selle teema puhul, aga mul on selline laiem, nihukene metafüüsilisem küsimus.",
      "date": "2026-04-22",
      "source": "https://stenogrammid.riigikogu.ee/202604221400",
      "sourceTitle": "Loomakaitseseaduse muutmise seaduse eelnõu (828 SE) esimene lugemine",
      "category": "cage_bill_debate",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Named contribution during the first reading of 828 SE. It may be a question, procedural intervention, a cited view or a policy statement; check its context before inferring any position.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Varro Vooglaid",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "b5e0d7fe-b784-4057-bf7e-cc3f1873887d",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 302
    },
    "publicResearch": {
      "excerpt": "Näiteks oletame, et kodanike ühendus, kes seisab kanade puurispidamise vastu, korraldab meeleavalduse kas parlamendi ees, Stenbocki maja ees või kusagil mujal.",
      "date": "2026-02-18",
      "source": "https://stenogrammid.riigikogu.ee/202602181400",
      "sourceTitle": "Reklaamiseaduse ja isikuandmete kaitse seaduse muutmise seaduse eelnõu (696 SE) kolmas lugemine",
      "category": "laying_hen_cages",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Mentions hen cages in a public statement, potentially as an example or in another debate. Not automatically evidence of a position on 828 SE or 970 SE.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Mart Võrklaev",
    "profileRecorded": true,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "8600af41-4dcc-424d-9d05-7c851e5270b5",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 69
    },
    "publicResearch": {
      "excerpt": "Eile kuulsime siin nelja erineva fraktsiooni poolt uhkeid sõnavõtte, kuidas riigieelarvesse tuleks igale poole raha juurde panna, makse alandada ja siis sai valitsus nahutada, …",
      "date": "2026-10-21",
      "source": "https://stenogrammid.riigikogu.ee/202610211400",
      "sourceTitle": "2027. aasta riigieelarve seaduse eelnõu (1037 SE) esimese lugemise jätkamine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  },
  {
    "name": "Luisa Värk",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    },
    "knownAs": [
      "Luisa Rõivas"
    ],
    "parliamentarySource": {
      "officialRoster": "https://api.riigikogu.ee/api/plenary-members?lang=ET",
      "officialMemberUuid": "17d27ea5-b5e6-43e0-86db-ebc15bdd5788",
      "checkedAt": "2026-10-23",
      "recordedSpeechesIn2026": 5
    },
    "publicResearch": {
      "excerpt": "Annan väliskomisjoni nimel ülevaate Vabariigi Valitsuse algatatud konsulaarseaduse ja teiste seaduste muutmise seaduse eelnõu 896 teiseks lugemiseks ettevalmistamisest.",
      "date": "2026-10-14",
      "source": "https://stenogrammid.riigikogu.ee/202610141400",
      "sourceTitle": "Konsulaarseaduse ja teiste seaduste muutmise seaduse eelnõu (896 SE) teine lugemine",
      "category": "other_parliamentary_speech",
      "verifiedAttribution": "official_named_public_speech",
      "editorialCaveat": "Public remark on an unrelated issue, included for attributable quotation coverage only; not evidence of the MP's position on hen cages.",
      "excerptReview": "automatically_extracted_verbatim_check_context"
    }
  }
];
