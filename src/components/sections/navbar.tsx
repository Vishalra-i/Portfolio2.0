import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Why Me", href: "#why-me" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#home" className="text-lg font-bold tracking-wide text-emerald-400">
          Vishal Rai
        </Link>

        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-emerald-300">
              {item.label}
            </Link>
          ))}
        </div>

        <Link href="#contact" className={buttonVariants({ size: "sm" })}>
          Get Demo
        </Link>
      </nav>
    </header>
  );
}
