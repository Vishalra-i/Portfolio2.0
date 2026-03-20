import { ContactForm } from "@/app/components/contact-form";
import { CtaButtons } from "@/components/site/cta-buttons";
import { buildMetadata } from "@/lib/seo";
import { servicePackages } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Get a Website Quote for Starter, Store, and Premium Packages",
  description:
    "Request a quote for your local business website, store catalogue site, or premium lead-generation package.",
  path: "/get-quote",
  keywords: ["website quote", "starter pack website", "store owner website package"],
});

export default function GetQuotePage() {
  return (
    <main>
      <section className="section-padding bg-slate-950 text-white">
        <div className="container-main grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">Get quote</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Choose a package and get a website plan tailored to your business.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              The Starter Pack still begins at ₹7,999, and we now offer richer package options so
              store owners and growing brands can choose the right level of content and conversion support.
            </p>
            <CtaButtons className="mt-8" />

            <div className="mt-10 grid gap-4">
              {servicePackages.map((pkg) => (
                <article key={pkg.slug} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-2xl font-bold">{pkg.name}</h2>
                    <p className="text-xl font-extrabold text-blue-200">{pkg.price}</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{pkg.summary}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
