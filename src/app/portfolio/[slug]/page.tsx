import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { portfolioProjects, primaryCta } from "@/lib/site";

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = portfolioProjects.find((item) => item.slug === params.slug);

  if (!project) {
    return {};
  }

  return buildMetadata({
    title: `${project.title} | Portfolio Case Overview`,
    description: project.description,
    path: `/portfolio/${project.slug}`,
    keywords: [project.category, project.title, "website portfolio case study"],
  });
}

export default function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  const project = portfolioProjects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <section className="section-padding">
        <div className="container-main max-w-4xl">
          <Link href="/portfolio" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
            ← Back to portfolio
          </Link>

          <header className="mt-6 rounded-[2rem] bg-slate-950 px-8 py-10 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">{project.category}</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">{project.title}</h1>
            <p className="mt-4 max-w-3xl text-lg text-slate-300">{project.description}</p>
          </header>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-950">Expected outcomes</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {project.results.map((result) => (
                  <li key={result}>• {result}</li>
                ))}
              </ul>
            </section>
            <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-950">Key UX and SEO highlights</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-950">Want something similar for your business?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              We can adapt this structure for your industry, offer mix, service area, and lead goal.
            </p>
            <Link href={primaryCta.href} className="btn-primary mt-5 inline-flex">
              {primaryCta.label}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
