# Chickens, No Cages: public outreach tracker

**Snapshot:** 23 October 2026  
**Status:** Published source snapshot in the website code, not a live connection to Gmail or Riigikogu  
**Page:** [English](https://proxysociety.org/projects/chickens-no-cages#outreach) · [Traditional Chinese](https://proxysociety.org/zh-tw/projects/chickens-no-cages#outreach)

## Intent

> Laying hens should not be kept in cages.

The website deliberately keeps this preference separate from the evidence of what public officials have said, done or answered. The project records **an individual's** attributable evidence, never a guessed position based on party, committee office, silence or a missing reply.

## Public interface

- [Tracker component](../../app/components/ChickenOutreachTracker.tsx): bilingual, searchable 101-member register, two independent filters for public evidence and outreach, four featured source-attributed statements, legislative timeline and dated counters.
- [Styles](../../app/components/ChickenOutreachTracker.module.css): desktop/mobile/keyboard presentation.
- [Public snapshot](../../app/chicken-outreach-data.ts): publishable data only, 101 MPs, dated citations and empty outreach states. This is the **source of truth for the numbers actually displayed**. Public GitHub history preserves revisions.
- [Page composition](../../app/components/ProjectCasePage.tsx): tracker appears only for \`chickens-no-cages\` in both language routes; all other project cases are unaffected.
- [Project copy](../../app/projects-data.ts): English and Traditional Chinese summaries.

### Snapshot counters and what they mean

| Metric | Value (23 Oct 2026) | Rule |
| --- | ---: | --- |
| Riigikogu members in the map | 101 | Original roster first fully checked 28 Sep 2026 |
| First-pass research recorded | 48 | A profile was recorded, **not** a verified direct quote |
| Verified individual public quotations | 4 | Named individual + exact original words, date and source |
| Members with recorded public actions | 27 | Initiated a bill, committee office, named debate participation, or independent different-issue legislative action |
| Action only, no verified quote | 24 | Does not imply legislative support or opposition |
| No direct quote and no qualifying action yet | 73 | Evidence absent, **position not inferred** |
| Emails confirmed sent | 0 | Unsent Gmail drafts **do not** count as sent |
| Replies recorded | 0 | Cannot assume silence before contact |

Prior conversation notes had somewhat different researched/action counts because they were approximations from directory files. The implementation calculates current totals from all 101 actual public snapshot entries.

## Verified quotations

Only short, attributable excerpt material is displayed; the website always links the original source.

1. **Tiit Maran**, 19 Feb 2026, quoted by Riigikogu regarding 828 SE: https://www.riigikogu.ee/pressiteated/18-riigikogu-liiget-esitas-eeln-u-kanade-puurispidamise-keelustamiseks/
2. **Urmas Kruuse**, 10 Nov 2025, Riigikogu committee press release: https://www.riigikogu.ee/pressiteated/maaelukomisjon-arutas-eesti-pollumajandus-kaubanduskoja-poordumist-valitsuse-ja-maaelukomisjoni-poole/ . **Scope note:** he was explaining the committee's then-current approach; do not present this as his promised 2026 vote.
3. **Arvo Aller**, 13 Jun 2024, Riigikogu press release: https://www.riigikogu.ee/pressiteated/maaelukomisjon-kanade-puurispidamise-lopetamist-on-vaja-suvitsi-analuusida/ . **Scope note:** he discussed a proposed 4-to-5-year transition, not the later 2035 deadline.
4. **Züleyxa Izmailova**, 21 May 2026, her individual remarks in a party-published statement: https://www.sotsid.ee/sotsiaaldemokraadid-kusivad-peaministrilt-miks-valitsus-ei-liigu-edasi-kanade-puurispidamise-lopetamise-eelnouga/ . **Scope note:** this refers to the government draft delay at that time, not proof of today's exact committee status.

## Legislative sources

- 828 SE official file: https://www.riigikogu.ee/tegevus/eelnoud/e5671f5a-d571-4fcb-96d5-cd2afd5734c4/loomakaitseseaduse-muutmise-seadus/
- 828 SE first-reading report: https://www.riigikogu.ee/pressiteated/riigikogus-labis-munakanade-puurispidamist-keelav-eelnou-esimese-lugemise/
- 970 SE introduction and committee assignment: https://www.riigikogu.ee/pressiteated/muu-pressiteade-et/menetlusse-voeti-eelnou-tarbijakaitse-kohta/
- Industry's voluntary 2035 undertaking (not an enacted legal requirement): https://epkk.ee/eesti-suurimad-munatootjad-allkirjastasid-pidulikult-kokkuleppe-uleminekuks-puurivabadele-tootmisviisidele-hiljemalt-2035-aastaks/
- October 2026 reporting of legislative delay (media account, not official bill status): https://www.tv3.ee/tv3telekanal/tv3-uudised/tv3-uudised-kanad-jaavad-puuridesse-keelustav-eelnou-istub-riigikogulaste-sahtlis/

## Publication and update protocol

1. Keep the separate campaign research workspace and original Gmail drafts private. The public website must not import or query the private repository or Gmail at runtime.
2. On every update, verify the subject's present parliamentary mandate, source date and wording. Keep quotes in the original Estonian, attribute the speaker, and include a dated source URL. When no qualifying quote exists, do not invent one.
3. Maintain \`app/chicken-outreach-data.ts\` as the public **approved export**. Do not expose addresses, draft bodies, campaign scoring, private replies, metadata from private email or speculative classifications.
4. Record \`outreach.status = "contacted"\` only after a sent message is verified, with ISO contact date in \`contactedAt\`. Record \`"replied"\` only after an actual response with a verified \`repliedAt\`. Never infer response status from absence of a reply.
5. Before publishing any *content* of a reply, review consent/expectations, applicable publication and privacy rules, attribution, corrections, redactions, source and original wording. The current export deliberately tracks only outcome status and dates.
6. Rerun type-check/build and review both EN and zh-TW public routes. Update \`chickenOutreachSnapshot\` only when the snapshot truly changed. The member audit date changes only after a complete roster refresh.
7. This page is not a public blacklist, automatically updated Gmail dashboard or quantitative score of a politician's beliefs. In particular, research completeness and contact counts are **process measures**.

## Suggested next research priorities

Locate the individual 22 Apr 2026 first-reading interventions by Andrei Korobeinik, Toomas Uibo and Mait Klaassen from the official stenogram before expanding the quote count. Continue committee and bill-sponsor research. New quotations must pass individual attribution and scope review before display.
