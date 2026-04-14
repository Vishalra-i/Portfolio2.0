import type { Metadata } from "next";
import { RealEstateLandingPage } from "@/components/landing/real-estate-landing-page";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const pagePath = "/landingpage/realEstate";
const pageUrl = absoluteUrl(pagePath);
const pageTitle = "Real Estate Website Landing Page | VrWebSolution";
const pageDescription =
  "High-converting real estate landing page for ad traffic. Get a mobile-first, SEO-ready website package from ₹7999 with WhatsApp lead capture.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [absoluteUrl("/opengraph-image")],
  },
};

export default function RealEstateLandingRoute() {
  return <RealEstateLandingPage />;
}
