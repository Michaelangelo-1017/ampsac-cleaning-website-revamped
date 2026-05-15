"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SITE } from "@/lib/site-data";
import {
  staggerContainer,
  staggerChild,
  widthGrow,
  HOVER_SPRING,
  VIEWPORT_DEFAULTS,
} from "@/components/animations";

export default function ServicesCta() {
  return (
    <section className="relative bg-onyx text-pearl section-pad overflow-hidden">
      <div className="grain-overlay" />
      <p
        aria-hidden="true"
        className="deco-text deco-text--light absolute -top-10 right-0 hidden lg:block"
      >
        CONTACT
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
              Tailored to You
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
            Need a service not listed?
          </motion.h2>

          <motion.p
            variants={staggerChild}
            className="text-[1.05rem] leading-[1.85] text-pearl/65 max-w-2xl mx-auto mb-12"
          >
            Our cleaning solutions are completely customisable. Contact us to discuss your specific cleaning needs and we&apos;ll create a tailored plan that works for you.
          </motion.p>

          <motion.span
            variants={widthGrow}
            className="block h-px w-20 bg-gold/60 mx-auto mb-10 origin-center"
          />

          <motion.p
            variants={staggerChild}
            className="font-sans uppercase tracking-luxe-md text-[0.7rem] text-gold/80 mb-3"
          >
            Call us today
          </motion.p>
          <motion.a
            variants={staggerChild}
            whileHover={{ scale: 1.03, transition: HOVER_SPRING }}
            whileTap={{ scale: 0.99 }}
            href={SITE.phones[0].href}
            className="block font-display font-light text-display-md text-pearl hover:text-gold transition-colors duration-300 mb-12"
          >
            {SITE.phones[0].label}
          </motion.a>

          <motion.div
            variants={staggerChild}
            whileHover={{ scale: 1.03, transition: HOVER_SPRING }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link href="/contact" className="btn-luxe-outline btn-size-xl">
              Request a Quote
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
