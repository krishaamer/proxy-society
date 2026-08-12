import styles from "./LineageTrail.module.css";

type Locale = "en" | "zh-TW";

type LineageEntry = {
  year: string;
  medium: string;
  relation: string;
  creator: string;
  title: string;
  breadcrumb: string;
  href: string;
  accent?: "direct" | "current";
};

const englishEntries: LineageEntry[] = [
  {
    year: "1976",
    medium: "PAPER",
    relation: "DELEGATION THEORY",
    creator: "Michael C. Jensen + William H. Meckling",
    title: "Theory of the Firm: Managerial Behavior, Agency Costs and Ownership Structure",
    breadcrumb: "Agency theory formalizes a durable social problem: a principal gives an agent authority to act on their behalf, then needs ways to manage misalignment, monitoring and responsibility.",
    href: "https://doi.org/10.1016/0304-405X(76)90026-X",
  },
  {
    year: "1993",
    medium: "PAPER",
    relation: "SOFTWARE AGENT",
    creator: "J. C. Schlimmer + L. A. Hermens",
    title: "Software Agents: Completing Patterns and Constructing User Interfaces",
    breadcrumb: "A learning agent sits behind the interface and acts for the user. Delegated action appears before today's assistant metaphor.",
    href: "https://arxiv.org/abs/cs/9311102",
  },
  {
    year: "1994",
    medium: "PAPER",
    relation: "INDIRECT MANAGEMENT",
    creator: "Pattie Maes",
    title: "Agents that Reduce Work and Information Overload",
    breadcrumb: "Interaction shifts from telling software every step to letting an interface agent learn preferences and perform tasks on a user's behalf.",
    href: "https://doi.org/10.1145/176789.176792",
  },
  {
    year: "1994",
    medium: "PAPER",
    relation: "AGENT SOCIETY",
    creator: "Michael R. Genesereth + Steven P. Ketchpel",
    title: "Software Agents",
    breadcrumb: "Agents become communicating software actors that can interoperate with peers, a technical ancestor of today's agent-to-agent social layer.",
    href: "https://doi.org/10.1145/176789.176794",
  },
  {
    year: "1995",
    medium: "INTERVIEW",
    relation: "PUBLIC IMAGINATION",
    creator: "Pattie Maes / WIRED",
    title: "Agent of Change",
    breadcrumb: "Delegation becomes a mainstream design question: how much autonomy to grant, which mistakes are tolerable and when a human should keep the task.",
    href: "https://www.wired.com/1995/04/maes",
  },
  {
    year: "2000",
    medium: "PAPER",
    relation: "SOCIAL INFRASTRUCTURE",
    creator: "Thomas Erickson + Wendy A. Kellogg",
    title: "Social Translucence",
    breadcrumb: "HCI identifies visibility, awareness and accountability as infrastructure for graceful social behavior online. Etiquette needs things to be socially perceptible.",
    href: "https://research.ibm.com/publications/social-translucence-an-approach-to-designing-systems-that-support-social-processes",
  },
  {
    year: "2007",
    medium: "PAPER",
    relation: "SOCIAL PROXY",
    creator: "Thomas Erickson",
    title: "‘Social’ systems: Designing digital systems that support social intelligence",
    breadcrumb: "The social proxy makes participants and activity visible so online groups can perceive one another and negotiate norms through the interface.",
    href: "https://research.ibm.com/publications/social-systems-designing-digital-systems-that-support-social-intelligence",
  },
  {
    year: "2013",
    medium: "PAPER",
    relation: "PROXY AGENCY",
    creator: "Kirk Ludwig",
    title: "Proxy Agency in Collective Action",
    breadcrumb: "A spokesperson can act so that their action counts as the action of a larger group. Authorization makes one actor's behavior socially attributable to another.",
    href: "https://doi.org/10.1111/nous.12013",
  },
  {
    year: "2015",
    medium: "PHILOSOPHY",
    relation: "PROXY CULTURE",
    creator: "Luciano Floridi",
    title: "A Proxy Culture",
    breadcrumb: "Proxy becomes a philosophical relation: something can both stand for and stand in for something else. Floridi argues mature information societies are becoming cultures of proxies and interaction.",
    href: "https://link.springer.com/article/10.1007/s13347-015-0209-8",
    accent: "direct",
  },
  {
    year: "2016",
    medium: "BOOK",
    relation: "PROXY SOCIETY / DIRECT TERM",
    creator: "김민섭 / Kim Min-seop",
    title: "대리사회: 타인의 공간에서 통제되는 행동과 언어들",
    breadcrumb: "The Korean phrase ‘proxy society’ names a society where people increasingly perform other people's and institutions' desires instead of acting, speaking and thinking fully as themselves.",
    href: "https://www.yes24.com/product/goods/33307828",
    accent: "direct",
  },
  {
    year: "2017",
    medium: "VIDEO",
    relation: "MEDIA TRANSMISSION",
    creator: "책그림",
    title: "당신도 대리인간 입니까? (feat. 대리사회)",
    breadcrumb: "The idea moves from social criticism into popular explanatory media. The question becomes personal: are we becoming proxy humans?",
    href: "https://www.youtube.com/watch?v=jJShRpIPUSI",
  },
  {
    year: "2023",
    medium: "PAPER",
    relation: "DIGITAL REPRESENTATION",
    creator: "Paula Sweeney",
    title: "Avatars as Proxies",
    breadcrumb: "Floridi's proxy relation is applied to digital representatives, bringing identity, duties and responsibility into the relationship between a human and something that stands in for them.",
    href: "https://link.springer.com/article/10.1007/s11023-023-09643-z",
  },
  {
    year: "2020s",
    medium: "VIDEO",
    relation: "AI + PROXY SOCIETY",
    creator: "Korean educational media",
    title: "인공지능과 대리사회",
    breadcrumb: "The phrase is explicitly applied to AI dependence and decision-making. If AI thinks or chooses in our place, is the resulting decision still ours?",
    href: "https://www.youtube.com/watch?v=iGvKOl1V1OE",
    accent: "direct",
  },
  {
    year: "2025",
    medium: "PAPER",
    relation: "AUTHORIZED AI",
    creator: "Tobin South et al.",
    title: "Authenticated Delegation and Authorized AI Agents",
    breadcrumb: "Delegation becomes technical infrastructure: agents need verifiable chains showing who they act for, what authority they received and how that authority is constrained and audited.",
    href: "https://arxiv.org/abs/2501.09674",
  },
  {
    year: "2026",
    medium: "PAPER",
    relation: "DELEGATED AGENCY",
    creator: "Petar Radanliev",
    title: "Delegated agency and moral responsibility in artificial intelligence",
    breadcrumb: "AI ethics is reframed around delegated moral authority. Artificial systems can act, but responsibility cannot simply evaporate into the machine.",
    href: "https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2026.1800302/full",
  },
  {
    year: "2026",
    medium: "PREPRINT",
    relation: "INSPECTABLE DELEGATION",
    creator: "Anton Sokolov",
    title: "Identity Is Not Personhood",
    breadcrumb: "Estonia's AI-isikukood debate separates machine identity from personhood. The accountable object becomes scoped, revocable delegation with reconstructable evidence.",
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6964515",
  },
  {
    year: "2026",
    medium: "STANDARDS",
    relation: "CURRENT GOVERNANCE",
    creator: "NIST",
    title: "AI Agent Standards Initiative",
    breadcrumb: "Identity, authorization, interoperability and accountability for agents start hardening into standards. The technical layer is arriving before the social etiquette is settled.",
    href: "https://www.nist.gov/artificial-intelligence/ai-agent-standards-initiative",
    accent: "current",
  },
  {
    year: "NOW",
    medium: "OPEN RESEARCH",
    relation: "PROXY SOCIETY",
    creator: "Proxy Society",
    title: "From delegated action to delegated presence",
    breadcrumb: "The open question is no longer only whether software can act for us. It is how humans, agents and institutions should behave when delegated action becomes an ordinary social condition.",
    href: "#top",
    accent: "current",
  },
];

