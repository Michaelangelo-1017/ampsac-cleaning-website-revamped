import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingScreen from "@/components/LoadingScreen";
import PageTransition from "@/components/PageTransition";
import { SITE } from "@/lib/site-data";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "AMPSAC City Clean | Professional Cleaning Services UK",
    template: "%s | AMPSAC City Clean",
  },
  description:
    "AMPSAC City Clean - Professional cleaning services for homes, offices, and commercial spaces in the UK. Expert cleaners delivering exceptional results.",
  keywords: [
    "cleaning services",
    "office cleaning",
    "home cleaning",
    "commercial cleaning",
    "professional cleaners",
    "UK cleaning company",
    "AMPSAC City Clean",
  ],
  authors: [{ name: "AMPSAC City Clean Limited" }],
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    url: SITE.domain,
    siteName: "AMPSAC City Clean",
    title: "AMPSAC City Clean | Professional Cleaning Services UK",
    description:
      "Expert cleaning solutions for homes, offices, and commercial spaces across the UK. Contact us today for a free quote.",
    images: [
      {
        url: "/images/social/social-preview.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "AMPSAC City Clean Professional Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AMPSAC City Clean | Professional Cleaning Services UK",
    description:
      "Expert cleaning solutions for homes, offices, and commercial spaces across the UK. Contact us today for a free quote.",
    images: ["/images/social/social-preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <head>
        <link
          rel="preload"
          fetchPriority="high"
          as="image"
          href="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        />
        <link rel="preload" as="image" href="/logo.png" />
      </head>
      <body className="flex min-h-screen flex-col">
        <LoadingScreen />
        <Header />
        <main className="flex-1 flex flex-col">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
