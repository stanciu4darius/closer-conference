"use client";

import { Reveal } from "./Reveal";
import { Star } from "./Star";

export function Location() {
  return (
    <section
      id="locatie"
      className="relative border-t border-line/50 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
          <Reveal>
            <span className="eyebrow">Locație</span>
            <h2 className="text-balance mt-6 font-display text-[2.6rem] font-light leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
              Biserica
              <br />
              <span className="italic">Sfânta Treime</span>
            </h2>
            <p className="mt-5 flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-ink-faint">
              <span className="h-px w-8 bg-ink/30" />
              Beclean · România
            </p>
            <p className="text-pretty mt-8 max-w-md text-base leading-relaxed text-ink-soft">
              Te așteptăm la Biserica Sfânta Treime din Beclean — un loc în care
              ne strângem ca o generație, pentru a-I căuta împreună fața.
            </p>
          </Reveal>

          <Reveal from="left" delay={0.1}>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-line/70 bg-paper-soft/50 shadow-[var(--shadow-card)]">
              {/* Stylised map placeholder */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.5]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(22,19,13,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(22,19,13,0.08) 1px, transparent 1px)",
                  backgroundSize: "44px 44px",
                }}
              />
              <div
                aria-hidden
                className="glow-peach absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 blur-[20px]"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
                <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-ink/25 bg-paper/70 backdrop-blur-sm">
                  <Star className="animate-twinkle h-5 w-5 text-ink" />
                </span>
                <span className="font-display text-xl italic text-ink">
                  Biserica Sfânta Treime
                </span>
                <span className="eyebrow">Beclean · România</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
