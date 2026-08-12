import EtiquetteLab from "./EtiquetteLab";
import LineageTrail from "./LineageTrail";
import type { SiteContent } from "../site-content";

export default function SitePage({ content }: { content: SiteContent }) {
  const spectrumPositions = [4, 16, 31, 49, 67, 82, 93];

  return (
    <main lang={content.lang}>
      <div className="ambient-grid" aria-hidden="true" />
      <header className="site-header shell">
        <a className="wordmark" href="#top" aria-label="Proxy Society home">
          <span className="mark" aria-hidden="true">P/S</span>
          <span className="wordmark-copy">
            <strong>PROXY SOCIETY</strong>
            <small>HUMAN / AGENT / SOCIETY</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#etiquette">{content.nav.etiquette}</a>
          <a href="#principles">{content.nav.principles}</a>
          <a href="#research">{content.nav.research}</a>
          <a className="locale-switch" href={content.otherLocaleHref}>{content.otherLocaleLabel}</a>
          <a className="nav-cta" href="mailto:hello@proxysociety.org">{content.nav.contact}</a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-status">
          <div className="eyebrow"><span className="pulse" /> {content.hero.eyebrow}</div>
          <span className="system-status">SYS: ONLINE / FIELD: OPEN</span>
        </div>
        <div className="hero-copy-grid">
          <h1><span>{content.hero.titleTop}</span><em>{content.hero.titleAccent}</em></h1>
          <div className="hero-sidecopy">
            <span className="coordinate">59.4370°N / 24.7536°E ↔ 22.9999°N / 120.2269°E</span>
            <p>{content.hero.copy}</p>
            <div className="hero-actions">
              <a className="button primary" href="#etiquette">{content.hero.primary}</a>
              <a className="button ghost" href="#thesis">{content.hero.secondary}</a>
            </div>
          </div>
        </div>

        <div className="hero-console" aria-label="Human to agent to society relationship">
          <div className="console-topline">
            <span>DELEGATED PRESENCE / SIGNAL PATH</span>
            <span>TRACE_ID: PS-2026-001</span>
          </div>
          <div className="hero-diagram">
            {content.hero.nodes.map((node, index) => (
              <div className="diagram-fragment" key={node.number}>
                <div className={`diagram-node ${index === 1 ? "agent" : ""}`}>
                  <span>{node.number}</span>
                  <strong>{node.title}</strong>
                  <small>{node.caption}</small>
                </div>
                {index < content.hero.connectors.length && (
                  <div className="diagram-line"><span>{content.hero.connectors[index]}</span></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="signal-ticker" aria-label="Research themes">
          <span>PROTOCOL WATCH</span>
          <div>
            {content.hero.ticker.map((item) => <b key={item}>{item}</b>)}
          </div>
        </div>
      </section>

      <section className="statement" id="thesis">
        <div className="shell statement-grid">
          <p className="section-kicker">{content.shift.kicker}</p>
          <div>
            <h2>{content.shift.first}</h2>
            <h2 className="muted-heading">{content.shift.second}</h2>
          </div>
        </div>
      </section>

      <section className="section shell" id="etiquette">
        <div className="section-heading">
          <div>
            <p className="section-kicker">{content.etiquette.kicker}</p>
            <h2>{content.etiquette.title}</h2>
          </div>
          <p>{content.etiquette.copy}</p>
        </div>
        <EtiquetteLab locale={content.lang === "zh-Hant-TW" ? "zh-TW" : "en"} />
      </section>

      <section className="section shell asymmetry-section">
        <div className="section-heading compact">
          <div>
            <p className="section-kicker">{content.asymmetry.kicker}</p>
            <h2>{content.asymmetry.title}</h2>
          </div>
        </div>
        <div className="asymmetry-grid">
          <div className="equation-card">
            <span>{content.asymmetry.oldLabel}</span>
            <strong>{content.asymmetry.oldEquation}</strong>
            <p>{content.asymmetry.oldCopy}</p>
          </div>
          <div className="equation-card hot">
            <span>{content.asymmetry.newLabel}</span>
            <strong>{content.asymmetry.newEquation}</strong>
            <p>{content.asymmetry.newCopy}</p>
          </div>
        </div>
      </section>

      <section className="section dark-section" id="principles">
        <div className="shell">
          <div className="section-heading inverse">
            <div>
              <p className="section-kicker">{content.principles.kicker}</p>
              <h2>{content.principles.title}</h2>
            </div>
            <p>{content.principles.intro}</p>
          </div>
          <div className="principles-grid">
            {content.principles.items.map((principle) => (
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
            <p className="section-kicker">{content.spectrum.kicker}</p>
            <h2>{content.spectrum.title}</h2>
          </div>
        </div>
        <div className="spectrum" aria-label="Delegation spectrum">
          <div className="spectrum-axis"><span>{content.spectrum.autonomous}</span><span>{content.spectrum.human}</span></div>
          <div className="spectrum-bar">
            {content.spectrum.labels.map((label, index) => (
              <span key={label} style={{ left: `${spectrumPositions[index]}%` }}>{label}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section case-study">
        <div className="shell case-grid">
          <div>
            <p className="section-kicker">{content.caseStudy.kicker}</p>
            <h2>{content.caseStudy.title}</h2>
            <p className="case-lead">{content.caseStudy.lead}</p>
          </div>
          <div className="case-flow">
            {content.caseStudy.steps.map((step, index) => (
              <div className="case-step-wrap" key={step.year}>
                <div className={index === content.caseStudy.steps.length - 1 ? "case-highlight" : ""}>
                  <span>{step.year}</span><strong>{step.title}</strong><p>{step.copy}</p>
                </div>
                {index < content.caseStudy.steps.length - 1 && <div className="flow-arrow">↓</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell plurality-section">
        <p className="section-kicker">{content.plurality.kicker}</p>
        <div className="plurality-grid">
          <h2>{content.plurality.title}</h2>
          <div>{content.plurality.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
      </section>

      <section className="section research-section" id="research">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="section-kicker">{content.research.kicker}</p>
              <h2>{content.research.title}</h2>
            </div>
            <p>{content.research.copy}</p>
          </div>
          <LineageTrail locale={content.lang === "zh-Hant-TW" ? "zh-TW" : "en"} />
        </div>
      </section>

      <section className="section questions-section shell">
        <div className="section-heading compact">
          <div>
            <p className="section-kicker">{content.questions.kicker}</p>
            <h2>{content.questions.title}</h2>
          </div>
        </div>
        <div className="question-grid">
          {content.questions.items.map((question, index) => (
            <p key={question}><span>Q{String(index + 1).padStart(2, "0")}</span>{question}</p>
          ))}
        </div>
      </section>

      <section className="closing-section">
        <div className="shell closing-grid">
          <div>
            <p className="section-kicker">{content.closing.kicker}</p>
            <h2>{content.closing.title}</h2>
          </div>
          <div className="closing-actions">
            <p>{content.closing.copy}</p>
            <a className="button primary light" href="mailto:hello@proxysociety.org">{content.closing.contact}</a>
          </div>
        </div>
      </section>

      <footer className="site-footer shell">
        <span>© 2026 PROXY SOCIETY</span>
        <span>{content.footer.initiative}</span>
        <a href="https://github.com/krishaamer/proxy-society" target="_blank" rel="noreferrer">{content.footer.github}</a>
      </footer>
    </main>
  );
}
