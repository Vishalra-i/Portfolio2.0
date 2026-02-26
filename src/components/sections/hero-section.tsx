import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="section-padding">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="inline-flex rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-300">
            Freelance Web Development for Local Businesses
          </p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            I build websites that bring you customers, not just visitors
          </h1>
          <p className="text-lg text-slate-300">
            Full Stack Developer | MERN | Next.js
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="#contact" className={buttonVariants({ size: "lg" })}>
              Get Demo
            </Link>
            <Link
              href="#portfolio"
              className={buttonVariants({ size: "lg", variant: "outline" })}
            >
              View Work
            </Link>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <p className="text-sm text-slate-300">What you can expect:</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-200">
            <li>✓ Mobile-first websites that load fast.</li>
            <li>✓ Clear CTAs designed to increase inquiries.</li>
            <li>✓ SEO-ready structure for local search visibility.</li>
            <li>✓ Direct support and smooth communication.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
