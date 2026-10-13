"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import { SITE, asset } from "@/lib/site";
import { RegisterButton } from "./RegisterButton";
import { Star } from "./Star";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Gentle cinematic parallax as the hero leaves the viewport.
  const bannerY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 70]);
  const bannerScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, reduce ? 1 : 1.04],
  );
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
  };
  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const frame: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 34, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.15, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pb-24 pt-32 sm:px-8 sm:pb-28 sm:pt-28"
    >
      {/* Ambient warm glows echoing the brand's light source. */}
      <div
        aria-hidden
        className="glow-peach pointer-events-none absolute -left-[14%] -top-[16%] h-[58vmax] w-[58vmax] rounded-full blur-[30px]"
      />
      <div
        aria-hidden
        className="glow-gold pointer-events-none absolute -right-[20%] bottom-[2%] h-[46vmax] w-[46vmax] rounded-full blur-[24px]"
      />

      {/* Floating sparkles */}
      {!reduce && (
        <>
          <Star className="animate-twinkle absolute left-[11%] top-[23%] h-4 w-4 text-ink/35 [animation-delay:0.4s]" />
          <Star className="animate-twinkle absolute right-[13%] top-[28%] h-3 w-3 text-peach/70 [animation-delay:1.6s]" />
          <Star className="animate-twinkle absolute bottom-[20%] left-[16%] h-2.5 w-2.5 text-ink/25 [animation-delay:2.4s]" />
          <Star className="animate-twinkle absolute right-[18%] bottom-[24%] h-3.5 w-3.5 text-gold/70 [animation-delay:3s]" />
        </>
      )}

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center"
      >
        {/* Eyebrow */}
        <motion.div
          variants={item}
          className="mb-9 flex items-center gap-4 text-ink-soft"
        >
          <span className="h-px w-8 bg-ink/30 sm:w-14" />
          <span className="eyebrow">Conferință de tineret · Beclean</span>
          <span className="h-px w-8 bg-ink/30 sm:w-14" />
        </motion.div>

        {/* The official conference banner — framed like gallery artwork. */}
        <motion.div
          variants={frame}
          style={{ y: bannerY, scale: bannerScale }}
          className="group relative w-full max-w-[min(94vw,1040px)]"
        >
          {/* Soft glow bloom behind the frame */}
          <div
            aria-hidden
            className="glow-peach pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] opacity-70 blur-[40px]"
          />

          {/* Passe-partout mat */}
          <div className="relative rounded-[1.4rem] border border-line/70 bg-paper-soft/80 p-2.5 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_50px_120px_-45px_rgba(22,19,13,0.45)] backdrop-blur-[2px] sm:rounded-[2rem] sm:p-4">
            <div className="overflow-hidden rounded-[1rem] ring-1 ring-ink/10 sm:rounded-[1.4rem]">
              {/*
                With `images.unoptimized`, next/image does not prepend the
                configured basePath to the src, so we prefix it ourselves via
                asset() (driven by NEXT_PUBLIC_BASE_PATH). This renders the
                correct URL in dev, on GitHub Pages, and at the root custom domain.
              */}
              <Image
                src={asset("/images/closer-banner-web.webp")}
                alt="CLOSER Conference 2026 — Conferința, 21 Noiembrie 2026 · Psalmii 27:8"
                width={3039}
                height={1350}
                priority
                unoptimized
                sizes="(max-width: 768px) 94vw, 1040px"
                className="h-auto w-full select-none transition-transform duration-[1.2s] ease-[var(--ease-out-soft)] group-hover:scale-[1.015]"
                draggable={false}
              />
            </div>

            {/* Corner sparkle accents for an intentional, framed feel */}
            <Star className="absolute -left-1.5 -top-1.5 h-4 w-4 text-ink sm:-left-2 sm:-top-2 sm:h-5 sm:w-5" />
            <Star className="absolute -bottom-1.5 -right-1.5 h-4 w-4 text-ink sm:-bottom-2 sm:-right-2 sm:h-5 sm:w-5" />
          </div>
        </motion.div>

        {/* Supporting line */}
        <motion.p
          variants={item}
          className="text-pretty mt-10 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
        >
          O seară în care ne apropiem — de Dumnezeu și unii de alții.
          Închinare, Cuvânt și comunitate.
        </motion.p>

        {/* Call to action */}
        <motion.div
          variants={item}
          className="mt-9 flex flex-col items-center gap-5 sm:flex-row"
        >
          <RegisterButton size="lg" variant="solid" />
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

      {/* Scroll cue */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        aria-hidden
      >
        <span className="eyebrow text-[0.6rem]">Scroll</span>
        <span className="relative flex h-10 w-[1px] overflow-hidden bg-ink/15">
          {!reduce && (
            <motion.span
              className="absolute inset-x-0 top-0 h-4 bg-ink"
              animate={{ y: [-16, 40] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </span>
      </motion.div>

      {/* Hidden-but-accessible context for screen readers & SEO. */}
      <h1 className="sr-only">
        {SITE.name} — {SITE.dateLabel}. Conferință de tineret creștin.
      </h1>
    </section>
  );
}
