# Proxy Society project conventions

## Project home

- Use this website repository as the canonical workspace for the entire Proxy Society project, including research, leads, PhD planning and prepared writing.
- Keep new project work here rather than starting another repository or a disconnected notes directory, unless the user requests it.
- Maintain the root README and the research/writing indexes when adding a substantial record.

## Research and leads

- Store research and contact maps under `research/`. The current architecture/PhD map is `research/phd-contact-map/`.
- Record published affiliation, source URLs, date checked, the proposed contribution, supervision evidence and open questions.
- Keep evidence separate from fit assessments. A title, a supervisor listing or an invitation to inquire does not establish capacity, funding or a commitment.
- Do not assume prior relationships or prior outreach. Record actual communications and outcomes only when evidenced.
- Keep the contact map's JSON, CSV and readable report consistent when changing a record.

## Prepared writing

- Store proposals, essays, briefs and correspondence drafts under `writing/`, with a clear status, date and provenance.
- The writing index identifies which version is current, which is an earlier framing, and which texts derive from website source.
- Preserve meaningful earlier versions through Git history and explicit status changes.
- Website route/content modules remain the source of rendered website copy. A writing record must identify the source revision or explain when it becomes an independent revision.
- When a writing change is intended for the website, update the affected route/content module and its writing record together; otherwise keep the draft in writing.
- Drafting or recording a message does not authorize sending it. Follow the user's explicit authorization and recipient scope.

## Public repository

- Commit public source material, published professional contact routes and publishable writing.
- Keep raw private correspondence, personal exports, registration documents, credentials and sensitive operational records out of commits. The existing `.registration/` directory is private local material.
- Stage task files explicitly and preserve unrelated local changes.
- Do not claim live publication, delivery, admission or advisor agreement without direct verification.
