import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ────────────────────────────────────────────────────────────────
        // Brand
        gold: {
          DEFAULT: "#D4AF37",
          muted:   "#B8960C",
          tint:    "#FDF8ED",
        },
        green: {
          DEFAULT: "#2E7D32",
        },

        // Luxury neutrals
        onyx:  "#0A0A0A", // deep black — primary dark background
        jet:   "#1A1A1A", // warm dark grey — cards / secondary dark sections
        pearl: "#F8F6F1", // off-white — primary light background

        // Semantic helpers (used by older components; map to luxe palette)
        ink: {
          primary:   "#0A0A0A",
          secondary: "#525252", // neutral-600 — for body copy on light bg
          muted:     "#A3A3A3",
        },
        surface: {
          DEFAULT: "#F8F6F1",
          paper:   "#FFFFFF",
          dark:    "#0A0A0A",
          card:    "#1A1A1A",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans:    ["var(--font-inter)",    "Inter", "system-ui", "-apple-system", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        // Editorial scale — Playfair Display feels best at large sizes
        "display-xl": ["clamp(3.5rem, 8vw, 6.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em", fontWeight: "400" }],
        "display-lg": ["clamp(2.75rem, 6vw, 5rem)",  { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "400" }],
        "display-md": ["clamp(2.25rem, 4.5vw, 3.5rem)",  { lineHeight: "1.1",  letterSpacing: "-0.015em", fontWeight: "400" }],
        "display-sm": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "500" }],
        // Eyebrow / label
        "eyebrow":    ["0.75rem",  { lineHeight: "1.5", letterSpacing: "0.28em", fontWeight: "500" }],
        "eyebrow-sm": ["0.7rem",   { lineHeight: "1.5", letterSpacing: "0.3em",  fontWeight: "500" }],
      },
      letterSpacing: {
        "luxe":     "0.18em",
        "luxe-md":  "0.22em",
        "luxe-lg":  "0.28em",
      },
      borderRadius: {
        // Sharp corners by default for a luxe feel
        "luxe":   "2px",
        "luxe-md":"4px",
        "luxe-lg":"6px",
      },
      boxShadow: {
        "gold-soft":  "0 10px 40px -10px rgba(212,175,55,0.18)",
        "gold-glow":  "0 14px 50px -8px rgba(212,175,55,0.30)",
        "gold-hover": "0 18px 60px -10px rgba(212,175,55,0.35)",
        "card-luxe":  "0 12px 40px -12px rgba(0,0,0,0.50)",
        "lift":       "0 24px 60px -18px rgba(0,0,0,0.45)",
      },
      backgroundImage: {
        "hero-overlay":      "linear-gradient(to bottom, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.40) 100%)",
        "hero-overlay-deep": "linear-gradient(to bottom, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.55) 100%)",
        "gold-gradient":     "linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)",
        "gold-rule":         "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.6) 50%, transparent 100%)",
        // SVG noise for grain texture overlay on dark sections
        "grain": "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
      },
      maxWidth: {
        "8xl": "1440px",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