const traditionalChineseEntries: LineageEntry[] = [
  {
    year: "1976",
    medium: "論文",
    relation: "委託理論",
    creator: "Michael C. Jensen + William H. Meckling",
    title: "Theory of the Firm: Managerial Behavior, Agency Costs and Ownership Structure",
    breadcrumb: "代理理論把一個長期存在的社會問題形式化：委託人把替自己行動的權力交給代理人之後，就必須處理利益偏離、監督與責任。",
    href: "https://doi.org/10.1016/0304-405X(76)90026-X",
  },
  {
    year: "1993",
    medium: "論文",
    relation: "軟體代理人",
    creator: "J. C. Schlimmer + L. A. Hermens",
    title: "Software Agents: Completing Patterns and Constructing User Interfaces",
    breadcrumb: "學習型代理人藏在介面背後，直接替使用者行動。早在今天的 AI 助理想像之前，「委託給軟體」就已經出現。",
    href: "https://arxiv.org/abs/cs/9311102",
  },
  {
    year: "1994",
    medium: "論文",
    relation: "間接管理",
    creator: "Pattie Maes",
    title: "Agents that Reduce Work and Information Overload",
    breadcrumb: "互動從每一步都由人下指令，轉向讓介面代理人學習偏好，並代表使用者完成工作。",
    href: "https://doi.org/10.1145/176789.176792",
  },
  {
    year: "1994",
    medium: "論文",
    relation: "代理人社會",
    creator: "Michael R. Genesereth + Steven P. Ketchpel",
    title: "Software Agents",
    breadcrumb: "代理人成為可以和其他代理人溝通、互通的軟體行動者，成為今天 agent-to-agent 社會層的技術前身。",
    href: "https://doi.org/10.1145/176789.176794",
  },
  {
    year: "1995",
    medium: "訪談",
    relation: "公共想像",
    creator: "Pattie Maes / WIRED",
    title: "Agent of Change",
    breadcrumb: "委託開始成為大眾設計議題：要給代理人多少自主權、哪些錯誤可以承受，以及什麼事情仍應該由人親自做。",
    href: "https://www.wired.com/1995/04/maes",
  },
  {
    year: "2000",
    medium: "論文",
    relation: "社會基礎設施",
    creator: "Thomas Erickson + Wendy A. Kellogg",
    title: "Social Translucence",
    breadcrumb: "HCI 把可見性、覺察與可究責性視為線上社會互動的基礎。禮儀要能形成，彼此的行動就必須先能被社會感知。",
    href: "https://research.ibm.com/publications/social-translucence-an-approach-to-designing-systems-that-support-social-processes",
  },
  {
    year: "2007",
    medium: "論文",
    relation: "社會代理",
    creator: "Thomas Erickson",
    title: "‘Social’ systems: Designing digital systems that support social intelligence",
    breadcrumb: "social proxy 把參與者與活動變得可見，讓線上群體能透過介面感知彼此，並逐步協商規範。",
    href: "https://research.ibm.com/publications/social-systems-designing-digital-systems-that-support-social-intelligence",
  },
  {
    year: "2013",
    medium: "論文",
    relation: "代理式能動性",
    creator: "Kirk Ludwig",
    title: "Proxy Agency in Collective Action",
    breadcrumb: "一位發言人的行動，可以被社會認定為整個群體的行動。授權讓一個人的行為，能夠被歸屬到另一個人或集體身上。",
    href: "https://doi.org/10.1111/nous.12013",
  },
  {
    year: "2015",
    medium: "哲學短文",
    relation: "代理文化",
    creator: "Luciano Floridi",
    title: "A Proxy Culture",
    breadcrumb: "proxy 被整理成一種哲學關係：某個東西既能代表另一個東西，也能取代它成為我們實際互動的對象。Floridi 認為成熟資訊社會正在轉向代理文化。",
    href: "https://link.springer.com/article/10.1007/s13347-015-0209-8",
    accent: "direct",
  },
  {
    year: "2016",
    medium: "書籍",
    relation: "代理社會 / 直接用詞",
    creator: "김민섭 / Kim Min-seop",
    title: "대리사회: 타인의 공간에서 통제되는 행동과 언어들",
    breadcrumb: "韓文「대리사회」直接把社會描述為一個代理社會：人越來越替他人與制度執行欲望，而不是完整地以自己身分行動、說話與思考。",
    href: "https://www.yes24.com/product/goods/33307828",
    accent: "direct",
  },
  {
    year: "2017",
    medium: "影片",
    relation: "媒體傳播",
    creator: "책그림",
    title: "당신도 대리인간 입니까? (feat. 대리사회)",
    breadcrumb: "這個概念從社會批判進入大眾解說媒體，問題也變得非常個人：我們自己是不是正在成為「代理人類」？",
    href: "https://www.youtube.com/watch?v=jJShRpIPUSI",
  },
  {
    year: "2023",
    medium: "論文",
    relation: "數位代表",
    creator: "Paula Sweeney",
    title: "Avatars as Proxies",
    breadcrumb: "Floridi 的 proxy 關係被套用到數位代表，身分、義務與責任開始進入人與「替自己出場的數位存在」之間。",
    href: "https://link.springer.com/article/10.1007/s11023-023-09643-z",
  },
  {
    year: "2020s",
    medium: "影片",
    relation: "AI + 代理社會",
    creator: "韓國教育媒體",
    title: "인공지능과 대리사회",
    breadcrumb: "「代理社會」被直接套用到 AI 依賴與決策：如果 AI 替我們思考、替我們選擇，最後那個決定還算是我的嗎？",
    href: "https://www.youtube.com/watch?v=iGvKOl1V1OE",
    accent: "direct",
  },
  {
    year: "2025",
    medium: "論文",
    relation: "授權式 AI",
    creator: "Tobin South et al.",
    title: "Authenticated Delegation and Authorized AI Agents",
    breadcrumb: "委託變成技術基礎設施：代理人需要可驗證的授權鏈，說清楚它代表誰、獲得哪些權限，以及權限如何被限制與稽核。",
    href: "https://arxiv.org/abs/2501.09674",
  },
  {
    year: "2026",
    medium: "論文",
    relation: "委託式能動性",
    creator: "Petar Radanliev",
    title: "Delegated agency and moral responsibility in artificial intelligence",
    breadcrumb: "AI 倫理被重新放回「誰把權力委託出去」這件事。機器可以行動，但責任不能因此憑空消失在機器裡。",
    href: "https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2026.1800302/full",
  },
  {
    year: "2026",
    medium: "預印本",
    relation: "可檢視的委託",
    creator: "Anton Sokolov",
    title: "Identity Is Not Personhood",
    breadcrumb: "愛沙尼亞的 AI-isikukood 討論把機器身分和人格分開。真正需要被治理的是有範圍、可撤銷，而且可以重建證據鏈的委託。",
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6964515",
  },
  {
    year: "2026",
    medium: "標準",
    relation: "當代治理",
    creator: "NIST",
    title: "AI Agent Standards Initiative",
    breadcrumb: "代理人的身分、授權、互通性與可究責性開始進入標準化。技術層正在成形，但社會禮儀還沒有定案。",
    href: "https://www.nist.gov/artificial-intelligence/ai-agent-standards-initiative",
    accent: "current",
  },
  {
    year: "現在",
    medium: "開放研究",
    relation: "PROXY SOCIETY",
    creator: "Proxy Society",
    title: "從委託行動走向委託式在場",
    breadcrumb: "現在的問題不再只是軟體能不能替我們做事，而是當委託行動變成日常社會狀態時，人、AI 代理人與制度應該怎麼彼此相處。",
    href: "#top",
    accent: "current",
  },
];

