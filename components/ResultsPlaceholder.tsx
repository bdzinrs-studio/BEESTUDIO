"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, ArrowUpRight, MessageSquare, Sparkles } from "lucide-react";
import { getWhatsAppLink } from "@/lib/siteConfig";

export default function ResultsPlaceholder() {
  const whatsappUrl = getWhatsAppLink(
    "Hi Bee, I saw your founding client invitation. I'd like to discuss an AI automation for my business."
  );

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="bg-brand-cream border-2 border-dashed border-orange-300 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
        >
          {/* Subtle Orange Glow in Background */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-orange-200/50 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-orange-200/50 rounded-full blur-2xl pointer-events-none" />

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-orange-200 text-xs font-semibold uppercase tracking-wider text-neutral-800 mb-6 shadow-sm">
            <Clock className="w-3.5 h-3.5 text-brand-orange" />
            <span>Honest Agency Transparency</span>
          </div>

          <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-black tracking-tight mb-4">
            Results Coming Soon. We&apos;re Taking On Our First Clients.
          </h3>

          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-8">
            We are a brand-new agency, and that means your project gets my full, undivided attention. No junior interns, no pre-baked templates. As we build and deploy our first automations, real client case studies and verified performance data will be published right here.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-heading font-bold text-sm bg-brand-orange text-brand-black hover:bg-brand-orangeLight shadow-orange-soft hover:shadow-orange-glow transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              id="founding-client-cta"
            >
              <Sparkles className="w-4 h-4 text-brand-black" />
              <span>Claim a Founding Client Spot</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="text-xs text-neutral-500 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Direct 1-on-1 collaboration with Bee</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
