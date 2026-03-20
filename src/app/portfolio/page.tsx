import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { portfolioProjects } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Portfolio of Website Concepts for Local Businesses and Stores",
  description:
    "Browse website concepts for salons, gyms, restaurants, tile showrooms, and other local businesses built for conversion and SEO.",
  path: "/portfolio",
  keywords: ["website portfolio", "business website examples", "store website design"],
});

export default function PortfolioPage() {
  return (
    <main>
      <section className="section-padding bg-slate-950 text-white">
        <div className="container-main max-w-4xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">Portfolio</p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Portfolio concepts built for clarity, trust, and stronger conversion.
          </h1>
          <p className="text-lg text-slate-300">
            These concepts show how we structure websites for services, retail, and local business
            intent with cleaner messaging and premium UI presentation.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main grid gap-6 lg:grid-cols-2">
          {portfolioProjects.map((project, index) => (
            <article key={project.slug} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <div className={`h-56 ${index % 2 === 0 ? "bg-gradient-to-br from-blue-500 to-slate-950" : "bg-gradient-to-br from-amber-500 to-slate-950"}`} />
              <div className="space-y-4 p-8">
                <div>
                  <p className="text-sm font-semibold text-blue-600">{project.category}</p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-950">{project.title}</h2>
                </div>
                <p className="text-sm leading-6 text-slate-600">{project.description}</p>
                <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                  {project.results.map((result) => (
                    <li key={result}>• {result}</li>
                  ))}
                </ul>
                <Link href={`/portfolio/${project.slug}`} className="inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700">
                  Read project breakdown →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
