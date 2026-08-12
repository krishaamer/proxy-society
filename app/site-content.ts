export type SiteContent = {
  lang: string;
  localeLabel: string;
  otherLocaleLabel: string;
  otherLocaleHref: string;
  nav: { etiquette: string; principles: string; research: string; contact: string };
  hero: {
    eyebrow: string;
    titleTop: string;
    titleAccent: string;
    copy: string;
    primary: string;
    secondary: string;
    nodes: { number: string; title: string; caption: string }[];
    connectors: string[];
    ticker: string[];
  };
  shift: { kicker: string; first: string; second: string };
  etiquette: { kicker: string; title: string; copy: string };
  asymmetry: {
    kicker: string;
    title: string;
    oldLabel: string;
    oldEquation: string;
    oldCopy: string;
    newLabel: string;
    newEquation: string;
    newCopy: string;
  };
  principles: {
    kicker: string;
    title: string;
    intro: string;
    items: { number: string; title: string; copy: string }[];
  };
  spectrum: {
    kicker: string;
    title: string;
    autonomous: string;
    human: string;
    labels: string[];
  };
  caseStudy: {
    kicker: string;
    title: string;
    lead: string;
    steps: { year: string; title: string; copy: string }[];
  };
  plurality: { kicker: string; title: string; copy: string[] };
  research: {
    kicker: string;
    title: string;
    copy: string;
    items: { source: string; title: string; note: string; href: string }[];
  };
  questions: { kicker: string; title: string; items: string[] };
  closing: { kicker: string; title: string; copy: string; contact: string };
  footer: { initiative: string; github: string };
};

const researchItems = [
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
    note: "Technical standards are forming around agents functioning on behalf of users. The social layer remains open.",
    href: "https://www.nist.gov/artificial-intelligence/ai-agent-standards-initiative",
  },
  {
    source: "European Commission, 2026",
    title: "AI transparency obligations",
    note: "Article 50 transparency rules make agent identity and disclosure a live societal design question.",
    href: "https://digital-strategy.ec.europa.eu/en/library/guidelines-transparency-obligations-providers-and-deployers-ai-systems",
  },
];

