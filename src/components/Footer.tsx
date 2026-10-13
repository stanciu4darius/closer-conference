import { NAV_LINKS, SITE, VERSE } from "@/lib/site";
import { Star } from "./Star";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line/60 bg-paper-deep/40">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="max-w-sm">
            <a
              href="#top"
              className="group inline-flex items-center gap-2 font-display text-2xl font-semibold tracking-tight text-ink"
            >
              <span className="italic">closer</span>
              <Star className="h-3 w-3 text-ink transition-transform duration-500 group-hover:rotate-180" />
            </a>
            <p className="text-pretty mt-4 text-sm leading-relaxed text-ink-soft">
              {VERSE.text}
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-ink-faint">
              {VERSE.reference}
            </p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Secțiuni">
            <span className="eyebrow mb-1">Navigație</span>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="eyebrow mb-1">Eveniment</span>
            <span className="text-sm text-ink-soft">{SITE.dateLabel}</span>
            <span className="text-sm text-ink-soft">{SITE.tagline}</span>
            <a
              href={SITE.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-medium text-ink underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink"
            >
              Înscrie-te
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-line/50 pt-8 text-xs text-ink-faint">
          <span>© {year} CLOSER Conference. Toate drepturile rezervate.</span>
        </div>
      </div>
    </footer>
  );
}
