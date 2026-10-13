"use client";

import { Reveal } from "./Reveal";
import { RegisterButton } from "./RegisterButton";
import { Star } from "./Star";
import { SITE } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-line/50 py-24 sm:py-44">
      <div
        aria-hidden
        className="glow-peach pointer-events-none absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 blur-[30px]"
      />

      <Star className="animate-twinkle absolute left-[18%] top-[22%] h-4 w-4 text-ink/30" />
      <Star className="animate-twinkle absolute right-[16%] bottom-[26%] h-5 w-5 text-peach/60 [animation-delay:1.2s]" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 text-center sm:px-8">
        <Reveal className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-ink/25" />
          <span className="eyebrow">21 · 11 · 2026</span>
          <span className="h-px w-10 bg-ink/25" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="text-balance font-display text-[2.9rem] font-light leading-[1.02] tracking-tight text-ink sm:text-7xl md:text-[5.5rem]">
            Vino mai <span className="italic">aproape</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="text-pretty mt-7 max-w-xl text-base leading-relaxed text-ink-soft sm:mt-8 sm:text-lg">
            Inima Îl caută. Vino să ne apropiem împreună de fața Lui — cu
            așteptare, cu bucurie și cu inima deschisă.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 w-full sm:mt-12">
          <RegisterButton
            size="lg"
            variant="solid"
            label="Înscrie-te acum"
            className="w-full max-w-xs sm:w-auto sm:max-w-none"
          />
        </Reveal>

        <Reveal delay={0.28}>
          <p className="mt-8 text-xs uppercase tracking-[0.28em] text-ink-faint">
            {SITE.tagline} · {SITE.city}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
