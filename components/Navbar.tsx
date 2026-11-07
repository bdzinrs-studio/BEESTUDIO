"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, getWhatsAppLink } from "@/lib/siteConfig";
import { Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const whatsappUrl = getWhatsAppLink();

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-orange-100"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none py-1"
            aria-label="BeeStudio Homepage"
          >
            {/* Official BeeStudio Circular Badge Icon */}
            <div className="relative w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-105 duration-200 shrink-0">
              <Image
                src="/logo-circle.png"
                alt="BeeStudio Logo Icon"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-contain drop-shadow-sm"
                priority
              />
            </div>
            {/* Official BeeStudio Orange Wordmark */}
            <div className="relative h-7 w-auto flex items-center">
              <Image
                src="/logo-wordmark-cropped.png"
                alt="BeeStudio Wordmark"
                width={150}
                height={26}
                className="h-7 w-auto object-contain transition-opacity group-hover:opacity-90"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/#what-we-do"
              className="text-sm font-medium text-neutral-700 hover:text-brand-orange transition-colors"
            >
              What We Do
            </Link>
            <Link
              href="/#who-we-serve"
              className="text-sm font-medium text-neutral-700 hover:text-brand-orange transition-colors"
            >
              Who We Serve
            </Link>
            <Link
              href="/#solutions"
              className="text-sm font-medium text-neutral-700 hover:text-brand-orange transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/#approach"
              className="text-sm font-medium text-neutral-700 hover:text-brand-orange transition-colors"
            >
              Approach
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-heading font-semibold text-sm bg-brand-orange text-brand-black hover:bg-brand-orangeLight shadow-orange-soft hover:shadow-orange-glow transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              id="desktop-nav-cta"
            >
              <MessageSquare className="w-4 h-4 text-brand-black fill-brand-black/20" />
              <span>Book An AI Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-brand-black hover:bg-orange-50 focus:outline-none transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6 text-brand-black" /> : <Menu className="w-6 h-6 text-brand-black" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 top-20 z-40 bg-brand-black/50 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white border-b border-orange-100 shadow-xl px-6 py-8 flex flex-col gap-6 max-h-[calc(100vh-5rem)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-4">
              <Link
                href="/#what-we-do"
                onClick={() => setIsOpen(false)}
                className="text-lg font-heading font-semibold text-neutral-800 hover:text-brand-orange transition-colors py-2 border-b border-gray-100"
              >
                What We Do
              </Link>
              <Link
                href="/#who-we-serve"
                onClick={() => setIsOpen(false)}
                className="text-lg font-heading font-semibold text-neutral-800 hover:text-brand-orange transition-colors py-2 border-b border-gray-100"
              >
                Who We Serve
              </Link>
              <Link
                href="/#solutions"
                onClick={() => setIsOpen(false)}
                className="text-lg font-heading font-semibold text-neutral-800 hover:text-brand-orange transition-colors py-2 border-b border-gray-100"
              >
                Solutions
              </Link>
              <Link
                href="/#approach"
                onClick={() => setIsOpen(false)}
                className="text-lg font-heading font-semibold text-neutral-800 hover:text-brand-orange transition-colors py-2 border-b border-gray-100"
              >
                Our Approach
              </Link>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-heading font-semibold text-base bg-brand-orange text-brand-black shadow-orange-soft hover:bg-brand-orangeLight transition-all"
                id="mobile-nav-cta"
              >
                <MessageSquare className="w-5 h-5 text-brand-black" />
                <span>Book An AI Audit</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-center text-xs text-neutral-500 mt-1">
                Direct WhatsApp consultation with Bee
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
