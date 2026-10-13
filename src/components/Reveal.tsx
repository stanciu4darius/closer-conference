"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger offset in seconds. */
  delay?: number;
  /** Direction the element travels from. */
  from?: "up" | "down" | "left" | "right" | "none";
  /** Render as a different element (default div). */
  as?: "div" | "section" | "li" | "span" | "p";
  once?: boolean;
};

const DISTANCE = 28;

export function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
  as = "div",
  once = true,
}: RevealProps) {
  const offset = {
    up: { y: DISTANCE },
    down: { y: -DISTANCE },
    left: { x: DISTANCE },
    right: { x: -DISTANCE },
    none: {},
  }[from];

  // Deterministic markup (identical on server and client). Reduced-motion is
  // handled by <MotionConfig reducedMotion="user">, which snaps the transform
  // instantly while keeping the opacity fade — no reliance on useReducedMotion()
  // here, which would differ between SSR and a reduced-motion client.
  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        delay,
      },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3, margin: "0px 0px -8% 0px" }}
    >
      {children}
    </MotionTag>
  );
}
