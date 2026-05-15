"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { TEAM } from "@/lib/site-data";
import {
  staggerContainer,
  staggerChild,
  clipReveal,
  cardHoverLift,
  VIEWPORT_DEFAULTS,
} from "@/components/animations";

export default function AboutTeamSection() {
  return (
    <section className="relative bg-onyx text-pearl section-pad overflow-hidden">
      <div className="grain-overlay" />
      <p
        aria-hidden="true"
        className="deco-text deco-text--light absolute -bottom-8 -left-10 hidden lg:block"
      >
        TEAM
      </p>

      <div className="relative container-luxe">
        <SectionTitle
          eyebrow="Leadership"
          title="Meet our team"
          subtitle="The dedicated professionals behind AMPSAC City Clean's success."
          invert
          className="mb-20 md:mb-24"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULTS}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14"
        >
          {TEAM.map((member) => (
            <motion.div
              key={member.name}
              variants={staggerChild}
              whileHover={cardHoverLift}
              className="group"
            >
              {/* Gold-framed portrait with clip-path reveal */}
              <div className="relative px-4 pt-4 pb-2">
                <motion.div
                  variants={clipReveal}
                  className="gold-frame relative aspect-[4/5] overflow-hidden rounded-luxe"
                >
                  <div className="gold-tint-on-hover h-full w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                </motion.div>
              </div>

              <div className="mt-10 px-4 text-center">
                <p className="font-sans uppercase tracking-luxe-md text-[0.65rem] text-gold mb-3">
                  {member.position}
                </p>
                <h3 className="font-display font-light text-[1.6rem] leading-tight text-pearl mb-4">
                  {member.name}
                </h3>
                <span className="block h-px w-12 bg-gold/60 mx-auto mb-4" />
                <p className="text-[0.92rem] leading-[1.85] text-pearl/65">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
