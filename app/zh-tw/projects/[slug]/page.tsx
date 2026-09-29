import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectCasePage from "../../../components/ProjectCasePage";
import { getProject, projectSlugs } from "../../../projects-data";

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug, "zh-TW");
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
    alternates: {
      canonical: `https://proxysociety.org/zh-tw/projects/${slug}`,
      languages: {
        en: `https://proxysociety.org/projects/${slug}`,
        "zh-Hant-TW": `https://proxysociety.org/zh-tw/projects/${slug}`
      }
    }
  };
}

export default async function ProjectZhTwPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getProject(slug, "zh-TW")) notFound();
  return <ProjectCasePage locale="zh-TW" slug={slug} />;
}
