import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maintaining Human Intent | Proxy Society",
  description:
    "A Proxy Society research proposition on preserving personal, collective and intergenerational human intent across AI agents, organizations, cities and architecture.",
  alternates: { canonical: "https://proxysociety.org/human-intent" },
};

const intentLayers = [
  [
    "01",
    "IMMEDIATE PERSONAL INTENT",
    "Bring me dinner. Take me home. Find somewhere quiet. A proxy carries a specific human request into action.",
  ],
  [
    "02",
    "PERSISTENT PERSONAL INTENT",
    "Protect my privacy. Prefer accessible routes. Do not increase my debt. The instruction survives beyond one task.",
  ],
  [
    "03",
    "COLLECTIVE HUMAN INTENT",
    "Keep drinking water safe. Make public buildings accessible. Keep parks public. Reduce dangerous air pollution.",
  ],
  [
    "04",
    "INTERGENERATIONAL INTENT",
    "Preserve biodiversity, climate stability, cultural memory and future options even when the beneficiaries are not yet present.",
  ],
] as const;

const existingIntent = [
  ["WATER SYSTEM", "We do not want pathogens in our drinking water."],
  ["PUBLIC PARK", "Not every valuable piece of land should be privately monetized."],
  ["ACCESS RAMP", "Physical ability should not determine whether someone may enter."],
  ["PROTECTED FOREST", "Some things should survive even when nobody is standing there defending them."],
  ["BUILDING CODE", "Safety should persist even when no individual remembers every failure mode."],
  ["PUBLIC LIBRARY", "Knowledge should remain accessible beyond the purchasing power of one person."],
] as const;

const architecture = [
  [
    "01",
    "ROBOT HIGHWAYS",
    "High-speed autonomous circulation can move goods without turning human streets into machine traffic corridors.",
  ],
  [
    "02",
    "ROBOT TUNNELS",
    "Small underground logistics networks can treat delivery as utility infrastructure rather than road traffic.",
  ],
  [
    "03",
    "PROXY ENTRANCES",
    "Buildings can distinguish human arrival, service arrival and delegated arrival, each with different permissions.",
  ],
  [
    "04",
    "PROXY SHAFTS",
    "Dedicated vertical circulation can move robots and goods without competing for human elevators and corridors.",
  ],
  [
    "05",
    "TRANSFER WALLS",
    "Secure lockers, refrigerators, waste ports and handoff chambers can move objects across a boundary without granting full entry.",
  ],
  [
    "06",
    "MACHINE-READABLE BUILDINGS",
    "Doors, rooms, elevators and services can expose state and permissions digitally so a proxy understands where it may act.",
  ],
  [
    "07",
    "INTENT BOUNDARIES",
    "Spatial thresholds can encode not only where a proxy may enter, but whose authority it carries, for what purpose and for how long.",
  ],
  [
    "08",
    "HUMAN-PRIORITY ZONES",
    "Some places can deliberately limit proxy activity to preserve quiet, play, intimacy, ecology or unmediated human presence.",
  ],
] as const;

const constraintLayers = [
  ["01", "RIGHTS", "Hard boundaries: dignity, due process, accessibility, privacy, bodily safety."],
  ["02", "LAW", "Executable prohibitions and obligations that constrain agents regardless of optimization pressure."],
  ["03", "COLLECTIVE GOALS", "Clean air, conservation, public safety, sustainability, resilience and public access."],
  ["04", "LOCAL INTENT", "Building rules, neighborhood agreements, institutional missions and community priorities."],
  ["05", "PERSONAL INTENT", "The preferences and mandates of the person who delegated the task."],
  ["06", "SITUATIONAL OVERRIDES", "Emergency conditions can temporarily alter normal permissions with explicit accountability."],
] as const;

