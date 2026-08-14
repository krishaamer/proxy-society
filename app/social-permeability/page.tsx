import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Permeability Map | Proxy Society",
  description: "A research concept for mapping the architectural conditions that help strangers become non-strangers.",
  alternates: { canonical: "https://proxysociety.org/social-permeability" },
};

const diagramStyle = {
  width: "100%",
  height: "auto",
  display: "block",
  marginTop: "18px",
} as const;

const dimensions = [
  ["01", "SOCIAL PERMEABILITY", "How easily can two strangers begin interacting here?"],
  ["02", "LINGERABILITY", "Does the space give people permission and reason to stay?"],
  ["03", "HUMANE WARMTH", "Does the room feel comfortable, scaled to the body and easy to inhabit?"],
  ["04", "CURIOSITY", "Does the environment invite attention, exploration or conversation?"],
  ["05", "SOLITUDE QUALITY", "Can being alone here feel held rather than exposed?"],
  ["06", "SERENDIPITY YIELD", "How many meaningful encounters occur per hour spent here?"],
] as const;

const spatialVariables = [
  "threshold type",
  "seating orientation",
  "distance between people",
  "inside / outside ambiguity",
  "visibility",
  "light",
  "noise",
  "activity",
  "density",
  "time",
  "weather",
  "lingering time",
] as const;

function CityMapDiagram() {
  return (
    <svg viewBox="0 0 1100 650" role="img" aria-labelledby="map-title map-desc" style={diagramStyle}>
      <title id="map-title">Social permeability map</title>
      <desc id="map-desc">An abstract city map where different places show different probabilities of meaningful stranger interaction.</desc>
      <rect width="1100" height="650" fill="#f2f0e8" />
      <g stroke="#111" strokeWidth="2" fill="none" opacity="0.48">
        <path d="M0 130 H1100 M0 295 H1100 M0 500 H1100" />
        <path d="M165 0 V650 M420 0 V650 M725 0 V650 M930 0 V650" />
        <path d="M0 600 C190 545 270 555 420 595 S730 660 1100 565" />
        <path d="M75 0 C165 170 250 200 360 250 S560 395 660 650" />
      </g>
      <g fill="#111">
        <rect x="205" y="160" width="150" height="88" rx="2" opacity="0.1" />
        <rect x="465" y="325" width="210" height="122" rx="2" opacity="0.1" />
        <rect x="785" y="158" width="110" height="98" rx="2" opacity="0.1" />
        <rect x="760" y="365" width="138" height="92" rx="2" opacity="0.1" />
      </g>
      <g fontFamily="Arial, Helvetica, sans-serif" fill="#111">
        <text x="52" y="66" fontSize="18" letterSpacing="3">TALLINN / OBSERVATION LAYER 01</text>
        <text x="52" y="95" fontSize="13" opacity="0.62">NOT FOOTFALL. NOT RATINGS. EVENTS BETWEEN PEOPLE.</text>
      </g>
      <g stroke="#111" fill="#f2f0e8">
        <circle cx="300" cy="292" r="58" strokeWidth="3" />
        <circle cx="300" cy="292" r="34" strokeWidth="1.5" strokeDasharray="5 6" />
        <circle cx="300" cy="292" r="8" fill="#111" />
        <circle cx="590" cy="245" r="34" strokeWidth="2" />
        <circle cx="590" cy="245" r="7" fill="#111" />
        <circle cx="824" cy="318" r="72" strokeWidth="4" />
        <circle cx="824" cy="318" r="44" strokeWidth="1.5" strokeDasharray="5 6" />
        <circle cx="824" cy="318" r="8" fill="#111" />
        <circle cx="520" cy="535" r="46" strokeWidth="2.5" />
        <circle cx="520" cy="535" r="7" fill="#111" />
      </g>
      <g fontFamily="Arial, Helvetica, sans-serif" fill="#111" fontSize="14">
        <text x="235" y="375">CAFÉ COUNTER</text>
        <text x="235" y="397" opacity="0.62">0.31 encounters / hr</text>
        <text x="625" y="218">TRANSIT EDGE</text>
        <text x="625" y="240" opacity="0.62">0.09 encounters / hr</text>
        <text x="750" y="420">MUSEUM THRESHOLD</text>
        <text x="750" y="442" opacity="0.62">0.46 encounters / hr</text>
        <text x="560" y="536">COURTYARD</text>
        <text x="560" y="558" opacity="0.62">0.22 encounters / hr</text>
      </g>
      <g fontFamily="Arial, Helvetica, sans-serif" fill="#111">
        <text x="52" y="626" fontSize="12" letterSpacing="2" opacity="0.62">CIRCLE SIZE = MEANINGFUL ENCOUNTER RATE / RING = REPEAT OBSERVATIONS</text>
      </g>
    </svg>
  );
}

