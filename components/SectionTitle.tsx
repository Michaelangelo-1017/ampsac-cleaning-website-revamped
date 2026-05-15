"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  VIEWPORT_DEFAULTS,
  LUXE_EASE,
  staggerContainer,
  staggerChild,
} from "./animations";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  /** Render on a dark background (uses pearl text instead of onyx). */
  invert?: boolean;
  className?: string;
}

// Gold rule width-grow with explicit origin. Left rule grows leftward from the
// eyebrow (origin-right), right rule grows rightward (origin-left), producing a
// subtle "splitting open" effect under the title.
const goldRuleLeft: Variants = {
  hidden:  { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, ease: LUXE_EASE } },
};
const goldRuleRight: Variants = goldRuleLeft; // same animation, different origin via className

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  invert = false,
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_DEFAULTS}
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center mx-auto" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <motion.div variants={staggerChild} className="inline-flex items-center gap-4">
          <motion.span
            variants={goldRuleLeft}
            className="block h-px w-10 bg-gold/70 origin-right"
          />
          <span className="font-sans uppercase tracking-luxe-md text-[0.7rem] text-gold">
            {eyebrow}
          </span>
          {align === "center" && (
            <motion.span
              variants={goldRuleRight}
              className="block h-px w-10 bg-gold/70 origin-left"
            />
          )}
        </motion.div>
      )}
      <motion.h2
        variants={staggerChild}
        className={cn(
          "font-display font-light leading-[1.08]",
          "text-display-md",
          invert ? "text-pearl" : "text-onyx"
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={staggerChild}
          className={cn(
            "max-w-2xl text-[1.02rem] leading-[1.85]",
            invert ? "text-pearl/65" : "text-onyx/65"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
