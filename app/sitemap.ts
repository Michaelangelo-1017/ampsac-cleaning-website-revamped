import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.domain;
  const lastModified = new Date("2025-04-25");
  return [
    { url: `${base}/`,         lastModified, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`,    lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`,  lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/quote`,    lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
