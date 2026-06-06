import type { Metadata } from "next";
import QuoteHero from "@/components/sections/quote/QuoteHero";
import QuoteForm from "@/components/sections/quote/QuoteForm";
import QuoteInfo from "@/components/sections/quote/QuoteInfo";
import QuoteMap from "@/components/sections/quote/QuoteMap";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with AMPSAC City Clean for professional cleaning services. Request a quote, ask questions, or schedule a cleaning appointment today.",
  keywords:
    "contact cleaning company, cleaning services quote, professional cleaners contact, UK cleaning company, AMPSAC contact",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact AMPSAC City Clean | Professional Cleaning Services",
    images: ["/images/social/twitter-card.jpg"],
  },
  twitter: { images: ["/images/social/twitter-card.jpg"] },
};

export default function QuotePage() {
  return (
    <>
      <QuoteHero />
      <section className="bg-pearl section-pad">
        <div className="container-luxe">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-7">
              <QuoteForm />
            </div>
            <div className="lg:col-span-5">
              <QuoteInfo />
            </div>
          </div>
        </div>
      </section>
      <QuoteMap />
    </>
  );
}