export const englishContent: SiteContent = {
  lang: "en",
  localeLabel: "EN",
  otherLocaleLabel: "繁中",
  otherLocaleHref: "/zh-tw",
  nav: { etiquette: "Etiquette", principles: "Principles", research: "Research", contact: "Transmit" },
  hero: {
    eyebrow: "AI AGENT INTERACTION DESIGN / SOCIAL PROTOCOLS / EST. 2026",
    titleTop: "AI acts for us now.",
    titleAccent: "What is polite?",
    copy: "Proxy Society is an independent research and design initiative studying the social rules of AI agents acting on behalf of humans.",
    primary: "Enter the etiquette lab",
    secondary: "Read the thesis",
    nodes: [
      { number: "01", title: "YOU", caption: "intent / values / context" },
      { number: "02", title: "AI AGENT", caption: "delegation / representation" },
      { number: "03", title: "SOCIETY", caption: "people / institutions / agents" },
    ],
    connectors: ["delegate", "act"],
    ticker: ["AUTHORITY", "DISCLOSURE", "RECIPROCITY", "ATTENTION", "CONTEXT", "HANDOFF", "PLURALITY", "ACCOUNTABILITY"],
  },
  shift: {
    kicker: "THE SHIFT / 001",
    first: "Interaction design used to design what happens when a person acts on a computer.",
    second: "Agent interaction design asks what happens when a computer acts for a person.",
  },
  etiquette: {
    kicker: "AI ETIQUETTE / FIELD NOTES 001",
    title: "Can my agent do this?",
    copy: "Etiquette is the public doorway into a deeper problem: what can we delegate without changing the social meaning of our actions?",
  },
  asymmetry: {
    kicker: "A FIRST NORM",
    title: "Do not save yourself 30 seconds by costing another human 20 minutes.",
    oldLabel: "OLD SOCIAL SIGNAL",
    oldEquation: "effort sent ≈ effort received",
    oldCopy: "Communication used to carry a rough signal of how much attention the sender invested.",
    newLabel: "AGENTIC ASYMMETRY",
    newEquation: "effort sent ≪ effort demanded",
    newCopy: "An agent can generate polished communication at near-zero cost while imposing very real attention on everyone else.",
  },
  principles: {
    kicker: "WORKING PROTOCOL / DRAFT 0.1",
    title: "Six principles for delegated presence",
    intro: "Not commandments. A starting protocol for machines that represent humans without quietly hollowing out human participation.",
    items: [
      { number: "01", title: "Meaning before efficiency", copy: "Ask whether effort, attention or personal reflection are part of what the action communicates." },
      { number: "02", title: "Do not export attention costs", copy: "Saving yourself seconds does not justify creating minutes of reading, filtering or emotional labor for someone else." },
      { number: "03", title: "Authority needs edges", copy: "An agent that can promise, buy, negotiate or commit needs a clear mandate, limits and a path back to the human." },
      { number: "04", title: "Disclosure follows consequence", copy: "The more another person would behave differently if they knew an agent was involved, the stronger the case for disclosure." },
      { number: "05", title: "Preserve contextual plurality", copy: "Access to one part of a person's life does not grant authority over every identity, relationship or community they belong to." },
      { number: "06", title: "Keep human handoff real", copy: "Some actions should not merely require approval. They should return authorship and responsibility to the person." },
    ],
  },
  spectrum: {
    kicker: "DELEGATION SPECTRUM",
    title: "Delegate bureaucracy. Be careful delegating relationship.",
    autonomous: "MORE AUTONOMOUS",
    human: "MORE HUMAN",
    labels: ["GDPR", "scheduling", "support", "negotiation", "networking", "apology", "condolence"],
  },
  caseStudy: {
    kicker: "CASE STUDY 001 / GREEN FILTER",
    title: "The first experiment was already about delegation.",
    lead: "Green Filter began as a financial AI companion helping young adults make better shopping, saving and investing decisions. The deeper design question appeared when advice became agency.",
    steps: [
      { year: "2025", title: "AI recommends", copy: "You should probably buy this." },
      { year: "2026", title: "AI acts", copy: "I bought this for you." },
      { year: "NOW", title: "Proxy Society", copy: "What should software be allowed to decide, communicate and do in our name?" },
    ],
  },
  plurality: {
    kicker: "NEIGHBORING IDEA / PLURALITY",
    title: "A plural society may need plural agents.",
    copy: [
      "Plurality asks how technology can strengthen collaboration across social difference. Proxy Society adds a new question: what happens when people increasingly participate through artificial representatives?",
      "One universal agent should not flatten your work-self, friend-self, citizen-self and private-self into one computational identity. Context is part of human agency.",
    ],
  },
  research: {
    kicker: "INTELLECTUAL LINEAGE",
    title: "This did not start with chatbots.",
    copy: "Proxy Society sits between interaction design, communication research, philosophy of technology, pluralism and emerging agent standards.",
    items: researchItems,
  },
  questions: {
    kicker: "RESEARCH AGENDA",
    title: "Questions worth making empirical.",
    items: [
      "When does AI assistance become social deception?",
      "When is effort itself part of the message?",
      "When must an agent identify itself?",
      "How much attention may my automation demand from you?",
      "Which commitments require explicit human authority?",
      "How do delegation norms differ across cultures?",
      "Can an agent maintain a relationship without cheapening it?",
      "What happens when my agent meets your agent?",
    ],
  },
  closing: {
    kicker: "PROXY SOCIETY / OPEN CHANNEL",
    title: "The social infrastructure of a world in which everyone has an agent.",
    copy: "Researching AI etiquette, delegated presence and interaction design for machines acting on behalf of humans.",
    contact: "hello@proxysociety.org",
  },
  footer: { initiative: "Independent research initiative", github: "GitHub ↗" },
};

