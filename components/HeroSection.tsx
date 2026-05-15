"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SplitText from "./SplitText";
import {
  heroSubtitle,
  heroCta,
  heroGoldRule,
  HOVER_SPRING,
} from "./animations";

interface HeroSectionProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
  height?: string;
}

export default function HeroSection({
  eyebrow = "AMPSAC City Clean",
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
  height = "min(92vh, 880px)",
}: HeroSectionProps) {
  return (
    <section
      className="relative w-full bg-onyx bg-center bg-cover flex items-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})`, minHeight: height }}
    >
      <div className="absolute inset-0 bg-hero-overlay z-[1]" />

      <p
        aria-hidden="true"
        className="deco-text deco-text--light absolute -left-8 bottom-4 z-[1] hidden lg:block"
      >
        AMPSAC
      </p>

      <div className="relative z-[2] container-luxe pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-3xl">
          {/* Eyebrow */}
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
              {eyebrow}
            </span>
          </motion.div>

          <h1
            className="font-display font-light text-pearl text-display-xl"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.45)" }}
          >
            <SplitText text={title} immediate className="block" />
          </h1>

          <motion.span
            variants={heroGoldRule}
            initial="hidden"
            animate="visible"
            className="block h-px w-24 bg-gold/70 my-8 origin-left"
          />

          <motion.p
            variants={heroSubtitle}
            initial="hidden"
            animate="visible"
            className="text-pearl/80 text-[1.15rem] md:text-[1.2rem] leading-[1.7] max-w-xl mb-12"
          >
            {subtitle}
          </motion.p>

          <motion.div
            variants={heroCta}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.03, transition: HOVER_SPRING }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link href={buttonLink} className="btn-luxe-outline btn-size-xl">
              {buttonText}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