const precedents = [
  {
    id: "01",
    title: "NAVER 1784",
    copy: "NAVER built a robot-ready high-rise with ROBOPORT, a robot-only vertical circulation system running from B2 to the roof. It is a direct precedent for architecture designed around non-human circulation.",
    href: "https://www.naverlabs.com/en/blogDetail?seq=33940",
    label: "NAVER LABS",
  },
  {
    id: "02",
    title: "PIPEDREAM",
    copy: "Pipedream runs autonomous robots through underground pipes and frames its network like urban utility infrastructure. Peachtree Corners launched an almost one-mile real-world system in 2023.",
    href: "https://www.pipedreamlabs.co/home-2025",
    label: "PIPEDREAM",
  },
  {
    id: "03",
    title: "SCHINDLER + KONE",
    copy: "Elevator APIs already let robots travel autonomously between floors. Schindler also exposes access restrictions by elevator, floor and time, an early form of spatial permissions.",
    href: "https://developer.schindler.com/apis/cloud/robot/introduction",
    label: "SCHINDLER",
  },
  {
    id: "04",
    title: "ROBOT-FRIENDLY BUILDINGS",
    copy: "Kyung-Eun Hwang and Mohan Rajesh Elara propose a five-level framework for robot-ready buildings across intelligence, infrastructure, architectural planning, accessibility, observability and safety.",
    href: "https://www.mdpi.com/2075-5309/16/12/2417",
    label: "BUILDINGS 2026",
  },
  {
    id: "05",
    title: "NIST BUILDING SEMANTICS",
    copy: "NIST is developing standardized machine-readable semantic models and building digital twins so automated systems can understand building components, relationships, data and control points.",
    href: "https://www.nist.gov/programs-projects/building-digitization-and-semantic-interoperability",
    label: "NIST",
  },
  {
    id: "06",
    title: "THE AGENT HARNESS",
    copy: "A 2026 United Nations University report treats the agent harness as a runtime governance layer around models, tools, memory, permissions, approvals, interruptions and recovery.",
    href: "https://unu.edu/publication/engineering-and-governing-agent-harness-technology-and-policy-framework-runtime-layer",
    label: "UNU 2026",
  },
  {
    id: "07",
    title: "LOOP ENGINEERING",
    copy: "Loop engineering formalizes iterative goal, action, observation and adjustment. Proxy Society asks what happens when that logic expands from software tasks to institutions, cities and public goals.",
    href: "https://www.ibm.com/think/topics/loop-engineering",
    label: "IBM 2026",
  },
  {
    id: "08",
    title: "POLICY AS CODE",
    copy: "Policy as code separates what an AI proposes from what a system permits. That distinction becomes foundational when autonomous action crosses organizational, civic and physical boundaries.",
    href: "https://www.ibm.com/think/topics/policy-as-code",
    label: "IBM 2026",
  },
] as const;

const researchQuestions = [
  "How can a human intention remain legible after it has been decomposed across multiple agents, robots, organizations and physical spaces?",
  "Which intentions should behave as hard constraints, which as goals, and which as preferences that can be negotiated?",
  "How should a building know whose authority a proxy carries, what that authority permits and when it expires?",
  "Can places carry persistent intent, such as protect biodiversity, preserve quiet or guarantee public access?",
  "How can collective and intergenerational interests remain represented when commercial actors have faster and more powerful proxies?",
  "What must remain interruptible, reversible and appealable when society increasingly operates through autonomous loops?",
  "How do we preserve disagreement and democratic change instead of freezing today's values into permanent machine rules?",
  "When should architecture separate human and machine circulation, and when should they deliberately meet?",
] as const;

