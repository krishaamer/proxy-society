import { civicPortraits } from "../chicken-portrait-rights";
import type { CivicLocale } from "../chicken-locales";
import styles from "./ChickenLegalNotice.module.css";

const copy = {
  en: {
    back: "Return to Chickens, No Cages",
    home: "/projects/chickens-no-cages#outreach",
    alternative: "/zh-tw/projects/chickens-no-cages/rights",
    alternativeLabel: "繁中",
    title: "Sources, privacy & image rights",
    lead: "What we publish, where we obtained it, who is responsible, and how to request a correction.",
    updated: "Reviewed 23 October 2026",
    items: [
      ["Publisher and controller", "Proxy Society MTÜ is the publisher and personal-data controller for this register. Estonian non-profit association, registry code 80679069, registered office Jahu tn 14-219, 10415 Tallinn, Estonia. Contact: hello@proxysociety.org."],
      ["Public-interest purpose and source limitations", "The register documents a public policy debate about laying-hen cage housing. MP names, official roles, attributed statements, parliamentary acts and legislative sources come from publicly accessible parliamentary records and public statements. The expanded directory also includes a short source-linked public parliamentary excerpt for each MP: many concern entirely different topics and are deliberately labeled as such, not used to imply a position on hen cages. This expanded category is subject to continuing data-minimisation review. Only individually licensed portraits are shown. Our own verified sent/replied status, if recorded, is a separate process fact, not a parliamentary position. We do not publish private letters, draft emails, personal addresses, identity numbers, health information or private correspondence. This register is not an official parliamentary service, a political score or an endorsement."],
      ["GDPR and the Estonian Personal Data Protection Act", "Ordinary public-office personal data is processed for proportionate civic documentation based on the association's legitimate interests under GDPR Article 6(1)(f), subject to a documented assessment of necessity and individual rights. Political opinions are special-category data under Article 9 and require an additional applicable condition. Article 9(2)(e) may cover opinions the individual has manifestly made public. Where its conditions are met, GDPR Article 85 and Estonia's Personal Data Protection Act section 4 may protect journalistic public-interest publication consistent with journalism ethics and without excessive harm. These are case-by-case conditions, not blanket permission to republish any public material."],
      ["Editorial accuracy and proportionality", "We keep short original-language quotations, their dates, direct source links and limits of attribution. We distinguish an individual statement, a collective committee view, bill sponsorship, debate participation, recorded votes and non-response. None is automatically an individual's current position on every aspect of a bill. We do not publish inferred political beliefs, partisan rankings, endorsements or motive speculation. Historical statements are identified as historical. Material errors are corrected and disputed entries may be hidden pending review."],
      ["Copyright and photograph rights", "Estonia's Copyright Act section 19 provides a specific exception for duly attributed and proportionate quotation or summary of lawfully public works. It is not general US-style fair use, and it does not give a blanket right to republish newspaper photos or articles. Photography requires a separately verified licence or permission. The three photos used are individually licensed on Wikimedia Commons with author, source, licence URL and any modification history linked below. Photographs do not imply endorsement by the subject. Riigikogu's photo archive separately allows limited credited, non-commercial, unmodified use; we are not assuming these terms cover all photographs on the parliamentary website."],
      ["Review, retention and data-subject rights", "This is a dated research snapshot, not a live feed. We review relevance and accuracy at least annually and when substantial contrary evidence appears, keeping material only while a proportionate public-interest purpose remains. We review contact-status retention at project closure. Affected people may ask for access, rectification, erasure or restriction of their data, or object to processing, as provided by law. Write to hello@proxysociety.org with a link and the grounds for your request. We normally respond within one month, subject to applicable extensions or exceptions and reasonable identity verification. If a privacy dispute remains unresolved, you may complain to the Estonian Data Protection Inspectorate at aki.ee. Rights holders can also request review of a specific photograph or quotation."],
      ["Hosting and international processing", "The site uses Vercel hosting, which may process technical access data such as IP addresses and access logs, sometimes across borders. Vercel's privacy and processing terms are linked below. This tracker does not conduct automated profiling or targeted advertising. The three CC-licensed portraits are stored as approximately 256-pixel WebP images on this site's own CDN, not fetched from Wikimedia during page viewing. Clicking the original-file or licence hyperlink opens the external website. The public site does not connect to private Gmail drafts or private research files."]
    ],
    photosTitle: "Individually licensed photographs",
    photoIntro: "Each image is for identification only. Image creation dates do not date the nearby parliamentary statements. Copyright belongs to the respective owners; only the image is covered by its specified licence.",
    creator: "Credit",
    changes: "Version or changes",
    original: "Original file and photographer ↗",
    license: "Licence terms ↗",
    references: "Statutes and guidance",
    disclaimer: "This notice explains the project's practices; it is not a legal certification or a guarantee against liability. Publication of a public record remains subject to its facts, copyright and applicable data-protection law. No affiliation with Parliament, Wikimedia Commons, photographed MPs or photographers is implied."
  },
  et: {
    back: "Tagasi projekti juurde",
    home: "/et/projects/chickens-no-cages#outreach",
    alternative: "/projects/chickens-no-cages/rights",
    alternativeLabel: "EN",
    title: "Allikad, isikuandmed ja fotode kasutusõigused",
    lead: "Selgitame, mida avaldame, kust andmed pärinevad, kes nende töötlemise eest vastutab ja kuidas saab taotleda parandust.",
    updated: "Üle vaadatud 23.10.2026",
    items: [
      ["Avaldaja ja vastutav töötleja",
        "Selle avaliku registri avaldaja ja isikuandmete vastutav töötleja on Eesti mittetulundusühing Proxy Society MTÜ (registrikood 80679069). Registrijärgne aadress: Jahu tn 14-219, 10415 Tallinn, Eesti. Kontakt: hello@proxysociety.org."],
      ["Avalik huvi ja andmete päritolu",
        "Register käsitleb munakanade puurispidamise üle peetavat avalikku seadusandlikku arutelu. Saadikute nimed, ametikohad, neile omistatavad sõnavõtud, menetlustoimingud ja allikad pärinevad avalikest Riigikogu dokumentidest, stenogrammidest ning avalikult avaldatud ütlustest. Iga 101 saadiku kohta leidub ka viitega lühike avaliku sõnavõtu katkend. Paljud neist puudutavad muid teemasid ning on sellisena märgistatud; neid ei kasutata järelduste tegemiseks saadiku seisukoha kohta puurispidamise küsimuses. Ka nende kõrvaliste andmete avaldamise vajalikkust tuleb jätkuvalt hinnata. Kuvame üksnes eraldi kontrollitud kasutusõigusega portreefotosid. Meie endi kinnitatud kirja saatmise või vastuse saabumise fakt on eraldi tegevusandmestik, mitte tõend saadiku seisukoha kohta. Me ei avalda saatmata kirju, erakirjavahetust, koduaadresse, isikukoode, terviseandmeid ega muid eraelu puudutavaid andmeid. Register pole Riigikogu ametlik teenus ega poliitikute pingerida."],
      ["Isikuandmete kaitse üldmäärus ja Eesti õigus",
        "Avaliku ülesande ja ametitegevusega seotud tavaliste isikuandmete töötlemisel on kavandatav õiguslik alus isikuandmete kaitse üldmääruse (IKÜM, GDPR) artikli 6 lõike 1 punkt f: õigustatud huvi proportsionaalseks avalikes huvides teadustööks ja kodanikuteavituseks. See eeldab töötlemise vajalikkuse ja andmesubjekti õiguste tegelikku kaalumist. Poliitilised vaated võivad olla eriliigilised isikuandmed IKÜM artikli 9 tähenduses ning vajavad eraldi töötlemistingimust. Artikli 9 lõike 2 punkt e võib kohalduda seisukohtadele, mille inimene on ise ilmselgelt avalikustanud. Kui seaduses sätestatud tingimused on täidetud, võivad asjakohased olla ka IKÜM artikkel 85 ja Eesti isikuandmete kaitse seaduse § 4, sealhulgas ajakirjanduseetika ja liigse kahjustamise vältimise nõuded. Ükski neist sätetest ei ole automaatne üldluba kogu internetis kättesaadava teabe taasavaldamiseks."],
      ["Tsitaatide täpsus ja proportsionaalsus",
        "Avaldame lühikesi algkeelseid tsitaate koos kuupäeva, allikaviite ja omistamise selgitusega. Eraldi tuleb hoida saadiku isiklik ütlus, komisjoni ühine hinnang, eelnõu algatamine, istungil sõna võtmine, hääletamine ja meie kirjale vastamata jätmine. Ükski neist ei näita automaatselt inimese praegust seisukohta eelnõu kõigi sätete suhtes. Me ei järelda poliitilisi vaateid muuteemalisest jutust, ei koosta poliitilisi reitinguid ega omista inimestele oletatud motiive. Varasemad sõnavõtud on kuupäevastatud. Tuvastatud olulised vead parandatakse ning vaidlusalune kirje võidakse asjaolude kontrollimise ajaks peita."],
      ["Autoriõigus ja portreefotod",
        "Autoriõiguse seaduse § 19 näeb ette kindlatel tingimustel avaldatud teoste proportsionaalse tsiteerimise või refereerimise koos nõuetekohase viitamisega. See ei tähenda üldist õigust ajakirjanduslikke tekste või fotosid vabalt kopeerida. Fotode avaldamiseks on vaja eraldi sobivat kasutusluba või seaduslikku erandit. Kolme kasutatava Wikimedia Commonsi foto juures on viide originaalfailile, autorile, litsentsile ja tehnilistele muudatustele. Foto näitab avalikus ametis olevat inimest, kuid ei tähenda tema toetust sellele projektile. Riigikogu fotoarhiivi tingimused lubavad teatavat viitega mitteärilist ja muutmata kujul kasutust. Neid tingimusi ei saa automaatselt laiendada kõigile Riigikogu veebis olevatele fotodele."],
      ["Säilitamine ja andmesubjekti õigused",
        "Register on kuupäevastatud väljavõte, mitte reaalajas andmebaas. Hindame vähemalt kord aastas ning uute oluliste asjaolude ilmnemisel andmete täpsust, vajalikkust ja avalikku huvi. Säilitame andmeid üksnes seni, kuni selleks on õigustatud ja proportsionaalne avaliku huvi eesmärk. Kampaania lõppedes hindame eraldi kirjavahetuse staatuse säilitamise vajadust. Andmesubjektil võib seaduse järgi olla õigus saada andmetega tutvuda, nõuda parandamist, kustutamist või töötlemise piiramist ning esitada vastuväide. Palume saata vastav kiri aadressil hello@proxysociety.org, lisades kirje lingi ja põhjenduse. Vastame üldjuhul ühe kuu jooksul, arvestades seaduslikke erandeid ja vajaduse korral proportsionaalset isiku tuvastamist. Andmekaitsealase vaidluse puhul võib pöörduda Andmekaitse Inspektsiooni poole aadressil aki.ee. Autoriõiguse valdaja saab paluda konkreetse foto või tsitaadi kasutamise ülevaatamist."],
      ["Veebimajutus ja andmeedastus",
        "Veebilehte majutab Vercel, kelle taristu võib töödelda tehnilisi päringuandmeid (näiteks IP-aadresse ja serveriloge) ka rahvusvaheliselt. Verceli privaatsustingimused ja andmetöötluse kokkulepe on allpool viidatud. Register ei kasuta sihitud reklaami ega koosta külastajate või saadikute automaatseid profiile. Kolm CC-litsentsiga fotot on salvestatud umbes 256 piksli suuruste WebP-piltidena veebilehe enda CDN-is; lehe avamisel ei laadita neid otse Wikimedia serverist. Originaalfaili või litsentsi lingil klõpsates avaneb väline veebileht. Avalik register ei ühendu Gmaili mustandite ega privaatsete uurimisfailidega."]
    ],
    photosTitle: "Fotode autorid ja kasutusload",
    photoIntro: "Fotod on üksnes isikute tuvastamiseks. Foto tegemise kuupäev ei ole seotud selle kõrval esitatud Riigikogu sõnavõtu kuupäevaga. Igal fotol on oma kasutuslitsents ning autoriõigus jääb õiguste valdajale.",
    creator: "Autor ja allikas",
    changes: "Pildi töötlemine",
    original: "Originaalfail ja autoriandmed ↗",
    license: "Litsentsitingimused ↗",
    references: "Õigusaktid ja ametlikud juhised",
    disclaimer: "See teave kirjeldab projekti toimetamis- ja andmekäitluspõhimõtteid, kuid ei ole õiguslik kinnitus ega välista võimalikke nõudeid. Avaliku huvi, isikuandmete kaitse ja autoriõiguse norme tuleb iga avaldamise puhul eraldi hinnata. Projekt ei esinda Riigikogu, Wikimedia Commonsit, fotograafe ega piltidel kujutatud saadikuid."
  },
  "zh-TW": {
    back: "返回 Chickens, No Cages",
    home: "/zh-tw/projects/chickens-no-cages#outreach",
    alternative: "/projects/chickens-no-cages/rights",
    alternativeLabel: "EN",
    title: "資料來源、個資與圖片使用權",
    lead: "公開說明我們刊登哪些資料、來源、負責單位，以及如何提出更正請求。",
    updated: "檢視日期：2026 年 10 月 23 日",
    items: [
      ["發布單位與個資控管者", "本紀錄由愛沙尼亞非營利協會 Proxy Society MTÜ 發布並擔任個資控管者。登記編號 80679069，登記地址 Jahu tn 14-219, 10415 Tallinn, Estonia。聯絡信箱：hello@proxysociety.org。"],
      ["公共利益目的與資料來源", "本頁記錄蛋雞籠飼相關的公共立法討論。議員姓名、公職、可歸屬的發言、國會行動與立法資料來自公開國會紀錄及聲明，照片則須逐張核實授權。 擴充後的名錄亦為每位議員提供附原始來源的簡短國會發言節錄；許多與蛋雞籠飼無關，會明確標示且絕不據此推測立場。此項擴充資料仍須持續依資料最小化原則檢視。未來已核實的寄信或回覆狀態屬於本計畫自己的作業紀錄，不代表議員政治立場。不公開私人信件、草稿、私人地址、身分證號、健康資訊或私人通信。這不是官方國會服務，也不進行政治人物評分或背書。"],
      ["GDPR 與愛沙尼亞個資法", "一般公職個資基於 GDPR 第 6(1)(f) 條的合法利益，以必要且合比例的公民紀錄為目的，並須衡量個人權利。政治觀點可能屬第 9 條特種個資，需要額外符合相關處理條件；本人明確主動公開的意見，在適當情況下可能符合第 9(2)(e) 條。GDPR 第 85 條及愛沙尼亞《個人資料保護法》第 4 條，僅在符合公共利益、新聞倫理與避免過度損害等條件時可能適用。公開可搜尋不等於可任意再發布。"],
      ["正確性與比例原則", "只引用必要的愛沙尼亞語原文、日期、來源及歸屬限制。區分個人言論、委員會共同意見、法案連署、議場發言、表決與未回覆。不從這些資料自動推測議員當前政治立場，也不做黨派排名、背書或動機推測。歷史言論會註明時點；如有重大錯誤會更正，必要時先隱藏爭議內容。"],
      ["著作權與照片", "愛沙尼亞《著作權法》第 19 條允許符合條件、附來源且合比例的短篇引述或摘要，但不是美國式概括的 fair use，也不代表能任意轉載整篇新聞或照片。圖片必須有個別授權或許可。本站使用的三張 Wikimedia Commons 圖片均附作者、來源、授權及修改紀錄。照片僅供辨識，並不表示當事人背書。Riigikogu 照片庫另有具條件的非商業、註明作者且不得修改的使用規定，不能直接套用到整個國會網站。"],
      ["保存期限、個資權利與申訴", "本頁是有日期的研究快照而非即時串接。至少每年檢視必要性與正確性，有重大新證據時亦會重新檢查，僅在符合比例的公共利益仍存在時保留。計畫結束後會重新評估聯繫狀態的保存。當事人可依法查詢、更正、要求刪除、限制處理或提出異議。請將網頁連結與具體事由寄至 hello@proxysociety.org。原則上於一個月內回覆，必要時進行合理身分確認；亦可向愛沙尼亞個資保護主管機關 aki.ee 申訴。著作權人可就個別照片或引言提出申訴。"],
      ["網站代管與跨境處理", "網站由 Vercel 代管，可能處理 IP 位址、存取紀錄等技術資料，部分資料亦可能跨境處理，相關條款見下方連結。本追蹤工具不進行自動化使用者剖析或定向廣告。三張已授權的 Wikimedia 照片已轉成約 256 像素的 WebP 格式，並由本站 CDN 提供，訪客瀏覽此頁時不需要向 Wikimedia 下載圖片。點擊照片原始來源或授權條款則會開啟第三方網站。網站不連線讀取私人 Gmail 草稿或私人研究庫。"]
    ],
    photosTitle: "已逐張核實授權的照片",
    photoIntro: "照片僅供辨識人物，拍攝日期不代表相關國會發言日期。個別圖片依各自授權使用，著作權仍屬原權利人。",
    creator: "攝影／來源",
    changes: "版本與修改紀錄",
    original: "原始圖片與作者資訊 ↗",
    license: "授權條款 ↗",
    references: "法律與官方指引",
    disclaimer: "本聲明說明實際編輯及資料處理方式，不是法律認證，也無法保證免於法律責任。個別發布仍須依法判斷。與國會、Wikimedia Commons、照片中的議員或攝影者均無背書關係。"
  }
} as const;

