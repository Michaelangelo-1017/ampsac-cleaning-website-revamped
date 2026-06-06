"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/site-data";
import {
  staggerContainer,
  staggerChild,
  widthGrow,
  VIEWPORT_DEFAULTS,
} from "./animations";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <p className="font-sans uppercase tracking-luxe-md text-[0.7rem] text-gold/90 mb-3">
        {children}
      </p>
      <motion.span
        variants={widthGrow}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_DEFAULTS}
        className="block w-10 h-px bg-gold/40 origin-left"
      />
    </div>
  );
}

function FooterLink({
  href,
  external,
  icon: Icon,
  children,
}: {
  href: string;
  external?: boolean;
  icon?: React.ElementType;
  children: React.ReactNode;
}) {
  const baseClass =
    "group inline-flex items-start gap-3 py-1.5 text-[0.88rem] text-pearl/70 hover:text-gold transition-colors duration-300";
  const content = (
    <>
      {Icon && (
        <Icon size={15} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold/70 group-hover:text-gold transition-colors" />
      )}
      <span>{children}</span>
    </>
  );
  if (external) {
    return (
      <a href={href} className={baseClass} target="_blank" rel="noopener">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={baseClass}>
      {content}
    </Link>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-onyx text-pearl overflow-hidden">
      {/* Gold top border — animated width-grow when scrolled into view */}
      <motion.div
        variants={widthGrow}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_DEFAULTS}
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent origin-center"
      />

      <div className="grain-overlay" />

      <p
        aria-hidden="true"
        className="deco-text deco-text--light absolute -bottom-8 -right-10 hidden md:block"
      >
        AMPSAC
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_DEFAULTS}
        className="relative container-luxe py-20 md:py-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
          {/* Brand */}
          <motion.div variants={staggerChild} className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="AMPSAC City Clean Logo"
                width={56}
                height={56}
                className="h-14 w-auto"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display uppercase tracking-luxe text-pearl text-[1.1rem]">
                  AMPSAC
                </span>
                <span className="mt-1 uppercase tracking-luxe-md text-gold/90 text-[0.6rem]">
                  City Clean
                </span>
              </span>
            </Link>
            <p className="text-[0.92rem] leading-[1.85] text-pearl/60 max-w-sm">
              Professional cleaning services for buildings, offices, shops, hotels, homes, garages, and car parks across the UK.
            </p>
          </motion.div>

          <motion.div variants={staggerChild} className="md:col-span-2 md:border-l md:border-gold/15 md:pl-8">
            <FooterHeading>Navigate</FooterHeading>
            <div className="flex flex-col">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
              <FooterLink href="/quote">Get a Quote</FooterLink>
            </div>
          </motion.div>

          <motion.div variants={staggerChild} className="md:col-span-3 md:border-l md:border-gold/15 md:pl-8">
            <FooterHeading>Services</FooterHeading>
            <div className="flex flex-col">
              <FooterLink href="/services#office">Office Cleaning</FooterLink>
              <FooterLink href="/services#residential">Residential Cleaning</FooterLink>
              <FooterLink href="/services#commercial">Commercial Cleaning</FooterLink>
              <FooterLink href="/services#specialized">Specialized Cleaning</FooterLink>
            </div>
          </motion.div>

          <motion.div variants={staggerChild} className="md:col-span-3 md:border-l md:border-gold/15 md:pl-8">
            <FooterHeading>Contact</FooterHeading>
            <div className="flex flex-col">
              {SITE.phones.map((p) => (
                <FooterLink key={p.href} href={p.href} external icon={Phone}>
                  {p.label}
                </FooterLink>
              ))}
              <FooterLink href={`mailto:${SITE.email}`} external icon={Mail}>
                {SITE.email}
              </FooterLink>
              <FooterLink href="#" external icon={MapPin}>
                {SITE.address.line1} {SITE.address.line2}
              </FooterLink>
            </div>
          </motion.div>
        </div>

        <motion.span
          variants={widthGrow}
          className="divider-gold-faint mt-16 mb-8 origin-center"
        />

        <motion.div variants={staggerChild} className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="text-xs tracking-wide text-pearl/40">
            © {year} {SITE.legalName}. All rights reserved.
          </p>
          <p className="text-xs tracking-wide text-pearl/40">
            Powered by{" "}
            <a
              href="https://michaelangelo-digital.co.uk/"
              target="_blank"
              rel="noopener"
              className="text-gold/80 hover:text-gold transition-colors"
            >
              Michaelangelo Digital
            </a>
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
