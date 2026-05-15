"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Reproduces the original `useHashNavigation` hook: when the URL contains a
 * `#hash`, smooth-scroll to that element 300ms after the page renders so
 * lazy-loaded sections have time to mount.
 */
export default function HashScroller() {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.location.hash) return;
    const id = window.location.hash.substring(1);
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
    return () => clearTimeout(t);
  }, [pathname]);
  return null;
}
