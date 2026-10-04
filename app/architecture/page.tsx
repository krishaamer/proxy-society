import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Architecture of Delegated Presence | Proxy Society",
  description:
    "Proxy Society research on how buildings and public spaces should change when AI agents and robots can act on behalf of humans.",
  alternates: { canonical: "https://proxysociety.org/architecture" },
};

const questions = [
  "How should a building distinguish a human visitor from an authorized artificial representative?",
  "Which spatial boundaries should an agent be able to cross, and how should that authority be made legible?",
  "When does delegated participation improve access, and when does it hollow out meaningful human presence?",
  "How can buildings support absence without making physical presence a privilege?",
  "Who absorbs the congestion, verification work, surveillance and maintenance created by automated convenience?",
  "Which spaces should deliberately resist proxy activity in order to preserve care, quiet, ecology, play or intimacy?",
] as const;

const directions = [
  {
    id: "01",
    title: "ARCHITECTURE OF PRESENCE",
    copy:
      "When participation can be delegated, architecture must answer a new question: what is still worth being physically present for? The aim is not to privilege presence, but to make absence possible without degrading the right to arrive, stay and participate in person.",
  },
  {
    id: "02",
    title: "ARCHITECTURE FOR PROXIES",
    copy:
      "Entrances, lifts, service corridors, lockers and thresholds can become explicit interfaces between human authority and machine action. Robot infrastructure is treated as a design hypothesis to test, not a predetermined solution.",
  },
  {
    id: "03",
    title: "ARCHITECTURE FOR SHARED INTENT",
    copy:
      "Places already carry collective intentions such as public access, clean water, accessibility, safety and ecological protection. Proxy Society asks how those intentions remain operative when automated systems increasingly negotiate access, movement and resources.",
  },
] as const;

const methods = [
  ["01", "OBSERVE", "Document how people, staff, deliveries, reservations and exceptions already move through a real building."],
  ["02", "MAP", "Translate authority, waiting, handoff, access and conflict into plans, sections and time-based spatial diagrams."],
  ["03", "DESIGN", "Produce alternative threshold and circulation arrangements rather than only changing the software layer."],
  ["04", "PROTOTYPE", "Build full-scale or clearly staged spatial prototypes that make delegated authority visible and testable."],
  ["05", "COMPARE", "Test AI delegation against ordinary booking, fixed automation and human assistance to isolate what architecture actually changes."],
  ["06", "EVALUATE", "Measure access, errors, staff intervention, movement conflicts, comprehension, dignity and perceived control."],
] as const;

const outputs = [
  ["SPATIAL TYPOLOGIES", "A tested vocabulary for proxy entrances, shared thresholds, transfer zones, human-priority areas and machine circulation."],
  ["DESIGN PRINCIPLES", "Evidence-based guidance for when architecture should separate, mix or refuse delegated activity."],
  ["FILMIC EVIDENCE", "Short observational films that capture waiting, misunderstanding, interruption, assistance and informal encounter as spatial phenomena."],
  ["PROTOTYPES", "1:1 or situated experiments that let participants experience alternative arrangements before deployment."],
  ["CRITICAL ACCOUNT", "A framework for deciding when no architectural intervention is preferable to adding new technical infrastructure."],
] as const;

const trajectory = [
  ["2025", "GREEN FILTER", "AI helps a person decide what to buy, save and invest. The question begins as interaction design."],
  ["2026", "PROXY SOCIETY", "AI stops only advising and begins acting. The problem becomes delegation, authority and social meaning."],
  ["NEXT", "ARCHITECTURE", "Delegated action enters shared buildings, streets and institutions. Authority acquires a physical boundary."],
] as const;

