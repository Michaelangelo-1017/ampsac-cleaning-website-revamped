"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { pageTransition } from "./animations";

/**
 * Wraps page content in an AnimatePresence keyed by the pathname so route
 * changes glide between a subtle fade-out and fade-in. mode="wait" ensures the
 * exiting page completes before the entering page mounts.
 *
 * Notes:
 *  - Used inside the body of app/layout.tsx, OUTSIDE of Header/Footer so the
 *    chrome stays put across routes.
 *  - initial={false} prevents the entrance animation from running on the very
 *    first page load (the LoadingScreen handles the first-load polish instead).
 */
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
        className="flex-1 flex flex-col"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
