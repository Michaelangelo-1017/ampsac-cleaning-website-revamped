"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { HOVER_SPRING } from "./animations";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-[1000]"
        >
          <motion.button
            type="button"
            aria-label="Scroll back to top"
            whileHover={{ scale: 1.06, y: -3, transition: HOVER_SPRING }}
            whileTap={{ scale: 0.94 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="grid h-12 w-12 place-items-center rounded-luxe border border-gold/70 bg-onyx/85 backdrop-blur-md text-gold hover:bg-gold hover:text-onyx transition-colors duration-300"
          >
            <ArrowUp size={20} strokeWidth={1.5} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
