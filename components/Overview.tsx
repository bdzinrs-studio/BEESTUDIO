"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserCheck, ShieldCheck, MapPin } from "lucide-react";

export default function Overview() {
  return (
    <section id="what-we-do" className="py-20 lg:py-28 bg-brand-cream border-y border-orange-100/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-orange-200 text-xs font-semibold uppercase tracking-wider text-neutral-800 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
            What We Do
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-black tracking-tight leading-tight">
            Stop Losing High-Ticket Jobs to <span className="text-brand-orange">Voicemail</span>.
          </h2>
        </div>

        {/* The 50-100 words core statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-orange-200/60 shadow-elevation relative overflow-hidden"
        >
          {/* Subtle Orange Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-orange to-brand-orangeLight" />

          {/* Core Copy (83 words) */}
          <p className="font-heading font-medium text-xl sm:text-2xl text-neutral-800 leading-relaxed tracking-normal mb-8">
            At BEESTUDIO, we build custom AI systems that answer missed calls, follow up with leads instantly, and handle repetitive admin tasks so local service businesses stop losing money to slow replies. When a prospect calls while your team is on a job, our automations reply within seconds, qualify the inquiry, and book the appointment. I&apos;m Bee, 23, from Bangalore, India. I am the founder, and you&apos;ll work directly with me from day one—I personally design, build, and deploy your custom automations.
          </p>

          {/* Founder Assurance Badges */}
          <div className="pt-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0">
                <UserCheck className="w-4 h-4 text-brand-orange" />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-black">Direct Founder Access</p>
                <p className="text-xs text-neutral-500">No account managers</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-brand-orange" />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-black">Custom Tailored</p>
                <p className="text-xs text-neutral-500">Built for your specific stack</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-brand-orange" />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-black">Bangalore to US</p>
                <p className="text-xs text-neutral-500">Overlapping working hours</p>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
