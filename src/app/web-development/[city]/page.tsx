import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cityIntroMap, cities, siteConfig } from "@/app/components/site-data";

export function generateStaticParams() {
  return cities.map((city) => ({ city }));
}

export function generateMetadata({
  params,
}: {
  params: { city: string };
}): Metadata {
  const city = params.city.toLowerCase();
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  return {
    title: `Web Development Services in ${cityName} | VR Web Solutions`,
    description: `Get SEO-focused web development services in ${cityName}. VR Web Solutions builds local business websites with WhatsApp and lead generation setup.`,
    openGraph: {
      title: `Web Development Services in ${cityName} | VR Web Solutions`,
      description: `Website developer for local business in ${cityName}. Conversion-focused and SEO-ready websites.`,
      url: `${siteConfig.baseUrl}/web-development/${city}`,
      images: ["/og-image.svg"],
    },
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = params.city.toLowerCase();

  if (!cities.includes(city as (typeof cities)[number])) {
    notFound();
  }

  const cityName = city.charAt(0).toUpperCase() + city.slice(1);
  const intro = cityIntroMap[city] ?? cityIntroMap.raipur;

  return (
    <main className="min-h-screen bg-white">
      <section className="section-padding">
        <div className="container-main max-w-4xl">
          <Link href="/" className="text-sm font-medium text-primary hover:underline">
            ← Back to Homepage
          </Link>
          <h1 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Web Development Services in {cityName}
          </h1>
          <p className="mt-5 text-lg text-slate-700">{intro}</p>
          <p className="mt-4 text-slate-700">
            If you run a local business in {cityName}, our team creates SEO-optimized pages that
            target high-intent local keywords like web development services in {cityName}. We make
            sure your {cityName} customers can find you quickly and contact you on WhatsApp.
          </p>
          <p className="mt-4 text-slate-700">
            Our {cityName} website development workflow includes speed optimization, mobile-first
            design, and lead-focused content. This helps your business website rank better in
            {cityName} and turn visitors into calls.
          </p>
          <Link href={siteConfig.whatsappHref} target="_blank" className="btn-primary mt-8 inline-flex">
            Get {cityName} Website Proposal
          </Link>
        </div>
      </section>
    </main>
  );
}
