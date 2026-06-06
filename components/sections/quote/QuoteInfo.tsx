"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/site-data";
import {
  staggerContainer,
  staggerChild,
  widthGrow,
  HOVER_SPRING,
  VIEWPORT_DEFAULTS,
} from "@/components/animations";

function InfoBlock({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={staggerChild}
      className="flex items-start gap-5 py-6 border-b border-pearl/10 last:border-b-0"
    >
      <motion.span
        whileHover={{ scale: 1.08, transition: HOVER_SPRING }}
        className="grid h-10 w-10 place-items-center border border-gold/40 text-gold shrink-0"
      >
        <Icon size={18} strokeWidth={1.5} />
      </motion.span>
      <div className="min-w-0">
        <p className="font-sans uppercase tracking-luxe-md text-[0.65rem] text-gold/80 mb-2">
          {label}
        </p>
        <div className="text-[0.95rem] leading-[1.8] text-pearl/85">{children}</div>
      </div>
    </motion.div>
  );
}

export default function QuoteInfo() {
  return (
    <motion.aside
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_DEFAULTS}
      className="relative bg-onyx text-pearl rounded-luxe p-8 sm:p-10 h-full overflow-hidden"
      style={{ boxShadow: "0 24px 60px -28px rgba(0,0,0,0.45)" }}
    >
      <div className="grain-overlay" />

      <motion.span
        aria-hidden="true"
        variants={widthGrow}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent origin-center"
      />

      <div className="relative">
        <motion.div variants={staggerChild} className="inline-flex items-center gap-3 mb-5">
          <motion.span
            variants={widthGrow}
            className="block h-px w-10 bg-gold origin-left"
          />
          <span className="font-sans uppercase tracking-luxe-md text-[0.7rem] text-gold">
            Direct Lines
          </span>
        </motion.div>
        <motion.h2
          variants={staggerChild}
          className="font-display font-light text-display-sm text-pearl mb-3"
        >
          Contact information
        </motion.h2>
        <motion.p
          variants={staggerChild}
          className="text-[0.92rem] leading-[1.8] text-pearl/55 mb-2"
        >
          We&apos;re here to answer your questions and arrange your service.
        </motion.p>

        <div className="mt-6">
          <InfoBlock icon={Phone} label="Phone">
            {SITE.phones.map((p) => (
              <div key={p.href}>
                <a href={p.href} className="hover:text-gold transition-colors">
                  {p.label}
                </a>
              </div>
            ))}
          </InfoBlock>

          <InfoBlock icon={Mail} label="Email">
            <a href={`mailto:${SITE.email}`} className="hover:text-gold transition-colors">
              {SITE.email}
            </a>
          </InfoBlock>

          <InfoBlock icon={MapPin} label="Address">
            {SITE.address.line1}
            <br />
            {SITE.address.line2}
          </InfoBlock>

          <InfoBlock icon={Clock} label="Working Hours">
            {SITE.hours.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </InfoBlock>
        </div>
      </div>
    </motion.aside>
  );
}
