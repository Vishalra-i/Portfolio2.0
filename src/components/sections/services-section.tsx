import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

const services = [
  {
    title: "Landing Page",
    price: "₹15,000–₹30,000",
    features: [
      "Single-page conversion layout",
      "Mobile responsive design",
      "Lead capture form integration",
      "Basic on-page SEO setup",
    ],
  },
  {
    title: "Business Website",
    price: "₹20,000–₹50,000",
    features: [
      "Multi-page business website",
      "Service and location-focused content",
      "WhatsApp and call CTAs",
      "Fast performance optimization",
    ],
  },
  {
    title: "Website + Automation",
    price: "₹40,000–₹70,000+",
    features: [
      "Website with CRM-ready lead flow",
      "Automated WhatsApp/email follow-up",
      "Form-to-sheet/dashboard integration",
      "Analytics and conversion tracking",
    ],
  },
  {
    title: "Full Stack App",
    price: "₹50,000–₹2L+",
    features: [
      "Custom dashboard and admin panel",
      "User auth + role-based access",
      "API development and integrations",
      "Scalable architecture for growth",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="section-padding border-t border-slate-800/80">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Services & Pricing</h2>
          <p className="text-slate-300">Flexible packages based on your business goals and scale.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-base font-semibold text-emerald-300">
                  {service.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-300">
                  {service.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="#contact" className={buttonVariants({ variant: "secondary" })}>
                  Book a Free Call
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