function IntentFlowDiagram() {
  return (
    <svg
      viewBox="0 0 1200 610"
      role="img"
      aria-labelledby="intent-flow-title intent-flow-desc"
      style={{ width: "100%", height: "auto", display: "block", marginTop: 22 }}
    >
      <title id="intent-flow-title">Human intent moving through a societal harness into autonomous action</title>
      <desc id="intent-flow-desc">
        Human intentions become rights, policies, permissions and infrastructure that constrain agents. Their actions change the physical world, which is observed and fed back into the system.
      </desc>
      <rect width="1200" height="610" fill="#090812" stroke="rgba(166,150,255,.4)" />
      <g fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
        <text x="54" y="52" fill="#63f5d1" fontSize="16" letterSpacing="3">INTENT PATH / SOCIETAL RUNTIME</text>
        <text x="54" y="79" fill="#6f6a86" fontSize="12">THE MODEL IS NOT THE GOVERNOR. THE HARNESS IS WHERE AUTHORITY BECOMES OPERABLE.</text>

        <rect x="55" y="130" width="235" height="118" fill="#0e0d19" stroke="#63f5d1" strokeWidth="2" />
        <text x="78" y="164" fill="#63f5d1" fontSize="12" letterSpacing="2">01 / HUMAN INTENT</text>
        <text x="78" y="198" fill="#f5f4ff" fontSize="18">personal</text>
        <text x="78" y="224" fill="#a3a0b7" fontSize="14">collective / long-term</text>

        <rect x="365" y="130" width="260" height="118" fill="#0e0d19" stroke="#8d6bff" strokeWidth="2" />
        <text x="388" y="164" fill="#8d6bff" fontSize="12" letterSpacing="2">02 / HARNESS</text>
        <text x="388" y="198" fill="#f5f4ff" fontSize="18">rights / policy</text>
        <text x="388" y="224" fill="#a3a0b7" fontSize="14">permissions / standards</text>

        <rect x="700" y="130" width="190" height="118" fill="#0e0d19" stroke="#ff58d0" strokeWidth="2" />
        <text x="723" y="164" fill="#ff58d0" fontSize="12" letterSpacing="2">03 / PROXIES</text>
        <text x="723" y="198" fill="#f5f4ff" fontSize="18">AI / robots</text>
        <text x="723" y="224" fill="#a3a0b7" fontSize="14">firms / institutions</text>

        <rect x="965" y="130" width="180" height="118" fill="#0e0d19" stroke="#eaff78" strokeWidth="2" />
        <text x="988" y="164" fill="#eaff78" fontSize="12" letterSpacing="2">04 / WORLD</text>
        <text x="988" y="198" fill="#f5f4ff" fontSize="18">space / matter</text>
        <text x="988" y="224" fill="#a3a0b7" fontSize="14">people / ecology</text>

        <path d="M290 189 H365 M625 189 H700 M890 189 H965" stroke="#f5f4ff" strokeWidth="2" opacity=".5" />
        <path d="M342 180 l23 9 -23 9 M677 180 l23 9 -23 9 M942 180 l23 9 -23 9" fill="none" stroke="#f5f4ff" strokeWidth="2" opacity=".7" />

        <path d="M1055 248 V355 C1055 392 1025 414 988 414 H220 C183 414 158 391 158 354 V248" fill="none" stroke="#63f5d1" strokeWidth="2" strokeDasharray="8 8" opacity=".65" />
        <text x="392" y="448" fill="#63f5d1" fontSize="12" letterSpacing="2">OBSERVE / VERIFY / ADJUST / ESCALATE / REPEAT</text>

        <rect x="215" y="500" width="770" height="60" fill="rgba(141,107,255,.08)" stroke="rgba(166,150,255,.35)" />
        <text x="600" y="528" textAnchor="middle" fill="#f5f4ff" fontSize="16">INTENT MUST SURVIVE THE ENTIRE CHAIN</text>
        <text x="600" y="549" textAnchor="middle" fill="#a3a0b7" fontSize="12">not just the first prompt</text>
      </g>
    </svg>
  );
}

