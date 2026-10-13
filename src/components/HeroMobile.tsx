"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { asset } from "@/lib/site";
import { RegisterButton } from "./RegisterButton";
import { Star } from "./Star";

/**
 * Mobile-only hero (shown below `md`). A bespoke composition built around the
 * official CLOSER logo as the centerpiece, with live, legible date + location.
 * The desktop hero (framed banner) is a separate component and is unchanged.
 *
 * Markup is deterministic (no useReducedMotion branching); reduced motion is
 * handled globally by MotionConfig. Animations use only opacity/transform.
 */
export function HeroMobile() {
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
  };
  const up: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const logoIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      className="relative flex min-h-[100svh] flex-col overflow-hidden px-6 pb-14 pt-[5.5rem] md:hidden"
      aria-label="CLOSER Conference 2026"
    >
      {/* Ambient warm light, anchored high like the brand artwork */}
      <div
        aria-hidden
        className="glow-peach pointer-events-none absolute -top-[18%] left-1/2 h-[80vw] w-[120vw] -translate-x-1/2 rounded-full blur-[26px]"
      />
      {/* Decorative sparkles (CSS twinkle pauses under reduced motion) */}
      <div aria-hidden>
        <Star className="animate-twinkle absolute left-[12%] top-[20%] h-3.5 w-3.5 text-ink/30 [animation-delay:0.4s]" />
        <Star className="animate-twinkle absolute right-[14%] top-[16%] h-2.5 w-2.5 text-peach/70 [animation-delay:1.4s]" />
        <Star className="animate-twinkle absolute right-[20%] top-[52%] h-3 w-3 text-gold/60 [animation-delay:2.2s]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-1 flex-col"
      >
        {/* Eyebrow — sits just under the nav, no empty gap */}
        <motion.div
          variants={up}
          className="flex items-center justify-center gap-3"
        >
          <span className="h-px w-5 bg-ink/25" />
          <span className="eyebrow text-[0.62rem]">Conferință de tineret</span>
          <span className="h-px w-5 bg-ink/25" />
        </motion.div>

        {/* Logo centerpiece — original artwork, edges melted into the paper */}
        <motion.div
          variants={logoIn}
          className="relative mt-7 flex items-center justify-center"
        >
          <div
            aria-hidden
            className="glow-gold absolute left-1/2 top-1/2 h-[62vw] w-[62vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[18px]"
          />
          <Image
            src={asset("/images/closer-logo-web.webp")}
            alt="CLOSER — logo oficial al conferinței"
            width={1000}
            height={914}
            sizes="(max-width: 767px) 80vw, 1px"
            className="logo-mask relative w-[80vw] max-w-[360px] select-none"
            draggable={false}
          />
        </motion.div>

        {/* Date + location — generous negative space above, action below */}
        <motion.div
          variants={up}
          className="mt-auto flex flex-col items-center pt-10 text-center"
        >
          <span className="eyebrow text-[0.62rem]">Sâmbătă</span>
          <p className="mt-2 font-display text-[2.15rem] font-light leading-none tracking-tight text-ink">
            21 Noiembrie 2026
          </p>
          <span className="mt-6 h-px w-10 bg-ink/20" />
          <p className="mt-5 font-display text-lg italic text-ink">
            Biserica Sfânta Treime
          </p>
          <p className="eyebrow mt-1.5 text-[0.58rem]">Beclean · România</p>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={up}
          className="mt-9 flex flex-col items-center gap-4"
        >
          <RegisterButton size="lg" className="w-full max-w-xs" />
          <a
            href="#viziune"
            className="group inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
          >
            Descoperă viziunea
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
