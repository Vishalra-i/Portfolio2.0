import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { RealEstateLeadForm } from "@/components/landing/real-estate-lead-form";

const whatsappMessage =
  "Hello, I came from your real estate landing page and I’m interested in getting a website for my business. Please share details.";

const whatsappHref = `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;

const packageFeatures = [
  "Premium real estate homepage + lead funnel",
  "WhatsApp click-to-chat integration",
  "Mobile-first responsive design",
  "Property showcase and inquiry form",
  "SEO-ready pages with metadata setup",
];

const benefits = [
  "Get more property buyers online",
  "Increase trust and brand value",
  "Capture leads 24/7 from all channels",
  "Fast, mobile-friendly website experience",
  "SEO-optimized structure for local reach",
];

const trustBadges = ["Delivery in 5-7 days", "50+ websites delivered", "Dedicated WhatsApp support"];

const testimonials = [
  {
    name: "Rakesh Verma",
    role: "Real Estate Consultant",
    quote:
      "We started getting quality inquiries directly from our website within the first week of launch.",
  },
  {
    name: "Ananya Realty Group",
    role: "Property Sales Team",
    quote:
      "The landing page looked premium and helped us build instant trust with ad traffic.",
  },
  {
    name: "Skyline Homes",
    role: "Residential Builder",
    quote: "Our WhatsApp leads improved significantly after switching to this conversion-focused layout.",
  },
];

export function RealEstateLandingPage() {
  return (
    <main>
      <section className="overflow-hidden bg-slate-950 text-white">
        <div className="container-main grid gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-emerald-300/60 bg-emerald-400/10 px-4 py-1 text-sm font-semibold text-emerald-100 motion-safe:animate-pulse">
              Limited-time launch offer for real estate businesses
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Sell more properties with a high-converting real estate website.
            </h1>
            <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">
              Turn Instagram, Facebook, and WhatsApp traffic into verified buyer leads with a premium online presence
              built for trust, speed, and conversion.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-emerald-500 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-400"
              >
                Order Now
              </Link>
              <Link href="#demo" className="rounded-xl border border-white/30 px-6 py-3 text-center text-sm font-semibold transition hover:bg-white/10">
                View Demo
              </Link>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {trustBadges.map((badge) => (
                <span key={badge} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-slate-200">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-400/30 blur-2xl" />
            <Image
              src="/landing/real-estate/hero-property.svg"
              alt="Modern real estate website hero preview"
              width={700}
              height={520}
              className="relative w-full rounded-3xl border border-white/15 bg-white/5 p-3 shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6 lg:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Special Offer</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">Starting at just ₹7999</h2>
                <p className="mt-2 text-slate-600">Book now to lock this price. Offer valid for a limited number of projects this month.</p>
              </div>
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Claim Limited Offer
              </Link>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {packageFeatures.map((feature) => (
                <article key={feature} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">
                  {feature}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container-main">
          <h2 className="section-title">Why real estate businesses choose VrWebSolution</h2>
          <p className="section-copy">Every section is designed to increase trust and turn ad clicks into qualified buyer inquiries.</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article key={benefit} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-base font-semibold text-slate-900">{benefit}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="section-padding">
        <div className="container-main grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="section-title">Live demo preview for your next real estate website</h2>
            <p className="section-copy">
              Explore a modern property listing style, premium hero layout, and lead-first CTA sections built to convert
              paid ad visitors.
            </p>
            <Link
              href="#"
              className="mt-6 inline-flex rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              View Demo
            </Link>
          </div>
          <Image
            src="/landing/real-estate/demo-preview.svg"
            alt="Demo real estate website mockup"
            width={700}
            height={500}
            className="w-full rounded-3xl border border-slate-200 bg-white p-2 shadow-lg"
          />
        </div>
      </section>

      <section className="section-alt">
        <div className="container-main grid gap-8 lg:grid-cols-2">
          <RealEstateLeadForm />

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">What clients say</h3>
            <div className="mt-5 space-y-4">
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-sm leading-6 text-slate-600">“{testimonial.quote}”</p>
                  <p className="mt-3 text-sm font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="container-main rounded-3xl border border-white/15 bg-white/5 p-8 text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to get more buyers from your ads?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            Launch your real estate website fast and start converting social traffic into serious inquiries.
          </p>
          <Link
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-xl bg-emerald-500 px-8 py-3 text-base font-semibold text-white transition hover:bg-emerald-400"
          >
            Order Your Website Now
          </Link>
        </div>
      </section>
    </main>
  );
}
