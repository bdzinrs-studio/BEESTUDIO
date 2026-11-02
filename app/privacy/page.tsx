import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { ArrowLeft, Lock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}. Plain-English explanation of how we handle business and client data.`,
};

export default function PrivacyPage() {
  const lastUpdated = "November 2, 2026";

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-brand-orange transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 text-brand-orange group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Page Header */}
        <div className="border-b border-neutral-200 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cream border border-orange-200 text-xs font-semibold uppercase tracking-wider text-neutral-800 mb-4">
            <Lock className="w-3.5 h-3.5 text-brand-orange" />
            <span>Privacy &amp; Data Protection</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-brand-black tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-neutral-500">
            Last updated: <span className="text-brand-black font-medium">{lastUpdated}</span>
          </p>
        </div>

        {/* Content Body */}
        <div className="prose prose-neutral max-w-none text-neutral-700 leading-relaxed space-y-8 text-base">
          
          <section>
            <h2 className="font-heading font-bold text-2xl text-brand-black mb-3">
              1. Our Plain-English Commitment
            </h2>
            <p>
              At {siteConfig.name} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we respect your privacy. We do not sell, rent, or trade your personal or business data to data brokers or advertising networks. This policy explains what information we collect when you visit our website or inquire about our services, and how that information is handled.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-brand-black mb-3">
              2. Information We Collect
            </h2>
            <p>We collect only the information necessary to communicate with you and build your automations:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Inquiry Details:</strong> When you contact us via email, WhatsApp, or phone, we collect your name, business name, phone number, email address, and any project notes you share.</li>
              <li><strong>Client System Credentials:</strong> When engineering custom automations, we may receive API keys, webhook URLs, or account logins necessary to connect your software. These are stored securely and never shared.</li>
              <li><strong>Technical Logs:</strong> Standard web server logs (IP address, browser type, referral URLs) to monitor security and website performance.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-brand-black mb-3">
              3. How We Use Your Information
            </h2>
            <p>We use your information exclusively to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Respond directly to your requests and schedule free AI audits.</li>
              <li>Engineer, test, and deploy customized automation workflows.</li>
              <li>Send invoices, deliver progress updates, and provide ongoing maintenance.</li>
              <li>Comply with applicable legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-brand-black mb-3">
              4. Third-Party Services
            </h2>
            <p>
              To deliver our services, we use reputable infrastructure providers such as Vercel (website hosting), WhatsApp / Meta (communication), and email delivery services. We do not share your confidential customer records with unauthorized third parties.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-brand-black mb-3">
              5. Data Security
            </h2>
            <p>
              We implement industry-standard administrative and technical safeguards (including HTTPS encryption, strong access controls, and environment variable isolation) to protect your information against unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-brand-black mb-3">
              6. Your Rights &amp; Data Removal
            </h2>
            <p>
              You may request access to, correction of, or complete deletion of your contact records or credentials from our systems at any time by emailing us directly at <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-orange hover:underline">{siteConfig.contact.email}</a>.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-brand-black mb-3">
              7. Contact Us
            </h2>
            <p>
              If you have any questions or concerns regarding our privacy practices, please contact:
            </p>
            <div className="mt-3 bg-neutral-50 border border-neutral-200 rounded-xl p-4 text-sm space-y-1">
              <p><strong>{siteConfig.legalName}</strong></p>
              <p>Attention: {siteConfig.founder.name}</p>
              <p>Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-orange hover:underline">{siteConfig.contact.email}</a></p>
              <p>Bangalore, India</p>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
