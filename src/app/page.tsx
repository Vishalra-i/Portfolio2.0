import Link from "next/link";
import { CtaButtons } from "@/components/site/cta-buttons";
import { SchemaScript } from "@/components/site/schema-script";
import { buildMetadata, serviceSchema } from "@/lib/seo";
import {
  cities,
  portfolioProjects,
  servicePackages,
  services,
  testimonials,
  trustBadges,
} from "@/lib/site";

export const metadata = buildMetadata({
  title: "High-Converting Website Design for Local Businesses in India",
  description:
    "Get a fast, SEO-ready business website with strong CTAs, schema, and lead generation flows for Indian local businesses and store owners.",
  path: "/",
  keywords: [
    "website design for local businesses",
    "business website India",
    "website for store owners",
    "SEO-ready website",
  ],
});

export default function Home() {
  return (
    <main>
      <SchemaScript
        schema={serviceSchema(
          "Business website design and SEO optimization",
          "High-converting websites for local businesses, service brands, and store owners in India.",
          "https://vrwebsolution.site/services"
        )}
      />

      <section className="overflow-hidden bg-slate-950 text-white">
        <div className="container-main grid gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="space-y-8">
            <span className="inline-flex rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-1 text-sm font-medium text-blue-200">
              SEO-first websites for local businesses, stores, and service brands
            </span>
            <div className="space-y-5">
              <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                We build websites that look premium, rank better, and convert visitors into inquiries.
              </h1>
              <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">
                From Starter Pack websites to catalogue-ready store packages, VR Web Solutions helps
                Indian business owners launch faster and win more leads.
              </p>
            </div>
            <CtaButtons />
            <div className="grid gap-3 sm:grid-cols-2">
              {trustBadges.map((badge) => (
                <div key={badge} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  {badge}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-blue-950/20">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-500 via-slate-900 to-slate-950 p-6">
              <div className="rounded-[1.25rem] bg-white p-5 text-slate-900 shadow-xl">
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <p className="text-sm font-semibold text-blue-600">Featured Package</p>
                    <h2 className="text-2xl font-bold">Store Pack</h2>
                  </div>
                  <p className="text-2xl font-extrabold">₹24,999</p>
                </div>
                <ul className="mt-5 space-y-3 text-sm text-slate-600">
                  <li>• Catalogue-ready pages for store owners</li>
                  <li>• Product inquiry flows + WhatsApp CTA</li>
                  <li>• Schema, sitemap, and technical SEO setup</li>
                  <li>• Conversion-first layout with trust sections</li>
                </ul>
                <Link href="/services" className="btn-primary mt-6 inline-flex">
                  Explore all packages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-3xl">
            <h2 className="section-title">Services built for growth, visibility, and better conversion</h2>
            <p className="section-copy">
              Every project is structured for indexing, mobile responsiveness, semantic content, and
              better CTA performance across the full buyer journey.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container-main">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="section-title">Flexible website packages for service brands and store owners</h2>
              <p className="section-copy">
                We expanded the lineup beyond the starter pack so businesses can choose a package
                that matches catalogue depth, service complexity, and conversion needs.
              </p>
            </div>
            <Link href="/services" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
              View full packages →
            </Link>
          </div>
          <div className="mt-8 grid gap-5 xl:grid-cols-4">
            {servicePackages.map((pkg) => (
              <article key={pkg.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-blue-600">{pkg.name}</p>
                <h3 className="mt-2 text-3xl font-extrabold text-slate-950">{pkg.price}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{pkg.summary}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {pkg.features.slice(0, 4).map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="section-title">Portfolio concepts designed to convert</h2>
              <p className="section-copy">
                Each concept balances strong visual presentation with a clean information hierarchy,
                CTA strategy, and internal navigation flow.
              </p>
            </div>
            <Link href="/portfolio" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
              See portfolio →
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {portfolioProjects.map((project) => (
              <article key={project.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {project.category}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-slate-950">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
                <Link href={`/portfolio/${project.slug}`} className="mt-5 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700">
                  View project details →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container-main grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="section-title">Built for technical SEO and indexability from day one</h2>
            <p className="section-copy">
              Important routes are linked, metadata is unique, canonical URLs are defined, and city
              landing pages support local keyword coverage without thin content patterns.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {cities.map((city) => (
              <Link
                key={city}
                href={`/web-development/${city}`}
                className="rounded-3xl border border-slate-200 bg-white p-5 text-sm font-semibold capitalize text-slate-800 shadow-sm transition hover:border-blue-200 hover:text-blue-600"
              >
                Web development in {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-3xl">
            <h2 className="section-title">Testimonials that reinforce trust</h2>
            <p className="section-copy">
              Social proof matters because high-converting pages reduce uncertainty before the first
              message or phone call.
            </p>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-base leading-7 text-slate-700">“{testimonial.quote}”</p>
                <footer className="mt-5">
                  <p className="font-semibold text-slate-950">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.business}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container-main rounded-[2rem] bg-slate-950 px-6 py-12 text-white sm:px-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to launch a website that actually supports sales?</h2>
            <p className="text-slate-300">
              Choose a package, share your business goals, and get a clear roadmap for design,
              content, SEO, and lead generation.
            </p>
          </div>
          <CtaButtons className="mt-8" />
        </div>
      </section>
    </main>
  );
}
