"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wrench, Droplet, Sparkles, Home, Smile, ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/lib/siteConfig";

interface IndustryItem {
  name: string;
  icon: React.ElementType;
  painPoint: string;
  automation: string;
  tag: string;
}

const industries: IndustryItem[] = [
  {
    name: "HVAC Contractors",
    icon: Wrench,
    painPoint: "Technicians in attics and crawlspaces can't pick up ringing phones, losing emergency furnace and AC replacements to the next Google result.",
    automation: "Instant missed-call SMS triage that asks what system is broken, collects address details, and books a service dispatch slot.",
    tag: "Missed Call Text-Back",
  },
  {
    name: "Plumbing Services",
    icon: Droplet,
    painPoint: "Emergency burst pipes and drain backup calls after 6 PM go straight to voicemail while homeowners frantically call competitors.",
    automation: "24/7 AI emergency intake that qualifies caller severity, dispatches on-call alerts, and locks in the service call instantly.",
    tag: "24/7 Emergency Capture",
  },
  {
    name: "Med Spas & Aesthetics",
    icon: Sparkles,
    painPoint: "Inquiries from social ads sit unanswered for hours while potential clients reconsider high-ticket cosmetic treatments.",
    automation: "Speed-to-lead booking bot that texts new inquiries within 30 seconds, answers treatment FAQs, and syncs consultations to your calendar.",
    tag: "Consultation Booking & Reactivation",
  },
  {
    name: "Roofing Companies",
    icon: Home,
    painPoint: "Thousands of dollars in drone inspections and roofing estimates go cold because estimators don't have time for 5+ follow-up calls.",
    automation: "Automated estimate chaser workflows that check in on quotes, answer financing questions, and re-engage dormant roof bids.",
    tag: "Estimate Chaser Workflows",
  },
  {
    name: "Dental Practices",
    icon: Smile,
    painPoint: "Front desk staff are overwhelmed checking in patients, letting new implant inquiries and overdue 6-month hygiene recalls slip away.",
    automation: "Automated patient intake, instant appointment rescheduling via text, and proactive patient hygiene recall campaigns.",
    tag: "Patient Inquiry & Recall Loops",
  },
];

export default function WhoWeServe() {
  const whatsappUrl = getWhatsAppLink();

  return (
    <section id="who-we-serve" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cream border border-orange-200 text-xs font-semibold uppercase tracking-wider text-neutral-800 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
            Who We Serve
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-brand-black tracking-tight leading-tight mb-4">
            Tailored For <span className="text-brand-orange">High-Ticket</span> Local Services
          </h2>
          <p className="text-base sm:text-lg text-neutral-600">
            We don&apos;t build generic chatbots. We build focused, industry-tested automations designed for the exact operational bottlenecks of 5 key trades.
          </p>
        </div>

        {/* 5 Industry Cards — Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((ind, index) => {
            const IconComponent = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-7 border border-neutral-200 hover:border-brand-orange/60 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  {/* Top Bar with Icon and Tag */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-cream border border-orange-200 flex items-center justify-center group-hover:bg-brand-orange transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-brand-orange group-hover:text-brand-black transition-colors duration-300" />
                    </div>
                    <span className="text-[11px] font-semibold text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200">
                      {ind.tag}
                    </span>
                  </div>

                  {/* Industry Name */}
                  <h3 className="font-heading font-bold text-2xl text-brand-black mb-3 group-hover:text-brand-orange transition-colors">
                    {ind.name}
                  </h3>

                  {/* Pain Point */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1">
                      The Pain Point:
                    </p>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {ind.painPoint}
                    </p>
                  </div>

                  {/* What We Automate */}
                  <div className="mb-6 pt-3 border-t border-dashed border-neutral-200">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-orange mb-1">
                      What We Automate:
                    </p>
                    <p className="text-sm font-medium text-neutral-900 leading-relaxed">
                      {ind.automation}
                    </p>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-neutral-100">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 hover:text-brand-orange transition-colors"
                  >
                    <span>Discuss your {ind.name} workflow</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-orange group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
