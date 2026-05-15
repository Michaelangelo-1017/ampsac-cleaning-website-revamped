"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HOME_ABOUT_IMAGE } from "@/lib/site-data";
import {
  staggerContainer,
  staggerChild,
  clipReveal,
  widthGrow,
  HOVER_SPRING,
  VIEWPORT_DEFAULTS,
  LUXE_EASE,
} from "@/components/animations";

export default function HomeAboutSection() {
  return (
    <section className="relative bg-pearl text-onyx section-pad overflow-hidden">
      <p
        aria-hidden="true"
        className="deco-text deco-text--dark absolute -top-6 -right-10 hidden lg:block"
      >
        ESTABLISHED
      </p>

      <div className="relative container-luxe">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Copy */}
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
                About AMPSAC
              </span>
            </motion.div>

            <motion.h2
              variants={staggerChild}
              className="font-display font-light text-display-lg text-onyx mb-8"
            >
              Creating clean spaces with quiet precision.
            </motion.h2>

            <motion.span
              variants={widthGrow}
              className="block h-px w-24 bg-gold/70 mb-8 origin-left"
            />

            <motion.p
              variants={staggerChild}
              className="text-[1.02rem] leading-[1.9] text-onyx/70 mb-6"
            >
              AMPSAC City Clean Limited is your trusted partner for all cleaning
              needs in the UK. We specialise in cleaning buildings, offices,
              shops, hotels, homes, garages, car parks, and other general
              cleaning.
            </motion.p>
            <motion.p
              variants={staggerChild}
              className="text-[1.02rem] leading-[1.9] text-onyx/70 mb-12"
            >
              With our team of trained professionals and state-of-the-art
              equipment, we deliver spotless results that exceed expectations.
              Our commitment to quality service and customer satisfaction has
              made us a leading cleaning company in the region.
            </motion.p>

            <motion.div
              variants={staggerChild}
              whileHover={{ scale: 1.03, transition: HOVER_SPRING }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link href="/about" className="btn-luxe-outline-dark btn-size-lg">
                Discover Our Story
              </Link>
            </motion.div>
          </motion.div>

          {/* Image with clip-path reveal */}
          <motion.div
            variants={staggerChild}
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
              className="absolute -top-6 -right-6 w-2/3 h-full border border-gold/40 hidden md:block"
            />
            <motion.span
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VIEWPORT_DEFAULTS}
              transition={{ duration: 0.8, delay: 0.3, ease: LUXE_EASE }}
              className="absolute -bottom-6 -left-6 w-1/3 h-1/2 bg-gold/10 hidden md:block"
            />
            <motion.div
              variants={clipReveal}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_DEFAULTS}
              className="relative aspect-[4/5] overflow-hidden rounded-luxe"
            >
              <Image
                src={HOME_ABOUT_IMAGE}
                alt="AMPSAC cleaning professionals at work"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/30 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
