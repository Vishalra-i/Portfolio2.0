import Link from "next/link";
import { ContactForm } from "@/app/components/contact-form";
import { CtaButtons } from "@/components/site/cta-buttons";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact VR Web Solutions for Website Design and SEO",
  description:
    "Book a free consultation, request a starter website, or discuss a catalogue-ready package with VR Web Solutions.",
  path: "/contact",
  keywords: ["contact web designer", "book free consultation", "website quote India"],
});

export default function ContactPage() {
  return (
    <main>
      <section className="section-padding bg-slate-950 text-white">
        <div className="container-main grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">Contact</p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Let&apos;s plan a website that supports your next stage of growth.
            </h1>
            <p className="text-lg text-slate-300">
              Share your business goals, current challenges, and required pages. We&apos;ll suggest
              the right package and CTA strategy for your audience.
            </p>
            <div className="space-y-3 text-sm text-slate-300">
              <p>
                Phone: <Link href={siteConfig.phoneHref} className="font-semibold text-white hover:text-blue-200">{siteConfig.phone}</Link>
              </p>
              <p>
                Email: <Link href={`mailto:${siteConfig.email}`} className="font-semibold text-white hover:text-blue-200">{siteConfig.email}</Link>
              </p>
            </div>
            <CtaButtons />
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
