"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import SplitText from "./SplitText";
import {
  heroSubtitle,
  heroCta,
  heroGoldRule,
  HOVER_SPRING,
} from "./animations";

interface VideoHeroSectionProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  videoSrc: string;
}

export default function VideoHeroSection({
  eyebrow = "AMPSAC City Clean — Est. 2025",
  title,
  subtitle,
  buttonText,
  buttonLink,
  videoSrc,
}: VideoHeroSectionProps) {
  // Parallax — the video translates at half scroll speed while the hero is
  // on screen. Uses scroll progress (0 → 1 as the hero scrolls past) mapped to
  // 0 → 18% of the video's own height. The video itself is sized at 115% with
  // a -7.5% top offset so it never reveals the section behind it.
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[680px] flex items-end overflow-hidden bg-onyx"
    >
      <motion.video
        className="absolute inset-x-0 -top-[7.5%] h-[115%] w-full object-cover z-0"
        style={{ y: videoY }}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 bg-hero-overlay z-[1]" />

      <p
        aria-hidden="true"
        className="deco-text deco-text--light absolute -left-6 -bottom-2 z-[1] hidden lg:block"
      >
        CLEAN
      </p>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1 }}
        className="absolute bottom-8 right-6 md:right-12 z-[2] hidden md:flex items-center gap-3 text-pearl/60"
      >
        <span className="font-sans uppercase tracking-luxe-md text-[0.65rem]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 2.6 }}
          className="block w-px h-10 bg-gradient-to-b from-gold/80 to-transparent"
        />
      </motion.div>

      <div className="relative z-[2] container-luxe pb-24 md:pb-32">
        <div className="max-w-4xl">
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

          {/* Title — split into words */}
          <h1
            className="font-display font-light text-pearl text-display-xl mb-8"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.45)" }}
          >
            <SplitText text={title} immediate className="block" />
          </h1>

          {/* Gold rule — grows under heading */}
          <motion.span
            variants={heroGoldRule}
            initial="hidden"
            animate="visible"
            className="block h-px w-28 bg-gold/70 mb-8 origin-left"
          />

          {/* Subtitle — fades in after heading */}
          <motion.p
            variants={heroSubtitle}
            initial="hidden"
            animate="visible"
            className="text-pearl/80 text-[1.18rem] md:text-[1.25rem] leading-[1.7] max-w-2xl mb-12"
          >
            {subtitle}
          </motion.p>

          {/* CTA — spring scale 0.8 → 1 after subtitle */}
          {buttonText && buttonLink && (
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
          )}
        </div>
      </div>
    </section>
  );
}
