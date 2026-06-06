"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerChild,
  widthGrow,
  HOVER_SPRING,
  VIEWPORT_DEFAULTS,
} from "@/components/animations";

export default function HomeCtaSection() {
  return (
    <section className="relative bg-jet text-pearl section-pad overflow-hidden">
      <div className="grain-overlay" />
      <p
        aria-hidden="true"
        className="deco-text deco-text--gold absolute -top-12 left-1/2 -translate-x-1/2 hidden md:block"
      >
        BESPOKE
      </p>

      <div className="relative container-luxe-narrow text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULTS}
        >
          <motion.div variants={staggerChild} className="inline-flex items-center gap-4 mb-8">
            <motion.span
              variants={widthGrow}
              className="block h-px w-10 bg-gold origin-right"
            />
            <span className="font-sans uppercase tracking-luxe-md text-[0.7rem] text-gold">
              Bespoke Service
            </span>
            <motion.span
              variants={widthGrow}
              className="block h-px w-10 bg-gold origin-left"
            />
          </motion.div>

          <motion.h2
            variants={staggerChild}
            className="font-display font-light text-display-lg text-pearl mb-8"
          >
            Ready for a cleaner space?
          </motion.h2>

          <motion.p
            variants={staggerChild}
            className="text-[1.05rem] leading-[1.85] text-pearl/65 max-w-xl mx-auto mb-12"
          >
            Contact us today for a free, no-obligation quote. Let our experts bring a new level of cleanliness to your space.
          </motion.p>

          <motion.div
            variants={staggerChild}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.03, transition: HOVER_SPRING }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link href="/quote" className="btn-luxe-outline btn-size-xl">
                Get Your Free Quote
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03, transition: HOVER_SPRING }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link href="/services" className="btn-luxe-ghost btn-size-lg !text-pearl/60 hover:!text-gold">
                View All Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