export default function LineageTrail({ locale }: { locale: Locale }) {
  const isChinese = locale === "zh-TW";
  const entries = isChinese ? traditionalChineseEntries : englishEntries;

  return (
    <div className={styles.wrap}>
      <div className={styles.methodNote}>
        <span>{isChinese ? "讀法 / TRACE METHOD" : "HOW TO READ / TRACE METHOD"}</span>
        <p>
          {isChinese
            ? "這是一條觀念譜系，不是在主張每個節點彼此有直接影響。標籤刻意區分概念前身、直接使用「代理社會」的作品，以及後來在 AI 委託議題上的匯流。"
            : "This is a genealogy of ideas, not a claim that every node directly influenced the next. The labels separate conceptual ancestors, direct uses of ‘proxy society’, and later convergence around AI delegation."}
        </p>
      </div>

      <div className={styles.trail}>
        {entries.map((item, index) => {
          const isInternal = item.href.startsWith("#");
          const className = [
            styles.entry,
            item.accent === "direct" ? styles.direct : "",
            item.accent === "current" ? styles.current : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <a
              className={className}
              href={item.href}
              target={isInternal ? undefined : "_blank"}
              rel={isInternal ? undefined : "noreferrer"}
              key={`${item.year}-${item.title}`}
            >
              <div className={styles.yearColumn}>
                <span className={styles.sequence}>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.year}</strong>
                <i aria-hidden="true" />
              </div>
              <div className={styles.identity}>
                <small>{item.medium} / {item.relation}</small>
                <h3>{item.title}</h3>
                <span>{item.creator}</span>
              </div>
              <p className={styles.breadcrumb}>{item.breadcrumb}</p>
              <span className={styles.external} aria-hidden="true">{isInternal ? "↳" : "↗"}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