function SpatialPermissionDiagram() {
  return (
    <svg
      viewBox="0 0 1200 500"
      role="img"
      aria-labelledby="permission-title permission-desc"
      style={{ width: "100%", height: "auto", display: "block", marginTop: 22 }}
    >
      <title id="permission-title">A proxy crosses successive spatial permission boundaries</title>
      <desc id="permission-desc">
        A human delegates a delivery task. The proxy receives progressively narrower permission to enter a city, building, floor and transfer zone.
      </desc>
      <rect width="1200" height="500" fill="#05050a" />
      <g fill="none" strokeWidth="2">
        <rect x="58" y="82" width="1084" height="330" stroke="rgba(99,245,209,.35)" />
        <rect x="240" y="122" width="830" height="250" stroke="rgba(141,107,255,.55)" />
        <rect x="445" y="160" width="540" height="174" stroke="rgba(255,88,208,.55)" />
        <rect x="665" y="197" width="230" height="100" stroke="#eaff78" />
      </g>
      <g fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
        <text x="58" y="52" fill="#63f5d1" fontSize="15" letterSpacing="3">DELEGATED PRESENCE / SPATIAL PERMISSIONS</text>
        <text x="78" y="110" fill="#63f5d1" fontSize="12">CITY / ROUTE PERMISSION</text>
        <text x="260" y="150" fill="#8d6bff" fontSize="12">BUILDING / ENTRY PERMISSION</text>
        <text x="465" y="188" fill="#ff58d0" fontSize="12">FLOOR / TASK PERMISSION</text>
        <text x="685" y="225" fill="#eaff78" fontSize="12">TRANSFER ZONE</text>
        <text x="685" y="257" fill="#f5f4ff" fontSize="18">deliver item only</text>
        <text x="685" y="280" fill="#a3a0b7" fontSize="12">expires 14:42 / no apartment access</text>

        <circle cx="142" cy="265" r="38" fill="#0e0d19" stroke="#63f5d1" strokeWidth="2" />
        <text x="142" y="260" textAnchor="middle" fill="#f5f4ff" fontSize="12">HUMAN</text>
        <text x="142" y="279" textAnchor="middle" fill="#a3a0b7" fontSize="10">deliver this</text>
        <path d="M180 265 H620" stroke="#f5f4ff" strokeWidth="2" strokeDasharray="9 8" opacity=".55" />
        <path d="M602 255 l18 10 -18 10" fill="none" stroke="#f5f4ff" strokeWidth="2" />
        <circle cx="620" cy="265" r="14" fill="#ff58d0" />
        <text x="620" y="322" textAnchor="middle" fill="#a3a0b7" fontSize="11">PROXY CARRIES MANDATE</text>
        <text x="58" y="458" fill="#6f6a86" fontSize="12">A DOOR BECOMES AN AUTHORITY BOUNDARY, NOT ONLY A PHYSICAL BOUNDARY.</text>
      </g>
    </svg>
  );
}

