import { Inter, Playfair_Display } from "next/font/google";
import { WhatsAppFloat } from "@/app/components/whatsapp-float";
import { BeforeAfter } from "@/components/BeforeAfter";
import { BusinessCards } from "@/components/BusinessCards";
import { ContactSection } from "@/components/ContactSection";
import { FinalCTA } from "@/components/FinalCTA";
import { GoogleFeatures } from "@/components/GoogleFeatures";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], display: "swap", weight: ["600", "700"] });

export default function Home() {
  return (
    <main
      className={`${inter.className} min-h-screen bg-[radial-gradient(circle_at_top,#2c2c2c_0%,#161616_38%,#111111_68%,#0b0b0b_100%)] text-white`}
    >
      <div className="bg-[radial-gradient(circle_at_70%_12%,rgba(212,175,55,0.16),transparent_40%)]">
        <Hero headingClass={playfair.className} />
        <BusinessCards />
        <Portfolio headingClass={playfair.className} />
        <BeforeAfter headingClass={playfair.className} />
        <GoogleFeatures headingClass={playfair.className} />
        <ContactSection headingClass={playfair.className} />
        <FinalCTA headingClass={playfair.className} />
      </div>
      <WhatsAppFloat />
    </main>
  );
}
