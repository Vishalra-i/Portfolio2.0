import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/app/components/site-data";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: "Web Development Services in India | VR Web Solutions",
    template: "%s | VR Web Solutions",
  },
  description:
    "We help businesses get more customers through modern websites. Get your business website with WhatsApp integration and lead generation.",
  keywords: [
    "web development",
    "website design",
    "business website India",
    "web developer",
  ],
  openGraph: {
    title: "Web Development Services in India | VR Web Solutions",
    description:
      "We help businesses get more customers through modern websites. Get your business website with WhatsApp integration and lead generation.",
    url: siteConfig.baseUrl,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "VR Web Solutions",
      },
    ],
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VR Web Solutions",
  description: "Web Development and Local SEO Services",
  areaServed: ["India", "Raipur", "Bangalore", "Ranchi", "Delhi"],
  telephone: "+91 98765 43210",
  email: "hello@vrwebsolutions.in",
  url: siteConfig.baseUrl,
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Web Development",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
