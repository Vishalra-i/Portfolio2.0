import Link from "next/link";
import { navLinks, primaryCta, siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <nav className="container-main flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-extrabold tracking-tight text-slate-950">
          {siteConfig.name}
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-blue-600">
              {item.label}
            </Link>
          ))}
        </div>

        <Link href={primaryCta.href} className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
          {primaryCta.label}
        </Link>
      </nav>
    </header>
  );
}
