import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-slate-400 sm:flex-row">
        <p>© {new Date().getFullYear()} Vishal Rai</p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com" target="_blank" className="transition hover:text-emerald-300">
            GitHub
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="transition hover:text-emerald-300">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
