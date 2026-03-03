import { HomeSections } from "@/app/components/home-sections";
import { Navbar } from "@/app/components/navbar";
import { WhatsAppFloat } from "@/app/components/whatsapp-float";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HomeSections />
      <WhatsAppFloat />
    </main>
  );
}
