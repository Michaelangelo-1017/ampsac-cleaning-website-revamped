"use client";

import { motion } from "framer-motion";
import SplitText from "@/components/SplitText";
import { heroSubtitle, heroGoldRule } from "@/components/animations";
import { HERO_IMAGES } from "@/lib/site-data";

export default function QuoteHero() {
  return (
    <section
      className="relative bg-onyx bg-cover bg-center flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_IMAGES.contact})`,
        minHeight: "min(70vh, 620px)",
      }}
    >
      <div className="absolute inset-0 bg-hero-overlay z-[1]" />

      <p
        aria-hidden="true"
        className="deco-text deco-text--light absolute -bottom-6 -right-10 z-[1] hidden lg:block"
      >
        QUOTE
      </p>

      <div className="relative z-[2] container-luxe pt-32 md:pt-36 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-4 mb-8"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="block h-px w-10 bg-gold origin-left"
            />
            <span className="font-sans uppercase tracking-luxe-md text-[0.72rem] text-gold">
              Get In Touch
            </span>
          </motion.div>

          <h1
            className="font-display font-light text-pearl text-display-xl mb-8"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.45)" }}
          >
            <SplitText text="Let's talk." immediate className="block" />
          </h1>

          <motion.span
            variants={heroGoldRule}
            initial="hidden"
            animate="visible"
            className="block h-px w-24 bg-gold/70 mb-8 origin-left"
          />

          <motion.p
            variants={heroSubtitle}
            initial="hidden"
            animate="visible"
            className="text-pearl/80 text-[1.15rem] md:text-[1.2rem] leading-[1.7] max-w-xl"
          >
            Get in touch with our team for exceptional cleaning services tailored to your needs.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
