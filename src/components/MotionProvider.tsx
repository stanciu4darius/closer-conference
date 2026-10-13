"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * Honors `prefers-reduced-motion` at Motion's animation layer.
 *
 * `reducedMotion="user"` disables transform/layout animations (and snaps them
 * instantly) for users who prefer reduced motion, while keeping opacity fades.
 *
 * Crucially, it does NOT change the server-rendered initial markup, so it is
 * hydration-safe. Components therefore must NOT branch their rendered output
 * (initial styles, variant values used as `initial`, whileHover/whileTap
 * presence, etc.) on `useReducedMotion()` — the server always computes that as
 * `false`, which would mismatch a reduced-motion client. Let MotionConfig do it.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