export default function HumanIntentPage() {
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
        <nav aria-label="Research navigation">
          <a href="#intent">INTENT</a>
          <a href="#harness">HARNESS</a>
          <a href="#architecture">ARCHITECTURE</a>
          <a href="#precedents">PRECEDENTS</a>
          <Link className="nav-cta" href="/proposal">ARCHITECTURE OF PRESENCE</Link>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-status">
          <div className="eyebrow"><span className="pulse" /> RESEARCH PROPOSITION / INTENT INFRASTRUCTURE</div>
          <span className="system-status">SYS: PROXY SOCIETY / FIELD: SOCIETAL HARNESS</span>
        </div>
        <div className="hero-copy-grid">
          <h1><span>MAINTAINING</span><em>HUMAN INTENT</em></h1>
          <div className="hero-sidecopy">
            <span className="coordinate">PROXY / HARNESS / LOOP / ARCHITECTURE / ECOLOGY</span>
            <p>
              As more action is delegated to AI agents, robots and automated institutions, the central design problem is not autonomy itself. It is whether human intent survives the delegation.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#harness">SOCIETY AS HARNESS</a>
              <a className="button ghost" href="#architecture">PHYSICAL CONSEQUENCES</a>
            </div>
          </div>
        </div>
        <IntentFlowDiagram />
      </section>

      <section className="statement">
        <div className="shell statement-grid">
          <p className="section-kicker">THESIS</p>
          <div>
            <h2>Proxy Society studies how human intent persists when action is delegated.</h2>
            <h2 className="muted-heading">The proxy changes. The intention must remain contestable, traceable and human-governed.</h2>
          </div>
        </div>
      </section>

      <section className="section shell" id="intent">
        <div className="section-heading">
          <div><p className="section-kicker">01 / WHAT COUNTS AS INTENT?</p><h2>More than a prompt.</h2></div>
          <p>
            Human intent exists at several timescales. Some intentions are immediate requests. Others persist for years, belong to communities, or defend the interests of people who are not currently present.
          </p>
        </div>
        <div className="principles-grid">
          {intentLayers.map(([number, title, copy]) => (
            <article className="principle-card" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div><p className="section-kicker">THE CITY ALREADY DOES THIS</p><h2>Infrastructure is frozen intent.</h2></div>
          <p>
            Society already builds systems that keep a decision operating when the people who made it are absent. AI makes those persistent intentions capable of sensing, negotiating and acting continuously.
          </p>
        </div>
        <div className="asymmetry-grid">
          {existingIntent.map(([title, copy]) => (
            <article className="equation-card" key={title}><span>EXISTING PROXY</span><strong>{title}</strong><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="section dark-section" id="harness">
        <div className="shell">
          <div className="section-heading inverse">
            <div><p className="section-kicker">02 / SOCIETY AS HARNESS</p><h2>Put a governance layer around autonomous action.</h2></div>
            <p>
              Agent harnesses surround models with tools, permissions, memory, approvals and recovery. Proxy Society generalizes the same idea to companies, buildings and cities: the environment itself should decide what autonomous actors may do.
            </p>
          </div>
          <div className="principles-grid">
            <article className="principle-card"><span>01</span><h3>PROXY</h3><p>How does my agent preserve my intention while acting without my continuous supervision?</p></article>
            <article className="principle-card"><span>02</span><h3>HARNESS</h3><p>How does an organization, building or place constrain many proxies according to persistent human intentions?</p></article>
            <article className="principle-card"><span>03</span><h3>SOCIETAL LOOP</h3><p>How does society observe outcomes, verify them against public goals, adjust rules and keep humans able to intervene?</p></article>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div><p className="section-kicker">LOOP ENGINEERING / CIVIC SCALE</p><h2>A city can become an observable loop.</h2></div>
          <p>
            A clean-air mandate, for example, can move from an occasional regulation into an active loop: observe pollution, identify causes and affected people, act through permitted systems, verify outcomes, adjust, and escalate politically consequential trade-offs to humans.
          </p>
        </div>
        <div className="case-flow">
          {[
            ["01", "GOAL", "Healthy air within democratically established thresholds."],
            ["02", "OBSERVE", "Sensors and public data reveal actual exposure, not only modeled averages."],
            ["03", "ACT", "Permitted interventions change traffic, construction, enforcement or incentives."],
            ["04", "VERIFY", "Did exposure actually fall, and for whom?"],
            ["05", "ADJUST", "Change the intervention when the outcome diverges from the intention."],
            ["06", "ESCALATE", "Return value conflicts and high-impact trade-offs to legitimate human decision-making."],
          ].map(([id, title, copy], index, all) => (
            <div className="case-step-wrap" key={id}>
              <div><span>{id}</span><strong>{title}</strong><p>{copy}</p></div>
              {index < all.length - 1 && <div className="flow-arrow">↓</div>}
            </div>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading compact">
          <div><p className="section-kicker">CONFLICT IS THE SYSTEM</p><h2>Society does not have one intent.</h2></div>
        </div>
        <div className="principles-grid">
          {constraintLayers.map(([number, title, copy]) => (
            <article className="principle-card" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
        <div className="asymmetry-grid" style={{ marginTop: 24 }}>
          <article className="equation-card">
            <span>PERSONAL PROXY</span><strong>Deliver my package as fast as possible.</strong><p>The delegated task creates pressure toward speed and convenience.</p>
          </article>
          <article className="equation-card hot">
            <span>PLACE INTENT</span><strong>Keep this playground safe, quiet and pedestrian.</strong><p>The local harness constrains the delivery route. The robot goes around or below rather than through.</p>
          </article>
        </div>
      </section>

      <section className="section shell" id="architecture">
        <div className="section-heading">
          <div><p className="section-kicker">03 / ARCHITECTURE OF DELEGATED INTENT</p><h2>Separate the movement of bodies from the movement of intentions.</h2></div>
          <p>
            Architecture has historically assumed that the person who wants something is also the body moving through the building. Proxies break that assumption. A second circulation system can emerge for delegated action while human space becomes more deliberately human.
          </p>
        </div>
        <div className="principles-grid">
          {architecture.map(([number, title, copy]) => (
            <article className="principle-card" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
        <SpatialPermissionDiagram />
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div><p className="section-kicker">INTENT-AWARE PLACES</p><h2>A place can carry a mandate too.</h2></div>
          <p>
            Machine-readable architecture should not only tell a robot where the elevator is. It can tell the proxy what this place is trying to preserve and how that changes what actions are acceptable here.
          </p>
        </div>
        <div className="asymmetry-grid">
          <article className="equation-card"><span>PARK</span><strong>Public access / ecology / play / low disturbance</strong><p>A fast delivery mandate does not automatically outrank a place designed around human safety and ecological health.</p></article>
          <article className="equation-card"><span>HOSPITAL</span><strong>Care / accessibility / infection safety / emergency priority</strong><p>Emergency access may legitimately override ordinary circulation restrictions while remaining logged and accountable.</p></article>
          <article className="equation-card"><span>OLD-GROWTH FOREST</span><strong>Biodiversity / continuity / non-interference</strong><p>The operational goal may be to prevent action rather than optimize throughput.</p></article>
          <article className="equation-card"><span>HOME</span><strong>Privacy / intimacy / resident authority</strong><p>A proxy may cross a lobby threshold without receiving permission to cross the apartment threshold.</p></article>
        </div>
      </section>

      <section className="section dark-section">
        <div className="shell">
          <div className="section-heading inverse">
            <div><p className="section-kicker">WHY SUSTAINABILITY CHANGES</p><h2>Give persistent agency to interests that are easy to neglect.</h2></div>
            <p>
              Markets already give powerful actors persistent representation. Clean air, groundwater, biodiversity, urban trees, dark skies, silence, resilience and future generations often have weaker representation. Proxies could continuously defend human-created mandates around those interests.
            </p>
          </div>
          <div className="question-grid">
            {["CLEAN AIR", "CLEAN WATER", "GROUNDWATER", "SOIL HEALTH", "BIODIVERSITY", "URBAN TREE CANOPY", "DARK SKIES", "PUBLIC SPACE", "ACCESSIBILITY", "CULTURAL MEMORY", "CLIMATE STABILITY", "LONG-TERM MAINTENANCE"].map((item, index) => (
              <p key={item}><span>I{String(index + 1).padStart(2, "0")}</span>{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section research-section" id="precedents">
        <div className="shell">
          <div className="section-heading">
            <div><p className="section-kicker">04 / EXISTING PIECES</p><h2>The infrastructure is arriving before the theory.</h2></div>
            <p>
              Robot-ready buildings, underground logistics, elevator APIs, machine-readable building models, agent harnesses and loop engineering already exist as separate fields. Proxy Society connects them through one question: whose intention is being carried into the world?
            </p>
          </div>
          <div className="principles-grid">
            {precedents.map((item) => (
              <article className="principle-card" key={item.id}>
                <span>{item.id}</span><h3>{item.title}</h3><p>{item.copy}</p>
                <a href={item.href} target="_blank" rel="noreferrer" style={{ color: "var(--cyan)", fontSize: 11, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", letterSpacing: ".08em" }}>
                  {item.label} ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section questions-section shell">
        <div className="section-heading compact">
          <div><p className="section-kicker">05 / RESEARCH QUESTIONS</p><h2>From agent alignment to societal intent architecture.</h2></div>
        </div>
        <div className="question-grid">
          {researchQuestions.map((question, index) => (
            <p key={question}><span>Q{String(index + 1).padStart(2, "0")}</span>{question}</p>
          ))}
        </div>
      </section>

      <section className="closing-section">
        <div className="shell closing-grid">
          <div>
            <p className="section-kicker">PROPOSITION</p>
            <h2>Society should be the human-designed harness within which autonomous systems are permitted to act.</h2>
          </div>
          <div className="closing-actions">
            <p>
              The model does not govern society. Society governs models, agents and robots through rights, institutions, protocols, architecture and continuously revisable human decisions. Maintaining human intent is the thesis. Robot tunnels, proxy entrances and machine-readable cities are physical consequences.
            </p>
            <Link className="button primary light" href="/proposal">CONTINUE TO THE ARCHITECTURE OF PRESENCE</Link>
            <Link className="button ghost" href="/social-permeability">SEE SOCIAL PERMEABILITY</Link>
          </div>
        </div>
      </section>

      <footer className="site-footer shell">
        <span>© 2026 PROXY SOCIETY</span>
        <span>MAINTAIN HUMAN INTENT / KEEP AUTHORITY LEGIBLE</span>
        <a href="https://github.com/krishaamer/proxy-society" target="_blank" rel="noreferrer">GITHUB</a>
      </footer>
    </main>
  );
}
