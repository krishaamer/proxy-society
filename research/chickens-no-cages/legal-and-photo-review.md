# Chickens, No Cages: editorial, image-licensing and data-protection review

**Prepared:** 23 October 2026, Europe/Tallinn.  
**Publisher / controller:** Proxy Society MTÜ, Estonian registry 80679069.  
**Contact:** hello@proxysociety.org.  
**Status:** Internal-to-project legal risk assessment and editorial policy; **not a lawyer-approved legal opinion**. Project repository is public. Do not put private replies, private identifiers or personal data exports in this file.

## Purpose and boundaries

The declared human objective is that laying hens should not be kept in cages. The public website documents what democratically accountable officials have said or done, not their character, fitness or inferred beliefs. The project tests agentic civic research: keeping original intent, evidence, outreach and outcomes separate.

The public tracker at `/projects/chickens-no-cages#outreach` is a **dated October 23 research snapshot**. It is not a live parliamentary register; the member and committee list was last fully audited September 28. No sent campaign email or reply has been verified. Unsent Gmail drafts remain private and never count as outreach.

## Personal-data inventory

| Category | Public? | Purpose | Source / limit |
| --- | --- | --- | --- |
| Official MP name | Yes | Identify representative relevant to parliamentary process | Public Riigikogu directory, timestamped |
| Parliamentary committee and bill participation | Yes | Document formal process | Official chamber record, date and link |
| Attributed MP quotations | Limited, case by case | Evidence of actual historical statement on issue | Short Estonian original, speaker, date and direct URL |
| Historical quotation context | Yes | Prevent misattribution or projecting an old view onto present | Context and limitations in each record |
| Public MP portrait | Only three individually cleared photos so far | Identify public official | Commons file-specific licence, credit and date |
| Email sent status and date | Only once independently confirmed | Accountability for **our** outreach | Internal record; no private message published |
| Reply-received status and date | Only once independently confirmed | Accountability for **our** outreach | Internal record; **no response text published** |
| MP political-belief inference, electoral prediction, ranking | **Never** | Not necessary | No automatic profiling or political scoring |
| MP personal contact details, private emails, family, residence, ID, health | **Never** | Out of scope | Not to be sourced, logged or published |
| Visitor analytics / server logs | Hosting-related only | Site operation | See Vercel terms, investigate actual retention and transfers |

## GDPR lawful-basis assessment, preliminary

This is the starting outline for the controller's written legitimate-interests assessment (LIA); it does **not** by itself establish a legally sufficient basis.

1. **Purpose:** Enable factual public scrutiny of legislative treatment of laying-hen welfare, with an individual source for each claim, and record limited campaign process progress.
2. **Necessity:** Name and official activities of relevant parliamentarians are needed to attribute their own parliamentary acts, statements and votes; the same objective cannot be met by anonymous records. Retain only necessary excerpts and dates. A photograph is useful for identification but **not necessary** for every member, hence include only those rights-cleared individually.
3. **Balancing:** MPs acting in public office generally have reduced but not extinguished expectations of privacy in official capacity. Risks include misleading a historic statement as current, misquotation, reputational pressure from silence labels, high search-engine visibility, recontextualization of an old photo, and repeated dissemination. Mitigate by distinguishing statement / action / contact states, source links, snapshot dates, no ratings, no automatic classifications, corrective process and minimal data.
4. **Article 6:** Intended basis for ordinary professional/public-office data is GDPR Article 6(1)(f), subject to an actual documented legitimate-interest balancing test. Do not assume the MTÜ can claim Article 6(1)(e) public authority merely because its topic is public.
5. **Article 9:** Individually attributable political views may be special-category data. Before including them, identify a separate condition under Article 9. Article 9(2)(e) may apply to views **manifestly made public by the politician themselves**; a third-party paraphrase, anonymous committee attribution, inferred view or unpublished reply is not automatically within it. Evaluate separately whether GDPR Article 85 and Estonia's Personal Data Protection Act §4 journalistic expression applies, including genuine public interest, professional ethics and avoiding excessive harm. Do **not** treat `nonprofit`, `publicly accessible` or `journalistic` as a universal exemption.
6. **Information obligations:** The data was mostly not collected from MPs directly. Consider GDPR Article 14 notice obligations, any express applicable exception, and the feasibility of proactively notifying 101 individuals at the first relevant outreach. Having a public privacy page helps transparency but might not fully satisfy individualized notice where required. Document the conclusion, including exception if relied upon, with counsel.
7. **International hosting:** Review Vercel's DPA, location of logs and backups, data transfers and applicable transfer mechanism; avoid third-party tracking on the public tracker. The three permitted portraits are served directly as small WebP files on the site's own CDN; Wikimedia is not contacted by visitors unless they click a source link. Original author and CC licence attribution remains visible.
8. **Rights and incident handling:** Requests for access, rectification, erasure, objection and restriction should be sent to hello@proxysociety.org, logged privately, normally answered within one month (unless valid extension/exception), and assessed case by case. Correct immediately if materially inaccurate; temporarily hide contested material where credible legal harm is raised. Escalate serious complaints to qualified Estonian counsel; keep an audit trail without republishing private allegations.
9. **Retention:** Revisit this tracker at least annually and on bill passage/withdrawal or parliamentary turnover. The currently published 101-person snapshot must always display its September 28 roster audit date; do not label it live. At campaign close, evaluate whether contact-status data still contributes to the historical record or should be removed.
10. **Automated processing:** No automated decisions on individuals, political voting propensity, affiliation scoring or inferred stances. The search/filter interface is basic client-side filtering of sourced records.

