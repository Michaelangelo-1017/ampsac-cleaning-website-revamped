"use client";

import { motion } from "framer-motion";
import { wordStaggerContainer, wordReveal, VIEWPORT_DEFAULTS } from "./animations";

interface SplitTextProps {
  text: string;
  /** className passed to the outer motion.span (acts as the stagger container). */
  className?: string;
  /** Style passed to the outer motion.span — typically for textShadow. */
  style?: React.CSSProperties;
  /** If true, animates on mount; otherwise animates when scrolled into view. */
  immediate?: boolean;
}

/**
 * Renders each word of `text` inside its own overflow-hidden span so the
 * inner motion.span can translate from y:100% → 0, producing the
 * "words rising one-by-one from below" reveal used in heroes.
 *
 * The outer motion.span is the stagger container — each child word inherits
 * the wordReveal variants automatically.
 */
export default function SplitText({
  text,
  className,
  style,
  immediate = false,
}: SplitTextProps) {
  const words = text.split(" ");
  const motionProps = immediate
    ? { initial: "hidden" as const, animate: "visible" as const }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: VIEWPORT_DEFAULTS,
      };

  return (
    <motion.span
      variants={wordStaggerContainer}
      className={className}
      style={style}
      {...motionProps}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          // overflow-hidden clips the inner span when it sits below the baseline
          className="inline-block overflow-hidden align-top leading-[1.05] pr-[0.25em] last:pr-0"
        >
          <motion.span variants={wordReveal} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
