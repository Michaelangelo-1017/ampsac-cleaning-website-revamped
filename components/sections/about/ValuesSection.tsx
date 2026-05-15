"use client";

import { motion } from "framer-motion";
import { Sparkles, Clock, Scale, Leaf } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { CORE_VALUES } from "@/lib/site-data";
import {
  cardSpringIn,
  cardHoverLift,
  VIEWPORT_DEFAULTS,
} from "@/components/animations";

const iconForIndex = [Sparkles, Clock, Scale, Leaf];

export default function AboutValuesSection() {
  return (
    <section className="relative bg-onyx text-pearl section-pad overflow-hidden">
      <div className="grain-overlay" />
      <p
        aria-hidden="true"
        className="deco-text deco-text--light absolute -top-10 -right-10 hidden lg:block"
      >
        VALUES
      </p>

      <div className="relative container-luxe">
        <SectionTitle
          eyebrow="What Drives Us"
          title="Our core values"
          subtitle="These principles guide everything we do and shape how we deliver exceptional service to our clients every day."
          invert
          className="mb-20 md:mb-28"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CORE_VALUES.map((value, index) => {
            const Icon = iconForIndex[index] ?? Sparkles;
            return (
              <motion.div
                key={value.title}
                variants={cardSpringIn}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_DEFAULTS}
                whileHover={cardHoverLift}
                transition={{ delay: index * 0.08 }}
                className="luxe-card p-8 md:p-10"
              >
                <span
                  aria-hidden="true"
                  className="block font-display text-[3rem] leading-none text-gold/30 mb-8"
                >
                  0{index + 1}
                </span>
                <div className="mb-6 inline-grid h-12 w-12 place-items-center border border-gold/40 text-gold">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-light text-[1.6rem] leading-tight text-pearl mb-4">
                  {value.title}
                </h3>
                <span className="block h-px w-10 bg-gold/50 mb-4" />
                <p className="text-[0.92rem] leading-[1.85] text-pearl/65">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
