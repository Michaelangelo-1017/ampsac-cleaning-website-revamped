import type { Metadata } from "next";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import ContactMap from "@/components/sections/contact/ContactMap";

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

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="bg-pearl section-pad">
        <div className="container-luxe">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      <ContactMap />
    </>
  );
}
