import Link from "next/link";
import { Inter, Playfair_Display } from "next/font/google";
import { ContactForm } from "@/app/components/contact-form";
import { siteConfig } from "@/app/components/site-data";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], display: "swap", weight: ["600", "700"] });

export default function GetQuotePage() {
  return (
    <main
      className={`${inter.className} min-h-screen bg-[radial-gradient(circle_at_top,#2c2c2c_0%,#161616_38%,#111111_68%,#0b0b0b_100%)] text-white`}
    >
      <section className="py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="inline-flex rounded-lg border border-[#d4af37]/45 px-4 py-2 text-sm text-[#d4af37]">
              Get Quotes
            </p>
            <h1 className={`${playfair.className} mt-6 text-5xl text-white sm:text-6xl`}>
              Starter Pack for Local Businesses
            </h1>
            <div className="mt-8 rounded-xl border border-[#3a3a3a] bg-[#1a1a1a] p-7 shadow-xl">
              <h2 className={`${playfair.className} text-3xl`}>Starter Pack</h2>
              <p className="mt-3 text-4xl font-semibold text-[#d4af37]">₹7,999</p>
              <ul className="mt-5 space-y-2 text-[#d0d0d0]">
                <li>• 1-page modern website</li>
                <li>• Mobile responsive design</li>
                <li>• WhatsApp chat integration</li>
                <li>• Contact form and lead capture</li>
                <li>• Basic SEO setup</li>
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={siteConfig.whatsappHref}
                target="_blank"
                className="rounded-lg bg-[#d4af37] px-6 py-3 font-semibold text-black shadow-xl transition duration-300 hover:scale-[1.03] hover:bg-[#c79b2c]"
              >
                Chat on WhatsApp
              </Link>
              <Link
                href="/"
                className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-[1.03]"
              >
                Back to Home
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-[#3a3a3a] bg-[#1a1a1a]/70 p-3 shadow-xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
