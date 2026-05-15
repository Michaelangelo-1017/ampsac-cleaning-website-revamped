"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SplitText from "@/components/SplitText";
import {
  staggerContainer,
  staggerChild,
  widthGrow,
  HOVER_SPRING,
  CTA_SPRING,
  LUXE_EASE,
} from "@/components/animations";

export default function NotFound() {
  return (
    <section className="relative bg-onyx text-pearl min-h-screen flex items-center overflow-hidden">
      <div className="grain-overlay" />

      <motion.p
        aria-hidden="true"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: LUXE_EASE }}
        className="deco-text deco-text--light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        404
      </motion.p>

      <div className="relative container-luxe-narrow text-center py-32">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={staggerChild} className="inline-flex items-center gap-4 mb-10">
            <motion.span variants={widthGrow} className="block h-px w-10 bg-gold origin-right" />
            <span className="font-sans uppercase tracking-luxe-md text-[0.7rem] text-gold">
              Page Not Found
            </span>
            <motion.span variants={widthGrow} className="block h-px w-10 bg-gold origin-left" />
          </motion.div>

          <motion.h1
            variants={staggerChild}
            className="font-display font-light text-display-xl text-pearl mb-2"
          >
            <SplitText text="404" immediate className="block" />
          </motion.h1>

          <motion.span
            variants={widthGrow}
            className="block h-px w-20 bg-gold/70 mx-auto my-10 origin-center"
          />

          <motion.h2
            variants={staggerChild}
            className="font-display font-light text-display-sm text-pearl mb-8"
          >
            <SplitText text="The page you're looking for has moved." immediate className="block" />
          </motion.h2>

          <motion.p
            variants={staggerChild}
            className="text-[1.02rem] leading-[1.9] text-pearl/65 max-w-md mx-auto mb-12"
          >
            The page might have been removed, had its name changed, or is temporarily unavailable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...CTA_SPRING, delay: 0.8 }}
            whileHover={{ scale: 1.03, transition: HOVER_SPRING }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link href="/" className="btn-luxe-outline btn-size-xl">
              Return Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
