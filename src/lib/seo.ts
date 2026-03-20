import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const defaultOgImage = "/opengraph-image";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.baseUrl).toString();
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = defaultOgImage,
}: MetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
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
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.baseUrl,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: "India",
    sameAs: Object.values(siteConfig.social),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.baseUrl}/blog?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.baseUrl,
    },
    areaServed: "India",
    url,
  };
}
