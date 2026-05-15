"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { HOME_SERVICES } from "@/lib/site-data";
import {
  staggerContainer,
  staggerChild,
  clipReveal,
  widthGrow,
  VIEWPORT_DEFAULTS,
} from "@/components/animations";

export default function HomeServicesSection() {
  return (
    <section className="relative bg-onyx text-pearl section-pad overflow-hidden">
      <div className="grain-overlay" />
      <p
        aria-hidden="true"
        className="deco-text deco-text--light absolute -bottom-10 -left-12 hidden lg:block"
      >
        PREMIUM
      </p>

      <div className="relative container-luxe-wide">
        <SectionTitle
          eyebrow="Our Expertise"
          title="Services we offer"
          subtitle="AMPSAC City Clean provides specialised cleaning solutions for every environment. Our dedicated team delivers exceptional results tailored to your specific needs."
          invert
          className="mb-20 md:mb-28"
        />

        <div className="flex flex-col gap-16 md:gap-24">
          {HOME_SERVICES.map((service, index) => {
            const reverse = index % 2 !== 0;
            return (
              <motion.article
                key={service.id}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_DEFAULTS}
                className="group"
              >
                <div
                  className={
                    "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center" +
                    (reverse ? " lg:[&>*:first-child]:order-2" : "")
                  }
                >
                  {/* Image with clip-path reveal */}
                  <motion.div variants={staggerChild} className="lg:col-span-7 relative">
                    <motion.span
                      aria-hidden="true"
                      variants={staggerChild}
                      className="absolute -top-6 left-0 font-display text-[5rem] leading-none text-gold/30 z-10"
                    >
                      0{service.id}
                    </motion.span>
                    <motion.div
                      variants={clipReveal}
                      className="relative aspect-[16/10] overflow-hidden rounded-luxe gold-tint-on-hover"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-onyx/60 via-onyx/10 to-transparent" />
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <motion.div variants={staggerChild} className="lg:col-span-5">
                    <motion.p
                      variants={staggerChild}
                      className="font-sans uppercase tracking-luxe-md text-[0.65rem] text-gold/80 mb-4"
                    >
                      {service.subtitle}
                    </motion.p>
                    <motion.h3
                      variants={staggerChild}
                      className="font-display font-light text-display-md text-pearl mb-6"
                    >
                      {service.title}
                    </motion.h3>
                    <motion.span
                      variants={widthGrow}
                      className="block h-px w-16 bg-gold/70 mb-6 origin-left"
                    />
                    <motion.p
                      variants={staggerChild}
                      className="text-[1rem] leading-[1.9] text-pearl/65 mb-8"
                    >
                      {service.description}
                    </motion.p>

                    <motion.p
                      variants={staggerChild}
                      className="font-sans uppercase tracking-luxe text-[0.65rem] text-gold/80 mb-4"
                    >
                      What&apos;s included
                    </motion.p>
                    <motion.ul
                      variants={staggerContainer}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6 mb-10"
                    >
                      {service.features.map((feature) => (
                        <motion.li
                          key={feature}
                          variants={staggerChild}
                          className="flex items-center gap-3 text-[0.92rem] text-pearl/75"
                        >
                          <span className="block w-1 h-1 bg-gold rounded-full shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </motion.ul>

                    <motion.div variants={staggerChild}>
                      <Link
                        href={service.link}
                        className="group/cta inline-flex items-center gap-3 font-sans uppercase tracking-luxe text-[0.78rem] text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors"
                      >
                        Explore {service.title}
                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.5}
                          className="transition-transform duration-300 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1"
                        />
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>

                {index < HOME_SERVICES.length - 1 && (
                  <motion.span
                    variants={widthGrow}
                    className="divider-gold-faint mt-16 md:mt-24 origin-center"
                  />
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
