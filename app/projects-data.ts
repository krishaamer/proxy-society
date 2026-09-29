export type ProjectLocale = "en" | "zh-TW";

export type ProjectCase = {
  number: string;
  slug: string;
  name: string;
  domain: string;
  year: string;
  tagline: string;
  summary: string;
  humanIntent: string;
  systemAction: string;
  boundary: string;
  evidence: string[];
  question: string;
  status: string;
  links: { label: string; href: string }[];
};

const englishProjects: ProjectCase[] = [
  {
    number: "01",
    slug: "ziran",
    name: "Ziran / Green Filter",
    domain: "CHOICE / VALUES",
    year: "2025-26",
    tagline: "Should I buy this?",
    summary: "A shopping decision system that turns a person's values and constraints into a visible recommendation instead of hiding the reasoning inside a generic assistant.",
    humanIntent: "Make purchases that fit the person's own priorities, including sustainability, health, price and confidence in the available evidence.",
    systemAction: "Extract a structured product object, fill missing context, and return a verdict with supporting facts, alternatives and sources across browser, web and mobile surfaces.",
    boundary: "The AI does not get to silently manufacture certainty. Ziran distinguishes verified, estimated, brand-reported, AI-inferred and unknown information, and the post-thesis product still stops at decision support rather than autonomous purchase execution.",
    evidence: [
      "The current product asks “Should I buy this?” and returns a verdict, facts, alternatives and sources.",
      "Product structure comes before model inference: JSON-LD, Open Graph, DOM and site adapters are used before AI fills gaps.",
      "The project preserves a clear provenance boundary between the filed MA thesis, evaluated prototypes and later product work."
    ],
    question: "How can an agent help a person act on values without quietly replacing those values with its own optimization target?",
    status: "Working post-thesis product",
    links: [
      { label: "Green Filter research ↗", href: "https://www.greenfilter.app/" },
      { label: "Research repository ↗", href: "https://github.com/krishaamer/green-filter-research" }
    ]
  },
  {
    number: "02",
    slug: "haam-pay",
    name: "haam-pay",
    domain: "MONEY / AUTHORITY",
    year: "2026",
    tagline: "Human control for agent payments.",
    summary: "An authority layer between an AI agent and payment execution. It does not move money itself. It decides whether a proposed economic action is within the human mandate.",
    humanIntent: "Let an agent spend within understandable limits while preserving hard rules, soft preferences, uncertainty, exceptions and explicit human approval.",
    systemAction: "Evaluate a proposed payment or trade and return ALLOW, ASK or DENY before any signing or execution adapter becomes reachable.",
    boundary: "Payment rails, wallets and trading tools remain downstream. The evaluator sits before signing, maintains independent caps, supports revocation and records sanitized evidence without storing private keys or raw signatures.",
    evidence: [
      "The same core evaluator gates x402 Exact and Upto test payments before authorization is signed.",
      "A Kraken integration is intentionally paper-only and exposes no live order command.",
      "Example mandates include asking before subscriptions and allowing bounded purchases only above a confidence threshold."
    ],
    question: "When software can spend for us, what exactly counts as permission?",
    status: "Working prototype with live testnet laboratory",
    links: [
      { label: "Open haam-pay ↗", href: "https://pay.haam.co" }
    ]
  },
  {
    number: "03",
    slug: "gdpr-agent",
    name: "HAAM GDPR",
    domain: "RIGHTS / NEGATION",
    year: "2026",
    tagline: "Exercise my rights, but do not delete me.",
    summary: "A long-running data-access and portability workflow coordinated across Gmail, ChatGPT, Codex, local exports and hundreds of company cases.",
    humanIntent: "Obtain Article 15 access and Article 20 portability data while preserving accounts and explicitly avoiding deletion unless separately authorized.",
    systemAction: "Discover controllers, prepare requests, classify replies, track verification, preserve exports, audit gaps, follow up and escalate while maintaining durable case state.",
    boundary: "Negative intent must survive every handoff. The project treats “access and portability only” as a hard constraint, keeps sensitive exports outside Git, and tests workflows against fictional scenarios where quoted history or provider mistakes could otherwise trigger destructive action.",
    evidence: [
      "The workflow distinguishes request, verification, export, audit, follow-up, escalation and closure as separate states.",
      "Twenty fictional intent-preservation cases test whether prohibited or out-of-scope actions survive multi-stage handoffs.",
      "Provider mistakes and contradictory claims are preserved as evidence rather than silently normalized away."
    ],
    question: "Can an agent pursue a right over weeks or months without losing the original intent, especially the word “not”?",
    status: "Active research and operations system",
    links: [
      { label: "Public research surface ↗", href: "https://haam-gdpr.vercel.app" }
    ]
  },
  {
    number: "04",
    slug: "haam-jobs",
    name: "HAAM Jobs",
    domain: "WORK / REPRESENTATION",
    year: "2026",
    tagline: "An agent can apply for me. It must not invent me.",
    summary: "An evidence-backed job-search workspace where agents research roles, prepare application packets and maintain submission history under explicit rules about voice, claims and lived experience.",
    humanIntent: "Scale the administrative work of job search without turning the applicant into a synthetic persona optimized for screening.",
    systemAction: "Research roles, maintain evidence maps, draft resumes and answers, generate PDFs, track lifecycle state and archive exactly what was submitted.",
    boundary: "The playbook forbids invented memories, unsupported claims and uncredited collaborators. Live form submission is downstream of an auditable packet, and current state is kept separate from immutable historical evidence.",
    evidence: [
      "A central claims registry constrains what an agent may say about experience.",
      "The writing guide explicitly says never to write a memory the person has not had.",
      "Submission artifacts and lifecycle events are archived rather than rewritten to fit later narratives."
    ],
    question: "How much professional representation can we delegate before efficiency starts falsifying the person being represented?",
    status: "Active operational workspace",
    links: []
  },
  {
    number: "05",
    slug: "flight-rights",
    name: "FI306 Rights Case",
    domain: "RECOURSE / LAW",
    year: "2026",
    tagline: "Preserve the remedy I chose.",
    summary: "A real travel-disruption case where the main challenge was not generating a complaint. It was preserving a specific human choice across airline, booking platform, insurance and evidence workflows.",
    humanIntent: "After Icelandair FI306 was cancelled on 23 September 2026, preserve rerouting at the earliest opportunity rather than accidentally electing reimbursement, while keeping care and compensation claims available.",
    systemAction: "Maintain a timeline, evidence index, communications log, expense record, rights analysis, form payloads and current action plan across multiple organizations.",
    boundary: "The repository is private because the workflow contains sensitive travel data. Public explanation can describe the intent and process without exposing booking references, ticket numbers, dates of birth or private correspondence.",
    evidence: [
      "The working record explicitly states “No reimbursement election.”",
      "Article 8 rerouting, Article 9 care and any Article 7 compensation are tracked as distinct requests rather than collapsed into one generic refund flow.",
      "Unverified refunds, credits, insurer outcomes and expenses remain marked unverified instead of being treated as resolved."
    ],
    question: "Can an agent navigate legal and commercial systems without accidentally choosing a remedy the human did not choose?",
    status: "Real-world case, evidence preserved privately",
    links: []
  },
  {
    number: "06",
    slug: "chickens-no-cages",
    name: "Chickens, No Cages",
    domain: "CIVIC INTENT / EVIDENCE",
    year: "2026",
    tagline: "State a preference once. Keep the evidence separate.",
    summary: "A civic-accountability experiment that begins with one explicitly stated personal preference and then keeps research, political evidence and outreach methodologically separate from that preference.",
    humanIntent: "The project's stated preference is: “Laying hens should not be kept in cages.”",
    systemAction: "Track the 101 members of the Riigikogu, direct evidence of positions, two relevant legislative files, source dates, outreach and responses without inferring individual views from party, committee, silence or non-response.",
    boundary: "The system may organize evidence for a person's civic intent, but it must not manufacture political positions. Direct sponsorship, statements, amendments or recorded votes can support a claim only about what they actually address.",
    evidence: [
      "Riigikogu lists bill 828 SE at second-reading stage after its first reading in April 2026.",
      "A second Animal Protection Act amendment file, 970 SE, was initiated on 17 June 2026 and assigned to the Rural Affairs Committee.",
      "The project's evidence rules explicitly reject party membership, committee membership and silence as proof of an individual position."
    ],
    question: "How can an agent advocate persistently for a person's stated value without turning uncertain political evidence into certainty?",
    status: "Active civic research prototype",
    links: [
      { label: "Riigikogu 828 SE ↗", href: "https://www.riigikogu.ee/en/eelnoud/e5671f5a-d571-4fcb-96d5-cd2afd5734c4/Loomakaitseseaduse%20muutmise%20seadus/" },
      { label: "Riigikogu 970 SE context ↗", href: "https://www.riigikogu.ee/pressiteated/muu-pressiteade-et/menetlusse-voeti-eelnou-tarbijakaitse-kohta/" }
    ]
  },
  {
    number: "07",
    slug: "my-voice",
    name: "My Voice",
    domain: "VOICE / IDENTITY",
    year: "2026",
    tagline: "Write for me without rewriting who I am.",
    summary: "A model-facing voice guide assembled from public writing, reviews and a large personal notes corpus, with an explicit correction mechanism when the model attributes a pattern to the person that the evidence does not support.",
    humanIntent: "Let AI help write in a recognizable personal voice while preserving authorship, lived experience, uncertainty and the right to correct the model's picture of the person.",
    systemAction: "Translate a corpus into practical guidance for tone, structure, themes, diction and domain-specific writing modes.",
    boundary: "Generated examples are not evidence about the person. On 10 September 2026 the guide records a correction after a construction was wrongly attributed as part of the person's writing style, and explicitly forbids treating that generated pattern as historical fact.",
    evidence: [
      "The guide is grounded in public writing, Medium exports, reviews and summarized notes rather than a generic persona prompt.",
      "It distinguishes source-derived observations from assistant-generated illustrations.",
      "Corrections remain visible so later agents inherit the correction instead of repeating the same false memory."
    ],
    question: "What does it mean for an agent to sound like you without becoming an author of your identity?",
    status: "Active private representation guide",
    links: []
  },
  {
    number: "08",
    slug: "keha",
    name: "Keha",
    domain: "HEALTH / PROVENANCE",
    year: "2026",
    tagline: "Your body, over time.",
    summary: "A provenance-first personal health record that keeps raw observations, deterministic derived metrics and interpretation as visibly different layers.",
    humanIntent: "Bring fragmented measurements into one understandable history without allowing derived or AI-generated interpretation to overwrite the underlying record.",
    systemAction: "Normalize measurements from Apple Health, wearables and records into observations, derive metrics separately and expose interpretation with traceable source relationships.",
    boundary: "Raw observations remain owner-only and are not mixed with derived metrics or AI interpretation. A federation experiment further separates source observations, deterministic derivation and interpretation into independently owned subgraphs.",
    evidence: [
      "Apple Health remains an iPhone-only source; the web app does not pretend to read HealthKit directly.",
      "The production observation table uses owner-only row-level security.",
      "A federated demo can trace a derived claim back to each source observation used as evidence."
    ],
    question: "When an agent interprets something as intimate as the body, how do we keep observation, inference and advice from collapsing into one authority?",
    status: "Working personal-data product and architecture experiment",
    links: []
  },
  {
    number: "09",
    slug: "humanitys-backlog",
    name: "Humanity's Backlog",
    domain: "LABOR / PUBLIC PURPOSE",
    year: "2026",
    tagline: "Useful human work after AI.",
    summary: "A research prototype for turning human capacity into useful, verifiable and eventually fairly paid work on important public problems.",
    humanIntent: "Make people more capable and useful in an AI-rich economy without hiding labor conditions, verification work or uncertainty behind gamified purpose.",
    systemAction: "Turn a public problem into mission ownership, bounded work packages, matching, verification, compensation, integration and downstream evidence.",
    boundary: "The prototype refuses fake impact signals, universal reputation scores and purpose-washing. Paid work requires visible acceptance criteria, verifier capacity, compensation, appeal and a human escalation path.",
    evidence: [
      "The atomic unit is a work package with an explicit verification protocol.",
      "Submitted, verified, accepted, integrated, used downstream and outcome evidence are separate states.",
      "The first cancer questline is explicitly a prototype decomposition, not a live work offer or substitute for clinical expertise."
    ],
    question: "If AI changes what work is worth doing, who decides which human effort is useful, safe, fairly paid and actually used?",
    status: "Research prototype seeking a real institutional pilot",
    links: []
  },
  {
    number: "10",
    slug: "swimmable-cities",
    name: "Swimmable Cities",
    domain: "PLACE / CLEAN WATER",
    year: "2026",
    tagline: "Make urban swimming discoverable.",
    summary: "A spatial project connecting public data, everyday recreation and a larger civic intent: cities where clean water is something people can safely enter, not just look at.",
    humanIntent: "Preserve access to clean water, public space and direct embodied experience as cities become more instrumented and mediated by software.",
    systemAction: "Map swimmable places using public geographic and weather data, surface water conditions, and make existing urban swimming infrastructure easier to discover.",
    boundary: "The software can help reveal places and conditions, but public data does not prove that every location is safe at every moment. The archived Tainan work therefore framed river swimming as a cleanup and public-space proposal, not simply a map pin.",
    evidence: [
      "The current iOS prototype uses OpenStreetMap and Open-Meteo public data with no API keys.",
      "It includes an interactive globe of 16 cities and live swim-spot search.",
      "An earlier bilingual Tainan project proposed cleaning rivers and reopening safe public swimming."
    ],
    question: "What should agents optimize for in the physical world if human intent includes nature, health, access and the right to be present somewhere?",
    status: "Active iOS prototype plus archived urban proposal",
    links: [
      { label: "Prototype ↗", href: "https://swimmable-cities.vercel.app" }
    ]
  },
  {
    number: "11",
    slug: "wifi-ee",
    name: "WiFi.ee",
    domain: "INFRASTRUCTURE / TRUTH",
    year: "2000s-26",
    tagline: "Public connectivity as legible infrastructure.",
    summary: "A long-running public Wi-Fi database evolving from a directory into cross-platform infrastructure for discovering, verifying and joining networks.",
    humanIntent: "Make public connectivity understandable and usable while distinguishing what is actually known from what has not been checked.",
    systemAction: "Maintain hotspot records, speed measurements, quality signals, public SSIDs, QR-based Quick Login, operator tools, OpenStreetMap reconciliation and agent-readable data surfaces.",
    boundary: "Availability is explicitly tri-state: confirmed Wi-Fi, confirmed no Wi-Fi, or unknown/not checked. The system should not turn absence of evidence into a confident claim, whether the consumer is a person or an AI assistant.",
    evidence: [
      "WiFi.ee describes itself as a public database of hotspots including network name, free access and measured speed.",
      "Quick Login turns stored network details into scan-ready joining tools while still letting the user review hotspot details.",
      "Partner documentation includes an MCP direction so AI assistants can answer Wi-Fi questions from the same maintained data."
    ],
    question: "As agents mediate the city, how do we make public infrastructure machine-readable without making uncertainty disappear?",
    status: "Active public infrastructure product",
    links: [
      { label: "Open WiFi.ee ↗", href: "https://next.wifi.ee" }
    ]
  }
];

