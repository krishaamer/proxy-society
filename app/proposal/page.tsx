import type { Metadata } from "next";
import {
  architecturalClaims,
  centralQuestions,
  methods,
  outputs,
  spatialTypologies,
} from "./data";

export const metadata: Metadata = {
  title: "The Architecture of Presence | Proxy Society",
  description: "A research proposal on delegated presence, humane architecture and the spatial consequences of AI agents acting on behalf of humans.",
};

const diagramStyle = { width: "100%", height: "auto", display: "block", marginTop: "18px" } as const;

export default function ProposalPage() {
  return <main lang="en">
    <div className="ambient-grid" aria-hidden="true" />

    <section className="hero shell">
      <div className="hero-status">
        <div className="eyebrow">RESEARCH PROPOSAL / ARCHITECTURE</div>
        <span className="system-status">SYS: PROXY SOCIETY / FIELD: BUILT ENVIRONMENT</span>
      </div>
      <div className="hero-copy-grid">
        <h1><span>ARCHITECTURE</span><em>OF PRESENCE</em></h1>
        <div className="hero-sidecopy">
          <span className="coordinate">DELEGATED PRESENCE / CHOSEN PRESENCE / HUMANE SPACE</span>
          <p>If AI can increasingly attend, negotiate and act for us, what makes physical presence worth choosing, and how should architecture respond?</p>
        </div>
      </div>
    </section>

    <section className="statement">
      <div className="shell statement-grid">
        <p className="section-kicker">THESIS</p>
        <div><h2>AI can increasingly be present for us.</h2><h2 className="muted-heading">Architecture begins where we still decide to be present ourselves.</h2></div>
      </div>
    </section>

    <section className="section shell">
      <div className="section-heading">
        <div><p className="section-kicker">ARCHITECTURAL QUESTION</p><h2>What makes presence worth choosing?</h2></div>
        <p>This project asks how delegated presence changes the value, design and social role of physical space. Rather than treating AI as a layer added to buildings, it treats proxy action as a pressure that reorganises thresholds, waiting, assembly, work, learning, care and hospitality.</p>
      </div>
    </section>

    <section className="section shell">
      <div className="section-heading compact"><div><p className="section-kicker">SPATIAL IMAGINATION</p><h2>Three architectural scenes</h2></div></div>
      <div className="principles-grid">
        <article className="equation-card"><span>SCENE 01 / SECTION</span><strong>Threshold / reception</strong><p>A lobby becomes a negotiation between bodily arrival and delegated arrival.</p><img src="/proposal/threshold-reception.svg" alt="Section diagram of a reception threshold shared by humans and proxies" style={diagramStyle} /></article>
        <article className="equation-card"><span>SCENE 02 / PLAN</span><strong>Room of deliberation</strong><p>A classroom, studio or civic forum hosts present bodies alongside represented participants.</p><img src="/proposal/room-deliberation.svg" alt="Plan diagram of a room mixing human and proxy participation" style={diagramStyle} /></article>
        <article className="equation-card"><span>SCENE 03 / SECTION</span><strong>Domestic dispatch</strong><p>The home becomes a place from which a person sends delegated presence into outside systems.</p><img src="/proposal/domestic-dispatch.svg" alt="Section diagram of a person at home dispatching proxies into external systems" style={diagramStyle} /></article>
      </div>
    </section>

    <section className="section dark-section">
      <div className="shell">
        <div className="section-heading inverse">
          <div><p className="section-kicker">ARCHITECTURAL CLAIMS</p><h2>From interaction to spatial order</h2></div>
          <p>The research becomes architectural when it moves from etiquette alone to rooms, institutions, circulation, interfaces, thresholds and the embodied conditions of co-presence.</p>
        </div>
        <div className="principles-grid">{architecturalClaims.map(([n,t,c]) => <article className="principle-card" key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div>
      </div>
    </section>

    <section className="section shell">
      <div className="section-heading">
        <div><p className="section-kicker">AALTO AS VALUE LINEAGE</p><h2>Humane architecture is the value system, not the historical subject.</h2></div>
        <p>The Aalto reference anchors the project in warmth, tactility, scale, light, social softness, retreat and embodied comfort. As machines absorb instrumental activity, architecture may be judged less by how efficiently it processes people and more by whether it creates places people genuinely want to inhabit together.</p>
      </div>
    </section>

    <section className="section shell">
      <div className="section-heading compact"><div><p className="section-kicker">TYPOLOGIES</p><h2>Where Proxy Society meets architecture</h2></div></div>
      <div className="asymmetry-grid">{spatialTypologies.map(item => <article className="equation-card" key={item.title}><strong>{item.title}</strong><p>{item.copy}</p></article>)}</div>
    </section>

    <section className="section shell" id="method">
      <div className="section-heading compact"><div><p className="section-kicker">RESEARCH PROGRAM</p><h2>Architecture through fieldwork, film and prototyping</h2></div></div>
      <div className="case-flow">{methods.map((m,i) => <div className="case-step-wrap" key={m.id}><div><span>{m.id}</span><strong>{m.title}</strong><p>{m.copy}</p></div>{i < methods.length - 1 && <div className="flow-arrow">↓</div>}</div>)}</div>
    </section>

    <section className="section shell">
      <div className="section-heading compact"><div><p className="section-kicker">EXPECTED OUTPUTS</p><h2>What the dissertation should produce</h2></div></div>
      <div className="question-grid">{outputs.map((item,i) => <p key={item}><span>O{String(i+1).padStart(2,"0")}</span>{item}</p>)}</div>
    </section>

    <section className="section questions-section shell" id="questions">
      <div className="section-heading compact"><div><p className="section-kicker">OPEN QUESTIONS</p><h2>Questions that remain architecturally alive</h2></div></div>
      <div className="question-grid">{centralQuestions.map((q,i) => <p key={q}><span>Q{String(i+1).padStart(2,"0")}</span>{q}</p>)}</div>
    </section>

    <section className="closing-section">
      <div className="shell closing-grid">
        <div><p className="section-kicker">PROPOSITION</p><h2>The proxy is the technological change. Human presence is the architectural question.</h2></div>
        <div className="closing-actions"><p>The dissertation's wager is that the rise of proxies does not make architecture less important. It makes the spatial, social and sensory value of being somewhere together newly visible.</p></div>
      </div>
    </section>
  </main>;
}
