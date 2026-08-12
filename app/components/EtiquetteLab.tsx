"use client";

import { useMemo, useState } from "react";

type Scenario = {
  id: string;
  title: string;
  context: string;
  verdict: "delegate" | "care" | "human";
  summary: string;
  meaning: number;
  burden: number;
  authority: number;
  disclosure: "low" | "context" | "high";
  principle: string;
};

type Locale = "en" | "zh-TW";

const scenarios: Record<Locale, Scenario[]> = {
  en: [
    {
      id: "gdpr",
      title: "My agent sends GDPR data requests to 80 services I use.",
      context: "Administrative delegation",
      verdict: "delegate",
      summary: "The wording is not the social meaning. You are exercising a formal right through an authorized tool.",
      meaning: 12,
      burden: 28,
      authority: 35,
      disclosure: "low",
      principle: "Delegate bureaucracy freely when the agent is accurately representing your request.",
    },
    {
      id: "birthday",
      title: "My agent replies to a friend's birthday message for me.",
      context: "Relationship maintenance",
      verdict: "care",
      summary: "The response may look fine, but the effort itself can be part of what your friend believes you are giving them.",
      meaning: 72,
      burden: 18,
      authority: 24,
      disclosure: "context",
      principle: "Do not automate away the part of a relationship where attention is the gift.",
    },
    {
      id: "apology",
      title: "My agent apologizes to my partner after an argument.",
      context: "Emotionally meaningful communication",
      verdict: "human",
      summary: "An apology is not only information. Reflection, accountability and effort are part of the act itself.",
      meaning: 96,
      burden: 22,
      authority: 34,
      disclosure: "high",
      principle: "Use AI as a coach or editor, not as the person doing the emotional work.",
    },
    {
      id: "rate",
      title: "My agent negotiates my freelance rate with a client.",
      context: "Professional representation",
      verdict: "care",
      summary: "Delegation can be appropriate, but the agent needs a clear mandate, limits, escalation rules and accountability.",
      meaning: 38,
      burden: 42,
      authority: 88,
      disclosure: "context",
      principle: "The more an agent can commit you to, the clearer its authority boundaries should be.",
    },
    {
      id: "condolence",
      title: "My agent sends condolences after someone dies.",
      context: "Human presence",
      verdict: "human",
      summary: "The purpose of the message is not efficient information transfer. It is evidence that a person showed up.",
      meaning: 100,
      burden: 15,
      authority: 15,
      disclosure: "high",
      principle: "When human presence is the message, do not delegate the presence.",
    },
    {
      id: "support",
      title: "My agent talks to customer support to cancel a subscription.",
      context: "Transactional representation",
      verdict: "delegate",
      summary: "This is exactly where agents can remove friction without pretending to supply human intimacy or care.",
      meaning: 8,
      burden: 30,
      authority: 46,
      disclosure: "low",
      principle: "Automate routine friction, while keeping the agent within the authority you gave it.",
    },
  ],
  "zh-TW": [
    {
      id: "gdpr",
      title: "我的 AI 代理人替我向 80 個線上服務提出 GDPR 個資請求。",
      context: "行政型委託",
      verdict: "delegate",
      summary: "這類訊息的社會意義不在於你有沒有親手打字，而在於它是否準確代表你正在行使的正式權利。",
      meaning: 12,
      burden: 28,
      authority: 35,
      disclosure: "low",
      principle: "只要代理人忠實代表你的要求，例行行政流程通常很適合委託。",
    },
    {
      id: "birthday",
      title: "朋友祝我生日快樂，我讓 AI 代理人替我回覆。",
      context: "關係維繫",
      verdict: "care",
      summary: "回覆內容可能完全沒問題，但對朋友來說，你願意花時間回應這件事本身，也可能就是訊息的一部分。",
      meaning: 72,
      burden: 18,
      authority: 24,
      disclosure: "context",
      principle: "如果注意力本身就是一份心意，就不要把那一部分完全自動化。",
    },
    {
      id: "apology",
      title: "我和伴侶吵架後，讓 AI 代理人替我道歉。",
      context: "高情感意義溝通",
      verdict: "human",
      summary: "道歉不只是傳遞資訊。反省、承擔責任，以及本人願意付出的心力，都是這個行動的一部分。",
      meaning: 96,
      burden: 22,
      authority: 34,
      disclosure: "high",
      principle: "AI 可以當教練或編輯，但不要讓它代替你完成真正的情緒與責任工作。",
    },
    {
      id: "rate",
      title: "我的 AI 代理人替我和客戶談自由工作者的報價。",
      context: "專業代表",
      verdict: "care",
      summary: "這可以合理委託，但代理人需要清楚的授權範圍、底線、升級規則，以及最後由誰負責。",
      meaning: 38,
      burden: 42,
      authority: 88,
      disclosure: "context",
      principle: "代理人越能替你作出承諾，它的授權邊界就越必須清楚。",
    },
    {
      id: "condolence",
      title: "有人過世後，我讓 AI 代理人替我傳送慰問訊息。",
      context: "人的在場",
      verdict: "human",
      summary: "這種訊息的目的不是有效率地傳達資訊，而是讓對方知道：有一個人真的有出現、有想到他。",
      meaning: 100,
      burden: 15,
      authority: 15,
      disclosure: "high",
      principle: "如果人的在場本身就是訊息，就不要把那個在場委託出去。",
    },
    {
      id: "support",
      title: "我的 AI 代理人替我和客服溝通，取消訂閱。",
      context: "交易型代表",
      verdict: "delegate",
      summary: "這正是 AI 代理人很適合發揮的地方：移除例行摩擦，又不需要假裝提供人際親密或情感關懷。",
      meaning: 8,
      burden: 30,
      authority: 46,
      disclosure: "low",
      principle: "例行摩擦可以自動化，但代理人仍應被限制在你實際授權的範圍內。",
    },
  ],
};

