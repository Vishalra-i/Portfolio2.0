import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/app/components/contact-form";
import { cities, siteConfig, testimonials } from "@/app/components/site-data";

const services = [
  "Business Website Design",
  "Local SEO Landing Pages",
  "WhatsApp Lead Integration",
  "Website Speed Optimization",
];

export function HomeSections() {
  return (
    <>
      <section id="hero" className="section-padding">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-primary">
              Website developer for local business
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              Web Development Services for Local Businesses in India
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              We create high-converting websites that help Indian businesses rank better on Google,
              generate more leads, and receive direct WhatsApp inquiries.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="#contact" className="btn-primary">
                Start Your Website
              </Link>
              <Link href="#portfolio" className="btn-secondary">
                View Portfolio
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <Image
              src="/next.svg"
              alt="Business website development"
              width={500}
              height={320}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-alt" id="problem">
        <div className="container-main">
          <h2 className="section-title">Why most local business websites fail</h2>
          <p className="section-copy">
            Many websites look good but do not rank for local keywords or convert visitors into
            calls. We solve this with SEO-first structure, fast performance, and clear contact
            actions.
          </p>
        </div>
      </section>

      <section id="services" className="section-padding">
        <div className="container-main">
          <h2 className="section-title">Our Web Development Services in India</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <article key={service} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900">{service}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Built for local businesses that want quality leads and stronger online visibility.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt" id="portfolio">
        <div className="container-main">
          <h2 className="section-title">Demo Portfolio</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "Salon website with WhatsApp booking",
              "Gym landing page with lead form",
              "Coaching institute SEO website",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="font-semibold text-slate-900">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="section-padding">
        <div className="container-main">
          <h2 className="section-title">Testimonials from Indian Cities</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-slate-700">“{item.quote}”</p>
                <footer className="mt-3 text-sm font-semibold text-primary">
                  {item.name} · {item.city}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt" id="how-it-works">
        <div className="container-main">
          <h2 className="section-title">How it works</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "Share business details and goals",
              "Get design + SEO content plan",
              "Launch with lead form and WhatsApp",
            ].map((step, i) => (
              <li key={step} className="rounded-xl border border-slate-200 bg-white p-5 text-slate-700">
                <span className="font-bold text-primary">0{i + 1}. </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="why-us" className="section-padding">
        <div className="container-main">
          <h2 className="section-title">Why choose VR Web Solutions</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              "SEO-first website architecture",
              "Mobile-first and accessible interfaces",
              "Fast loading pages with optimized assets",
              "Long-term support and easy updates",
            ].map((point) => (
              <li key={point} className="rounded-xl border border-slate-200 bg-white p-5 text-slate-700">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-alt" id="cta">
        <div className="container-main rounded-2xl border border-blue-200 bg-blue-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Need more leads for your business?</h2>
          <p className="mt-2 text-slate-700">
            Talk to our team on WhatsApp and get a custom website strategy in minutes.
          </p>
          <Link href={siteConfig.whatsappHref} target="_blank" className="btn-primary mt-5 inline-flex">
            Chat on WhatsApp
          </Link>
        </div>
      </section>

      <section id="contact" className="section-padding">
        <div className="container-main grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="section-title">Contact VR Web Solutions</h2>
            <p className="section-copy mt-3">
              Get a modern website with SEO and lead generation. Call us at {siteConfig.phone} or
              send your requirements now.
            </p>
            <p className="mt-3 text-slate-600">Email: {siteConfig.email}</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-4 py-8">
        <div className="container-main flex flex-col gap-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} VR Web Solutions</p>
          <div className="flex flex-wrap gap-3">
            {cities.map((city) => (
              <Link key={city} href={`/web-development/${city}`} className="hover:text-primary">
                Web development in {city}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
