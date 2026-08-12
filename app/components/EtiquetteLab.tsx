"use client";

import { useMemo, useState } from "react";

type Scenario = {
  id: string;
  title: string;
  context: string;
  verdict: "Delegate" | "Needs care" | "Human should act";
  summary: string;
  meaning: number;
  burden: number;
  authority: number;
  disclosure: "Usually low" | "Context dependent" | "High";
  principle: string;
};

const scenarios: Scenario[] = [
  {
    id: "gdpr",
    title: "My agent sends GDPR data requests to 80 services I use.",
    context: "Administrative delegation",
    verdict: "Delegate",
    summary: "The wording is not the social meaning. You are exercising a formal right through an authorized tool.",
    meaning: 12,
    burden: 28,
    authority: 35,
    disclosure: "Usually low",
    principle: "Delegate bureaucracy freely when the agent is accurately representing your request.",
  },
  {
    id: "birthday",
    title: "My agent replies to a friend's birthday message for me.",
    context: "Relationship maintenance",
    verdict: "Needs care",
    summary: "The response may look fine, but the effort itself can be part of what your friend believes you are giving them.",
    meaning: 72,
    burden: 18,
    authority: 24,
    disclosure: "Context dependent",
    principle: "Do not automate away the part of a relationship where attention is the gift.",
  },
  {
    id: "apology",
    title: "My agent apologizes to my partner after an argument.",
    context: "Emotionally meaningful communication",
    verdict: "Human should act",
    summary: "An apology is not only information. Reflection, accountability and effort are part of the act itself.",
    meaning: 96,
    burden: 22,
    authority: 34,
    disclosure: "High",
    principle: "Use AI as a coach or editor, not as the person doing the emotional work.",
  },
  {
    id: "rate",
    title: "My agent negotiates my freelance rate with a client.",
    context: "Professional representation",
    verdict: "Needs care",
    summary: "Delegation can be appropriate, but the agent needs a clear mandate, limits, escalation rules and accountability.",
    meaning: 38,
    burden: 42,
    authority: 88,
    disclosure: "Context dependent",
    principle: "The more an agent can commit you to, the clearer its authority boundaries should be.",
  },
  {
    id: "condolence",
    title: "My agent sends condolences after someone dies.",
    context: "Human presence",
    verdict: "Human should act",
    summary: "The purpose of the message is not efficient information transfer. It is evidence that a person showed up.",
    meaning: 100,
    burden: 15,
    authority: 15,
    disclosure: "High",
    principle: "When human presence is the message, do not delegate the presence.",
  },
  {
    id: "support",
    title: "My agent talks to customer support to cancel a subscription.",
    context: "Transactional representation",
    verdict: "Delegate",
    summary: "This is exactly where agents can remove friction without pretending to supply human intimacy or care.",
    meaning: 8,
    burden: 30,
    authority: 46,
    disclosure: "Usually low",
    principle: "Automate routine friction, while keeping the agent within the authority you gave it.",
  },
];

function Meter({ label, value }: { label: string; value: number }) {
  return (
    <div className="meter-row">
      <div className="meter-label">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="meter-track" aria-hidden="true">
        <div className="meter-fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export default function EtiquetteLab() {
  const [selectedId, setSelectedId] = useState("gdpr");
  const selected = useMemo(
    () => scenarios.find((scenario) => scenario.id === selectedId) ?? scenarios[0],
    [selectedId],
  );

  return (
    <div className="lab-grid">
      <div className="scenario-list" role="list" aria-label="AI delegation scenarios">
        {scenarios.map((scenario) => (
          <button
            className={`scenario-button ${selected.id === scenario.id ? "is-active" : ""}`}
            key={scenario.id}
            onClick={() => setSelectedId(scenario.id)}
            type="button"
          >
            <span className="scenario-context">{scenario.context}</span>
            <span>{scenario.title}</span>
          </button>
        ))}
      </div>

      <article className="verdict-card" aria-live="polite">
        <div className="verdict-topline">
          <span className={`verdict-pill verdict-${selected.verdict.toLowerCase().replaceAll(" ", "-")}`}>
            {selected.verdict}
          </span>
          <span className="small-label">Disclosure: {selected.disclosure}</span>
        </div>
        <h3>{selected.title}</h3>
        <p className="verdict-summary">{selected.summary}</p>

        <div className="meters">
          <Meter label="Human meaning" value={selected.meaning} />
          <Meter label="Attention imposed on others" value={selected.burden} />
          <Meter label="Authority / commitment" value={selected.authority} />
        </div>

        <div className="principle-box">
          <span>Working principle</span>
          <strong>{selected.principle}</strong>
        </div>
      </article>
    </div>
  );
}
