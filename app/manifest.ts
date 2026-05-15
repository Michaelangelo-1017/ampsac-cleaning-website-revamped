import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AMPSAC City Clean | Professional Cleaning Services",
    short_name: "AMPSAC Clean",
    start_url: "/",
    display: "standalone",
    theme_color: "#0077B6",
    background_color: "#ffffff",
    icons: [
      { src: "/logo.png", sizes: "64x64 32x32 24x24 16x16", type: "image/png" },
      { src: "/logo.png", sizes: "192x192", type: "image/png" },
      { src: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
