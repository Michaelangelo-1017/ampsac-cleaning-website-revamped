"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/site-data";
import {
  staggerContainer,
  staggerChild,
  widthGrow,
  VIEWPORT_DEFAULTS,
  LUXE_EASE,
} from "@/components/animations";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

export default function QuoteForm() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://tally.so/widgets/embed.js"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://tally.so/widgets/embed.js";
      script.onload = () => {
        if (window.Tally) window.Tally.loadEmbeds();
      };
      document.body.appendChild(script);
    } else {
      if (window.Tally) window.Tally.loadEmbeds();
    }
  }, []);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_DEFAULTS}
      className="relative bg-white border border-onyx/5 rounded-luxe p-8 sm:p-12"
      style={{ boxShadow: "0 24px 60px -28px rgba(0,0,0,0.18)" }}
    >
      {/* Animated gold accent — grows from center */}
      <motion.span
        aria-hidden="true"
        variants={widthGrow}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent origin-center"
      />

      <div className="mb-10">
        <motion.div variants={staggerChild} className="inline-flex items-center gap-3 mb-5">
          <motion.span
            variants={widthGrow}
            className="block h-px w-10 bg-gold origin-left"
          />
          <span className="font-sans uppercase tracking-luxe-md text-[0.7rem] text-gold">
            Send a Message
          </span>
        </motion.div>
        <motion.h2
          variants={staggerChild}
          className="font-display font-light text-display-sm text-onyx mb-4"
        >
          Get in touch
        </motion.h2>
        <motion.p
          variants={staggerChild}
          className="text-[0.98rem] leading-[1.85] text-onyx/60 max-w-md"
        >
          Fill in the form below and we&apos;ll get back to you within 24 hours.
        </motion.p>
      </div>

      <motion.span variants={widthGrow} className="divider-gold-faint mb-10 origin-center" />

      {/* Tally iframe — wrapper fades & slides in, iframe interior managed by Tally. */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_DEFAULTS}
        transition={{ duration: 0.8, delay: 0.4, ease: LUXE_EASE }}
      >
        <iframe
          data-tally-src={SITE.tally.src}
          loading="lazy"
          width="100%"
          height={SITE.tally.height}
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title={SITE.tally.title}
        />
      </motion.div>
    </motion.div>
  );
}