function ThresholdDiagram() {
  return (
    <svg
      viewBox="0 0 1200 520"
      role="img"
      aria-labelledby="arch-threshold-title arch-threshold-desc"
      style={{ width: "100%", height: "auto", display: "block", marginTop: 24 }}
    >
      <title id="arch-threshold-title">Architecture of delegated presence threshold diagram</title>
      <desc id="arch-threshold-desc">
        A human delegates a task to an agent. The agent reaches a building where authority is narrowed through successive spatial thresholds before a human-priority interior.
      </desc>
      <rect width="1200" height="520" fill="#07070d" stroke="rgba(166,150,255,.35)" />
      <g fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
        <text x="54" y="52" fill="#63f5d1" fontSize="15" letterSpacing="3">ARCHITECTURE OF DELEGATED PRESENCE / THRESHOLD STUDY</text>
        <text x="54" y="80" fill="#77718a" fontSize="12">A DOOR IS ALSO A QUESTION OF AUTHORITY.</text>

        <rect x="58" y="132" width="210" height="170" fill="#0e0d19" stroke="#63f5d1" strokeWidth="2" />
        <text x="82" y="166" fill="#63f5d1" fontSize="12" letterSpacing="2">01 / HUMAN</text>
        <text x="82" y="205" fill="#f5f4ff" fontSize="22">intent</text>
        <text x="82" y="238" fill="#a3a0b7" fontSize="13">"collect this for me"</text>

        <rect x="350" y="132" width="210" height="170" fill="#0e0d19" stroke="#8d6bff" strokeWidth="2" />
        <text x="374" y="166" fill="#8d6bff" fontSize="12" letterSpacing="2">02 / PROXY</text>
        <text x="374" y="205" fill="#f5f4ff" fontSize="22">mandate</text>
        <text x="374" y="238" fill="#a3a0b7" fontSize="13">limited / revocable / logged</text>

        <rect x="642" y="132" width="210" height="170" fill="#0e0d19" stroke="#ff58d0" strokeWidth="2" />
        <text x="666" y="166" fill="#ff58d0" fontSize="12" letterSpacing="2">03 / THRESHOLD</text>
        <text x="666" y="205" fill="#f5f4ff" fontSize="22">permission</text>
        <text x="666" y="238" fill="#a3a0b7" fontSize="13">enter / stop / handoff</text>

        <rect x="934" y="132" width="210" height="170" fill="#0e0d19" stroke="#eaff78" strokeWidth="2" />
        <text x="958" y="166" fill="#eaff78" fontSize="12" letterSpacing="2">04 / PLACE</text>
        <text x="958" y="205" fill="#f5f4ff" fontSize="22">shared life</text>
        <text x="958" y="238" fill="#a3a0b7" fontSize="13">people / ecology / care</text>

        <path d="M268 217 H350 M560 217 H642 M852 217 H934" stroke="#f5f4ff" strokeWidth="2" opacity=".52" />
        <path d="M328 208 l22 9 -22 9 M620 208 l22 9 -22 9 M912 208 l22 9 -22 9" fill="none" stroke="#f5f4ff" strokeWidth="2" opacity=".75" />

        <rect x="642" y="354" width="502" height="98" fill="rgba(141,107,255,.07)" stroke="rgba(166,150,255,.3)" />
        <text x="666" y="387" fill="#63f5d1" fontSize="12" letterSpacing="2">DESIGN QUESTION</text>
        <text x="666" y="419" fill="#f5f4ff" fontSize="17">How should space make the limits of delegated authority understandable?</text>
      </g>
    </svg>
  );
}

