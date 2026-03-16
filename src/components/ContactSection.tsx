import Link from "next/link";
import { ContactForm } from "@/app/components/contact-form";
import { siteConfig } from "@/app/components/site-data";

export function ContactSection({ headingClass }: { headingClass: string }) {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className={`${headingClass} text-5xl text-white`}>Contact VR Web Solution</h2>
            <p className="mt-5 max-w-xl text-lg text-[#bdbdbd]">
              Share your business details and we&apos;ll send a tailored website plan with timeline,
              design direction, and lead-generation setup.
            </p>
            <div className="mt-8 space-y-3 text-[#d8d8d8]">
              <p>
                Phone: <Link href={siteConfig.phoneHref} className="text-[#d4af37]">{siteConfig.phone}</Link>
              </p>
              <p>
                Email: <span className="text-[#d4af37]">{siteConfig.email}</span>
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-[#3a3a3a] bg-[#1a1a1a]/70 p-3 shadow-xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
