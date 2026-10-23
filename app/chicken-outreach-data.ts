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
  outreach: {
    status: "not_contacted" | "contacted" | "replied";
    contactedAt: string | null;
    repliedAt: string | null;
  };
};
export const chickenOutreachSnapshot = "2026-10-23";
export const chickenMembershipAudit = "2026-09-28";
export const chickenMembers: ChickenMember[] = [
  {
    "name": "Jaak Aab",
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
    }
  },
  {
    "name": "Anti Allas",
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
    }
  },
  {
    "name": "Peeter Ernits",
    "profileRecorded": true,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
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
    }
  },
  {
    "name": "Andre Hanimägi",
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
    }
  },
  {
    "name": "Madis Kallas",
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
    }
  },
  {
    "name": "Tanel Kiik",
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
    }
  },
  {
    "name": "Mait Klaassen",
    "profileRecorded": true,
    "quote": null,
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
    }
  },
  {
    "name": "Andrei Korobeinik",
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
        "kind": "spoke828",
        "date": "2026-04-22",
        "source": "https://www.riigikogu.ee/pressiteated/riigikogus-labis-munakanade-puurispidamist-keelav-eelnou-esimese-lugemise/"
      }
    ],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    }
  },
  {
    "name": "Anastassia Kovalenko-Kõlvart",
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
    }
  },
  {
    "name": "Helmen Kütt",
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
    }
  },
  {
    "name": "Heljo Pikhof",
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
    }
  },
  {
    "name": "Anti Poolamets",
    "profileRecorded": true,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
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
    }
  },
  {
    "name": "Reili Rand",
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
    }
  },
  {
    "name": "Luisa Rõivas",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
    }
  },
  {
    "name": "Raul-Stig Rästa",
    "profileRecorded": false,
    "quote": null,
    "actions": [],
    "outreach": {
      "status": "not_contacted",
      "contactedAt": null,
      "repliedAt": null
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
    }
  },
  {
    "name": "Riina Sikkut",
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
    }
  },
  {
    "name": "Grigore-Kalev Stoicescu",
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
    }
  },
  {
    "name": "Toomas Uibo",
    "profileRecorded": true,
    "quote": null,
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
    }
  },
  {
    "name": "Jaak Valge",
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
    }
  }
];