**Counsel question:** Is the operative Article 6 / Article 9 / IKS §4 approach sufficient for historical statements about named MPs published in a nonprofit's civic advocacy tracker, and what Article 14 notices and legitimate-interest records should be kept? Seek sign-off before scaling to systematic political opinion aggregation or publishing replies.

## Copyright and quote use

- Copyright and data-protection law are distinct. Publicly accessible is not public domain.
- Estonia's Copyright Act §19 allows some proportionate quotations/referrals of lawfully published works with creator, title and source where shown and without distorting the overall meaning. Treat this as a scoped exception, **not** blanket US-style fair use for photos or whole news articles.
- Use only short portions necessary for analysis; original Estonian text, author's name, date, URL and attribution context. For government press releases, check author's status where available; a public official's words and a press officer's prose may have different authorship.
- Do not copy entire articles, screenshots of copyrighted news or archived press photography into the public repo without an appropriate licence, exception specifically applicable, or explicit permission.
- Avoid misleading juxtaposition of photo + quote: image dates may predate statement dates, captions must state photography is identification, not endorsement.

## Photograph licences and cleared-use records

Three photos currently pass the initial documentary review. Their programmatic rights/attribution data is in [chicken-portrait-rights.ts](../../app/chicken-portrait-rights.ts); website policy and photo credits are visible at `/projects/chickens-no-cages/rights`. Both links should remain adjacent to each photograph.

