"use client";

import Image from "next/image";
import { asset } from "@/lib/site";
import { Reveal } from "./Reveal";
import { Star } from "./Star";

/**
 * Mobile-only presentation of the official conference banner, framed as a
 * recognizable "poster". The hero carries the legible live text; this keeps
 * the original artwork accessible without relying on its small baked-in type.
 */
export function BannerMobile() {
  return (
    <section className="relative px-6 pb-4 pt-10 md:hidden" aria-label="Afișul oficial">
      <Reveal className="mx-auto max-w-sm">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-5 bg-ink/25" />
          <span className="eyebrow text-[0.6rem]">Afișul oficial</span>
          <Star className="h-2.5 w-2.5 text-peach" />
        </div>

        <div className="group relative">
          <div
            aria-hidden
            className="glow-peach pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] opacity-60 blur-[26px]"
          />
          <div className="relative rounded-[1.25rem] border border-line/70 bg-paper-soft/80 p-2 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_30px_70px_-40px_rgba(22,19,13,0.5)]">
            <div className="overflow-hidden rounded-[0.9rem] ring-1 ring-ink/10">
              <Image
                src={asset("/images/closer-banner-web.webp")}
                alt="Afișul oficial CLOSER Conference 2026 — 21 Noiembrie 2026, Psalmii 27:8"
                width={3039}
                height={1350}
                sizes="(max-width: 767px) 88vw, 1px"
                className="h-auto w-full select-none"
                draggable={false}
              />
            </div>
            <Star className="absolute -left-1.5 -top-1.5 h-3.5 w-3.5 text-ink" />
            <Star className="absolute -bottom-1.5 -right-1.5 h-3.5 w-3.5 text-ink" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
