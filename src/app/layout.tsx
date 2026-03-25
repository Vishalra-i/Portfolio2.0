import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { SchemaScript } from "@/components/site/schema-script";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),

  title: {
    default: "VR Web Solution | SEO-Ready Websites for Local Businesses in India",
    template: "%s | VR Web Solution",
  },

  description: siteConfig.description,

  applicationName: siteConfig.name,

  keywords: [
    "web development services India",
    "local business website design",
    "Next.js agency website",
    "SEO website for store owners",
    "business website with WhatsApp integration",
  ],

  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,

  category: "business",

  alternates: {
    canonical: siteConfig.baseUrl,
  },

  // ✅ ADD ICONS (IMPORTANT)
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // ✅ ADD MANIFEST
  manifest: "/site.webmanifest",

  openGraph: {
    title: "VR Web Solution | SEO-Ready Websites for Local Businesses in India",
    description: siteConfig.description,
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "VR Web Solution | SEO-Ready Websites for Local Businesses in India",
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A66FF", // 🔵 better branding
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {/* ✅ GOOGLE ADS SCRIPT FIX */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-835389673"
        />
        <Script id="google-ads">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-835389673');
          `}
        </Script>

        <SchemaScript schema={[organizationSchema(), websiteSchema()]} />

        <div className="min-h-screen bg-white text-slate-900">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>

      </body>
    </html>
  );
}