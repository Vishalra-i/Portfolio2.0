import Link from "next/link";
import { CtaButtons } from "@/components/site/cta-buttons";
import { SchemaScript } from "@/components/site/schema-script";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";

const pagePath = "/us-web-development";
const pageUrl = absoluteUrl(pagePath);
const pageTitle = "Website Development for Small Businesses in USA | VR Web Solutions";
const pageDescription =
  "High-converting website development for small businesses in the USA. Get affordable web design, SEO-ready builds, and fast delivery with transparent pricing.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "website development for small businesses USA",
    "affordable web design USA",
    "hire web developer USA",
    "US small business website development",
    "conversion-focused landing page USA",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [absoluteUrl("/opengraph-image")],
  },
};

const trustPoints = [
  "Trusted by 50+ clients across service and retail brands",
  "5+ years of web delivery and conversion-focused UX execution",
  "Experience across healthcare, legal, SaaS, e-commerce, and local services",
  "US-market positioning with mobile-first design and SEO-first structure",
];

const serviceCards = [
  {
    title: "Business Websites",
    description:
      "Professional, trust-building websites for local services and growth-stage companies that need more qualified calls and leads.",
  },
  {
    title: "E-commerce Websites",
    description:
      "Conversion-ready online stores with clear product architecture, cart flow optimization, and frictionless checkout UX.",
  },
  {
    title: "SaaS Platforms",
    description:
      "Modern SaaS marketing websites and product interfaces with scalable layouts, fast performance, and semantic structure.",
  },
  {
    title: "Landing Pages",
    description:
      "Campaign landing pages designed for paid traffic with strong message match, social proof, and high-intent CTA flows.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    range: "$199–$399",
    description: "For new businesses launching quickly with a clean and credible web presence.",
    features: [
      "1 conversion-focused page",
      "Mobile-first responsive design",
      "Lead form + WhatsApp integration",
      "Basic on-page SEO setup",
      "Delivery in 5-7 business days",
    ],
    cta: "Start with Starter",
    featured: false,
  },
  {
    name: "Growth",
    range: "$499–$999",
    description: "For growing brands that need multiple pages, stronger SEO structure, and better lead quality.",
    features: [
      "Up to 5 custom pages",
      "SEO-friendly architecture",
      "Speed + Core Web Vitals optimization",
      "Advanced conversion sections",
      "Priority support and revisions",
    ],
    cta: "Choose Growth",
    featured: true,
  },
  {
    name: "Premium",
    range: "$1200+",
    description: "For serious scaling with custom UI/UX, advanced funnels, and premium conversion strategy.",
    features: [
      "Custom website strategy and UX",
      "SaaS or advanced business workflow support",
      "Schema markup + technical SEO depth",
      "Analytics and conversion tracking setup",
      "Dedicated project delivery support",
    ],
    cta: "Book Premium Consultation",
    featured: false,
  },
];

const differentiators = [
  "Fast delivery with clear milestones and weekly updates",
  "SEO-optimized build process from wireframe to launch",
  "Mobile-first design tuned for user behavior and conversions",
  "Affordable pricing versus most US agencies without sacrificing quality",
];