function SpatialSceneDiagram() {
  return (
    <svg viewBox="0 0 1100 520" role="img" aria-labelledby="scene-title scene-desc" style={diagramStyle}>
      <title id="scene-title">Four spatial conditions for stranger interaction</title>
      <desc id="scene-desc">Four abstract architectural plans comparing open plaza, edge seating, shared table and threshold conditions.</desc>
      <rect width="1100" height="520" fill="#f2f0e8" />
      {[0, 1, 2, 3].map((i) => <rect key={i} x={35 + i * 266} y="74" width="230" height="340" fill="none" stroke="#111" strokeWidth="2" />)}
      <g fontFamily="Arial, Helvetica, sans-serif" fill="#111">
        <text x="35" y="40" fontSize="15" letterSpacing="3">SAME NUMBER OF PEOPLE. DIFFERENT ARCHITECTURE.</text>

        <text x="55" y="110" fontSize="14">OPEN PLAZA</text>
        <text x="55" y="388" fontSize="12" opacity="0.62">LOW PERMISSION TO INTERACT</text>
        <circle cx="95" cy="190" r="10" fill="#111" /><circle cx="192" cy="168" r="10" fill="#111" /><circle cx="120" cy="292" r="10" fill="#111" /><circle cx="220" cy="320" r="10" fill="#111" />
        <path d="M90 210 l-22 42 M197 188 l20 40 M125 272 l18 -38 M215 300 l-25 -36" stroke="#111" strokeWidth="2" opacity="0.35" />

        <text x="321" y="110" fontSize="14">EDGE SEATING</text>
        <text x="321" y="388" fontSize="12" opacity="0.62">LINGERING CREATES OVERLAP</text>
        <path d="M350 150 V338 H500" stroke="#111" strokeWidth="9" fill="none" opacity="0.16" />
        <circle cx="378" cy="214" r="10" fill="#111" /><circle cx="378" cy="258" r="10" fill="#111" /><circle cx="438" cy="310" r="10" fill="#111" /><circle cx="480" cy="310" r="10" fill="#111" />
        <path d="M389 214 H425 M389 258 H425 M450 310 H468" stroke="#111" strokeWidth="2" strokeDasharray="4 5" />

        <text x="587" y="110" fontSize="14">SHARED TABLE</text>
        <text x="587" y="388" fontSize="12" opacity="0.62">OBJECT CREATES SOCIAL EXCUSE</text>
        <rect x="634" y="198" width="135" height="84" rx="2" fill="none" stroke="#111" strokeWidth="7" opacity="0.16" />
        <circle cx="615" cy="218" r="10" fill="#111" /><circle cx="789" cy="218" r="10" fill="#111" /><circle cx="660" cy="310" r="10" fill="#111" /><circle cx="745" cy="310" r="10" fill="#111" />
        <path d="M627 218 H778 M670 296 L735 232 M735 296 L670 232" stroke="#111" strokeWidth="2" strokeDasharray="4 5" />

        <text x="853" y="110" fontSize="14">THRESHOLD</text>
        <text x="853" y="388" fontSize="12" opacity="0.62">ARRIVAL CREATES A MOMENT</text>
        <path d="M910 150 V340 M910 245 H1018" stroke="#111" strokeWidth="8" opacity="0.16" />
        <circle cx="880" cy="232" r="10" fill="#111" /><circle cx="945" cy="232" r="10" fill="#111" /><circle cx="885" cy="285" r="10" fill="#111" /><circle cx="955" cy="285" r="10" fill="#111" />
        <path d="M892 232 H934 M897 285 H943" stroke="#111" strokeWidth="2" strokeDasharray="4 5" />
      </g>
    </svg>
  );
}