1. **Arvo Aller:** [Commons file](https://commons.wikimedia.org/wiki/File:Arvo_Aller_2023_(cropped).jpg), CC BY 2.0, image shows 2023 appearance. Summary lists Estonian Kultuuriministeerium; EXIF credits the photographer/copyright owner **Ilja Smirnov**; Commons user Karljohan29 made 2023 crop from the licensed source. Current website serves a locally hosted 256px WebP technical resize, with no additional crop.
2. **Urmas Kruuse:** [Commons file](https://commons.wikimedia.org/wiki/File:Urmas_Kruuse.jpg), photographer **Renee Altrov**, source Riigikantselei; CC BY-SA 4.0, Wikimedia VRT permission #2021033010001343; 2021 photo locally resized and converted to 256px WebP without a further crop or retouching.
3. **Züleyxa Izmailova:** [Commons file](https://commons.wikimedia.org/wiki/File:Z%C3%BCleyxa_Izmailova_2021._aasta_Arvamusfestivalil.jpg), photographer **Sillerkiil**, CC BY-SA 4.0, 2021 public festival photo; locally resized and converted to 256px WebP without a further crop or retouching.

The two ShareAlike licences apply to adaptations of those photos (not automatically to the whole website). Continue to avoid misleading cropping, overlays, stylisation or photo edits without accounting for licence terms. Some freely licensed photos retain personality-rights restrictions: consider the context separately from the copyright licence.

**Not cleared:** Tiit Maran photo and every other MP without a confirmed file-specific reuse grant. Do not infer permissions from the Riigikogu member page, commercial search results, portraits displayed by news outlets or photo thumbnails.

### Riigikogu Photo Archive alternative

The Parliament's [official use terms](https://www.riigikogu.ee/en/conditions-use-riigikogu-photo-archive/) state that works may be used for noncommercial purposes on websites when introducing MPs or Riigikogu work, with author/source credits and respecting item-specific restrictions. They **prohibit commercial use and modification/processing**, and the archive holder may revoke access for violations. These are not a general licence for every photo served by riigikogu.ee. Using Commons CC-licensed pictures is preferable for flexibility, but any new Commons picture still needs individual attribution and personality-rights checks.

If the project seeks more official photos, request written permission for this exact civic research use from info@riigikogu.ee, describing that the site is run by an MTÜ and is publicly accessible, will display individuals in a policy-accountability context, and will appropriately credit photographers. **No request has been sent**.

## Publication sign-off checklist for each record

- [ ] Is the person currently in the roster for the stated snapshot date? Is the page labelled with the last full membership audit date?
- [ ] Is the quotation *verbatim* in the source language and specifically attributable to that person? Is exact context checked?
- [ ] Are speech and action sourced separately? Does it avoid presenting a historic quote as a present voting position?
- [ ] For personally expressed political opinion, is Article 9 processing condition documented (or counsel-approved IKS expressive exemption analysis)?
- [ ] Is the quote proportional and supported by exact creator/date/source metadata?
- [ ] For each photograph, is **that file** expressly licensed, credited with actual author and source, licence URL, original URL, modification/crop record, and identity-only framing?
- [ ] Have personality-rights and any historical/professional-context concerns been considered?
- [ ] Are private messages and personal details excluded from public GitHub?
- [ ] Is there a public correction/rights/contact route and internal ability to temporarily hide the item?
- [ ] Is any sent/replied status independently verified, not inferred from unsent drafts?
- [ ] Have countervailing risks and an appropriate notice approach been checked and recorded?

## Official and primary sources

- [EU GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng), notably Articles 5, 6, 9, 14, 15–17, 21, 85.
- [Current Estonian Personal Data Protection Act (effective October 1, 2026)](https://www.riigiteataja.ee/akt/130062026052), especially §§4–5. The older [English translation](https://www.riigiteataja.ee/en/akt/519032026002) covers March 16–September 30 only; the October 1 amendment concerns §53, not §4, but the authentic Estonian text controls.
- [Estonian Copyright Act §19](https://www.riigiteataja.ee/akt/128122021003) (check the live current consolidated text before legal reliance).
- [Estonian Data Protection Inspectorate: journalism and data](https://www.aki.ee/isikuandmed/kkk/ajakirjandus).
- [Inspectorate: publication by individuals](https://www.aki.ee/isikuandmed/kkk/interneti-ja-veebitegevused).
- [Official Riigikogu Photo Archive terms](https://www.riigikogu.ee/en/conditions-use-riigikogu-photo-archive/).
- [Vercel privacy notice](https://vercel.com/legal/privacy-notice) and [DPA](https://vercel.com/legal/dpa).

**No guarantee of legal immunity.** A copyright or data-protection claim is assessed on its facts, and a public notice alone does not make a publication lawful. This checklist reduces avoidable risks and defines remaining issues for qualified Estonian counsel.


## Website image performance and privacy (23 October 2026)

The three individually credited photographs are now **first-party, pre-optimized 256px WebP static assets** in `public/portraits/`. Their sizes are Arvo Aller 12,244 bytes, Urmas Kruuse 2,230 bytes and Züleyxa Izmailova 5,148 bytes, for a combined 19,622 bytes if all are loaded. Images retain links to original Commons files, authors, CC licences and modification notes in `app/chicken-portrait-rights.ts`. The browser does not need to contact Wikimedia for the portraits, the site does not perform cold remote photo transforms per first visitor, and Next image remote-proxy allowlisting is now empty. All portrait re-encodings were technical WebP conversions with no new creative cropping.

Performance and security regression tests are in `scripts/smoke-civic.mjs` and `.github/workflows/ci.yml`. See [implementation audit](performance-accessibility-security-audit.md) for test scope and limitations.