export default function ArchitecturePage() {
  return (
    <main lang="en">
      <div className="ambient-grid" aria-hidden="true" />

      <header className="site-header shell">
        <Link className="wordmark" href="/" aria-label="Proxy Society home">
          <span className="mark" aria-hidden="true">P/S</span>
          <span className="wordmark-copy">
            <strong>PROXY SOCIETY</strong>
            <small>HUMAN / AGENT / SOCIETY</small>
          </span>
        </Link>
        <nav aria-label="Architecture research navigation">
          <a href="#thesis">THESIS</a>
          <a href="#directions">DIRECTIONS</a>
          <a href="#pilot">PILOT</a>
          <a href="#methods">METHODS</a>
          <Link href="/human-intent">HUMAN INTENT</Link>
          <Link className="nav-cta" href="/contact">TRANSMIT</Link>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-status">
          <div className="eyebrow"><span className="pulse" /> ARCHITECTURE / DELEGATED PRESENCE / RESEARCH TRACK</div>
          <span className="system-status">FIELD: BUILDINGS / PUBLIC SPACE / AUTHORITY</span>
        </div>
        <div className="hero-copy-grid">
          <h1><span>ARCHITECTURE OF</span><em>DELEGATED PRESENCE</em></h1>
          <div className="hero-sidecopy">
            <span className="coordinate">ABSENCE / ACCESS / THRESHOLDS / CIRCULATION / SHARED INTENT</span>
            <p>
              What happens to architecture when AI agents and robots can act on behalf of people? Proxy Society investigates how buildings and public spaces can support delegated participation while preserving understandable authority, equitable access and meaningful human presence.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#pilot">SEE THE PHD PILOT</a>
              <Link className="button ghost" href="/human-intent">TRACE HUMAN INTENT</Link>
            </div>
          </div>
        </div>
        <ThresholdDiagram />
      </section>

      <section className="statement" id="thesis">
        <div className="shell statement-grid">
          <p className="section-kicker">THESIS / 001</p>
          <div>
            <h2>Architecture has assumed that the person who wants something is also the body moving through the building.</h2>
            <h2 className="muted-heading">Delegated agency breaks that assumption.</h2>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div><p className="section-kicker">CENTRAL PROPOSITION</p><h2>The freedom to be absent, without losing the right to be present.</h2></div>
          <p>
            A proxy can reduce unnecessary travel, waiting or administrative friction. But buildings should not quietly become optimized for automated transactions at the expense of people who arrive in person. The research treats absence and presence as design conditions that must remain compatible.
          </p>
        </div>
        <div className="question-grid">
          {questions.map((question, index) => (
            <p key={question}><span>Q{String(index + 1).padStart(2, "0")}</span>{question}</p>
          ))}
        </div>
      </section>

      <section className="section dark-section" id="directions">
        <div className="shell">
          <div className="section-heading inverse">
            <div><p className="section-kicker">03 RESEARCH DIRECTIONS</p><h2>One thesis, three architectural lenses.</h2></div>
            <p>
              The project is not about decorating AI with architecture. It asks what spatial decisions change when delegated agency enters buildings, institutions and public life.
            </p>
          </div>
          <div className="principles-grid">
            {directions.map((item) => (
              <article className="principle-card" key={item.id}>
                <span>{item.id}</span><h3>{item.title}</h3><p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="pilot">
        <div className="section-heading">
          <div><p className="section-kicker">PHD PILOT / CIVIC BUILDING</p><h2>Start with one threshold you can actually test.</h2></div>
          <p>
            A university library or community centre becomes a living laboratory. A person delegates a bounded task such as reserving a room, collecting an item or communicating an access need. The architectural question is where that authority begins, narrows, becomes visible and returns to a human.
          </p>
        </div>

        <div className="asymmetry-grid">
          <article className="equation-card">
            <span>CONVENTIONAL CONDITION</span>
            <strong>person + reception + waiting + shared circulation</strong>
            <p>Human intent and human presence arrive together. Staff infer identity, authority and exceptions from the encounter.</p>
          </article>
          <article className="equation-card hot">
            <span>DELEGATED CONDITION</span>
            <strong>person ≠ representative ≠ place</strong>
            <p>The building must distinguish who delegated the task, what is permitted, what expires, and when a human handoff becomes necessary.</p>
          </article>
        </div>

        <div className="case-flow" style={{ marginTop: 40 }}>
          {[
            ["01", "ARRIVE", "Human, proxy or service actor reaches the building edge."],
            ["02", "VERIFY", "The place checks purpose and authority without requiring excessive surveillance."],
            ["03", "NARROW", "Permissions become more specific as the actor moves deeper into shared space."],
            ["04", "HANDOFF", "Objects, information or responsibility transfer at an explicit spatial boundary."],
            ["05", "RETURN", "The system returns authorship to a person when consequence, ambiguity or conflict increases."],
          ].map(([id, title, copy], index, all) => (
            <div className="case-step-wrap" key={id}>
              <div><span>{id}</span><strong>{title}</strong><p>{copy}</p></div>
              {index < all.length - 1 && <div className="flow-arrow">↓</div>}
            </div>
          ))}
        </div>
      </section>

      <section className="section shell" id="methods">
        <div className="section-heading">
          <div><p className="section-kicker">METHOD / RESEARCH BY DESIGN</p><h2>Make the building part of the explanation.</h2></div>
          <p>
            The test is simple: can the research identify a spatial design decision that changes the outcome? If the answer is only a better notification or interface, it is not yet architectural research.
          </p>
        </div>
        <div className="principles-grid">
          {methods.map(([number, title, copy]) => (
            <article className="principle-card" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="section research-section">
        <div className="shell">
          <div className="section-heading">
            <div><p className="section-kicker">ARCHITECTURAL CONTRIBUTION</p><h2>Outputs that belong in an architecture PhD.</h2></div>
            <p>
              The project should produce more than a framework for agent ethics. It should leave behind spatial evidence, tested configurations and architectural knowledge that can inform real buildings.
            </p>
          </div>
          <div className="asymmetry-grid">
            {outputs.map(([title, copy]) => (
              <article className="equation-card" key={title}><span>OUTPUT</span><strong>{title}</strong><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading compact">
          <div><p className="section-kicker">RESEARCH TRAJECTORY</p><h2>From interaction to institutions to space.</h2></div>
        </div>
        <div className="case-flow">
          {trajectory.map(([year, title, copy], index) => (
            <div className="case-step-wrap" key={year}>
              <div className={index === trajectory.length - 1 ? "case-highlight" : ""}>
                <span>{year}</span><strong>{title}</strong><p>{copy}</p>
              </div>
              {index < trajectory.length - 1 && <div className="flow-arrow">↓</div>}
            </div>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div><p className="section-kicker">EXISTING PROXY SOCIETY MATERIAL</p><h2>The architecture track is already latent in the work.</h2></div>
          <p>
            Swimmable Cities treats clean water and embodied public access as an urban condition. WiFi.ee treats connectivity as legible public infrastructure. Human Intent extends delegated agency into buildings, ecological mandates and machine-readable places.
          </p>
        </div>
        <div className="principles-grid">
          <article className="principle-card"><span>01</span><h3>SWIMMABLE CITIES</h3><p>Move from discovering swimming places to asking what makes a waterfront genuinely accessible, healthy and worth inhabiting.</p><Link href="/projects/swimmable-cities">OPEN CASE →</Link></article>
          <article className="principle-card"><span>02</span><h3>WIFI.EE</h3><p>Move from describing infrastructure to studying where people can actually sit, connect, get help and remain without friction.</p><Link href="/projects/wifi-ee">OPEN CASE →</Link></article>
          <article className="principle-card"><span>03</span><h3>HUMAN INTENT</h3><p>Move from agent permissions to physical thresholds, human-priority zones and places that carry persistent public mandates.</p><Link href="/human-intent">OPEN THESIS →</Link></article>
        </div>
      </section>

      <section className="closing-section">
        <div className="shell closing-grid">
          <div>
            <p className="section-kicker">ARCHITECTURE RESEARCH POSITION</p>
            <h2>Delegated intentions meet physical limits, other people and shared life.</h2>
          </div>
          <div className="closing-actions">
            <p>
              Proxy Society treats architecture as a governance medium for delegated agency. The research asks how access, authority and handoff become spatially legible, while protecting the ability of people to participate directly in the places that matter.
            </p>
            <Link className="button primary light" href="/contact">DISCUSS THE RESEARCH</Link>
            <Link className="button ghost" href="/">RETURN TO PROXY SOCIETY</Link>
          </div>
        </div>
      </section>

      <footer className="site-footer shell">
        <span>© 2026 PROXY SOCIETY</span>
        <span>ARCHITECTURE / PRESENCE / AUTHORITY / SHARED LIFE</span>
        <a href="https://github.com/krishaamer/proxy-society" target="_blank" rel="noreferrer">GITHUB</a>
      </footer>
    </main>
  );
}
