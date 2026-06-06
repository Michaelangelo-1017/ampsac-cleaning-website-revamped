"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { headerSlideDown, HOVER_SPRING } from "./animations";

function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

function Logo({ scrolled, size = "lg" }: { scrolled: boolean; size?: "lg" | "sm" }) {
  const h = size === "lg" ? (scrolled ? "h-12" : "h-14") : "h-9";
  return (
    <motion.div
      whileHover={{ scale: 1.03, transition: HOVER_SPRING }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
    <Link
      href="/"
      aria-label="AMPSAC City Clean — Home"
      className="group inline-flex items-center gap-3 rounded-luxe focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
    >
      <Image
        src="/logo.png"
        alt="AMPSAC City Clean Logo"
        width={64}
        height={64}
        priority
        className={cn("transition-all duration-500 w-auto", h)}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display font-medium tracking-luxe uppercase transition-colors duration-300",
            size === "lg" ? "text-[1.05rem]" : "text-[0.9rem]",
            "text-pearl group-hover:text-gold"
          )}
        >
          AMPSAC
        </span>
        <span
          className={cn(
            "mt-1 font-sans uppercase tracking-luxe-md transition-colors duration-300",
            size === "lg" ? "text-[0.62rem]" : "text-[0.55rem]",
            "text-gold/90"
          )}
        >
          City Clean
        </span>
      </span>
    </Link>
    </motion.div>
  );
}

export default function Header() {
  const scrolled = useScrolled(40);
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <>
      <motion.header
        variants={headerSlideDown}
        initial="hidden"
        animate="visible"
        className={cn(
          "fixed left-0 top-0 z-[1100] w-full flex items-center justify-center",
          "transition-all duration-500 ease-out",
          scrolled
            ? "h-[80px] bg-onyx/95 backdrop-blur-md border-b border-gold/20 shadow-card-luxe"
            : "h-[110px] bg-transparent border-b border-transparent"
        )}
      >
        <div className="container-luxe-wide flex w-full items-center">
          {/* Desktop logo */}
          <div className="hidden md:flex mr-8">
            <Logo scrolled={scrolled} />
          </div>

          {/* Mobile burger + centred logo */}
          <div className="flex flex-1 items-center md:hidden">
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setDrawerOpen(true)}
              className="p-2 -ml-2 rounded-luxe text-pearl hover:text-gold transition-colors"
            >
              <Menu size={26} strokeWidth={1.5} />
            </button>
            <div className="flex flex-1 justify-center">
              <Logo scrolled={scrolled} />
            </div>
            <div className="w-[44px]" />
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex flex-1 items-center justify-end gap-1">
            {NAV.map((page) => {
              const isActive = pathname === page.path;
              return (
                <Link
                  key={page.path}
                  href={page.path}
                  data-active={isActive}
                  className={cn(
                    "nav-underline mx-4 font-sans uppercase tracking-luxe text-[0.74rem] font-medium",
                    isActive ? "text-gold" : "text-pearl hover:text-gold"
                  )}
                >
                  {page.title}
                </Link>
              );
            })}
            <motion.div
              whileHover={{ scale: 1.03, transition: HOVER_SPRING }}
              whileTap={{ scale: 0.98 }}
              className="inline-block ml-6"
            >
              <Link
                href="/quote"
                className="btn-luxe-outline btn-size-md"
              >
                Get a Quote
              </Link>
            </motion.div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 z-[1200] bg-onyx/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
            />
            <motion.aside
              key="drawer"
              className="fixed left-0 top-0 z-[1300] h-full w-[300px] bg-onyx border-r border-gold/20 flex flex-col"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
                className="absolute top-4 right-4 p-2 rounded-luxe text-pearl/70 hover:text-gold transition-colors"
              >
                <X size={22} strokeWidth={1.5} />
              </button>

              <div className="px-8 pt-10 pb-8 border-b border-gold/15">
                <Link
                  href="/"
                  aria-label="AMPSAC City Clean — Home"
                  onClick={() => setDrawerOpen(false)}
                  className="inline-flex items-center gap-3"
                >
                  <Image
                    src="/logo.png"
                    alt="AMPSAC City Clean Logo"
                    width={40}
                    height={40}
                    className="h-10 w-auto"
                  />
                  <span className="flex flex-col leading-none">
                    <span className="font-display uppercase tracking-luxe text-pearl text-[0.95rem]">
                      AMPSAC
                    </span>
                    <span className="mt-1 uppercase tracking-luxe-md text-gold/90 text-[0.55rem]">
                      City Clean
                    </span>
                  </span>
                </Link>
              </div>

              <nav className="flex-1 px-8 py-8">
                <ul className="flex flex-col gap-1">
                  {NAV.map((page, i) => {
                    const isActive = pathname === page.path;
                    return (
                      <motion.li
                        key={page.path}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                      >
                        <Link
                          href={page.path}
                          onClick={() => setDrawerOpen(false)}
                          className={cn(
                            "block py-3 font-sans uppercase tracking-luxe text-[0.78rem] transition-colors border-b border-pearl/5",
                            isActive
                              ? "text-gold"
                              : "text-pearl hover:text-gold"
                          )}
                        >
                          {page.title}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              <div className="px-8 pb-10">
                <motion.div
                  whileHover={{ scale: 1.03, transition: HOVER_SPRING }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/quote"
                    onClick={() => setDrawerOpen(false)}
                    className="btn-luxe-outline btn-size-md w-full"
                  >
                    Get a Quote
                  </Link>
                </motion.div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
