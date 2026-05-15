"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LUXE_EASE } from "./animations";

const SESSION_KEY = "ampsac-session-loaded";
const HOLD_MS = 800;

export default function LoadingScreen() {
  // SSR-safe: render nothing on the server, decide on the client.
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const alreadySeen = sessionStorage.getItem(SESSION_KEY);
    if (alreadySeen) return; // Skip on subsequent navigations within the session

    setShow(true);
    document.body.style.overflow = "hidden";

    const t = window.setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "1");
      setShow(false);
      document.body.style.overflow = "";
    }, HOLD_MS);

    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: LUXE_EASE }}
          className="fixed inset-0 z-[9999] bg-onyx flex items-center justify-center"
          aria-hidden="true"
        >
          {/* Subtle grain overlay to match dark sections */}
          <div className="grain-overlay" />

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="relative text-center"
          >
            <span className="block font-display font-light text-[6.5rem] md:text-[8.5rem] leading-none text-gold">
              AC
            </span>

            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, ease: LUXE_EASE, delay: 0.25 }}
              className="block h-px w-24 bg-gold/70 mx-auto mt-6 origin-center"
            />

            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: LUXE_EASE, delay: 0.45 }}
              className="block font-sans uppercase tracking-luxe-md text-[0.65rem] text-gold/80 mt-6"
            >
              AMPSAC City Clean
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
