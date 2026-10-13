"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { NAV_LINKS } from "@/lib/site";
import { RegisterButton } from "./RegisterButton";
import { Star } from "./Star";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll + manage focus/Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    // Move focus into the menu for keyboard users.
    const focusTimer = window.setTimeout(() => firstLinkRef.current?.focus(), 60);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(focusTimer);
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-500 sm:px-8 ${
          scrolled
            ? "my-2 rounded-full border border-line/60 bg-paper-soft/70 py-2.5 shadow-[0_10px_30px_-24px_rgba(22,19,13,0.6)] backdrop-blur-xl"
            : "py-4 sm:py-5"
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

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Register: always on desktop; on mobile it slides in once you
              scroll past the hero (whose own CTA is visible first). */}
          <div className={`${scrolled ? "block" : "hidden"} sm:block`}>
            <RegisterButton size="md" />
          </div>
          <button
            ref={buttonRef}
            type="button"
            onClick={() => (open ? closeMenu() : setOpen(true))}
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="relative z-50 -mr-1.5 flex h-11 w-11 flex-col items-center justify-center gap-[5px] md:hidden"
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
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Meniu principal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-paper/96 px-7 backdrop-blur-xl md:hidden"
          >
            {/* Warm bloom + menu heading */}
            <div
              aria-hidden
              className="glow-peach pointer-events-none absolute -right-[20%] -top-[10%] h-[70vw] w-[70vw] rounded-full opacity-70 blur-[24px]"
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.4 }}
              className="eyebrow mb-7 text-[0.6rem]"
            >
              CLOSER · Meniu
            </motion.span>

            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                ref={i === 0 ? firstLinkRef : undefined}
                onClick={closeMenu}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i + 0.1, duration: 0.55 }}
                className="group flex items-baseline gap-4 border-b border-line/50 py-[1.05rem] text-ink transition-colors active:text-peach"
              >
                <span className="font-sans text-[0.7rem] tracking-[0.2em] text-ink-faint">
                  0{i + 1}
                </span>
                <span className="font-display text-[2.05rem] font-light leading-none tracking-tight">
                  {link.label}
                </span>
                <Star className="ml-auto h-3 w-3 self-center text-ink/35 transition-transform duration-500 group-active:rotate-90" />
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * NAV_LINKS.length + 0.12, duration: 0.55 }}
              className="mt-9"
            >
              <RegisterButton size="lg" className="w-full" onClick={closeMenu} />
              <p className="mt-5 text-center text-xs text-ink-faint">
                Sâmbătă · 21 Noiembrie 2026 · Beclean
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
