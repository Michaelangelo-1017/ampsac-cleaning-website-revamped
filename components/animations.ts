// Shared Framer Motion primitives — every animated component imports from here
// so timings, easings, and viewport defaults live in one place.

import type { Variants, Transition, Easing } from "framer-motion";

/* ─── Easings & springs ──────────────────────────────────────────────────── */

// The curve used for every motion in the redesign (matches the visual rhythm
// of the static design tokens). Typed as a 4-tuple so Framer Motion v12
// recognises it as a BezierDefinition rather than `number[]`.
export const LUXE_EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

// Hover spring per brief — stiffness 400, damping 25
export const HOVER_SPRING: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 25,
};

// Soft spring for card "spring-in from below"
export const SOFT_SPRING: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 14,
};

// Hero CTA spring — scale 0.8 → 1
export const CTA_SPRING: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 18,
};

/* ─── Viewport defaults ──────────────────────────────────────────────────── */

// Use everywhere with whileInView. Margin keeps animations from firing too
// early during smooth scroll (per redesign brief flag #5).
export const VIEWPORT_DEFAULTS = { once: true, margin: "-80px" } as const;

/* ─── Section-level variants ─────────────────────────────────────────────── */

// Standard 40px fade-up — section headings & most content blocks
export const sectionFadeUp: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: LUXE_EASE as unknown as Easing } },
};

// Stagger container — children appear 0.1s apart
export const staggerContainer: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

// Stagger child — paired with staggerContainer above
export const staggerChild: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: LUXE_EASE as unknown as Easing } },
};

/* ─── Hero word-reveal ───────────────────────────────────────────────────── */

// Container for split-word heading — 0.15s between each word
export const wordStaggerContainer: Variants = {
  hidden:  { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};
export const wordReveal: Variants = {
  hidden:  { y: "100%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.85, ease: LUXE_EASE as unknown as Easing } },
};

// Hero subtitle — fades AFTER heading completes (4 words * 0.15 + 0.85 ≈ 1.45s)
export const heroSubtitle: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 1.0, ease: LUXE_EASE as unknown as Easing } },
};

// Hero CTA — scale 0.8 → 1 spring, after subtitle (delay ≈ 1.6s)
export const heroCta: Variants = {
  hidden:  { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { ...CTA_SPRING, delay: 1.5 } },
};

// Hero gold rule — width grow 0 → full after heading
export const heroGoldRule: Variants = {
  hidden:  { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.7, delay: 0.9, ease: LUXE_EASE as unknown as Easing } },
};

/* ─── Card spring-in ─────────────────────────────────────────────────────── */

export const cardSpringIn: Variants = {
  hidden:  { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: SOFT_SPRING },
};

// Hover lift for cards
export const cardHoverLift = { y: -8, transition: HOVER_SPRING };

// Hover scale for buttons / icons
export const buttonHoverScale = { scale: 1.03, transition: HOVER_SPRING };

/* ─── Gold rule width-grow ───────────────────────────────────────────────── */

export const widthGrow: Variants = {
  hidden:  { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, ease: LUXE_EASE as unknown as Easing } },
};

/* ─── Image clip-path reveal ─────────────────────────────────────────────── */
// Thin horizontal slice in the middle, expanding to full height (0.8s).
export const clipReveal: Variants = {
  hidden:  { clipPath: "inset(48% 0 48% 0)" },
  visible: { clipPath: "inset(0% 0 0% 0)", transition: { duration: 0.9, ease: LUXE_EASE as unknown as Easing } },
};

/* ─── Header initial slide-down ──────────────────────────────────────────── */

export const headerSlideDown: Variants = {
  hidden:  { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ─── Page transition fade ───────────────────────────────────────────────── */

export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: LUXE_EASE as unknown as Easing } },
  exit:    { opacity: 0,        transition: { duration: 0.25, ease: LUXE_EASE as unknown as Easing } },
};
