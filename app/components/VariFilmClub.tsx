import Link from "next/link";
import styles from "./VariFilmClub.module.css";

export type VariLocale = "en" | "zh-TW";

const copy = {
  en: {
    navigation: { about: "About", format: "Format", values: "Principles", join: "Take part", contact: "Transmit", other: "繁中" },
    status: "IN FORMATION / OPEN INVITATION",
    introCode: "PROXY SOCIETY / CULTURE LAB / 001",
    eyebrow: "AN EXPERIMENTAL FILM CLUB",
    title: "Cinema is made of shadows. What happens when the shadows can be generated?",
    intro: "VARI is a place to watch, make and question films created with and around artificial intelligence. For filmmakers, artists, designers, cinephiles, and the creatively skeptical.",
    primary: "HELP START THE CLUB",
    secondary: "EXPLORE THE FORMAT",
    locality: "ROOTED IN ESTONIA / CONNECTING TAIWAN, KOREA AND BEYOND",
    frameLabels: ["INTENT", "GENERATION", "SELECTION", "AUTHORSHIP"],
    frameEnd: "WHO DIRECTED THIS?",
    definition: "Vari means shadow in Estonian.",
    definitionLead: "In cinema, a shadow is never just an absence of light.",
    definitionCopy: "It can suggest a person outside the frame, a world that does not exist, or a reality just beyond what we see. AI images raise a related question: when a film is generated, whose intentions are visible in it?",
    languageTitle: "One idea, different languages.",
    languages: [
      { script: "VARI", language: "ESTONIAN", note: "Shadow. The name of the club." },
      { script: "影", language: "TAIWANESE HOKKIEN / iánn", note: "Image or shadow. A word woven into the language of cinema." },
      { script: "그림자", language: "KOREAN / geurimja", note: "Shadow. Another way to ask what the image leaves behind." },
    ],
    formatLabel: "THE CLUB / NOT A SOFTWARE DEMO",
    formatHeading: "Make films. Then talk about what we made.",
    formatIntro: "The tools will change. The need to encounter another person's work will not. VARI is an intimate, recurring format in development, built around the film rather than the prompt.",
    formats: [
      { id: "01", name: "WATCH", title: "Screen the work", description: "Short films, unfinished experiments and hybrid live-action pieces. Good films first, no matter how they were made." },
      { id: "02", name: "MAKE", title: "Open the process", description: "Filmmakers share what they intended, what they delegated, what failed and which decisions stayed human." },
      { id: "03", name: "QUESTION", title: "Stay for the conversation", description: "Discuss aesthetics, labor, consent, authorship and cultural difference without requiring everyone to agree about AI." },
    ],
    pilotTag: "PROPOSED FIRST SESSION / NO DATE ANNOUNCED",
    pilotTitle: "001: Who directed this?",
    pilotDesc: "Three short films. Three different relationships with AI. A conversation about how much authorship can be delegated before it changes the work.",
    agenda: [
      { time: "00:00", title: "Arrive", text: "Meet the filmmakers and the audience." },
      { time: "00:15", title: "Screen", text: "Watch three short films with no tool pitches." },
      { time: "00:45", title: "Unpack", text: "Each filmmaker reveals decisions, constraints and process." },
      { time: "01:10", title: "Discuss", text: "Open critique and introductions for future collaborations." },
    ],
    pilotFooter: "This is a proposed format, not a confirmed event. Date, venue and participants will be announced only when agreed.",
    principleTag: "A WORKING ETHIC / v0.1",
    principleTitle: "The film matters more than the machine.",
    principles: [
      { title: "Credit the people", text: "Recognize the humans whose work, performances and ideas materially shaped a film." },
      { title: "Respect likeness and voice", text: "Obtain meaningful consent before using someone's recognizable identity or performance." },
      { title: "Make delegation legible", text: "Explain material uses of generative tools when they change how the work should be understood." },
      { title: "Leave room for dissent", text: "Curiosity about AI is not a condition of belonging. Critical voices make better cinema." },
    ],
    bridgeTag: "WHY PROXY SOCIETY?",
    bridgeTitle: "When AI creates for us, who is the author?",
    bridgeText: "Proxy Society studies the consequences of machines acting on behalf of people. VARI brings that question into cultural production: between an idea and an image, who chooses, who is represented, and who takes responsibility?",
    bridgeLink: "EXPLORE PROXY SOCIETY",
    callTag: "OPEN CALL / FOUNDING CIRCLE",
    callTitle: "Bring a film. Bring a question. Bring a friend.",
    callText: "We are looking for filmmakers, hosts, venues and curious viewers to help shape the first VARI screening. No membership count, venue or schedule is being claimed yet. The club begins with the people who want to make it real.",
    callButton: "GET IN TOUCH",
    callHint: "Email opens your own mail app. No mailing-list signup or event reservation is implied.",
    footer: "A film club by Proxy Society, an independent Estonian non-profit.",
    back: "BACK TO PROXY SOCIETY",
  },
  zh: {
    navigation: { about: "關於", format: "活動形式", values: "原則", join: "一起參與", contact: "聯絡", other: "EN" },
    status: "籌備中 / 開放交流",
    introCode: "PROXY SOCIETY / 文化實驗室 / 001",
    eyebrow: "實驗電影俱樂部",
    title: "電影由光影構成。當影像能被生成，電影又會變成什麼？",
    intro: "VARI 是一起看電影、拍電影，也一起思考 AI 影像的社群。歡迎電影工作者、藝術家、設計師、影迷，以及對 AI 抱持懷疑但願意對話的人。",
    primary: "一起籌備",
    secondary: "了解活動形式",
    locality: "源自愛沙尼亞 / 連結臺灣、韓國與更多地方",
    frameLabels: ["意圖", "生成", "選擇", "作者"],
    frameEnd: "究竟是誰導演了這部電影？",
    definition: "Vari 在愛沙尼亞語中是「影子」。",
    definitionLead: "在電影裡，影子從來不只是沒有光。",
    definitionCopy: "影子可能暗示鏡頭外的人、不曾存在的世界，或眼前畫面之外的現實。AI 生成影像也帶來類似的問題：一部影片由模型生成時，我們看見的是誰的意圖？",
    languageTitle: "不同語言，同一個提問。",
    languages: [
      { script: "VARI", language: "愛沙尼亞語", note: "意為「影子」，也是俱樂部的名字。" },
      { script: "影", language: "臺語 / iánn", note: "影像、影子的「影」，也是電影語彙的一部分。" },
      { script: "그림자", language: "韓語 / geurimja", note: "意為「影子」，提醒我們思考畫面之外還有什麼。" },
    ],
    formatLabel: "社群活動 / 不只是軟體展示",
    formatHeading: "一起做電影，也一起談電影。",
    formatIntro: "工具會一直變，但我們還是需要欣賞和理解彼此的作品。VARI 正在發展一種小型、可定期舉辦的聚會形式，以作品為主角，而不是提示詞。",
    formats: [
      { id: "01", name: "觀看", title: "看作品", description: "短片、未完成的實驗、結合實拍與 AI 的作品。先談電影好不好看，再談它怎麼做。" },
      { id: "02", name: "創作", title: "拆解過程", description: "創作者分享自己的意圖、交給 AI 的部分、失敗的嘗試，以及最後由誰做決定。" },
      { id: "03", name: "提問", title: "留下來聊聊", description: "一起討論美學、勞動、同意、作者身分與文化差異，不必對 AI 有相同看法。" },
    ],
    pilotTag: "首場提案 / 尚未公布時間",
    pilotTitle: "001：到底是誰導演的？",
    pilotDesc: "三部短片，三種不同的 AI 創作關係。一起聊聊，當創作決策逐漸交給 AI，電影的作者會變成誰。",
    agenda: [
      { time: "00:00", title: "見面", text: "認識創作者和觀眾。" },
      { time: "00:15", title: "放映", text: "欣賞三部短片，不做工具推銷。" },
      { time: "00:45", title: "拆解", text: "聽創作者談選擇、限制與製作過程。" },
      { time: "01:10", title: "討論", text: "開放評論，也認識未來可能合作的夥伴。" },
    ],
    pilotFooter: "這是規劃中的活動形式，並非已確認的場次。時間、地點與參與者會在確認後公布。",
    principleTag: "社群原則草案 / v0.1",
    principleTitle: "電影比工具重要。",
    principles: [
      { title: "尊重創作者", text: "適當註明對電影有實質貢獻的人，以及他們的創作與演出。" },
      { title: "尊重肖像與聲音", text: "使用可辨識的他人形象、聲音或演出前，應先取得有意義的同意。" },
      { title: "說清楚委託給 AI 的部分", text: "當生成工具的使用會影響觀眾對作品的理解，就應清楚交代。" },
      { title: "歡迎不同意見", text: "不必支持 AI 才能參與。認真質疑，也是電影文化的一部分。" },
    ],
    bridgeTag: "為什麼由 PROXY SOCIETY 發起？",
    bridgeTitle: "當 AI 替我們創作，誰才是作者？",
    bridgeText: "Proxy Society 研究機器代表人類行動後，會如何改變社會。VARI 把這個問題帶進文化創作：在想法與影像之間，是誰選擇、誰被呈現，又是誰負責？",
    bridgeLink: "認識 PROXY SOCIETY",
    callTag: "招募中 / 創始交流",
    callTitle: "帶一部電影、一個問題，或一位朋友來。",
    callText: "我們想認識有興趣一起籌辦 VARI 的創作者、場地夥伴與觀眾。目前不會宣稱已有固定成員、場地或活動日期。社群會由願意一起實現它的人開始。",
    callButton: "寫信聯絡",
    callHint: "連結會開啟你的電子郵件 App，不代表報名完成或已預約活動。",
    footer: "VARI 由愛沙尼亞非營利組織 Proxy Society 發起。",
    back: "返回 PROXY SOCIETY",
  },
} as const;

