import Link from "next/link";
import { IDENTITY } from "@/content/site";

const NAV = [
  { href: "/", label: "Index" },
  { href: "/about", label: "About" },
  { href: "/now", label: "Now" },
  { href: "/colophon", label: "Colophon" },
];

export function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-paper text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:text-paper focus:px-3 focus:py-2 focus:text-xs focus:tracking-widest focus:uppercase"
      >
        Skip to content
      </a>
      <header className="w-full border-b border-hair">
        <div className="mx-auto max-w-[1240px] px-6 md:px-12 py-6">
          <div className="grid-12 items-baseline">
            <div className="col-span-6 md:col-span-3 text-[11px] uppercase tracking-[0.14em] font-semibold text-ink">
              <Link href="/">{IDENTITY.displayName}</Link>
            </div>
            <div className="col-span-6 md:col-span-5 hidden md:block text-[11px] uppercase tracking-[0.14em] text-muted">
              {IDENTITY.role} · {IDENTITY.location}
            </div>
            <nav
              aria-label="Primary"
              className="col-span-12 md:col-span-4 flex md:justify-end gap-4 md:gap-5 text-[11px] uppercase tracking-[0.14em] mt-3 md:mt-0"
            >
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="text-muted hover:text-ink transition-colors"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main id="main" className="flex-1">
        <div className="mx-auto max-w-[1240px] px-6 md:px-12 py-14 md:py-20">
          {children}
        </div>
      </main>

      <footer className="w-full border-t border-hair mt-16 md:mt-24">
        <div className="mx-auto max-w-[1240px] px-6 md:px-12 py-10">
          <div className="grid-12 items-baseline gap-y-6 text-[11px] uppercase tracking-[0.14em] text-muted">
            <div className="col-span-6 md:col-span-3">
              <div className="text-ink font-semibold mb-1">
                {IDENTITY.handle}
              </div>
              <div>{IDENTITY.location} · 2025 — v1</div>
            </div>
            <div className="col-span-6 md:col-span-3 space-y-1">
              <div className="text-ink font-semibold mb-1">Contact</div>
              <a
                className="block hover:text-ink transition-colors normal-case tracking-normal"
                href={`mailto:${IDENTITY.email}`}
              >
                {IDENTITY.email}
              </a>
            </div>
            <div className="col-span-6 md:col-span-3 space-y-1">
              <div className="text-ink font-semibold mb-1">Elsewhere</div>
              <a
                className="block hover:text-ink transition-colors normal-case tracking-normal"
                href={IDENTITY.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="block hover:text-ink transition-colors normal-case tracking-normal"
                href={IDENTITY.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="block hover:text-ink transition-colors normal-case tracking-normal"
                href={IDENTITY.x}
                target="_blank"
                rel="noreferrer"
              >
                X / Twitter
              </a>
            </div>
            <div className="col-span-6 md:col-span-3 md:text-right">
              <Link
                className="hover:text-ink transition-colors"
                href="/colophon"
              >
                Colophon →
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
