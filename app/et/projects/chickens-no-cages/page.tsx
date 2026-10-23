import type { Metadata } from "next";
import ProjectCasePage from "../../../components/ProjectCasePage";
import { estonianChickensProject } from "../../../chicken-locales";

export const metadata: Metadata = {
  title: "Kanad ilma puurideta: Riigikogu sõnavõttude ja pöördumiste register",
  description: estonianChickensProject.summary,
  alternates: {
    canonical: "https://proxysociety.org/et/projects/chickens-no-cages",
    languages: {
      et: "https://proxysociety.org/et/projects/chickens-no-cages",
      en: "https://proxysociety.org/projects/chickens-no-cages",
      "zh-Hant-TW": "https://proxysociety.org/zh-tw/projects/chickens-no-cages"
    }
  },
  openGraph: {
    title: "Kanad ilma puurideta | Proxy Society",
    description: estonianChickensProject.summary,
    locale: "et_EE",
    url: "https://proxysociety.org/et/projects/chickens-no-cages"
  }
};

export default function ChickensNoCagesEstonianPage() {
  return <ProjectCasePage locale="et" slug="chickens-no-cages" />;
}
