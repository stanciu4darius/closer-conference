"use client";

import { motion } from "motion/react";
import { LINEUP } from "@/lib/site";
import { Reveal } from "./Reveal";
import { Star } from "./Star";

function MysteryCard({
  label,
  status,
  hint,
  index,
}: {
  label: string;
  status: string;
  hint: string;
  index: number;
}) {
  return (
    <Reveal
      delay={index * 0.12}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="relative flex h-full min-h-[18.5rem] flex-col justify-between overflow-hidden rounded-[1.5rem] border border-line/70 bg-paper-soft/60 p-7 shadow-[var(--shadow-card)] backdrop-blur-sm sm:min-h-[26rem] sm:rounded-[1.75rem] sm:p-10"
      >
        {/* Revealed glow on hover */}
        <div
          aria-hidden
          className="glow-peach pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-0 blur-[20px] transition-opacity duration-700 group-hover:opacity-100"
        />

        {/* Oversized ghost index — mobile-only editorial accent */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-3 -top-10 select-none font-display text-[8.5rem] font-light leading-none text-ink/[0.045] md:hidden"
        >
          {`0${index + 1}`}
        </span>

        <div className="relative flex items-center justify-between">
          <span className="eyebrow">{`0${index + 1}`}</span>
          <span className="eyebrow">{label}</span>
        </div>

        {/* Orbit motif standing in for the mystery guest */}
        <div className="relative flex flex-1 items-center justify-center py-6 sm:py-8">
          <div className="relative flex h-28 w-28 items-center justify-center sm:h-40 sm:w-40">
            <span className="animate-spin-slow absolute inset-0 rounded-full border border-ink/25 [transform:rotateX(70deg)]" />
            <span
              className="animate-spin-slow absolute inset-2 rounded-full border border-ink/15 [transform:rotateX(70deg)_rotate(60deg)]"
              style={{ animationDirection: "reverse" }}
            />
            <Star className="animate-twinkle h-6 w-6 text-ink/70" />
          </div>
        </div>

        <div className="relative">
          <div className="mb-4 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-peach opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-peach" />
            </span>
            <span className="font-display text-sm uppercase tracking-[0.28em] text-ink">
              {status}
            </span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink-soft">{hint}</p>
        </div>
      </motion.div>
    </Reveal>
  );
}

export function Lineup() {
  return (
    <section
      id="lineup"
      className="relative border-t border-line/50 py-20 sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-11 max-w-2xl sm:mb-16">
          <h2 className="text-balance font-display text-4xl font-light leading-tight tracking-tight text-ink sm:text-5xl md:text-6xl">
            Ceva se pregătește.
          </h2>
          <p className="text-pretty mt-5 max-w-lg text-base leading-relaxed text-ink-soft">
            Vorbitorul și echipa de închinare vor fi dezvăluiți în curând.
            Rămâi aproape — anunțurile urmează.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {LINEUP.map((item, i) => (
            <MysteryCard
              key={item.label}
              label={item.label}
              status={item.status}
              hint={item.hint}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
