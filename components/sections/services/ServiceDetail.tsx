"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  staggerContainer,
  staggerChild,
  clipReveal,
  widthGrow,
  VIEWPORT_DEFAULTS,
} from "@/components/animations";

interface ServiceDetailProps {
  id: string;
  title: string;
  description: string;
  features: readonly string[];
  image: string;
  index: number;
}

export default function ServiceDetail({
  id,
  title,
  description,
  features,
  image,
  index,
}: ServiceDetailProps) {
  const isDark = index % 2 === 0;
  const reverse = index % 2 !== 0;

  const sectionCls = isDark
    ? "bg-onyx text-pearl"
    : "bg-pearl text-onyx";
  const bodyCls  = isDark ? "text-pearl/65" : "text-onyx/65";
  const titleCls = isDark ? "text-pearl"    : "text-onyx";

  return (
    <section
      id={id}
      className={cn("relative section-pad overflow-hidden scroll-mt-28 pb-200px", sectionCls)}
    >
      {isDark && <div className="grain-overlay" />}

      <p
        aria-hidden="true"
        className={cn(
          "deco-text absolute -top-10 hidden lg:block",
          reverse ? "-right-10" : "-left-10",
          isDark ? "deco-text--light" : "deco-text--dark"
        )}
      >
        0{index + 1}
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_DEFAULTS}
        className="relative container-luxe"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            variants={staggerChild}
            className={cn("lg:col-span-7 relative", reverse && "lg:order-2")}
          >
            <span
              aria-hidden="true"
              className={cn(
                "absolute hidden md:block border border-gold/30 w-2/3 h-2/3",
                reverse ? "-top-6 -left-6" : "-top-6 -right-6"
              )}
            />
            <motion.div
              variants={clipReveal}
              className="relative aspect-[16/11] overflow-hidden rounded-luxe"
            >
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-[1500ms] ease-out hover:scale-[1.03]"
              />
              <div className={cn("absolute inset-0 bg-gradient-to-t to-transparent", isDark ? "from-onyx/40" : "from-onyx/15")} />
            </motion.div>
          </motion.div>

          {/* Copy */}
          <div className="lg:col-span-5">
            <motion.p
              variants={staggerChild}
              className="font-sans uppercase tracking-luxe-md text-[0.7rem] mb-4 text-gold"
            >
              Service No. {String(index + 1).padStart(2, "0")}
            </motion.p>
            <motion.h2
              variants={staggerChild}
              className={cn("font-display font-light text-display-md mb-6", titleCls)}
            >
              {title}
            </motion.h2>
            <motion.span
              variants={widthGrow}
              className="block h-px w-16 bg-gold/70 mb-6 origin-left"
            />
            <motion.p
              variants={staggerChild}
              className={cn("text-[1rem] leading-[1.9] mb-10", bodyCls)}
            >
              {description}
            </motion.p>

            <motion.p
              variants={staggerChild}
              className="font-sans uppercase tracking-luxe text-[0.65rem] text-gold mb-4"
            >
              What&apos;s included
            </motion.p>
            <motion.ul
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-10"
            >
              {features.map((feature) => (
                <motion.li
                  key={feature}
                  variants={staggerChild}
                  className="flex items-start gap-3 text-[0.92rem]"
                >
                  <Check size={16} strokeWidth={1.5} className="mt-1 shrink-0 text-gold" />
                  <span className={isDark ? "text-pearl/80" : "text-onyx/80"}>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={staggerChild}>
              <Link
                href="/contact"
                className="group/cta inline-flex items-center gap-3 font-sans uppercase tracking-luxe text-[0.78rem] text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors"
              >
                Request a Quote
                <ArrowUpRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
