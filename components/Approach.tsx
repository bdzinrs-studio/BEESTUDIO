"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, MessageSquare, Compass, Code2, Gauge } from "lucide-react";

interface StepItem {
  step: string;
  number: string;
  title: string;
  icon: React.ElementType;
  description: string;
  deliverable: string;
}

const steps: StepItem[] = [
  {
    step: "Step 01",
    number: "1",
    title: "Research",
    icon: Search,
    description:
      "We study your business model, inspect your call logs or intake bottlenecks, and pinpoint exactly where you are losing revenue or burning manual hours.",
    deliverable: "Bottleneck Audit & Opportunity Map",
  },
  {
    step: "Step 02",
    number: "2",
    title: "Outreach",
    icon: MessageSquare,
    description:
      "We reach out and start an open, no-pressure conversation about your current lead response times and where an AI assistant makes the biggest immediate impact.",
    deliverable: "Direct Conversation with Founder",
  },
  {
    step: "Step 03",
    number: "3",
    title: "Discovery & Quote",
    icon: Compass,
    description:
      "We learn exactly how your technicians, dispatchers, or front desk staff operate, map out the required integrations, and send a clear, custom service quote.",
    deliverable: "Architecture Blueprint & Flat Quote",
  },
  {
    step: "Step 04",
    number: "4",
    title: "Design and Deploy",
    icon: Code2,
    description:
      "We build your custom AI workflows, connect them securely to your phone lines or CRM, test edge-cases thoroughly, and launch your live automation.",
    deliverable: "Live Tested Automation Deployment",
  },
  {
    step: "Step 05",
    number: "5",
    title: "Optimize",
    icon: Gauge,
    description:
      "We continuously monitor real incoming interactions, tune prompt models, eliminate false triggers, and ensure the system maintains peak performance long-term.",
    deliverable: "Ongoing Model Tuning & Latency Monitoring",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-20 lg:py-32 bg-brand-cream border-t border-orange-100/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-orange-200 text-xs font-semibold uppercase tracking-wider text-neutral-800 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
            Our Approach
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-brand-black tracking-tight leading-tight mb-4">
            How We Build Your <span className="text-brand-orange">Automation</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600">
            A transparent 5-step engineering process designed to eliminate risk and deliver dependable, production-grade AI systems.
          </p>
        </div>

        {/* Vertical Timeline with Continuous Orange Connecting Line */}
        <div className="relative">
          {/* Vertical Orange Accent Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-orange via-brand-orangeLight to-brand-orange -translate-x-1/2 hidden sm:block" />
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-orange via-brand-orangeLight to-brand-orange sm:hidden" />

          <div className="flex flex-col gap-12 sm:gap-16">
            {steps.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  } gap-8 group`}
                >
                  
                  {/* Content Card (Half width on sm+) */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)] pl-14 sm:pl-0">
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-orange-200/70 hover:border-brand-orange shadow-sm hover:shadow-card-hover transition-all duration-300">
                      
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                          {item.step}
                        </span>
                        <span className="text-[11px] font-semibold text-neutral-500 bg-neutral-100 px-2.5 py-0.5 rounded-full">
                          {item.deliverable}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-black mb-2 group-hover:text-brand-orange transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Timeline Node */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-6 w-12 h-12 rounded-full bg-white border-4 border-brand-orange flex items-center justify-center shadow-orange-soft z-10 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-5 h-5 text-brand-orange" />
                  </div>

                  {/* Spacer for other side on desktop */}
                  <div className="hidden sm:block w-[calc(50%-2.5rem)]" />

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