function RouteDiagram() {
  return (
    <svg viewBox="0 0 1100 470" role="img" aria-labelledby="route-title route-desc" style={diagramStyle}>
      <title id="route-title">Shortest route versus serendipity route</title>
      <desc id="route-desc">Two routes between the same origin and destination, one optimized for distance and one for the probability of meaningful encounters.</desc>
      <rect width="1100" height="470" fill="#111" />
      <g stroke="#f2f0e8" fill="none" opacity="0.28" strokeWidth="2">
        <path d="M80 100 H1020 M80 220 H1020 M80 360 H1020" />
        <path d="M170 55 V420 M360 55 V420 M590 55 V420 M820 55 V420" />
      </g>
      <g fill="#f2f0e8" fontFamily="Arial, Helvetica, sans-serif">
        <text x="70" y="42" fontSize="15" letterSpacing="3">WHAT DO YOU WANT TO HAPPEN TO YOU ON THE WAY?</text>
        <circle cx="120" cy="370" r="10" /><circle cx="980" cy="95" r="10" />
        <text x="70" y="410" fontSize="12" opacity="0.7">START</text><text x="942" y="70" fontSize="12" opacity="0.7">DESTINATION</text>
      </g>
      <path d="M120 370 L980 95" stroke="#f2f0e8" strokeWidth="3" opacity="0.5" />
      <path d="M120 370 C200 360 190 245 335 255 S480 355 570 280 S680 130 800 165 S900 150 980 95" stroke="#f2f0e8" strokeWidth="5" fill="none" strokeDasharray="13 9" />
      <g stroke="#f2f0e8" fill="#111">
        <circle cx="335" cy="255" r="36" strokeWidth="2" /><circle cx="570" cy="280" r="48" strokeWidth="2" /><circle cx="800" cy="165" r="41" strokeWidth="2" />
      </g>
      <g fill="#f2f0e8" fontFamily="Arial, Helvetica, sans-serif" fontSize="12">
        <text x="278" y="310">CAFÉ / 0.31</text><text x="520" y="347">COURTYARD / 0.22</text><text x="740" y="225">MUSEUM / 0.46</text>
        <text x="650" y="410" opacity="0.62">SOLID: SHORTEST ROUTE</text><text x="830" y="410">DASHED: SERENDIPITY ROUTE</text>
      </g>
    </svg>
  );
}

function EncounterDiagram() {
  return (
    <svg viewBox="0 0 1100 330" role="img" aria-labelledby="encounter-title encounter-desc" style={diagramStyle}>
      <title id="encounter-title">The event is the unit of the map</title>
      <desc id="encounter-desc">A diagram showing two people, the spatial condition between them and the encounter event that is logged.</desc>
      <rect width="1100" height="330" fill="#f2f0e8" />
      <g stroke="#111" fill="none" strokeWidth="2">
        <circle cx="160" cy="150" r="45" /><circle cx="940" cy="150" r="45" />
        <path d="M205 150 H430 M670 150 H895" strokeDasharray="7 7" />
        <rect x="430" y="88" width="240" height="124" rx="62" />
      </g>
      <g fill="#111" fontFamily="Arial, Helvetica, sans-serif" textAnchor="middle">
        <text x="160" y="155" fontSize="15">STRANGER A</text>
        <text x="940" y="155" fontSize="15">STRANGER B</text>
        <text x="550" y="137" fontSize="14" letterSpacing="2">SPATIAL CONDITION</text>
        <text x="550" y="164" fontSize="13" opacity="0.62">threshold + seating + light + noise</text>
        <text x="550" y="188" fontSize="13" opacity="0.62">+ density + time + activity</text>
        <text x="550" y="270" fontSize="16">EVENT: conversation begins / continues / changes trajectory</text>
      </g>
    </svg>
  );
}

