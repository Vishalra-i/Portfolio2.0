"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, primaryCta, secondaryCta, siteConfig } from "@/lib/site";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <nav className="container-main relative flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-extrabold tracking-tight text-slate-950" onClick={() => setIsMenuOpen(false)}>
          {siteConfig.name}
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-blue-600">
              {item.label}
            </Link>
          ))}
        </div>

        <Link href={primaryCta.href} className="hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 md:inline-flex">
          {primaryCta.label}
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white/70 p-2 text-slate-700 shadow-sm transition hover:bg-white md:hidden"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        {isMenuOpen && (
          <div className="absolute left-4 right-4 top-[calc(100%+0.5rem)] rounded-2xl border border-white/40 bg-white/75 p-4 shadow-xl shadow-slate-900/10 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 transition hover:bg-white/70 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              href={secondaryCta.href}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              {secondaryCta.label}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
