"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT_IMAGE } from "@/lib/site-data";
import {
  staggerContainer,
  staggerChild,
  clipReveal,
  widthGrow,
  VIEWPORT_DEFAULTS,
  LUXE_EASE,
} from "@/components/animations";

export default function AboutStorySection() {
  return (
    <section className="relative bg-pearl text-onyx section-pad overflow-hidden">
      <p
        aria-hidden="true"
        className="deco-text deco-text--dark absolute -top-8 -left-10 hidden lg:block"
      >
        STORY
      </p>

      <div className="relative container-luxe">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image — left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_DEFAULTS}
            className="lg:col-span-6 relative"
          >
            <motion.span
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VIEWPORT_DEFAULTS}
              transition={{ duration: 0.8, delay: 0.2, ease: LUXE_EASE }}
              className="absolute -top-6 -left-6 w-2/3 h-full border border-gold/40 hidden md:block"
            />
            <motion.span
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VIEWPORT_DEFAULTS}
              transition={{ duration: 0.8, delay: 0.3, ease: LUXE_EASE }}
              className="absolute -bottom-6 -right-6 w-1/3 h-1/2 bg-gold/10 hidden md:block"
            />
            <motion.div
              variants={clipReveal}
              className="relative aspect-[4/5] overflow-hidden rounded-luxe"
            >
              <Image
                src={ABOUT_IMAGE}
                alt="AMPSAC cleaning team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/30 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Copy — right */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_DEFAULTS}
            className="lg:col-span-6"
          >
            <motion.div variants={staggerChild} className="inline-flex items-center gap-4 mb-8">
              <motion.span
                variants={widthGrow}
                className="block h-px w-10 bg-gold origin-left"
              />
              <span className="font-sans uppercase tracking-luxe-md text-[0.72rem] text-gold">
                Our Story
              </span>
            </motion.div>

            <motion.h2
              variants={staggerChild}
              className="font-display font-light text-display-lg text-onyx mb-8"
            >
              The AMPSAC journey.
            </motion.h2>

            <motion.span
              variants={widthGrow}
              className="block h-px w-24 bg-gold/70 mb-8 origin-left"
            />

            <motion.p
              variants={staggerChild}
              className="text-[1.02rem] leading-[1.9] text-onyx/70 mb-6"
            >
              Founded in 2025, AMPSAC City Clean is a new, dynamic cleaning company ready to serve residential and commercial clients throughout the UK. Our foundation is built on quality service, reliability, and a genuine commitment to customer satisfaction.
            </motion.p>
            <motion.p
              variants={staggerChild}
              className="text-[1.02rem] leading-[1.9] text-onyx/70"
            >
              Our leadership team consists of a dedicated CEO, Secretary, and Operations Manager who work together to ensure exceptional service delivery. We bring expertise, care, and attention to detail to every project, whether it&apos;s an office building, residential home, or specialised cleaning environment.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