export default function SocialPermeabilityPage() {
  return (
    <main lang="en">
      <div className="ambient-grid" aria-hidden="true" />

      <section className="hero shell">
        <div className="hero-status">
          <div className="eyebrow">RESEARCH CONCEPT / ARCHITECTURE MAP</div>
          <span className="system-status">SYS: PROXY SOCIETY / FIELD: SOCIAL SPACE</span>
        </div>
        <div className="hero-copy-grid">
          <h1><span>SOCIAL</span><em>PERMEABILITY</em></h1>
          <div className="hero-sidecopy">
            <span className="coordinate">ARCHITECTURE / SERENDIPITY / STRANGER INTERACTION</span>
            <p>A map of the places where architecture helps strangers become non-strangers.</p>
          </div>
        </div>
      </section>

      <section className="statement">
        <div className="shell statement-grid">
          <p className="section-kicker">PROPOSITION</p>
          <div>
            <h2>Most maps tell us where things are.</h2>
            <h2 className="muted-heading">This one asks what is likely to happen between people there.</h2>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div><p className="section-kicker">THE MAP</p><h2>Measure the social performance of architecture.</h2></div>
          <p>Footfall tells us how many bodies pass through a place. Ratings tell us whether people liked a venue. Neither tells us whether the architecture creates moments in which strangers can comfortably notice, approach and speak to one another.</p>
        </div>
        <div className="equation-card" style={{ marginTop: 28 }}>
          <span>MAP LAYER 01 / ENCOUNTER RATE</span>
          <strong>Meaningful encounters per hour</strong>
          <p>The map grows from repeated lived observations, not from a one-time opinion about a place.</p>
          <CityMapDiagram />
        </div>
      </section>

      <section className="section dark-section">
        <div className="shell">
          <div className="section-heading inverse">
            <div><p className="section-kicker">UNIT OF ANALYSIS</p><h2>The basic unit is not the building. It is the event between people.</h2></div>
            <p>Every encounter can be connected back to the spatial condition that made it easier, harder or simply possible. Architecture becomes observable through what people actually do in it.</p>
          </div>
          <div style={{ background: "#f2f0e8", padding: 10 }}><EncounterDiagram /></div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading compact">
          <div><p className="section-kicker">SPATIAL HYPOTHESIS</p><h2>Same people. Different room. Different probability.</h2></div>
        </div>
        <SpatialSceneDiagram />
      </section>

      <section className="section shell">
        <div className="section-heading compact">
          <div><p className="section-kicker">WHAT TO TRACK</p><h2>From feeling to architectural variables</h2></div>
        </div>
        <div className="asymmetry-grid">
          {dimensions.map(([id, title, copy]) => (
            <article className="equation-card" key={id}>
              <span>{id}</span>
              <strong>{title}</strong>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div><p className="section-kicker">OBSERVATION SCHEMA</p><h2>Record the architecture around the encounter.</h2></div>
          <p>The point is not to reduce an encounter to a score. The point is to create enough structured observations that spatial patterns can emerge across cafés, museums, libraries, stations, courtyards, streets and thresholds.</p>
        </div>
        <div className="question-grid">
          {spatialVariables.map((variable, i) => <p key={variable}><span>V{String(i + 1).padStart(2, "0")}</span>{variable}</p>)}
        </div>
      </section>

      <section className="section dark-section">
        <div className="shell">
          <div className="section-heading inverse">
            <div><p className="section-kicker">ROUTING</p><h2>Maps currently optimize distance. They could optimize possibility.</h2></div>
            <p>The route can change depending on what a person wants from the city: calm, solitude, work, curiosity, warmth or a higher probability of an unexpected conversation.</p>
          </div>
          <RouteDiagram />
        </div>
      </section>

      <section className="section shell" id="method">
        <div className="section-heading compact">
          <div><p className="section-kicker">FIELD METHOD</p><h2>Build it one city, one walk and one encounter at a time.</h2></div>
        </div>
        <div className="case-flow">
          <div className="case-step-wrap"><div><span>01</span><strong>OBSERVE</strong><p>Walk, sit and linger in deliberately varied spatial conditions.</p></div><div className="flow-arrow">↓</div></div>
          <div className="case-step-wrap"><div><span>02</span><strong>LOG</strong><p>Record place, time, architectural variables, encounter, depth and whether contact continued.</p></div><div className="flow-arrow">↓</div></div>
          <div className="case-step-wrap"><div><span>03</span><strong>REPEAT</strong><p>Return at different times so one lucky conversation does not become a false architectural claim.</p></div><div className="flow-arrow">↓</div></div>
          <div className="case-step-wrap"><div><span>04</span><strong>COMPARE</strong><p>Look for spatial arrangements that repeatedly increase or suppress interaction.</p></div><div className="flow-arrow">↓</div></div>
          <div className="case-step-wrap"><div><span>05</span><strong>MAP</strong><p>Turn the observations into a navigable layer of social permeability across the city.</p></div></div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div><p className="section-kicker">WHY PROXY SOCIETY</p><h2>As more instrumental interaction is delegated, accidental human contact becomes a design question.</h2></div>
          <p>Proxy Society asks what happens when machines increasingly act, negotiate and communicate on our behalf. A social permeability map studies the complementary question: when we do choose physical presence, what kinds of architecture make that presence socially meaningful?</p>
        </div>
      </section>

      <section className="section questions-section shell">
        <div className="section-heading compact"><div><p className="section-kicker">RESEARCH QUESTIONS</p><h2>Questions the map could answer</h2></div></div>
        <div className="question-grid">
          <p><span>Q01</span>Which spatial arrangements most reliably allow strangers to begin talking?</p>
          <p><span>Q02</span>Does edge seating outperform open plazas for meaningful encounters?</p>
          <p><span>Q03</span>Which thresholds create useful moments of hesitation, waiting and mutual visibility?</p>
          <p><span>Q04</span>Can humane warmth and social permeability be measured without flattening them?</p>
          <p><span>Q05</span>Which routes maximize serendipity without turning human contact into optimization theatre?</p>
          <p><span>Q06</span>Can a city be mapped by the probability that something unexpected happens to you?</p>
        </div>
      </section>

      <section className="closing-section">
        <div className="shell closing-grid">
          <div><p className="section-kicker">THE SHIFT</p><h2>From where do you want to go? to what do you want to happen to you on the way?</h2></div>
          <div className="closing-actions">
            <p>The map is a research instrument, an architectural critique and potentially a new kind of navigation layer.</p>
            <a href="/proposal" style={{ color: "inherit", textDecoration: "underline", textUnderlineOffset: 5 }}>Read The Architecture of Presence</a>
          </div>
        </div>
      </section>
    </main>
  );
}
