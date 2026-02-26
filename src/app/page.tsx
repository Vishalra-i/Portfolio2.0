import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { Navbar } from "@/components/sections/navbar";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyChooseMeSection } from "@/components/sections/why-choose-me-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <WhyChooseMeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
