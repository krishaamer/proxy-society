# 101 MPs: official transcript and quotation coverage

**Research date:** 23 October 2026  
**Source period:** 1 January through 22 October 2026  
**Published routes:** [English](https://proxysociety.org/projects/chickens-no-cages#outreach) and [Traditional Chinese](https://proxysociety.org/zh-tw/projects/chickens-no-cages#outreach)  
**Current roster:** 101 active XV Riigikogu members, retrieved from the official parliamentary Open Data API.  
**Status:** Publishable, dated research. **No campaign emails sent.**

## What was researched

We queried the Riigikogu's official, structured [plenary-member roster](https://api.riigikogu.ee/api/plenary-members?lang=ET) and [verbatim sittings](https://api.riigikogu.ee/api/steno/verbatims?startDate=2026-04-22&endDate=2026-04-22&lang=ET) across January–October 2026, retaining the speaker, public session link, agenda item, date and short exact excerpt. The collector's full auditable output is [official-2026-speech-audit.json](official-2026-speech-audit.json). The public [data model](../../app/chicken-outreach-data.ts) includes the source-linked research for all 101 MPs, alongside a separate set of carefully selected issue-related quotes.

| Research outcome | Members | What it means |
| --- | ---: | --- |
| MPs matched to current official roster | **101** | Formal 2026 membership, checked 23 October |
| MPs with an official 2026 plenary statement | **99** | Their own intervention, not an inferred political position |
| MPs with separate official public statements | **2** | Hanno Pevkur and Andres Sutt: official government/parliament press sources, different subject |
| MPs with a source-linked, individual public excerpt | **101** | All have a dated primary source; **not** all are about hens |
| Individually attributed quotations selected for prominent issue/welfare record | **20** | Short excerpt and caveat. This is evidence of a remark, not a vote or endorsement |
| 828 SE debate transcripts in the extracted source register | **21 member primary excerpts** | Some include questions, other people's views and procedural remarks |
| Other speeches mentioning cage housing | **4 primary excerpts** | Merely mentioning cages does not establish support or opposition |
| Other animal-welfare legislative remarks | **8 primary excerpts** | Includes different bills (not automatically related to hen cages) |
| Unrelated parliamentary statements | **66 primary excerpts** | Source/provenance only. Must **never** be cited as a position on the hen issue |
| Other official public statements (not parliamentary speeches) | **2** | Government / Riigikogu published records |
| Verified contact / replies | **0 / 0** | Prepared Gmail drafts do not count |

The 21 / 4 / 8 category totals are from the **automatically selected primary speech per person**, not a manual classification of that person's political views; they overlap conceptually with the 20 reviewed quotations and are not support/oppose counts.

## Key new direct quotations from the official 828 SE debate

The [22 April 2026 Riigikogu stenogram](https://stenogrammid.riigikogu.ee/202604221400) is a substantially stronger primary source than general online quotations. It contains specific named contributions from:

- **Jaak Aab:** questions whether cage-free conversion investments were supported
- **Anti Allas:** later also publicly questions why the cage-ban bill has not progressed to plenary, with an October 19 source
- **Peeter Ernits:** asks about proposed treatment of sales of cage-produced eggs
- **Heljo Pikhof:** compares welfare treatment of caged hens with cats and dogs
- **Anti Poolamets:** raises restricting sales of cage eggs as an alternative policy question
- **Riina Sikkut:** disputes the idea that cage production will decline automatically without legislation
- **Toomas Uibo:** discusses consumer choices around buying cage eggs
- **Mait Klaassen:** cites Renaldo Mändmets's view, which **must not be recast as his own endorsement**
- **Reili Rand:** raises consumer choices and producers' intended transition
- **Jaak Valge:** discusses delays in the original government bill
- **Helmen Kütt, Tanel Kiik, Madis Kallas, Andre Hanimägi:** provide comments or questions relating to the bill, with contextual caveats
- **Andrei Korobeinik:** remarks on the 2026 cage bill's difficult progress in the [October 14 sitting](https://stenogrammid.riigikogu.ee/202610141400)

Earlier quotations by Tiit Maran, Arvo Aller, Urmas Kruuse and Züleyxa Izmailova remain separately attributed to their dated primary sources. Anastassia Kovalenko-Kõlvart's January 18, 2024 quoted remarks on animal pain and welfare are attributed to [ERR's report of the cage petition presentation](https://www.err.ee/1609225731/galerii-riigikogu-esimees-sai-petitsiooni-kanade-puurispidamise-keelustamiseks).

## Identity corrections

The live parliamentary roster uses **Kalev Stoicescu**, **Stig Rästa** and **Luisa Värk**. Older labels **Grigore-Kalev Stoicescu**, **Raul-Stig Rästa** and **Luisa Rõivas** are kept as search aliases, not treated as three additional MPs. No established published acts or communications were discarded during reconciliation.

## Quotation categories used on the website

1. **Reviewed individual quote:** short, dated utterance with named speaker and original source. Even if it concerns 828 SE, a question or report of someone else's view is not necessarily the person's own policy preference.
2. **Public parliamentary excerpt in the issue record:** automatically extracted from the original named parliamentary intervention; provides traceable source material and a precise agenda item, but must still be read in full context.
3. **Other animal-welfare/agriculture remark:** different relevant area, not a shortcut to an inferred cage-hen position.
4. **Other public statement:** a direct, sourced quotation on a separate subject. This is displayed *only* as evidence of the MP's public record, **not** as a personal hook to send in an animal-welfare campaign email.
5. **No documented position on hen cages:** remains an explicit possible status for any MP regardless of what other public remarks exist.

## Review and legal guardrails

- A source URL must link to an attributable **individual's own public words**, with exact public date and speech topic. A press release paraphrasing “committee members agreed” is not a quotation by every member.
- Automatically extracted snippets may be truncated with an ellipsis. Do **not** append model-generated text or claim an incomplete excerpt is a full statement.
- A politician mentioning hen cages in the context of an unrelated political debate or as a hypothetical **is not evidence they support or oppose prohibition**. Some extraction categories explicitly record mention only.
- Avoid misrepresenting critical, rhetorical, sarcastic, procedural, or question wording as a firm position.
- The data register is not a support/oppose scoreboard and cannot be used to predict voting.
- All material here concerns public official activity, not private correspondence or inferred sensitive beliefs. Publication is still subject to the separately recorded [GDPR, data minimization and copyright assessment](legal-and-photo-review.md); public availability alone is not blanket permission.
- The [citation verification script](../../scripts/validate-chicken-citations.mjs) checks unique current identities, original sources, excerpt matching, restricted publication categories, and uncontacted status; CI runs it on all changes.
- For outreach, focus on **the 20 reviewed relevant quotations** and individual public procedural actions. Do not use unrelated general quotes as fake personalization.
- Re-check current MP roster and bill status before actual outreach. Nothing has been sent in this run.

## Reproduction

The collector [scripts/collect-riigikogu-research.mjs](../../scripts/collect-riigikogu-research.mjs) downloads and searches dated official stenograms and names. [GitHub Actions workflow](../../.github/workflows/riigikogu-research.yml) archives the original candidate selection as JSON; it does not send mail, change parliamentary records or automatically promote candidates to verified quotations. For citation integrity run `npm run test:research`.

Future passes should retrieve direct comments from MPs for whom no hen-specific public statement was established; documenting an **unknown** is a legitimate research finding, not a data failure.
