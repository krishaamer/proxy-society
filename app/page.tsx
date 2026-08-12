import EtiquetteLab from "./components/EtiquetteLab";

const principles = [
  {
    number: "01",
    title: "Meaning before efficiency",
    copy: "Ask whether effort, attention or personal reflection are part of what the action communicates.",
  },
  {
    number: "02",
    title: "Do not export attention costs",
    copy: "Saving yourself seconds does not justify creating minutes of reading, filtering or emotional labor for someone else.",
  },
  {
    number: "03",
    title: "Authority needs edges",
    copy: "An agent that can promise, buy, negotiate or commit needs a clear mandate, limits and a path back to the human.",
  },
  {
    number: "04",
    title: "Disclosure follows consequence",
    copy: "The more another person would behave differently if they knew an agent was involved, the stronger the case for disclosure.",
  },
  {
    number: "05",
    title: "Preserve contextual plurality",
    copy: "Access to one part of a person's life does not grant authority over every identity, relationship or community they belong to.",
  },
  {
    number: "06",
    title: "Keep human handoff real",
    copy: "Some actions should not merely require approval. They should return authorship and responsibility to the person.",
  },
];

const reading = [
  {
    source: "Luciano Floridi, 2015",
    title: "A Proxy Culture",
    note: "A short philosophical seed proposing proxiology: the study of proxies and surrogates in social contexts.",
    href: "https://link.springer.com/article/10.1007/s13347-015-0209-8",
  },
  {
    source: "Audrey Tang, E. Glen Weyl + community",
    title: "Plurality",
    note: "A neighboring project about technology for collaborative diversity and preserving social difference.",
    href: "https://plurality.net/",
  },
  {
    source: "NIST, 2026",
    title: "AI Agent Standards Initiative",
    note: "Technical standards are forming around agents that function securely on behalf of users. The social layer remains open.",
    href: "https://www.nist.gov/artificial-intelligence/ai-agent-standards-initiative",
  },
  {
    source: "European Commission, 2026",
    title: "AI transparency obligations",
    note: "Article 50 transparency rules began applying on 2 August 2026, making agent identity and disclosure a live societal issue.",
    href: "https://digital-strategy.ec.europa.eu/en/library/guidelines-transparency-obligations-providers-and-deployers-ai-systems",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="wordmark" href="#top" aria-label="Proxy Society home">
          <span className="mark" aria-hidden="true">P/S</span>
          <span>Proxy Society</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#etiquette">Etiquette</a>
          <a href="#principles">Principles</a>
          <a href="#research">Research</a>
          <a className="nav-cta" href="mailto:hello@proxysociety.org">Talk to us</a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="eyebrow"><span className="pulse" /> AI AGENT INTERACTION DESIGN · EST. 2026</div>
        <h1>AI acts for us now.<br /><em>What is polite?</em></h1>
        <p className="hero-copy">
          Proxy Society is an independent research and design initiative studying the social rules of AI agents acting on behalf of humans.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#etiquette">Explore AI etiquette</a>
          <a className="button ghost" href="#thesis">Read the thesis</a>
        </div>
        <div className="hero-diagram" aria-label="Human to agent to society relationship">
          <div className="diagram-node"><span>01</span><strong>YOU</strong><small>intent</small></div>
          <div className="diagram-line"><span>delegate</span></div>
          <div className="diagram-node agent"><span>02</span><strong>AI AGENT</strong><small>representation</small></div>
          <div className="diagram-line"><span>act</span></div>
          <div className="diagram-node"><span>03</span><strong>SOCIETY</strong><small>people · institutions · agents</small></div>
        </div>
      </section>

      <section className="statement" id="thesis">
        <div className="shell statement-grid">
          <p className="section-kicker">The shift</p>
          <div>
            <h2>Interaction design used to design what happens when a person acts on a computer.</h2>
            <h2 className="muted-heading">Agent interaction design asks what happens when a computer acts for a person.</h2>
          </div>
        </div>
      </section>

      <section className="section shell" id="etiquette">
        <div className="section-heading">
          <div>
            <p className="section-kicker">AI etiquette / field notes 001</p>
            <h2>Can my agent do this?</h2>
          </div>
          <p>
            Etiquette is the public doorway into a deeper problem: what can we delegate without changing the social meaning of our actions?
          </p>
        </div>
        <EtiquetteLab />
      </section>

      <section className="section shell asymmetry-section">
        <div className="section-heading compact">
          <div>
            <p className="section-kicker">A first norm</p>
            <h2>Do not save yourself 30 seconds by costing another human 20 minutes.</h2>
          </div>
        </div>
        <div className="asymmetry-grid">
          <div className="equation-card">
            <span>OLD SOCIAL SIGNAL</span>
            <strong>effort sent ≈ effort received</strong>
            <p>Communication used to carry a rough signal of how much attention the sender invested.</p>
          </div>
          <div className="equation-card hot">
            <span>AGENTIC ASYMMETRY</span>
            <strong>effort sent ≪ effort demanded</strong>
            <p>An agent can create polished communication at near-zero cost while imposing very real attention on everyone else.</p>
          </div>
        </div>
      </section>

      <section className="section dark-section" id="principles">
        <div className="shell">
          <div className="section-heading inverse">
            <div>
              <p className="section-kicker">Working draft</p>
              <h2>Six principles for delegated presence</h2>
            </div>
            <p>Not commandments. A starting protocol for designing machines that represent humans without quietly hollowing out human participation.</p>
          </div>
          <div className="principles-grid">
            {principles.map((principle) => (
              <article className="principle-card" key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading compact">
          <div>
            <p className="section-kicker">The spectrum</p>
            <h2>Delegate bureaucracy. Be careful delegating relationship.</h2>
          </div>
        </div>
        <div className="spectrum" aria-label="Delegation spectrum from autonomous to human authored">
          <div className="spectrum-axis"><span>MORE AUTONOMOUS</span><span>MORE HUMAN</span></div>
          <div className="spectrum-bar">
            <span style={{ left: "4%" }}>GDPR</span>
            <span style={{ left: "16%" }}>scheduling</span>
            <span style={{ left: "31%" }}>support</span>
            <span style={{ left: "49%" }}>negotiation</span>
            <span style={{ left: "67%" }}>networking</span>
            <span style={{ left: "82%" }}>apology</span>
            <span style={{ left: "93%" }}>condolence</span>
          </div>
        </div>
      </section>

      <section className="section case-study">
        <div className="shell case-grid">
          <div>
            <p className="section-kicker">Case study 001</p>
            <h2>Green Filter was the first experiment.</h2>
            <p className="case-lead">The project began with a financial AI companion helping young adults make better shopping, saving and investing decisions. The deeper question appeared when advice became agency.</p>
          </div>
          <div className="case-flow">
            <div><span>2025</span><strong>AI recommends</strong><p>“You should probably buy this.”</p></div>
            <div className="flow-arrow">↓</div>
            <div><span>2026</span><strong>AI acts</strong><p>“I bought this for you.”</p></div>
            <div className="flow-arrow">↓</div>
            <div className="case-highlight"><span>NOW</span><strong>Proxy Society</strong><p>What should software be allowed to decide, communicate and do in our name?</p></div>
          </div>
        </div>
      </section>

      <section className="section shell plurality-section">
        <p className="section-kicker">A neighboring idea</p>
        <div className="plurality-grid">
          <h2>A plural society may need plural agents.</h2>
          <div>
            <p>
              Plurality asks how technology can strengthen collaboration across social difference. Proxy Society adds a new question: what happens when people increasingly participate through artificial representatives?
            </p>
            <p>
              One universal agent should not automatically flatten your work-self, friend-self, citizen-self and private-self into a single computational identity. Context is part of human agency.
            </p>
          </div>
        </div>
      </section>

      <section className="section research-section" id="research">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Intellectual lineage</p>
              <h2>This did not start with chatbots.</h2>
            </div>
            <p>Proxy Society sits between interaction design, communication research, philosophy of technology, pluralism and emerging agent standards.</p>
          </div>
          <div className="reading-list">
            {reading.map((item, index) => (
              <a href={item.href} target="_blank" rel="noreferrer" className="reading-row" key={item.title}>
                <span className="reading-index">0{index + 1}</span>
                <div><small>{item.source}</small><strong>{item.title}</strong></div>
                <p>{item.note}</p>
                <span className="external">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section questions-section shell">
        <div className="section-heading compact">
          <div>
            <p className="section-kicker">Research agenda</p>
            <h2>Questions worth making empirical.</h2>
          </div>
        </div>
        <div className="question-grid">
          <p>When does AI assistance become social deception?</p>
          <p>When is effort itself part of the message?</p>
          <p>When must an agent identify itself?</p>
          <p>How much attention may my automation demand from you?</p>
          <p>Which commitments require explicit human authority?</p>
          <p>How do delegation norms differ across cultures?</p>
          <p>Can an agent maintain a relationship without cheapening it?</p>
          <p>What happens when my agent meets your agent?</p>
        </div>
      </section>

      <section className="closing-section">
        <div className="shell closing-grid">
          <div>
            <p className="section-kicker">Proxy Society</p>
            <h2>The social infrastructure of a world in which everyone has an agent.</h2>
          </div>
          <div className="closing-actions">
            <p>Researching AI etiquette, delegated presence and interaction design for machines acting on behalf of humans.</p>
            <a className="button primary light" href="mailto:hello@proxysociety.org">hello@proxysociety.org</a>
          </div>
        </div>
      </section>

      <footer className="site-footer shell">
        <span>© 2026 Proxy Society</span>
        <span>Independent research initiative</span>
        <a href="https://github.com/krishaamer/proxy-society" target="_blank" rel="noreferrer">GitHub ↗</a>
      </footer>
    </main>
  );
}