const ui: Record<Locale, {
  verdicts: Record<Scenario["verdict"], string>;
  disclosure: Record<Scenario["disclosure"], string>;
  disclosureLabel: string;
  meaning: string;
  burden: string;
  authority: string;
  principle: string;
  systemLabel: string;
}> = {
  en: {
    verdicts: { delegate: "Delegate", care: "Needs care", human: "Human should act" },
    disclosure: { low: "Usually low", context: "Context dependent", high: "High" },
    disclosureLabel: "Disclosure",
    meaning: "Human meaning",
    burden: "Attention imposed on others",
    authority: "Authority / commitment",
    principle: "Working principle",
    systemLabel: "SOCIAL LEGITIMACY SCAN",
  },
  "zh-TW": {
    verdicts: { delegate: "適合委託", care: "需要謹慎", human: "應由本人行動" },
    disclosure: { low: "通常較低", context: "視情境而定", high: "高" },
    disclosureLabel: "揭露需求",
    meaning: "人的意義",
    burden: "要求他人付出的注意力",
    authority: "授權 / 承諾程度",
    principle: "暫定原則",
    systemLabel: "社會正當性掃描",
  },
};

function Meter({ label, value }: { label: string; value: number }) {
  return (
    <div className="meter-row">
      <div className="meter-label"><span>{label}</span><span>{String(value).padStart(3, "0")}</span></div>
      <div className="meter-track" aria-hidden="true"><div className="meter-fill" style={{ width: `${value}%` }} /></div>
    </div>
  );
}

export default function EtiquetteLab({ locale = "en" }: { locale?: Locale }) {
  const [selectedId, setSelectedId] = useState("gdpr");
  const localizedScenarios = scenarios[locale];
  const labels = ui[locale];
  const selected = useMemo(
    () => localizedScenarios.find((scenario) => scenario.id === selectedId) ?? localizedScenarios[0],
    [localizedScenarios, selectedId],
  );

  return (
    <div className="lab-shell">
      <div className="lab-topline">
        <span>{labels.systemLabel}</span>
        <span>MODE: HUMAN_PROXY / v0.1</span>
      </div>
      <div className="lab-grid">
        <div className="scenario-list" role="list" aria-label="AI delegation scenarios">
          {localizedScenarios.map((scenario, index) => (
            <button
              className={`scenario-button ${selected.id === scenario.id ? "is-active" : ""}`}
              key={scenario.id}
              onClick={() => setSelectedId(scenario.id)}
              type="button"
            >
              <span className="scenario-index">0{index + 1}</span>
              <span className="scenario-context">{scenario.context}</span>
              <span>{scenario.title}</span>
            </button>
          ))}
        </div>

        <article className="verdict-card" aria-live="polite">
          <div className="verdict-topline">
            <span className={`verdict-pill verdict-${selected.verdict}`}>{labels.verdicts[selected.verdict]}</span>
            <span className="small-label">{labels.disclosureLabel}: {labels.disclosure[selected.disclosure]}</span>
          </div>
          <h3>{selected.title}</h3>
          <p className="verdict-summary">{selected.summary}</p>

          <div className="meters">
            <Meter label={labels.meaning} value={selected.meaning} />
            <Meter label={labels.burden} value={selected.burden} />
            <Meter label={labels.authority} value={selected.authority} />
          </div>

          <div className="principle-box"><span>{labels.principle}</span><strong>{selected.principle}</strong></div>
        </article>
      </div>
    </div>
  );
}
