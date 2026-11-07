"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Mail, ArrowUpRight, Sparkles } from "lucide-react";
import { siteConfig, getWhatsAppLink, getMailtoLink } from "@/lib/siteConfig";

export default function CTA() {
  const whatsappUrl = getWhatsAppLink();
  const mailtoUrl = getMailtoLink();

  return (
    <section className="py-20 lg:py-28 bg-brand-black text-white relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-orange/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-brand-orangeLight/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-700/80 mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
          <span className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
            Direct Founder Consultation
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-6"
        >
          Ready to Stop Losing Leads to <span className="text-brand-orange">Voicemail</span>?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Book a 15-minute AI audit with us. We will inspect your current phone response time, map out your highest-leakage bottleneck, and show you exactly what to automate.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
        >
          {/* Primary Solid Orange Button (Dark text for AAA WCAG contrast) */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-heading font-bold text-base bg-brand-orange text-brand-black hover:bg-brand-orangeLight shadow-orange-glow transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            id="cta-band-audit-btn"
          >
            <MessageSquare className="w-5 h-5 text-brand-black fill-brand-black/20" />
            <span>Book An AI Audit</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Email Button */}
          <a
            href={mailtoUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-heading font-semibold text-base bg-neutral-900 border border-neutral-700 hover:border-neutral-500 text-white hover:text-brand-orange transition-all duration-200"
            id="cta-band-email-btn"
          >
            <Mail className="w-5 h-5 text-brand-orange" />
            <span>Email Bee Directly</span>
          </a>
        </motion.div>

        {/* Supporting Assurance */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xs text-neutral-400 mt-6"
        >
          Zero pressure. No sales pitch. Direct answers from an engineer.
        </motion.p>

      </div>
    </section>
  );
}
