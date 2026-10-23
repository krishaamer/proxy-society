# Chickens, No Cages: performance, accessibility and security audit

**Reviewed:** 23 October 2026 (Asia/Taipei)  
**Target:** `/projects/chickens-no-cages#outreach` and `/zh-tw/projects/chickens-no-cages#outreach`  
**Production site:** https://proxysociety.org  
**Scope:** The Next.js implementation, structured published data, licence manifest, build and local CI smoke checks. **Not** a full third-party penetration test, professional accessibility certification, or real-user Lighthouse/Core Web Vitals measurement.

## Initial problems found

1. An earlier production build used Next.js **16.3.0**, affected by vulnerabilities addressed in Next.js 16.4.1+. Corrected to **16.4.2**, verified in Vercel build logs.
2. The tracker initially constructed a full DOM for **101 detailed MP records** on first render, even though the `<details>` sections were collapsed. This increased prerendered HTML, hydration work and layout/paint burden.
3. Portrait URLs used `thumb.wikimedia.org` rather than the normal `upload.wikimedia.org` file host. The images also went through an on-demand remote image optimization path on first visitor request.
4. Some small dark-theme labels used `--faint: #6f6a86` with insufficient WCAG AA text contrast on dark panels; standard input placeholder color was also difficult to read.
5. Repeated external source links did not have distinct accessible names, and there were no automated checks guarding source-image performance and key security headers.

## Changes deployed

### Images and loading

- Three already rights-cleared Commons portraits are **locally hosted, technically resized 256px WebP files** in `public/portraits/`.
- **Exact bytes:** Arvo Aller 12,244 B; Urmas Kruuse 2,230 B; Züleyxa Izmailova 5,148 B. Total **19,622 B** of static assets for the three photographs. These do not represent all page bytes and they load lazily below the fold.
- No client browser request to Wikimedia, no cold server-side fetch from Commons, no external image optimizer call for portraits. Individual names, licenses, original file links and format-conversion disclosure remain adjacent to each.
- Portraits render via `next/image` with `unoptimized` and `loading="lazy"` because the stored WebP asset is already at the required high-density display resolution. Image `alt=""` avoids announcing the politician's name twice because their name and source captions are adjacent.
- `next.config.ts` sets `images.remotePatterns: []` and `dangerouslyAllowSVG: false`. Future external photos must be licensed and explicitly added as safe local assets instead of opening an arbitrary image proxy.
- CSS reserves a stable 105 × 110px box (mobile 91 × 97px), retaining image proportions through `object-fit: contain`. No surprise cumulative layout shift from unspecified dimensions.

### DOM, JavaScript and interaction

- Page-based directory: **12 MPs at a time** rather than 101 detailed DOM records. A visitor can still find any of the 101 MPs using the always-global text search and evidence/outreach filters.
- Filters reset the current page to 1. Native `<details>` remains keyboard-accessible. Paging uses labeled buttons with disabled end states and an announced current-page counter.
- The underlying 101-row research snapshot is still imported as client data so searches stay responsive and work offline after load; further splitting this dataset or server-side search would be unnecessary for this small (tens of kilobytes) corpus.
- Full-screen fixed decorative blended overlays are suppressed on this tracker route to reduce compositing costs during long scrolling. Other project pages keep their existing visuals.

### Accessibility

- Improved shared low-emphasis text token to `#8983a2`, approximately **5.2:1** contrast against a representative dark panel `#13101f`, exceeding the WCAG 2.2 AA 4.5:1 threshold for ordinary text in that combination. Some individual hard-coded styles outside the tracker may still need further review.
- Tracker labels, dates, links and captions raised toward 11–12px instead of extremely small 8–9px.
- Native text input and select labels remain explicit; placeholder contrast increased.
- Pagination provides at least **44px** vertical targets. Details summaries remain at least 64px tall. Focus indicator changed to a visible 3px cyan outline.
- `prefers-reduced-motion` disables decorative interaction transitions in the tracker and smooth scrolling site-wide.
- Original Estonian quotation uses `lang="et"`, the Traditional Chinese tracker main uses `lang="zh-Hant-TW"`, and portrait images have nearby visible copyright captions. Source links have contextual accessible names.
- Limits: no actual screen-reader, color-vision, zoom-to-400%, high-contrast mode or axe-core browser scan has been recorded in this audit; these remain valuable manual checks.

### Security

- Updated `next` and `eslint-config-next` to **16.4.2**. This is above the October 2026 recommended patched threshold for serious App Router / image-related advisories; avoid claiming absolute safety.
- `X-Content-Type-Options: nosniff`; `Referrer-Policy: strict-origin-when-cross-origin`; `X-Frame-Options: DENY`; `Permissions-Policy` removes unnecessary browser capabilities.
- Minimal compatible CSP directives: `object-src 'none'`, `base-uri 'self'`, `frame-ancestors 'none'` and `upgrade-insecure-requests`. This intentionally does **not** claim comprehensive script-src protection, since Next/React inline hydration needs careful nonce-based or hashed CSP design before a strict rollout.
- No public Gmail or other private repository connection. The tracker uses static, source-reviewed data, JSX escapes displayed strings, and has no exposed mutations/sending actions.
- Outbound links opening new tabs should use `rel="noopener noreferrer"` (historical existing `rel="noreferrer"` also implicitly isolates `window.opener` in modern browsers). URL sources are retained from reviewed public research, not live user input.
- `npm audit --omit=dev --audit-level=critical` added to CI to catch future critical production vulnerabilities.

## Verification record

