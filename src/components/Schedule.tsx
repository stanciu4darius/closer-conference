"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { SCHEDULE, SITE } from "@/lib/site";
import { Reveal } from "./Reveal";
import { Star } from "./Star";

export function Schedule() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="program"
      className="relative border-t border-line/50 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal className="mb-16 text-center">
          <span className="eyebrow">Program</span>
          <h2 className="text-balance mt-5 font-display text-4xl font-light leading-tight tracking-tight text-ink sm:text-5xl md:text-6xl">
            Cum se desfășoară ziua
          </h2>
          <p className="mt-4 text-sm uppercase tracking-[0.25em] text-ink-faint">
            {SITE.dateLabel}
          </p>
        </Reveal>

        <div ref={ref} className="relative mx-auto max-w-2xl">
          {/* Vertical progress line */}
          <div className="absolute bottom-2 left-[1.15rem] top-2 w-px bg-line/60 sm:left-[4.5rem]">
            <motion.div
              style={{ scaleY: reduce ? 1 : lineScale }}
              className="absolute inset-0 origin-top bg-ink"
            />
          </div>

          <ul className="space-y-14">
            {SCHEDULE.map((item, i) => (
              <Reveal as="li" key={item.time} delay={i * 0.1} from="right">
                <div className="relative flex items-start gap-6 sm:gap-10">
                  {/* Time + node */}
                  <div className="relative flex shrink-0 items-center sm:w-16 sm:justify-end">
                    <span className="hidden font-display text-xl tracking-tight text-ink sm:block">
                      {item.time}
                    </span>
                  </div>

                  <span className="relative z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink/30 bg-paper">
                    <Star className="h-3 w-3 text-ink" />
                  </span>

                  <div className="flex-1 pb-2">
                    <span className="font-display text-lg tracking-tight text-ink sm:hidden">
                      {item.time}
                    </span>
                    <h3 className="font-display text-2xl font-light tracking-tight text-ink sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="text-pretty mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
