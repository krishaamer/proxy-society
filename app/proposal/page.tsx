import type { Metadata } from "next";
import { contributions, methods, questions } from "./data";

export const metadata: Metadata = {
  title: "The Architecture of Presence | Proxy Society",
  description: "A research proposal on delegated presence and humane architecture.",
};

export default function ProposalPage() {
  return <main lang="en">
    <section className="hero shell"><div className="eyebrow">RESEARCH PROPOSAL / ARCHITECTURE</div><h1><span>ARCHITECTURE</span><em>OF PRESENCE</em></h1><p>If AI can increasingly attend, negotiate and act for us, what makes physical presence worth choosing?</p></section>
    <section className="statement"><div className="shell"><h2>AI can increasingly be present for us.</h2><h2 className="muted-heading">Architecture begins where we decide to be present ourselves.</h2></div></section>
    <section className="section shell"><p className="section-kicker">CENTRAL QUESTION</p><h2>What makes presence worth choosing?</h2><p>How does delegated presence change the value, design and social role of physical space, and how can architecture sustain humane forms of co-presence when AI agents act for absent people?</p></section>
    <section className="section dark-section"><div className="shell principles-grid">{contributions.map(([n,t,c]) => <article className="principle-card" key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div></section>
    <section className="section shell"><p className="section-kicker">AALTO AS A VALUE LINEAGE</p><h2>Humane architecture is the value system, not the historical subject.</h2><p>As machines absorb more instrumental activity, architecture may be judged less by how efficiently it processes people and more by whether it creates conditions people actually want to inhabit together.</p></section>
    <section className="section shell" id="method"><p className="section-kicker">RESEARCH PROGRAM</p>{methods.map(m => <article key={m.id}><h3>{m.id} / {m.title}</h3><p>{m.copy}</p></article>)}</section>
    <section className="section shell" id="questions"><p className="section-kicker">OPEN QUESTIONS</p><div className="question-grid">{questions.map((q,i) => <p key={q}><span>Q{String(i+1).padStart(2,"0")}</span>{q}</p>)}</div></section>
    <section className="closing-section"><div className="shell"><h2>The proxy is the technological change. Human presence is the architectural question.</h2></div></section>
  </main>;
}
