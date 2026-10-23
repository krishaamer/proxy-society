import type { Metadata } from "next";
import ChickenLegalNotice from "../../../../components/ChickenLegalNotice";

export const metadata: Metadata = {
  title: "Chickens, No Cages：資料來源、個資與圖片使用權",
  description: "愛沙尼亞國會追蹤頁的資料來源、著作權、個資保護及更正機制。",
  alternates: {
    canonical: "https://proxysociety.org/zh-tw/projects/chickens-no-cages/rights",
    languages: {
      en: "https://proxysociety.org/projects/chickens-no-cages/rights",
      "zh-Hant-TW": "https://proxysociety.org/zh-tw/projects/chickens-no-cages/rights"
    }
  }
};

export default function ChickensRightsZhTwPage() {
  return <ChickenLegalNotice locale="zh-TW" />;
}
