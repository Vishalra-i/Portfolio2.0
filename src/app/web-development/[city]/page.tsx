import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { cities, cityIntroMap, secondaryCta, siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return cities.map((city) => ({ city }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const city = params.city.toLowerCase() as (typeof cities)[number];

  if (!cities.includes(city)) {
    return {};
  }

  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  return buildMetadata({
    title: `Web Development Services in ${cityName}`,
    description: `SEO-ready web development services in ${cityName} for local businesses, stores, and service brands that need more leads and better online credibility.`,
    path: `/web-development/${city}`,
    keywords: [
      `web development in ${cityName}`,
      `${cityName} website design`,
      `${cityName} local SEO website`,
    ],
  });
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = params.city.toLowerCase() as (typeof cities)[number];

  if (!cities.includes(city)) {
    notFound();
  }

  const cityName = city.charAt(0).toUpperCase() + city.slice(1);
  const intro = cityIntroMap[city];

  return (
    <main>
      <section className="section-padding">
        <div className="container-main max-w-4xl">
          <Link href="/services" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
            ← Explore services
          </Link>
          <header className="mt-6 space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Location page</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Web development services in {cityName}
            </h1>
            <p className="text-lg leading-7 text-slate-600">{intro}</p>
          </header>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-950">What we focus on in {cityName}</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li>• Local-intent service page structure</li>
                <li>• Mobile-first performance for Indian visitors</li>
                <li>• Strong CTA placement for calls and WhatsApp</li>
                <li>• Metadata and schema aligned to city relevance</li>
              </ul>
            </article>
            <article className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-950">Need a proposal?</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                We help businesses in {cityName} build pages that are easier to index, easier to
                trust, and easier to convert.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href="/get-quote" className="btn-primary text-center">
                  Get Website @ ₹7999
                </Link>
                <Link href={secondaryCta.href} target="_blank" rel="noreferrer" className="btn-secondary text-center">
                  Book Free Consultation
                </Link>
              </div>
              <p className="mt-4 text-sm text-slate-500">Contact: {siteConfig.phone}</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