const traditionalChineseProjects: ProjectCase[] = [
  {
    ...englishProjects[0],
    domain: "選擇 / 價值",
    tagline: "我該買這個嗎？",
    summary: "把一個人的價值與限制轉成可看見的購物判斷，而不是把理由藏在一個通用 AI 助理裡。",
    humanIntent: "讓購物決策符合使用者自己的優先順序，包括永續、健康、價格，以及證據本身的可信程度。",
    systemAction: "先擷取結構化商品資料，再補足缺少的情境，最後在瀏覽器、網頁與行動裝置回傳判斷、支持事實、替代方案與來源。",
    boundary: "AI 不能默默製造確定性。Ziran 清楚區分已驗證、估算、品牌自述、AI 推論與未知資訊，而且目前產品仍停在決策支援，尚未直接替人完成購買。",
    evidence: [
      "目前產品的核心問題就是「我該買這個嗎？」並回傳判斷、事實、替代方案與來源。",
      "先建立商品結構，再讓 AI 補缺口，而不是把整個頁面壓成文字後重新猜測。",
      "論文、測試過的原型與論文之後的產品開發都有清楚的來源邊界。"
    ],
    question: "代理人要怎麼幫人實踐自己的價值，又不把價值偷偷換成模型自己的最佳化目標？",
    status: "持續開發中的論文後產品",
    links: [
      { label: "Green Filter 研究 ↗", href: "https://www.greenfilter.app/" },
      { label: "研究程式庫 ↗", href: "https://github.com/krishaamer/green-filter-research" }
    ]
  },
  {
    ...englishProjects[1],
    domain: "金錢 / 授權",
    tagline: "讓人保有 AI 支付的控制權。",
    summary: "位在人類意圖與支付執行之間的授權層。它本身不移動金錢，而是判斷 AI 代理人提出的經濟行動是否仍在人的授權範圍內。",
    humanIntent: "讓代理人能在可理解的限制內花錢，同時保留硬性規則、柔性偏好、不確定性、例外與真人核准。",
    systemAction: "在任何簽署或執行介面能被使用之前，先把提議判斷為 ALLOW、ASK 或 DENY。",
    boundary: "錢包、支付軌道與交易工具都在下游。評估器位在簽署之前，另外保留上限、撤銷與稽核紀錄，也不儲存私鑰或原始簽章。",
    evidence: [
      "同一套核心評估器會在簽署前管控 x402 Exact 與 Upto 測試付款。",
      "Kraken 整合刻意只做模擬交易，不暴露真實下單命令。",
      "授權範例包含訂閱前一定要詢問，以及只有在金額與信心門檻內才能自動購買。"
    ],
    question: "當軟體可以替我們花錢時，「同意」到底要具體到什麼程度？",
    status: "已有真實測試網實驗室的可運作原型",
    links: [{ label: "開啟 haam-pay ↗", href: "https://pay.haam.co" }]
  },
  {
    ...englishProjects[2],
    domain: "權利 / 否定條件",
    tagline: "幫我行使權利，但不要刪掉我。",
    summary: "一套長期的資料存取與可攜流程，橫跨 Gmail、ChatGPT、Codex、本機匯出檔與數百個公司案例。",
    humanIntent: "取得 GDPR Article 15 存取與 Article 20 可攜資料，同時保留帳號，除非另外明確授權，否則不得刪除。",
    systemAction: "尋找資料控制者、準備申請、分類回覆、追蹤身分驗證、保存匯出檔、稽核缺口、追問與升級，同時維持可延續的案件狀態。",
    boundary: "否定條件必須穿越每一次交接。「只要存取與可攜」是硬限制。敏感匯出資料不進 Git，並用虛構案例測試代理人是否會因歷史引文或公司誤解而執行破壞性動作。",
    evidence: [
      "申請、驗證、匯出、稽核、追問、升級與結案都是不同狀態。",
      "20 個虛構意圖保存案例測試禁止事項是否能跨多階段交接。",
      "公司處理錯誤與互相矛盾的說法會保留下來，不會被系統默默合理化。"
    ],
    question: "一個代理人能不能追一項權利好幾週甚至幾個月，還記得人當初說的那個「不要」？",
    status: "持續運作中的研究與作業系統",
    links: [{ label: "公開研究頁面 ↗", href: "https://haam-gdpr.vercel.app" }]
  },
  {
    ...englishProjects[3],
    domain: "工作 / 代表",
    tagline: "AI 可以替我申請工作，但不能捏造一個我。",
    summary: "一套有證據邊界的求職工作空間，讓代理人研究職缺、準備申請資料，並在明確的聲音、經驗與主張規則下保存送出紀錄。",
    humanIntent: "放大求職中的行政效率，但不要把求職者變成為了通過篩選而生成的合成人設。",
    systemAction: "研究職缺、維護證據對照、撰寫履歷與回答、產生 PDF、追蹤申請生命週期，並保存實際送出的版本。",
    boundary: "操作手冊禁止虛構記憶、沒有證據的主張與漏掉合作夥伴。送出表單之前必須先有可稽核的申請封包，而且現在狀態與不可改寫的歷史證據保持分開。",
    evidence: [
      "中央 claims registry 限制代理人能怎麼描述經驗。",
      "寫作規則明確禁止寫出本人沒有經歷過的記憶。",
      "送出內容與狀態事件會封存，不會為了後來的敘事而重寫。"
    ],
    question: "職業上的自我代表可以委託多少，才不會讓效率開始扭曲被代表的人？",
    status: "持續運作中的求職系統",
    links: []
  },
  {
    ...englishProjects[4],
    domain: "救濟 / 法律",
    tagline: "保留我選擇的救濟方式。",
    summary: "一個真實的航班中斷案例。難點不只是產生申訴文字，而是讓一個明確的人類選擇能穿過航空公司、訂票平台、保險與證據流程。",
    humanIntent: "Icelandair FI306 在 2026 年 9 月 23 日取消後，保留「儘早改道」這個選擇，不要在不知情下改成退款，同時保留照護與可能的補償請求。",
    systemAction: "維護時間線、證據索引、溝通紀錄、費用、權利分析、表單資料與下一步行動。",
    boundary: "程式庫保持私密，因為裡面有敏感旅遊資料。公開案例只說明意圖與流程，不公開訂位代碼、票號、生日或私人通信。",
    evidence: [
      "工作紀錄明確寫著「No reimbursement election」。",
      "Article 8 改道、Article 9 照護與可能的 Article 7 補償分開追蹤。",
      "未確認的退款、額度、保險結果與支出都維持未確認狀態。"
    ],
    question: "代理人能不能穿越法律與商業系統，而不在過程中替人選了本人沒有選的救濟方案？",
    status: "真實案例，證據私密保存",
    links: []
  },
  {
    ...englishProjects[5],
    domain: "公民意圖 / 證據",
    tagline: "偏好可以先說一次，證據必須一直分開。",
    summary: "一個公民責任實驗。它從一個明確寫下來的個人偏好開始，再把研究、政治證據與外聯方法和這個偏好保持分離。",
    humanIntent: "這個專案明確記錄的偏好是：「蛋雞不應該被關在籠子裡飼養。」",
    systemAction: "追蹤愛沙尼亞國會 101 位議員、直接立場證據、兩個相關法案、來源日期、外聯與回覆，同時不從政黨、委員會、沉默或未回覆推論個人立場。",
    boundary: "系統可以協助一個人的公民意圖持續運作，但不能製造政治人物的立場。只有直接提案、聲明、修正案或具名投票，才能支持它實際涵蓋的主張。",
    evidence: [
      "Riigikogu 目前把 828 SE 列在第二讀階段，第一讀已於 2026 年 4 月完成。",
      "另一個動物保護法修正案 970 SE 於 2026 年 6 月 17 日提出，並交由農村事務委員會處理。",
      "專案規則明確拒絕把黨籍、委員會身分或沉默當成個人立場證據。"
    ],
    question: "代理人要怎麼長期替一個人的價值做公民行動，又不把不確定的政治證據變成確定答案？",
    status: "持續運作中的公民研究原型",
    links: [
      { label: "Riigikogu 828 SE ↗", href: "https://www.riigikogu.ee/en/eelnoud/e5671f5a-d571-4fcb-96d5-cd2afd5734c4/Loomakaitseseaduse%20muutmise%20seadus/" },
      { label: "Riigikogu 970 SE 資訊 ↗", href: "https://www.riigikogu.ee/pressiteated/muu-pressiteade-et/menetlusse-voeti-eelnou-tarbijakaitse-kohta/" }
    ]
  },
  {
    ...englishProjects[6],
    domain: "聲音 / 身分",
    tagline: "替我寫，但不要重寫我是誰。",
    summary: "一份給模型使用的個人聲音指南，來源包括公開文章、評論與大量私人筆記，而且當模型把不存在的寫作習慣套到本人身上時，會留下明確的更正紀錄。",
    humanIntent: "讓 AI 能協助寫出有辨識度的個人聲音，同時保留作者身分、真實經驗、不確定性，以及本人修正模型認知的權利。",
    systemAction: "把語料整理成可操作的語氣、結構、主題、用字與不同寫作情境規則。",
    boundary: "模型生成的範例不能反過來變成本人的證據。2026 年 9 月 10 日，指南記錄一次錯誤歸因的更正，並明確禁止未來代理人把該生成模式當成歷史事實。",
    evidence: [
      "指南來自公開寫作、Medium 匯出、影評與整理過的筆記，而不是憑空做一個 persona prompt。",
      "來源觀察與助理自己生成的示範會分開。",
      "更正會保留，讓之後的代理人繼承修正，而不是重複同一個假記憶。"
    ],
    question: "代理人可以多像你，才不會開始成為你身分的共同作者？",
    status: "持續使用中的私人代表指南",
    links: []
  },
  {
    ...englishProjects[7],
    domain: "健康 / 來源",
    tagline: "你的身體，隨時間累積。",
    summary: "一套以來源可追溯為核心的個人健康紀錄，把原始觀測、確定性衍生指標與解讀保持成不同層。",
    humanIntent: "把零碎測量整合成可以理解的歷史，但不讓衍生值或 AI 解讀覆蓋底層紀錄。",
    systemAction: "把 Apple Health、穿戴裝置與紀錄正規化成 observations，再另外計算衍生指標與解讀，並保留來源關係。",
    boundary: "原始 observations 維持 owner-only，也不和衍生指標或 AI 解讀混在同一層。聯邦式圖譜實驗更進一步把來源、確定性衍生與解讀拆成獨立子圖。",
    evidence: [
      "Apple Health 仍然只由 iPhone 來源讀取，網頁不假裝自己能直接讀 HealthKit。",
      "production observation table 使用 owner-only row-level security。",
      "聯邦式 demo 可以把一個衍生主張一路追回使用的每一筆來源觀測。"
    ],
    question: "當代理人開始解讀像身體這麼私密的資料時，要怎麼避免觀測、推論與建議全部混成同一種權威？",
    status: "可運作的個人資料產品與架構實驗",
    links: []
  },
  {
    ...englishProjects[8],
    domain: "勞動 / 公共目的",
    tagline: "AI 之後，還有哪些真正有用的人類工作？",
    summary: "一個研究原型，希望把人的能力轉成對重要公共問題真正有用、可驗證，而且未來能公平付費的工作。",
    humanIntent: "在 AI 密集的經濟中讓人變得更有能力與用途，同時不把勞動條件、驗證成本與不確定性藏在遊戲化的使命感後面。",
    systemAction: "把公共問題拆成任務所有者、有限工作包、配對、驗證、報酬、整合與下游證據。",
    boundary: "原型拒絕假的 impact 分數、通用聲譽分數與用公益包裝免費勞動。付費工作必須先有明確驗收條件、驗證能力、報酬、申訴與真人升級路徑。",
    evidence: [
      "最小單位是一個附帶驗證協議的 work package。",
      "submitted、verified、accepted、integrated、used downstream 與 outcome evidence 都是不同狀態。",
      "第一個癌症 questline 明確標示為原型拆解，不是真實工作機會，也不能取代臨床專業。"
    ],
    question: "如果 AI 改變什麼工作值得人做，那誰來決定人的努力是否有用、安全、公平付費，而且真的被使用？",
    status: "正在尋找真實機構 pilot 的研究原型",
    links: []
  },
  {
    ...englishProjects[9],
    domain: "空間 / 乾淨水域",
    tagline: "讓城市游泳變得可發現。",
    summary: "把公開資料、日常休閒與一個更大的公民意圖連在一起：城市裡的乾淨水域應該是人能安全進入的地方，不只是遠遠看著。",
    humanIntent: "當城市越來越被軟體量測與中介時，仍保留乾淨水域、公共空間與直接身體經驗的可及性。",
    systemAction: "用公開地理與氣象資料整理可游泳地點、水溫與海況，讓既有的城市游泳條件更容易被找到。",
    boundary: "軟體可以幫忙揭示地點與條件，但公開資料不能證明每個地點在每個時間都安全。早期台南河川版本因此是一個清理與公共空間提案，不只是地圖上的一個點。",
    evidence: [
      "目前 iOS 原型使用 OpenStreetMap 與 Open-Meteo 公開資料，不需要 API key。",
      "包含 16 個城市的互動地球與即時游泳地點搜尋。",
      "較早的台南雙語專案提出清理河川並重新開放安全公共游泳。"
    ],
    question: "如果人的意圖包含自然、健康、可及性與真正到場的權利，代理人應該替實體世界最佳化什麼？",
    status: "持續開發的 iOS 原型與封存城市提案",
    links: [{ label: "原型 ↗", href: "https://swimmable-cities.vercel.app" }]
  },
  {
    ...englishProjects[10],
    domain: "基礎設施 / 真實性",
    tagline: "讓公共連線成為可理解的基礎設施。",
    summary: "一個長期公共 Wi-Fi 資料庫，正從目錄演變成跨平台的連線基礎設施，協助人找到、驗證並加入網路。",
    humanIntent: "讓公共連線更容易理解與使用，同時把「真的知道」和「尚未檢查」保持分開。",
    systemAction: "維護熱點、速度量測、品質訊號、公開 SSID、QR Quick Login、營運者工具、OpenStreetMap 對照，以及可供代理人讀取的資料介面。",
    boundary: "Wi-Fi 可用性是明確的三態：已確認有 Wi-Fi、已確認沒有 Wi-Fi、未知或尚未檢查。無論消費者是真人還是 AI，都不能把缺少證據自動變成肯定答案。",
    evidence: [
      "WiFi.ee 把自己描述為公共 Wi-Fi 熱點資料庫，包含網路名稱、是否免費與實際量測速度。",
      "Quick Login 把已儲存的網路資料變成可掃描加入工具，但仍讓使用者先查看熱點資訊。",
      "合作文件包含 MCP 方向，讓 AI 助理能從同一份維護資料回答 Wi-Fi 問題。"
    ],
    question: "當代理人開始中介城市生活時，要怎麼讓公共基礎設施變成 machine-readable，又不讓不確定性消失？",
    status: "持續運作中的公共基礎設施產品",
    links: [{ label: "開啟 WiFi.ee ↗", href: "https://next.wifi.ee" }]
  }
];

export function getProjects(locale: ProjectLocale): ProjectCase[] {
  return locale === "zh-TW" ? traditionalChineseProjects : englishProjects;
}

export function getProject(slug: string, locale: ProjectLocale): ProjectCase | undefined {
  return getProjects(locale).find((project) => project.slug === slug);
}

export const projectSlugs = englishProjects.map((project) => project.slug);
