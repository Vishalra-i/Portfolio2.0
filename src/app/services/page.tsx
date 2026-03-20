import { CtaButtons } from "@/components/site/cta-buttons";
import { SchemaScript } from "@/components/site/schema-script";
import { buildMetadata, serviceSchema } from "@/lib/seo";
import { servicePackages, services } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Website Services & Pricing Packages for Local Businesses",
  description:
    "Explore starter, growth, store, and premium website packages with SEO, conversion, and performance optimization for local businesses in India.",
  path: "/services",
  keywords: ["website packages", "website pricing India", "store owner website package"],
});

export default function ServicesPage() {
  return (
    <main>
      <SchemaScript
        schema={serviceSchema(
          "Website services and pricing packages",
          "Website packages and SEO services for local businesses, stores, and service brands.",
          "https://vrwebsolution.site/services"
        )}
      />

      <section className="section-padding bg-slate-950 text-white">
        <div className="container-main grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">Services & packages</p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Website packages designed for store owners and growth-focused local businesses.
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              We expanded beyond a single starter offer so each business can choose the right level
              of content depth, catalogue structure, and conversion support.
            </p>
            <CtaButtons />
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">What every package includes</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>• Indexable page structure and clean URLs</li>
              <li>• Mobile-responsive, conversion-first layout</li>
              <li>• Metadata, schema, sitemap, and robots setup</li>
              <li>• CTA placement for calls, WhatsApp, and inquiries</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main grid gap-6 xl:grid-cols-2">
          {servicePackages.map((pkg) => (
            <article key={pkg.slug} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex flex-col gap-3 border-b border-slate-100 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-blue-600">{pkg.name}</p>
                  <h2 className="mt-1 text-3xl font-extrabold text-slate-950">{pkg.price}</h2>
                </div>
                <p className="text-sm text-slate-500">Ideal for: {pkg.idealFor.join(", ")}</p>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-600">{pkg.summary}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {pkg.features.map((feature) => (
                  <li key={feature} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-alt">
        <div className="container-main">
          <div className="max-w-3xl">
            <h2 className="section-title">Core service capabilities behind every package</h2>
            <p className="section-copy">
              Packages combine production-grade front-end quality with the technical SEO and UX work
              needed to support indexing, trust, and lead capture.
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
    </main>
  );
}
