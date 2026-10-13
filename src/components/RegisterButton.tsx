"use client";

import { motion } from "motion/react";
import { SITE } from "@/lib/site";
import { Star } from "./Star";

type Props = {
  variant?: "solid" | "outline" | "ghost";
  size?: "md" | "lg";
  label?: string;
  className?: string;
  onClick?: () => void;
};

export function RegisterButton({
  variant = "solid",
  size = "md",
  label = "Înscrie-te",
  className = "",
  onClick,
}: Props) {
  const base =
    "group relative inline-flex items-center justify-center gap-3 rounded-full font-sans font-medium tracking-wide transition-colors duration-500 ease-[var(--ease-out-soft)] will-change-transform focus-visible:outline-offset-4";

  const sizes = {
    md: "px-7 py-3 text-sm",
    lg: "px-9 py-4 text-[0.95rem] sm:text-base",
  };

  const variants = {
    solid:
      "bg-ink text-paper-soft hover:bg-[#241f16] shadow-[0_18px_40px_-20px_rgba(22,19,13,0.7)]",
    outline:
      "border border-ink/25 text-ink hover:border-ink/70 hover:bg-ink hover:text-paper-soft",
    ghost: "text-ink hover:text-peach",
  };

  return (
    <motion.a
      href={SITE.registrationUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      aria-label={`${label} — CLOSER Conference 2026`}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.035 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 380, damping: 24 }}
    >
      <span className="uppercase tracking-[0.18em]">{label}</span>
      <Star className="h-3.5 w-3.5 shrink-0 transition-transform duration-500 group-hover:rotate-90" />
    </motion.a>
  );
}