export default function UsWebDevelopmentPage() {
  return (
    <main>
      <SchemaScript
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: "Website Development for Small Businesses USA",
              description: pageDescription,
              provider: {
                "@type": "Organization",
                name: siteConfig.name,
                url: siteConfig.baseUrl,
              },
              areaServed: "United States",
              url: pageUrl,
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Do you provide affordable web design USA packages for small businesses?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we offer starter to premium packages so US small businesses can launch quickly and scale without overspending.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I hire web developer USA-focused services for SEO and conversions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, every build includes conversion-focused UX and SEO-ready page structure tailored for US search intent.",
                  },
                },
              ],
            },
          ],
        }}
      />

      <section className="overflow-hidden bg-slate-950 text-white">
        <div className="container-main grid gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-1 text-sm font-semibold text-blue-200">
              Limited monthly slots for US projects
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Website development for small businesses USA that need more leads, not just pretty pages.
            </h1>
            <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">
              We design and build conversion-focused websites for US businesses with premium UI, clear messaging,
              and search-ready architecture. Trusted by 50+ clients and built for measurable growth.
            </p>
            <CtaButtons primaryLabel="Get Free Consultation" />
          </div>

          <aside className="rounded-[2rem] border border-white/15 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-2xl font-bold">What you get from day one</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-200">
              <li>• Strategy call + conversion blueprint</li>
              <li>• UX structure focused on inquiry growth</li>
              <li>• SEO-ready page hierarchy and metadata</li>
              <li>• Fast-loading responsive development</li>
              <li>• WhatsApp + contact funnel integration</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <h2 className="section-title">Trusted by growth-focused teams and local brands</h2>
          <p className="section-copy">
            Our delivery model combines premium design quality with lean execution so US businesses can launch
            faster and convert more qualified traffic.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <article key={point} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">{point}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container-main">
          <h2 className="section-title">Website solutions built for US market outcomes</h2>
          <p className="section-copy">
            Every service is structured around trust, intent alignment, and conversion performance.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {serviceCards.map((service) => (
              <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-3xl">
            <h2 className="section-title">Transparent pricing plans for US businesses</h2>
            <p className="section-copy">
              Pick the package that fits your current growth stage. Need custom scope? We can tailor a roadmap.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-3xl border p-6 shadow-sm ${
                  plan.featured
                    ? "border-blue-300 bg-blue-50/50 ring-2 ring-blue-200"
                    : "border-slate-200 bg-white"
                }`}
              >
                {plan.featured && (
                  <p className="inline-flex rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    Most Popular
                  </p>
                )}
                <h3 className="mt-4 text-2xl font-bold text-slate-950">{plan.name}</h3>
                <p className="mt-1 text-3xl font-extrabold text-slate-950">{plan.range}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{plan.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {plan.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
                <Link
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary mt-6 inline-flex w-full items-center justify-center"
                >
                  {plan.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container-main">
          <h2 className="section-title">Why US clients choose VR Web Solutions</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {differentiators.map((item) => (
              <article key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main rounded-[2rem] bg-slate-950 px-6 py-12 text-white sm:px-10">
          <div className="max-w-4xl space-y-4">
            <h2 className="text-3xl font-bold sm:text-4xl">SEO-focused web development for long-term growth in the USA</h2>
            <h3 className="text-xl font-semibold text-blue-200">website development for small businesses USA</h3>
            <p className="text-slate-300">
              If you want website development for small businesses USA, your website needs more than visuals. It
              needs intent-driven structure, persuasive copy blocks, and technical SEO foundations that support
              rankings and conversion.
            </p>
            <h3 className="text-xl font-semibold text-blue-200">affordable web design USA</h3>
            <p className="text-slate-300">
              Our affordable web design USA approach balances speed, quality, and measurable ROI. You get premium
              UI/UX and professional development without typical big-agency overhead.
            </p>
            <h3 className="text-xl font-semibold text-blue-200">hire web developer USA</h3>
            <p className="text-slate-300">
              When you hire web developer USA-focused services from VR Web Solutions, you get transparent delivery,
              clear communication, and websites built to convert traffic into booked calls and leads.
            </p>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container-main rounded-[2rem] border border-slate-200 bg-white px-6 py-12 shadow-sm sm:px-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Final call to action</p>
            <h2 className="text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Ready to launch a high-converting website for your US business?
            </h2>
            <p className="text-slate-600">
              Book your free consultation now. We currently onboard a limited number of projects each month to keep
              quality high and delivery fast.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" className="btn-primary text-center">
                Get Free Consultation
              </Link>
              <Link href="/contact" className="btn-secondary text-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
