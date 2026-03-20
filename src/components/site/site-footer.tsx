import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-main grid gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-slate-950">{siteConfig.name}</h2>
          <p className="max-w-xl text-sm text-slate-600">{siteConfig.description}</p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            <Link href={siteConfig.phoneHref} className="hover:text-blue-600">
              {siteConfig.phone}
            </Link>
            <Link href={`mailto:${siteConfig.email}`} className="hover:text-blue-600">
              {siteConfig.email}
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Quick links</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-600">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-blue-600">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