Before the switch to locally served WebP photos, a successful GitHub Actions smoke run produced:
- English tracker: **67,063 B HTML**, **11ms** loopback request on CI runner;
- Traditional Chinese tracker: **66,478 B**, **16ms** loopback;
- English rights page: **35,414 B**, **13ms** loopback;
- Traditional Chinese rights page: **33,197 B**, **13ms** loopback;
- First on-demand 128px image conversion could take **4,050ms cold**, while a cached repeat took 171ms; this motivated first-party static photo hosting.

**Post-optimization CI verification** (GitHub Actions run 39916179526) shows the image-hosting change's impact on the same smoke protocol:

| Resource | Before static photos | With local WebP photos |
| --- | ---: | ---: |
| English tracker HTML | 67,063 B | **56,024 B** |
| Traditional Chinese tracker HTML | 66,478 B | **55,439 B** |
| Arvo Aller 256px WebP | Cold server-side image conversion | **12,244 B static file, 3ms loopback** |
| Urmas Kruuse 256px WebP | Cold server-side conversion | **2,230 B static file, 2ms loopback** |
| Züleyxa Izmailova 256px WebP | Cold server-side conversion | **5,148 B static file, 1ms loopback** |
| Remote image optimization origin | Allowed Wikimedia prefix | **Denied (HTTP 400)** |
| Production dependency audit | 0 vulnerabilities in initial passing smoke run | **0 vulnerabilities** |

The HTML payload reduction is roughly 16% across both locales; this reduction includes the removal of generated image optimization markup and does not account for JavaScript, CSS, fonts, or external browser-network latency. The 1–3ms values are same-machine CI loopback requests, **not worldwide production response times**.

These are **local CI measurements**, not global page download sizes or real-world user metrics. HTML includes Next server component streaming data. The final smoke test checks:
- Four bilingual page routes return 200 and accessible main/heading landmarks.
- Three local static WebP image files are served with correct MIME, signatures and expected bytes, and all three together remain under a 30KB budget.
- Twelve `<details>` items appear on initial render, rather than all 101.
- Remote image proxy rejects unapproved external origins with HTTP 400.
- Security headers are present on all routes.
- `npm run lint`, `npm run build`, and `npm audit` run on CI.

**Latest run status:** See [GitHub Actions](https://github.com/krishaamer/proxy-society/actions/workflows/ci.yml) for commit-specific results rather than assuming checks passed for a future change.

## 23 October 2026: source-rich 101-MP directory regression

After sourcing a public excerpt for **all 101 MPs** (with only 20 short quotations selected for individual issue/welfare highlighting), the 12-row initial page budget was preserved. The UI shows research, original sitting/publication links, dates and explicit reminders that unrelated quotations are not evidence of a cage-policy position.

A completed [GitHub CI run](https://github.com/krishaamer/proxy-society/actions/runs/39923711207) verified:

- **101/101** public attributable research excerpts; **20** source-checked individual featured/issue quotations; **25** initial-source excerpts explicitly mentioning the 828 SE debate or cages; **76** other-topic excerpts with explicit non-inference labels.
- The English tracker initial HTML was **74,898 bytes** and the Traditional Chinese tracker **74,043 bytes** in a same-runner smoke test. This is larger than the prior 56KB HTML snapshot because the page exposes individual parliamentary research, but still renders only **12** directory details initially.
- Both EN and zh-TW tracker and rights pages passed automated axe-core WCAG 2.2 A/AA scans at desktop 1280×900 and mobile 390×844, with **0 automated violations**. This is not manual assistive-technology certification.
- Smoke checks for photo byte budgets, local image hosting, security headers and the blocked remote image proxy all passed; production-dependency audit reported **0 vulnerabilities** in the CI environment.
- The source-integrity script `npm run test:research` validates name/UUID agreement with the current official Riigikogu roster, excerpt-to-source provenance, unique identities, and zero speculative contact/reply status.

This validation describes HTML render budget, CI static and browser checks, **not** measured field Core Web Vitals (LCP/CLS/INP). Adding more unrelated statements increases privacy-review and page-weight obligations: continue to document editorial necessity, consider lazy per-MP source modules if the register grows substantially, and do not treat machine-selected public transcript snippets as a fully reviewed political position.

## Remaining risk and future verification

1. Real-device measurement: run PageSpeed Insights / Lighthouse mobile + desktop on a warm production deploy; monitor LCP, INP, CLS and accessibility errors. Do not infer a Lighthouse score from CI compile time.
2. Test keyboard-only navigation, VoiceOver/NVDA, 200–400% zoom, real mobile slow-network profiles and dark-theme contrast on actual devices.
3. Confirm all three photos correctly identify the intended politicians visually, not merely by Wikimedia file name and metadata. The right to use a photo does not establish that it is a good recognisable headshot.
4. If the site expands beyond this static public register, reassess CSP and image remote access, input validation, authentication, rate limits, and GDPR data flows.
5. The initial full 101-row client data payload remains small but measurable; revisit splitting it if the register grows to thousands of people.
6. Human legal review of public-interest processing and copyright rights remains separate from performance/security checks.

## References

- [Next.js October 14, 2026 critical security update](https://nextjs.org/blog/nextjs-security-update-october-14-2026), patched Next 16.4.1+.
- [Next.js Image API and WebP loading](https://nextjs.org/docs/app/api-reference/components/image).
- [WCAG 2.2 Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum).
- [Photo licences and GDPR review](legal-and-photo-review.md).
- [Public source and correction policy](https://proxysociety.org/projects/chickens-no-cages/rights).
