"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/siteConfig";
import { MessageSquare, ArrowRight, Sparkles, CheckCircle2, PhoneIncoming, Zap, CalendarCheck } from "lucide-react";

export default function Hero() {
  const whatsappUrl = getWhatsAppLink();

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-white">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 rounded-full bg-brand-cream filter blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-40 w-80 h-80 rounded-full bg-orange-100/50 filter blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cream border border-orange-200/80 mb-6 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span className="text-xs font-semibold text-neutral-800 tracking-wide uppercase">
                AI Automation For Local Services
              </span>
            </motion.div>

            {/* Massive Headline (Max 10 words) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-brand-black leading-[1.08] mb-6"
            >
              Automate the Busywork.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orangeLight">
                Grow the Business.
              </span>
            </motion.h1>

            {/* One-line Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-neutral-600 max-w-2xl font-normal leading-relaxed mb-8"
            >
              AI agents, voice assistants, and instant lead follow-up systems that capture every missed call, answer customer questions, and win more jobs 24/7.
            </motion.p>

            {/* Dual Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6"
            >
              {/* Solid Orange Primary Button (Dark text for WCAG AAA contrast ~7.4:1) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-heading font-bold text-base bg-brand-orange text-brand-black hover:bg-brand-orangeLight shadow-orange-soft hover:shadow-orange-glow transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
                id="hero-primary-cta"
              >
                <MessageSquare className="w-5 h-5 text-brand-black fill-brand-black/20" />
                <span>Book a Free AI Audit</span>
              </a>

              {/* Black Outline Secondary Button */}
              <Link
                href="#approach"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-heading font-semibold text-base border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white transition-all duration-200 text-center"
                id="hero-secondary-cta"
              >
                <span>See How It Works</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Target Niches Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-500 pt-2"
            >
              <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
              <span>Built for HVAC, Plumbing, Med Spas, Roofing & Dental.</span>
            </motion.div>

          </div>

          {/* Right Column: Abstract Orange Hexagon & Node Network Graphic */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-lg aspect-square flex items-center justify-center"
            >
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-orange-200/80 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border border-orange-100 animate-[spin_40s_linear_infinite_reverse]" />

              {/* Background Hexagon Network SVG */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full drop-shadow-xl"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="heroHexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF8A3D" />
                    <stop offset="100%" stopColor="#FF6A00" />
                  </linearGradient>
                  <linearGradient id="heroHexPulse" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFF7F0" />
                    <stop offset="100%" stopColor="#FFEAD9" />
                  </linearGradient>
                </defs>

                {/* Outer Connection Lines */}
                <line x1="200" y1="200" x2="80" y2="120" stroke="#FED7AA" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="200" y1="200" x2="320" y2="100" stroke="#FED7AA" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="200" y1="200" x2="310" y2="300" stroke="#FED7AA" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="200" y1="200" x2="90" y2="290" stroke="#FED7AA" strokeWidth="2" strokeDasharray="4 4" />

                {/* Main Central Core Hexagon */}
                <polygon
                  points="200,120 270,160 270,240 200,280 130,240 130,160"
                  fill="url(#heroHexGrad)"
                  filter="drop-shadow(0 15px 30px rgba(255,106,0,0.35))"
                />

                {/* Inner Hexagon Core */}
                <polygon
                  points="200,135 255,167 255,233 200,265 145,233 145,167"
                  fill="#0A0A0A"
                />

                {/* Pulsing Neural Nodes */}
                <circle cx="200" cy="200" r="18" fill="#FF6A00" className="animate-pulse" />
                <circle cx="200" cy="200" r="8" fill="#FFFFFF" />

                {/* Satellite Nodes */}
                <circle cx="80" cy="120" r="10" fill="#FF8A3D" />
                <circle cx="320" cy="100" r="10" fill="#FF8A3D" />
                <circle cx="310" cy="300" r="10" fill="#FF8A3D" />
                <circle cx="90" cy="290" r="10" fill="#FF8A3D" />
              </svg>

              {/* Floating Real-Time Automation Badges */}
              {/* Badge 1: Missed Call Intercepted */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 left-2 sm:left-6 bg-white/95 backdrop-blur-md border border-orange-200/80 rounded-xl px-3.5 py-2.5 shadow-elevation flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0">
                  <PhoneIncoming className="w-3.5 h-3.5 text-brand-orange" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-brand-black">Missed Call Captured</p>
                  <p className="text-[10px] text-neutral-500">Auto SMS dispatched in 2.8s</p>
                </div>
              </motion.div>

              {/* Badge 2: Lead Re-engagement */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-6 right-2 sm:right-6 bg-white/95 backdrop-blur-md border border-orange-200/80 rounded-xl px-3.5 py-2.5 shadow-elevation flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0">
                  <CalendarCheck className="w-3.5 h-3.5 text-brand-orange" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-brand-black">Job Booked to Calendar</p>
                  <p className="text-[10px] text-neutral-500">Sync with ServiceTitan / CRM</p>
                </div>
              </motion.div>

              {/* Badge 3: 24/7 Voice AI */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-28 right-0 sm:right-2 bg-neutral-900 border border-neutral-700 text-white rounded-xl px-3 py-2 shadow-lg flex items-center gap-2"
              >
                <Zap className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
                <span className="text-[11px] font-semibold">24/7 AI Receptionist Active</span>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
