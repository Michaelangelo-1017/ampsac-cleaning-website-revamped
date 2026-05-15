"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/site-data";
import { widthGrow, VIEWPORT_DEFAULTS } from "@/components/animations";

export default function ContactMap() {
  return (
    <section className="relative bg-onyx">
      {/* Top gold divider — animated width-grow when in view */}
      <motion.span
        aria-hidden="true"
        variants={widthGrow}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_DEFAULTS}
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent z-10 origin-center"
      />
      <div className="relative h-[500px] w-full grayscale-[40%] contrast-[1.05]">
        <iframe
          src={SITE.mapEmbed}
          width="100%"
          height="100%"
          style={{ border: 0, filter: "saturate(0.75)" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="AMPSAC City Clean Location"
        />
      </div>
    </section>
  );
}
