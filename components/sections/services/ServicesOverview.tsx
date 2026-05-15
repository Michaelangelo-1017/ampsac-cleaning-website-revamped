"use client";

import { motion } from "framer-motion";
import { Briefcase, Home, Store, ParkingSquare } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { SERVICE_DETAILS } from "@/lib/site-data";
import {
  cardSpringIn,
  cardHoverLift,
  VIEWPORT_DEFAULTS,
} from "@/components/animations";

const iconFor = (name: string) => {
  switch (name) {
    case "office":      return Briefcase;
    case "residential": return Home;
    case "commercial":  return Store;
    case "specialized": return ParkingSquare;
    default:            return Briefcase;
  }
};

export default function ServicesOverview() {
  return (
    <section className="relative bg-pearl text-onyx section-pad overflow-hidden">
      <p
        aria-hidden="true"
        className="deco-text deco-text--dark absolute -top-8 -right-12 hidden lg:block"
      >
        EXPERTISE
      </p>

      <div className="relative container-luxe">
        <SectionTitle
          eyebrow="Our Disciplines"
          title="Services we offer"
          subtitle="At AMPSAC City Clean, we provide a wide range of cleaning services to meet the unique needs of our clients. From regular maintenance to specialised cleaning, our professional team delivers exceptional results."
          className="mb-20 md:mb-28"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SERVICE_DETAILS.map((service, index) => {
            const Icon = iconFor(service.iconName);
            return (
              <motion.a
                key={service.id}
                href={`#${service.id}`}
                variants={cardSpringIn}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_DEFAULTS}
                whileHover={cardHoverLift}
                transition={{ delay: index * 0.08 }}
                className="luxe-card block p-8 md:p-10"
              >
                <span
                  aria-hidden="true"
                  className="block font-display text-[3rem] leading-none text-gold/30 mb-8"
                >
                  0{index + 1}
                </span>
                <div className="mb-6 inline-grid h-12 w-12 place-items-center border border-gold/40 text-gold transition-colors duration-300 group-hover:border-gold">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-light text-[1.6rem] leading-tight text-pearl mb-4">
                  {service.title}
                </h3>
                <span className="block h-px w-10 bg-gold/50 mb-4" />
                <p className="text-[0.92rem] leading-[1.85] text-pearl/65">
                  {service.description.substring(0, 110)}…
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
