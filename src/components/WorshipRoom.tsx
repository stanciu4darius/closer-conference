"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";
import { Star } from "./Star";

export function WorshipRoom() {
  const reduce = useReducedMotion();

  return (
    <section
      id="worship-room"
      className="relative overflow-hidden bg-ink py-28 text-paper-soft sm:py-40"
    >
      {/* Warm glow from within the dark room */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[46vmax] w-[46vmax] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-[40px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(227,145,95,0.5) 0%, rgba(227,178,77,0.22) 40%, rgba(22,19,13,0) 72%)",
        }}
      />

      {/* Slow orbit ring behind the content */}
      <div
        aria-hidden
        className="animate-spin-slow pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-paper-soft/10"
      />

      {/* Drifting word band */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-10 flex select-none overflow-hidden opacity-[0.06]"
      >
        <div className="animate-marquee flex shrink-0 gap-10 whitespace-nowrap font-display text-7xl font-light tracking-tight sm:text-8xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-10">
              <span>Worship Room</span>
              <span>·</span>
              <span>Closer</span>
              <span>·</span>
              <span>Worship Room</span>
              <span>·</span>
              <span>Closer</span>
              <span>·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 text-center sm:px-8">
        <Reveal className="mb-8 flex items-center gap-3">
          <Star className="animate-twinkle h-3.5 w-3.5 text-peach-soft" />
          <span className="eyebrow text-peach-soft">Un spațiu aparte</span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="text-balance font-display text-5xl font-light leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
            Worship
            <br />
            Room
          </h2>
        </Reveal>

        {/* Pulsing time placeholder */}
        <Reveal delay={0.15} className="mt-12">
          <motion.div
            animate={reduce ? undefined : { opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-4 font-display text-3xl font-light tracking-[0.3em] text-paper-soft/80 sm:text-4xl"
          >
            <span>—</span>
            <span className="text-peach-soft">:</span>
            <span>—</span>
          </motion.div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 font-display text-xl italic text-paper-soft/80 sm:text-2xl">
            Time to be revealed.
          </p>
          <p className="mt-2 text-sm uppercase tracking-[0.34em] text-paper-soft/50">
            Stay tuned
          </p>
        </Reveal>
      </div>
    </section>
  );
}