export const traditionalChineseContent: SiteContent = {
  lang: "zh-Hant-TW",
  localeLabel: "繁中",
  otherLocaleLabel: "EN",
  otherLocaleHref: "/",
  nav: { etiquette: "AI 禮儀", principles: "原則", research: "研究", contact: "聯絡" },
  hero: {
    eyebrow: "AI 代理人互動設計 / 社會協議 / 2026 起",
    titleTop: "AI 已經開始替我們行動。",
    titleAccent: "怎樣才算有禮貌？",
    copy: "Proxy Society 是一個獨立研究與設計計畫，研究 AI 代理人代表人類行動時，正在形成的社會規範。",
    primary: "進入 AI 禮儀實驗室",
    secondary: "閱讀核心命題",
    nodes: [
      { number: "01", title: "你", caption: "意圖 / 價值 / 情境" },
      { number: "02", title: "AI 代理人", caption: "委託 / 代表" },
      { number: "03", title: "社會", caption: "人 / 制度 / 代理人" },
    ],
    connectors: ["委託", "行動"],
    ticker: ["授權", "揭露", "互惠", "注意力", "情境", "交還", "多元性", "責任"],
  },
  shift: {
    kicker: "轉變 / 001",
    first: "互動設計過去主要設計的是，人對電腦採取行動時會發生什麼。",
    second: "AI 代理人互動設計開始面對另一個問題：當電腦替人行動時，會發生什麼？",
  },
  etiquette: {
    kicker: "AI 禮儀 / 田野筆記 001",
    title: "這件事可以交給我的 AI 代理人嗎？",
    copy: "禮儀只是入口。更深層的問題是：我們可以把哪些事情交給 AI，而不改變這個行動原本的人際與社會意義？",
  },
  asymmetry: {
    kicker: "第一條暫定規範",
    title: "不要為了替自己省 30 秒，讓另一個人多花 20 分鐘。",
    oldLabel: "過去的社會訊號",
    oldEquation: "付出的心力 ≈ 對方接收到的心力",
    oldCopy: "一段訊息通常多少會透露，發送者究竟投入了多少注意力與時間。",
    newLabel: "代理式不對稱",
    newEquation: "付出的心力 ≪ 要求別人付出的心力",
    newCopy: "AI 幾乎零成本就能生成完整、禮貌、看似用心的內容，但閱讀、判斷與回應的成本仍由另一個真人承擔。",
  },
  principles: {
    kicker: "工作協議 / 草案 0.1",
    title: "代理式在場的六項原則",
    intro: "這不是戒律，而是一份起點：讓機器代表人類時，不會默默把人的參與本身掏空。",
    items: [
      { number: "01", title: "意義先於效率", copy: "先判斷一個行動的意義，是否本來就包含投入時間、注意力或親自思考。" },
      { number: "02", title: "不要把注意力成本丟給別人", copy: "替自己省幾秒，不代表可以合理地讓別人多花幾分鐘閱讀、篩選或承擔情緒勞動。" },
      { number: "03", title: "授權必須有邊界", copy: "能夠承諾、購買、議價或作出決定的代理人，需要清楚的授權範圍、限制，以及回到真人的路徑。" },
      { number: "04", title: "後果越大，揭露越重要", copy: "如果對方知道 AI 參與後會採取不同做法，就越有理由主動揭露。" },
      { number: "05", title: "保留情境中的多元身分", copy: "能接觸你生活中的一個面向，不代表代理人就有權跨越你的所有身分、關係與社群。" },
      { number: "06", title: "真正把行動交還給人", copy: "有些事情不該只是按下核准鍵，而應把作者身分、判斷與責任真正交還給本人。" },
    ],
  },
  spectrum: {
    kicker: "委託光譜",
    title: "行政流程可以大膽委託，人際關係要更謹慎。",
    autonomous: "較適合自動化",
    human: "較需要本人",
    labels: ["GDPR", "排程", "客服", "議價", "人脈互動", "道歉", "慰問"],
  },
  caseStudy: {
    kicker: "案例 001 / GREEN FILTER",
    title: "第一個實驗，本來就在碰觸委託。",
    lead: "Green Filter 一開始是一個金融 AI 夥伴，協助年輕人做購物、儲蓄與投資決策。當 AI 從提供建議走向代替人行動時，更深層的設計問題就出現了。",
    steps: [
      { year: "2025", title: "AI 提供建議", copy: "你可能比較適合買這個。" },
      { year: "2026", title: "AI 直接行動", copy: "我已經幫你買了。" },
      { year: "現在", title: "Proxy Society", copy: "軟體可以代表我們決定、溝通與行動到什麼程度？" },
    ],
  },
  plurality: {
    kicker: "相鄰概念 / PLURALITY",
    title: "多元社會，可能也需要多元的代理人。",
    copy: [
      "Plurality 關心科技如何讓不同的人，在保有差異的同時更好地合作。Proxy Society 再多問一步：當人越來越常透過人工代理人參與社會，會發生什麼？",
      "一個無所不知的通用代理人，不應把工作中的你、朋友眼中的你、公民身分的你與私領域的你壓縮成單一偏好模型。情境本身就是人類自主性的一部分。",
    ],
  },
  research: {
    kicker: "思想脈絡",
    title: "這個問題並不是從聊天機器人才開始。",
    copy: "Proxy Society 位在互動設計、傳播研究、科技哲學、多元主義，以及新興 AI 代理人標準的交界。",
    items: [
      { ...researchItems[0], note: "一篇很短但重要的哲學種子，提出 proxiology，也就是研究代理、替身與其社會使用方式。" },
      { ...researchItems[1], note: "相鄰的思想與實作計畫，關注科技如何支持協作式多元，以及如何保留社會差異。" },
      { ...researchItems[2], note: "技術標準正在處理 AI 如何安全地代表使用者行動，但社會層面的規範仍有大量空白。" },
      { ...researchItems[3], note: "AI 透明度規範讓代理人身分、揭露與互動對象知情權，成為正在發生的社會設計問題。" },
    ],
  },
  questions: {
    kicker: "研究議程",
    title: "值得真正做實證研究的問題。",
    items: [
      "AI 協助從什麼時候開始變成社會性的欺瞞？",
      "什麼時候，付出本身就是訊息的一部分？",
      "AI 代理人什麼時候必須表明身分？",
      "我的自動化可以合理要求你付出多少注意力？",
      "哪些承諾一定需要真人明確授權？",
      "不同文化對 AI 委託的接受界線有多不一樣？",
      "AI 可以維持一段關係，而不讓那段關係變廉價嗎？",
      "當我的代理人遇到你的代理人，社會規範要怎麼運作？",
    ],
  },
  closing: {
    kicker: "PROXY SOCIETY / 開放頻道",
    title: "當每個人都有 AI 代理人，我們需要新的社會基礎設施。",
    copy: "研究 AI 禮儀、代理式在場，以及替人類行動的機器該如何被設計。",
    contact: "hello@proxysociety.org",
  },
  footer: { initiative: "獨立研究與設計計畫", github: "GitHub ↗" },
};
