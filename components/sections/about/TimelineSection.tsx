"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
} from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { TIMELINE } from "@/lib/site-data";
import {
  staggerContainer,
  staggerChild,
  VIEWPORT_DEFAULTS,
  LUXE_EASE,
} from "@/components/animations";

/**
 * Counts up to `target` over `duration` seconds when the wrapping element
 * enters the viewport. Uses Framer Motion's MotionValue so the DOM only
 * receives committed integer values (no React re-render on every frame).
 */
/*function AnimatedYear({ target, duration = 2.4 }: { target: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, target, { duration, ease: LUXE_EASE });
    return controls.stop;
  }, [inView, count, target, duration]);

  return (
    <span ref={ref} className="inline-block tabular-nums">
      <motion.span>{rounded}</motion.span>
    </span>
  );
}*/

export default function AboutTimelineSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  // Spine progress — scaleY 0 → 1 as user scrolls the timeline into and through view.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "end 0.4"],
  });
  const spineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Detect inView once to gate dot pulse animations
  const [spineReady, setSpineReady] = useState(false);
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (v > 0.05 && !spineReady) setSpineReady(true);
    });
    return unsubscribe;
  }, [scrollYProgress, spineReady]);

  return (
    <section className="relative bg-pearl text-onyx section-pad overflow-hidden">
      <p
        aria-hidden="true"
        className="deco-text deco-text--dark absolute -bottom-12 -right-10 hidden lg:block"
      >
        2025
      </p>

      <div className="relative container-luxe">
        <SectionTitle
          eyebrow="Milestones"
          title="Our timeline"
          subtitle="Our journey begins in 2025 with a clear vision to provide quality cleaning services that prioritise health and excellence."
          className="mb-20 md:mb-24"
        />

        <div ref={sectionRef} className="relative max-w-4xl mx-auto">
          {/* Vertical gold spine — base (faded) */}
          <span
            aria-hidden="true"
            className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-onyx/8 md:-translate-x-px"
          />
          {/* Vertical gold spine — animated draw */}
          <motion.span
            aria-hidden="true"
            style={{ scaleY: spineScale, transformOrigin: "top" }}
            className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-gold/40 via-gold/60 to-gold/40 md:-translate-x-px"
          />

          {TIMELINE.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_DEFAULTS}
                className={`relative mb-16 last:mb-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  isEven ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                {/* Year dot */}
                <motion.span
                  aria-hidden="true"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={VIEWPORT_DEFAULTS}
                  transition={{ duration: 0.5, delay: 0.4, ease: LUXE_EASE }}
                  className="absolute left-[10px] md:left-1/2 top-8 md:top-1/2 -translate-y-1/2 md:-translate-x-1/2 z-10"
                >
                  <span className="block w-3 h-3 rounded-full bg-gold ring-4 ring-pearl" />
                </motion.span>

                {/* Year side */}
                <motion.div
                  variants={staggerChild}
                  className={`pl-12 md:pl-0 ${isEven ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}
                >
                  <p className="font-display font-light text-[3.5rem] leading-none text-gold mb-2">
                    <motion.span>{item.year}</motion.span>
                  </p>
                </motion.div>

                {/* Card side */}
                <motion.div
                  variants={staggerChild}
                  className={`pl-12 md:pl-0 ${isEven ? "md:pl-16" : "md:pr-16 md:text-right"}`}
                >
                  <p className="font-sans uppercase tracking-luxe-md text-[0.65rem] text-gold mb-3">
                    Milestone {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display font-light text-[1.8rem] leading-tight text-onyx mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[0.95rem] leading-[1.9] text-onyx/70">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