export default function VariFilmClub({ locale }: { locale: VariLocale }) {
  const t = locale === "zh-TW" ? copy.zh : copy.en;
  const home = locale === "zh-TW" ? "/zh-tw" : "/";
  const other = locale === "zh-TW" ? "/vari" : "/zh-tw/vari";
  const contact = locale === "zh-TW" ? "/zh-tw/contact" : "/contact";
  const joinEmail = "mailto:hello@proxysociety.org?subject=VARI%20Film%20Club%20-%20Founding%20circle";

  return (
    <main className={styles.page} lang={locale === "zh-TW" ? "zh-Hant-TW" : "en"} id="top">
      <header className="site-header shell">
        <Link className="wordmark" href={home} aria-label="Proxy Society home">
          <span className="mark" aria-hidden="true">P/S</span>
          <span className="wordmark-copy"><strong>PROXY SOCIETY</strong><small>HUMAN / AGENT / SOCIETY</small></span>
        </Link>
        <nav aria-label="VARI navigation">
          <a href="#about">{t.navigation.about}</a>
          <a href="#format">{t.navigation.format}</a>
          <a href="#principles">{t.navigation.values}</a>
          <a href="#join">{t.navigation.join}</a>
          <Link className="locale-switch" href={other} hrefLang={locale === "zh-TW" ? "en" : "zh-Hant-TW"}>{t.navigation.other}</Link>
          <Link className="nav-cta" href={contact}>{t.navigation.contact}</Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className="shell">
          <div className={styles.topline}>
            <span>{t.introCode}</span>
            <span className={styles.status}><i aria-hidden="true" />{t.status}</span>
          </div>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>{t.eyebrow}</p>
              <h1 className={styles.logotype}>VARI<span className={styles.period}>.</span></h1>
              <p className={styles.tagline}>FILM CLUB <span>/</span> EST. 2026</p>
            </div>
            <div className={styles.heroText}>
              <h2>{t.title}</h2>
              <p>{t.intro}</p>
              <div className={styles.actions}>
                <a href="#join" className={styles.primaryButton}>{t.primary} <span aria-hidden="true">↗</span></a>
                <a href="#format" className={styles.secondaryButton}>{t.secondary} <span aria-hidden="true">↓</span></a>
              </div>
            </div>
          </div>
          <p className={styles.locality}>{t.locality}</p>

          <figure className={styles.filmstrip} aria-label="Abstract sequence of film frames showing an image forming from light and shadow">
            {t.frameLabels.map((label, index) => (
              <div className={styles.filmFrame} key={label}>
                <div className={styles.frameTop}><span>VARI / {String(index + 1).padStart(2, "0")}</span><span>24 FPS</span></div>
                <div className={styles.frameImage} data-frame={index + 1} aria-hidden="true"><span className={styles.lightDisc} /><span className={styles.imageShadow} /></div>
                <div className={styles.frameBottom}><span>{label}</span><span>0{index + 1}:00</span></div>
              </div>
            ))}
            <figcaption className={styles.frameCaption}>{t.frameEnd}</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.about} id="about">
        <div className="shell">
          <div className={styles.sectionEyebrow}><span>01 / SHADOW</span><span>ESTONIA × TAIWAN × KOREA</span></div>
          <div className={styles.aboutGrid}>
            <div>
              <p className={styles.smallCaps}>{t.definition}</p>
              <h2>{t.definitionLead}</h2>
            </div>
            <div>
              <p className={styles.bodyLarge}>{t.definitionCopy}</p>
              <p className={styles.languageCaption}>{t.languageTitle}</p>
              <div className={styles.languageGrid}>
                {t.languages.map((item) => (
                  <div className={styles.language} key={item.script}>
                    <strong lang={item.script === "影" ? "nan" : item.script === "그림자" ? "ko" : "et"}>{item.script}</strong>
                    <span>{item.language}</span>
                    <p>{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.format} id="format">
        <div className="shell">
          <div className={styles.sectionEyebrow}><span>02 / FORMAT</span><span>WATCH / MAKE / QUESTION</span></div>
          <div className={styles.sectionTitleRow}>
            <div><p className={styles.smallCaps}>{t.formatLabel}</p><h2>{t.formatHeading}</h2></div>
            <p className={styles.bodyLarge}>{t.formatIntro}</p>
          </div>
          <div className={styles.formatGrid}>
            {t.formats.map((item) => (
              <article className={styles.formatCard} key={item.id}>
                <div className={styles.cardMeta}><span>{item.id}</span><span>{item.name}</span></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.pilot} aria-labelledby="pilot-title">
        <div className="shell">
          <div className={styles.sectionEyebrow}><span>03 / FIRST EXPERIMENT</span><span>90 MIN / PROPOSED</span></div>
          <div className={styles.pilotGrid}>
            <div>
              <p className={styles.smallCaps}>{t.pilotTag}</p>
              <h2 id="pilot-title">{t.pilotTitle}</h2>
              <p className={styles.bodyLarge}>{t.pilotDesc}</p>
              <p className={styles.pilotNote}>{t.pilotFooter}</p>
            </div>
            <ol className={styles.agenda}>
              {t.agenda.map((item) => (
                <li key={item.time}>
                  <time>{item.time}</time>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.principles} id="principles">
        <div className="shell">
          <div className={styles.sectionEyebrow}><span>04 / RESPONSIBILITY</span><span>PROXY SOCIETY</span></div>
          <div className={styles.sectionTitleRow}>
            <div><p className={styles.smallCaps}>{t.principleTag}</p><h2>{t.principleTitle}</h2></div>
            <p className={styles.bodyLarge}>{t.bridgeText}</p>
          </div>
          <div className={styles.principlesGrid}>
            {t.principles.map((principle, i) => (
              <article className={styles.principle} key={principle.title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div><h3>{principle.title}</h3><p>{principle.text}</p></div>
              </article>
            ))}
          </div>
          <div className={styles.bridge}>
            <div>
              <p className={styles.smallCaps}>{t.bridgeTag}</p>
              <h3>{t.bridgeTitle}</h3>
            </div>
            <Link href={home}>{t.bridgeLink} <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className={styles.join} id="join">
        <div className="shell">
          <div className={styles.joinCard}>
            <div>
              <p className={styles.smallCaps}>{t.callTag}</p>
              <h2>{t.callTitle}</h2>
              <p className={styles.bodyLarge}>{t.callText}</p>
            </div>
            <div className={styles.joinAction}>
              <a href={joinEmail} className={styles.primaryButton}>{t.callButton} <span aria-hidden="true">↗</span></a>
              <p>{t.callHint}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="shell">
          <div className={styles.footerTop}><strong>VARI<span>.</span></strong><p>{t.footer}</p></div>
          <div className={styles.footerBottom}><Link href={home}>← {t.back}</Link><span>© 2026 PROXY SOCIETY MTÜ</span><a href="mailto:hello@proxysociety.org">hello@proxysociety.org</a></div>
        </div>
      </footer>
    </main>
  );
}
