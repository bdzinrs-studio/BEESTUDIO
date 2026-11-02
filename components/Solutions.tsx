"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, Zap, Cpu, Headphones, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

interface SolutionItem {
  title: string;
  niche: string;
  icon: React.ElementType;
  description: string;
  bullets: string[];
}

const solutions: SolutionItem[] = [
  {
    title: "Missed Call Text-Back",
    niche: "HVAC & Home Services",
    icon: PhoneCall,
    description:
      "When a potential client calls and nobody answers, our automation texts them back in under 5 seconds to answer questions and capture the booking before they call your competitor.",
    bullets: ["Instant <5s SMS trigger", "Smart inquiry qualification", "Direct booking link delivery"],
  },
  {
    title: "Full Lead Follow-Up Systems",
    niche: "Dentists & Real Estate",
    icon: Zap,
    description:
      "Multi-channel SMS and email nurture sequences that follow up with web leads, estimate requests, and dormant contacts automatically until they reply or schedule.",
    bullets: ["Zero lead left behind", "Natural conversational tone", "CRM sync & stage tracking"],
  },
  {
    title: "Custom AI Agents",
    niche: "Dispatch & Ops Automation",
    icon: Cpu,
    description:
      "Bespoke autonomous agents that connect to your existing software (ServiceTitan, Jobber, GoHighLevel) to handle customer intake, invoice notifications, and technician routing.",
    bullets: ["Deep API & webhook integration", "Reduces repetitive manual entry", "Error-free data synchronization"],
  },
  {
    title: "AI Voice Assistants",
    niche: "24/7 Phone Reception",
    icon: Headphones,
    description:
      "Natural-sounding, conversational AI phone receptionists that pick up calls 24/7, answer common business FAQs, collect job details, and book slots on your calendar.",
    bullets: ["Natural human-like voice latency", "24/7 after-hours availability", "Full call transcription & summary"],
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 lg:py-32 bg-brand-cream border-y border-orange-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-orange-200 text-xs font-semibold uppercase tracking-wider text-neutral-800 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
            Our Solutions
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-brand-black tracking-tight leading-tight mb-4">
            AI Systems Engineered For <span className="text-brand-orange">Revenue</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600">
            Four targeted automation frameworks built to eliminate slow responses, capture every caller, and automate operational busywork.
          </p>
        </div>

        {/* 4 Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((sol, index) => {
            const IconComponent = sol.icon;
            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-orange-200/70 hover:border-brand-orange shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Corner Badge */}
                <div className="absolute top-6 right-6">
                  <span className="text-[11px] font-bold text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200">
                    {sol.niche}
                  </span>
                </div>

                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-brand-cream border border-orange-200 flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-brand-orange group-hover:text-brand-black transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-2xl text-brand-black mb-3 group-hover:text-brand-orange transition-colors">
                    {sol.title}
                  </h3>

                  {/* 2-line Description */}
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
                    {sol.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="flex flex-col gap-2.5 mb-8">
                    {sol.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700 font-medium">
                        <div className="w-4 h-4 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-brand-orange stroke-[3]" />
                        </div>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Anchor */}
                <div className="pt-6 border-t border-neutral-100">
                  <Link
                    href="#approach"
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-black hover:text-brand-orange transition-colors group/link"
                  >
                    <span>Learn how we deploy this</span>
                    <ArrowRight className="w-4 h-4 text-brand-orange group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
