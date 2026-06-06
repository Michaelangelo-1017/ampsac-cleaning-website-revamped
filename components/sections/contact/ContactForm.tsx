"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerChild,
  widthGrow,
  VIEWPORT_DEFAULTS,
  LUXE_EASE,
} from "@/components/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const N8N_WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_CONTACT_WEBHOOK_URL ?? "";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!N8N_WEBHOOK_URL) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_DEFAULTS}
      className="relative bg-white border border-onyx/5 rounded-luxe p-8 sm:p-12"
      style={{ boxShadow: "0 24px 60px -28px rgba(0,0,0,0.18)" }}
    >
      {/* Animated gold accent — grows from center */}
      <motion.span
        aria-hidden="true"
        variants={widthGrow}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent origin-center"
      />

      <div className="mb-10">
        <motion.div variants={staggerChild} className="inline-flex items-center gap-3 mb-5">
          <motion.span
            variants={widthGrow}
            className="block h-px w-10 bg-gold origin-left"
          />
          <span className="font-sans uppercase tracking-luxe-md text-[0.7rem] text-gold">
            Send a Message
          </span>
        </motion.div>
        <motion.h2
          variants={staggerChild}
          className="font-display font-light text-display-sm text-onyx mb-4"
        >
          Get in touch
        </motion.h2>
        <motion.p
          variants={staggerChild}
          className="text-[0.98rem] leading-[1.85] text-onyx/60 max-w-md"
        >
          Fill in the form below and we&apos;ll get back to you within 24 hours.
        </motion.p>
      </div>

      <motion.span variants={widthGrow} className="divider-gold-faint mb-10 origin-center" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_DEFAULTS}
        transition={{ duration: 0.8, delay: 0.4, ease: LUXE_EASE }}
      >
        {status === "success" ? (
          <p className="text-[0.98rem] leading-[1.85] text-onyx/80">
            Thanks! We&apos;ll be in touch shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="contact-name">Full Name</Label>
              <Input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, name: event.target.value }))
                }
                disabled={status === "loading"}
                placeholder="Your full name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-email">Email Address</Label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, email: event.target.value }))
                }
                disabled={status === "loading"}
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-phone">Phone Number</Label>
              <Input
                id="contact-phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, phone: event.target.value }))
                }
                disabled={status === "loading"}
                placeholder="+44 7700 000000"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-message">Message / Notes</Label>
              <Textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, message: event.target.value }))
                }
                disabled={status === "loading"}
                placeholder="Tell us how we can help (optional)"
              />
            </div>

            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Send Message"}
            </Button>

            {status === "error" && (
              <p className="text-sm text-red-600" role="alert">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}
