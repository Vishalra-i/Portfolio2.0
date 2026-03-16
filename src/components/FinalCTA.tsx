import Link from "next/link";
import { siteConfig } from "@/app/components/site-data";

export function FinalCTA({ headingClass }: { headingClass: string }) {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl border-t border-white/10 bg-[radial-gradient(circle_at_top,#333333_0%,#111111_55%,#0b0b0b_100%)] px-4 py-20 text-center md:px-6 lg:px-8">
        <h2 className={`${headingClass} text-5xl text-white`}>Get Your Business Website Today</h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/get-quote"
            className="rounded-lg bg-[#d4af37] px-10 py-4 text-lg font-semibold text-black shadow-xl transition duration-300 hover:scale-[1.03] hover:bg-[#c79b2c]"
          >
            Get Free Demo Website
          </Link>
          <Link
            href={siteConfig.whatsappHref}
            target="_blank"
            className="rounded-lg border border-white/25 bg-white/5 px-10 py-4 text-lg font-semibold text-white shadow-xl transition duration-300 hover:scale-[1.03]"
          >
            Chat on WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