const estonianPhotoCredits: Record<string, { credit: string; changes: string }> = {
  "Arvo Aller": {
    credit: "Foto: Ilja Smirnov / Eesti Kultuuriministeerium. Wikimedia Commonsi kasutaja Karljohan29 lõikas algsest litsentsitud fotost väljavõtte.",
    changes: "Commonsis tehtud väljalõige; Proxy Society teisendas faili tehniliselt umbes 256 piksli laiuseks WebP-pildiks. Rohkem kärpimist ega retušeerimist ei tehtud."
  },
  "Urmas Kruuse": {
    credit: "Foto: Renee Altrov / Riigikantselei. Wikimedia VRT luba nr 2021033010001343.",
    changes: "Tehniline teisendamine umbes 256 piksli laiuseks WebP-pildiks; muud kärpimist ega retušeerimist ei tehtud. Litsents CC BY-SA 4.0 jääb kehtima."
  },
  "Züleyxa Izmailova": {
    credit: "Foto: Sillerkiil, Arvamusfestival 2021.",
    changes: "Tehniline teisendamine umbes 256 piksli laiuseks WebP-pildiks; muud kärpimist ega retušeerimist ei tehtud. Litsents CC BY-SA 4.0 jääb kehtima."
  }
};

const links = [
  { label: "GDPR, Regulation (EU) 2016/679", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng" },
  { label: "Estonian Personal Data Protection Act (in force 1 October 2026, authentic Estonian text)", url: "https://www.riigiteataja.ee/akt/130062026052" },
  { label: "Estonian Copyright Act §19", url: "https://www.riigiteataja.ee/akt/128122021003" },
  { label: "Data Protection Inspectorate", url: "https://www.aki.ee/isikuandmed/kkk/ajakirjandus" },
  { label: "Riigikogu Photo Archive conditions", url: "https://www.riigikogu.ee/en/conditions-use-riigikogu-photo-archive/" },
  { label: "Vercel privacy notice", url: "https://vercel.com/legal/privacy-notice" },
  { label: "Vercel data processing terms", url: "https://vercel.com/legal/dpa" },
  { label: "Public civic dataset", url: "https://github.com/krishaamer/proxy-society/blob/main/app/chicken-outreach-data.ts" }
];

export default function ChickenLegalNotice({ locale }: { locale: CivicLocale }) {
  const t = copy[locale];
  return (
    <main className={styles.page} lang={locale === "zh-TW" ? "zh-Hant-TW" : locale}>
      <div className="ambient-grid" aria-hidden="true" />
      <header className="site-header shell">
        <a className="wordmark" href={locale === "zh-TW" ? "/zh-tw" : "/"} >
          <span className="mark" aria-hidden="true">P/S</span>
          <span className="wordmark-copy"><strong>PROXY SOCIETY</strong><small>HUMAN / AGENT / SOCIETY</small></span>
        </a>
        <nav aria-label="Primary navigation">
          <a href={t.home}>{t.back}</a>
          {([
            { code: "et", label: "ET", lang: "et", href: "/et/projects/chickens-no-cages/rights" },
            { code: "en", label: "EN", lang: "en", href: "/projects/chickens-no-cages/rights" },
            { code: "zh-TW", label: "繁中", lang: "zh-Hant-TW", href: "/zh-tw/projects/chickens-no-cages/rights" }
          ] as const).filter((option) => option.code !== locale).map((option) => (
            <a
              key={option.code}
              className="locale-switch"
              href={option.href}
              hrefLang={option.lang}
              lang={option.lang}
              aria-label={`Read these terms in ${option.code === "et" ? "Estonian" : option.code === "en" ? "English" : "Traditional Chinese"}`}
            >
              {option.label}
            </a>
          ))}
          <a className="nav-cta" href="mailto:hello@proxysociety.org">{locale === "et" ? "Kontakt" : "Contact"}</a>
        </nav>
      </header>
      <article className={styles.content + " shell"}>
        <div className={styles.meta}><span>{locale === "et" ? "AVALIK REGISTER / ÕIGUSTEAVE" : "PUBLIC RECORD / LEGAL INFORMATION"}</span><span>{t.updated}</span></div>
        <h1>{t.title}</h1>
        <p className={styles.lead}>{t.lead}</p>
        <a className={styles.email} href="mailto:hello@proxysociety.org">hello@proxysociety.org ↗</a>
        {t.items.map((entry, index) => (
          <section className={styles.section} key={entry[0]}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><h2>{entry[0]}</h2><p>{entry[1]}</p></div>
          </section>
        ))}
        <section className={styles.section}>
          <span>08</span>
          <div>
            <h2>{t.photosTitle}</h2>
            <p>{t.photoIntro}</p>
            <div className={styles.photos}>
              {Object.values(civicPortraits).map((photo) => (
                <div className={styles.photo} key={photo.person}>
                  <h3>{photo.person}</h3>
                  <p>{t.creator}: {locale === "et" ? (estonianPhotoCredits[photo.person]?.credit ?? photo.creditDetails) : photo.creditDetails}</p>
                  <p>{t.changes}: {locale === "et" ? (estonianPhotoCredits[photo.person]?.changes ?? photo.editNote) : photo.editNote}</p>
                  <div className={styles.links}>
                    <a href={photo.originalFile} target="_blank" rel="noreferrer">{t.original}</a>
                    <a href={photo.licenseUrl} target="_blank" rel="noreferrer">{photo.license}: {t.license}</a>
                  </div>
                  <small>{photo.sourceDate} · {locale === "et" ? "kontrollitud" : "checked"} {photo.checkedAt}</small>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <span>09</span>
          <div>
            <h2>{t.references}</h2>
            <ul className={styles.references}>
              {links.map((link) => (
                <li key={link.url}><a href={link.url} target="_blank" rel="noreferrer">{locale === "et" ? ({
                  "GDPR, Regulation (EU) 2016/679": "Isikuandmete kaitse üldmäärus (IKÜM / GDPR)",
                  "Estonian Personal Data Protection Act (in force 1 October 2026, authentic Estonian text)": "Isikuandmete kaitse seadus (kehtiv alates 01.10.2026)",
                  "Estonian Copyright Act §19": "Autoriõiguse seaduse § 19",
                  "Data Protection Inspectorate": "Andmekaitse Inspektsioon",
                  "Riigikogu Photo Archive conditions": "Riigikogu fotoarhiivi kasutustingimused",
                  "Vercel privacy notice": "Verceli privaatsusteade",
                  "Vercel data processing terms": "Verceli andmetöötlustingimused",
                  "Public civic dataset": "Avalik andmestik ja muudatuste ajalugu"
                } as Record<string, string>)[link.label] ?? link.label : link.label} ↗</a></li>
              ))}
            </ul>
            <p className={styles.disclaimer}>{t.disclaimer}</p>
          </div>
        </section>
        <a className={styles.back} href={t.home}>← {t.back}</a>
      </article>
      <footer className="site-footer shell">
        <span>© 2026 PROXY SOCIETY MTÜ · 80679069</span>
        <span>{t.updated}</span>
        <a href="mailto:hello@proxysociety.org">hello@proxysociety.org</a>
      </footer>
    </main>
  );
}
