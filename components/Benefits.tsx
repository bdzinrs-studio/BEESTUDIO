"use client";

import React from "react";
import { motion } from "framer-motion";
import { DollarSign, Clock, TrendingUp, CheckCircle } from "lucide-react";

interface BenefitItem {
  number: string;
  title: string;
  icon: React.ElementType;
  tagline: string;
  description: string;
  points: string[];
}

const benefits: BenefitItem[] = [
  {
    number: "01",
    title: "Save Your Money",
    icon: DollarSign,
    tagline: "Cut wasteful overhead and eliminate missed-lead leakages.",
    description:
      "Every ad dollar spent to make the phone ring is wasted when that call goes to voicemail. By replacing repetitive manual administration and intercepting inquiries immediately, you stop bleeding high-value leads and cut unnecessary staffing overtime.",
    points: [
      "Eliminate expensive repetitive data entry",
      "Maximize the return on your existing marketing spend",
      "Prevent leads from instantly hiring your competitors",
    ],
  },
  {
    number: "02",
    title: "Save Your Time",
    icon: Clock,
    tagline: "Get your evenings and weekends back while AI runs the desk.",
    description:
      "Business owners shouldn't spend their nights answering basic inquiries or manually copying contacts into a spreadsheet. Autonomous AI systems handle first-touch replies, scheduling, and routine follow-ups around the clock so you focus on actual service work.",
    points: [
      "24/7 autonomous replies without manual intervention",
      "Instant calendar booking directly synced to your schedule",
      "Owners and technicians stay focused on billable jobs",
    ],
  },
  {
    number: "03",
    title: "Make You More Money",
    icon: TrendingUp,
    tagline: "Speed-to-lead turns casual estimates into signed contracts.",
    description:
      "When homeowners or patients need service, the first business to reply almost always wins the contract. Instant response times and disciplined, multi-day follow-up sequences naturally convert more incoming inquiries into booked, paying customers.",
    points: [
      "Under 10-second response to incoming web inquiries",
      "Multi-touch follow-ups that re-engage hesitant prospects",
      "Consistent intake process that protects your close rate",
    ],
  },
];

export default function Benefits() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cream border border-orange-200 text-xs font-semibold uppercase tracking-wider text-neutral-800 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
            What You Get
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-brand-black tracking-tight leading-tight mb-4">
            Three Measurable Shifts in Your <span className="text-brand-orange">Operations</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600">
            Clear, practical benefits designed to protect your sanity, your schedule, and your bottom line.
          </p>
        </div>

        {/* 3 Numbered Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-brand-cream/50 rounded-3xl p-8 sm:p-10 border border-orange-100/90 hover:border-brand-orange/60 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Large Background Number 01 / 02 / 03 */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-heading font-extrabold text-6xl sm:text-7xl text-brand-orange/90 tracking-tighter select-none">
                    {item.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-orange-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-brand-orange" />
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-2xl text-brand-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-brand-orange mb-4">
                    {item.tagline}
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Checked Points */}
                <ul className="pt-6 border-t border-orange-200/50 flex flex-col gap-2.5">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-xs text-neutral-700 font-medium">
                      <CheckCircle className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
