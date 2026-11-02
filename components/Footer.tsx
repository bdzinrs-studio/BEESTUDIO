import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, getWhatsAppLink, getMailtoLink } from "@/lib/siteConfig";
import { Mail, MessageSquare, ArrowUpRight } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  const whatsappUrl = getWhatsAppLink();
  const mailtoUrl = getMailtoLink();

  return (
    <footer className="bg-brand-black text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Blurb (Col 1 - 4 spans) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3 w-fit group" aria-label="BeeStudio Homepage">
              <div className="relative w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-105 duration-200 shrink-0">
                <Image
                  src="/logo-circle.png"
                  alt="BeeStudio Logo Icon"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-contain drop-shadow-sm"
                />
              </div>
              <div className="relative h-7 w-auto flex items-center">
                <Image
                  src="/logo-wordmark-white.png"
                  alt="BeeStudio Wordmark"
                  width={150}
                  height={26}
                  className="h-7 w-auto object-contain transition-opacity group-hover:opacity-90"
                />
              </div>
            </Link>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Engineered by <strong className="text-white font-medium">Bee</strong> in Bangalore, India. We build reliable, tailored AI automations, voice receptionists, and rapid lead follow-up workflows engineered specifically for US local service businesses.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 px-3.5 py-1.5 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Accepting select founding clients</span>
            </div>
          </div>

          {/* Quick Links (Col 2 - 2 spans) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="font-heading font-semibold text-sm tracking-wider uppercase text-neutral-300">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-neutral-400">
              <li>
                <Link
                  href="/#what-we-do"
                  className="hover:text-brand-orange transition-colors flex items-center gap-1 group"
                >
                  <span>What We Do</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#who-we-serve"
                  className="hover:text-brand-orange transition-colors flex items-center gap-1 group"
                >
                  <span>Who We Serve</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#solutions"
                  className="hover:text-brand-orange transition-colors flex items-center gap-1 group"
                >
                  <span>Solutions</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#approach"
                  className="hover:text-brand-orange transition-colors flex items-center gap-1 group"
                >
                  <span>Our Approach</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal (Col 3 - 2 spans) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="font-heading font-semibold text-sm tracking-wider uppercase text-neutral-300">
              Legal
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-neutral-400">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-brand-orange transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-brand-orange transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social (Col 4 - 3 spans) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="font-heading font-semibold text-sm tracking-wider uppercase text-neutral-300">
              Direct Contact
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-neutral-300">
              <li>
                <a
                  href={mailtoUrl}
                  className="flex items-center gap-2.5 hover:text-brand-orange transition-colors group"
                >
                  <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                  <span className="truncate">{siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-brand-orange transition-colors group"
                >
                  <MessageSquare className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>WhatsApp: {siteConfig.contact.whatsappDisplay}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-brand-orange transition-colors group"
                >
                  <InstagramIcon className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-brand-orange transition-colors group"
                >
                  <FacebookIcon className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Facebook</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <p className="text-neutral-500">
            Engineered with modern AI tools for high-reliability service businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
