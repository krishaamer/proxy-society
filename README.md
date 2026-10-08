# Proxy Society

**AI acts for us now. What is polite?**

Proxy Society is an independent research and design initiative studying the social rules of AI agents acting on behalf of humans. The first focus is AI agent etiquette: delegation, disclosure, authority, attention asymmetry, relationship meaning and human handoff.

## Project workspace

This repository is the home for the entire Proxy Society project: the website, research, contact leads, PhD planning and prepared writing.

| Area | Record |
| --- | --- |
| Research and project index | [research/README.md](research/README.md) |
| Architecture and PhD contact leads | [Contact map](research/phd-contact-map/README.md) · [CSV tracker](research/phd-contact-map/contacts.csv) · [Structured records](research/phd-contact-map/contacts.json) |
| Prepared writing and versions | [writing/README.md](writing/README.md) |
| First-contact wording | [Architecture research introduction](writing/outreach/architecture-research-introduction.md) |
| Website | `app/` and `public/` |
| Working conventions | [AGENTS.md](AGENTS.md) |

Keep new leads and research in `research/`, and proposals, essays, briefs and outreach drafts in `writing/`. Record sources, dates and status with the material. Prepared writing remains a draft until its approval or publication is recorded. Website text remains in its route/content modules; readable writing records identify the source revision so later changes can be compared.

The repository is public. Keep public research and publishable writing here, and retain private correspondence, personal records and credentials in their appropriate private storage.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy

The project is designed for Vercel. Import the GitHub repository, deploy the default branch, and attach `proxysociety.org` as the canonical domain. `proxysociety.com` can redirect to the `.org` domain.

## Research lineage

The site references work on proxy culture, Plurality, AI agent standards and AI transparency. Proxy Society treats these as neighboring foundations while focusing specifically on the social interaction design of artificial representatives.
