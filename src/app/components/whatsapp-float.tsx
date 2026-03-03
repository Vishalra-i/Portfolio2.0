import Link from "next/link";
import { siteConfig } from "@/app/components/site-data";

export function WhatsAppFloat() {
  return (
    <Link
      href={siteConfig.whatsappHref}
      target="_blank"
      aria-label="Chat with VR Web Solutions on WhatsApp"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-green-600"
    >
      WhatsApp Us
    </Link>
  );
}
