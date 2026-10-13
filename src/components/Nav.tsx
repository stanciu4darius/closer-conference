"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { NAV_LINKS } from "@/lib/site";
import { RegisterButton } from "./RegisterButton";
import { Star } from "./Star";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={reduce ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8 ${
          scrolled
            ? "my-2 rounded-full border border-line/60 bg-paper-soft/70 py-2.5 shadow-[0_10px_30px_-24px_rgba(22,19,13,0.6)] backdrop-blur-xl"
            : "py-5"
        }`}
      >
        <a
          href="#top"
          className="group flex items-center gap-2 font-display text-xl font-semibold tracking-tight text-ink"
          aria-label="CLOSER Conference 2026 — acasă"
        >
          <span className="italic">closer</span>
          <Star className="h-3 w-3 text-ink transition-transform duration-500 group-hover:rotate-180" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm text-ink-soft transition-colors duration-300 hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-ink after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <RegisterButton size="md" />
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
            aria-expanded={open}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`h-px w-6 bg-ink transition-all duration-300 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-ink transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-ink transition-all duration-300 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-paper/95 px-8 backdrop-blur-xl md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i + 0.1, duration: 0.5 }}
                className="border-b border-line/50 py-4 font-display text-3xl font-light text-ink"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8"
            >
              <RegisterButton size="lg" className="w-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
