"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { VERSE } from "@/lib/site";
import { Reveal } from "./Reveal";
import { Star } from "./Star";

export function Vision() {
  const reduce = useReducedMotion();
  const words = VERSE.text.split(" ");

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.045 } },
  };
  const word: Variants = {
    hidden: reduce ? { opacity: 0.12 } : { opacity: 0.1, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="viziune"
      className="relative overflow-hidden border-t border-line/50 py-32 sm:py-44"
    >
      <div
        aria-hidden
        className="glow-gold pointer-events-none absolute left-1/2 top-0 h-[36vmax] w-[36vmax] -translate-x-1/2 rounded-full blur-[30px] opacity-70"
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="mb-14 flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-ink/25" />
          <span className="eyebrow">Viziune</span>
          <Star className="h-3 w-3 text-peach" />
          <span className="eyebrow">Psalmii 27:8</span>
          <span className="h-px w-10 bg-ink/25" />
        </Reveal>

        <motion.blockquote
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="text-balance text-center font-display text-[1.9rem] font-light leading-[1.28] tracking-tight text-ink sm:text-5xl md:text-[3.4rem] md:leading-[1.2]"
        >
          {words.map((w, i) => (
            <motion.span
              key={`${w}-${i}`}
              variants={word}
              className="inline-block"
            >
              {w}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          ))}
        </motion.blockquote>

        <Reveal
          delay={0.1}
          className="mt-10 flex flex-col items-center gap-6"
        >
          <cite className="font-display text-lg not-italic tracking-[0.18em] text-ink-soft">
            {VERSE.reference}
          </cite>
          <p className="text-pretty mt-4 max-w-xl text-center text-base leading-relaxed text-ink-soft">
            CLOSER este o invitație: să ne mutăm mai aproape de inima lui
            Dumnezeu. Nu un eveniment despre noi, ci un spațiu în care Îi căutăm
            fața — împreună, ca o generație.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
