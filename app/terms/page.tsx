import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { ArrowLeft, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and Conditions for AI automation services provided by ${siteConfig.name}.`,
};

export default function TermsPage() {
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
            <Shield className="w-3.5 h-3.5 text-brand-orange" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-brand-black tracking-tight mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-neutral-500">
            Last updated: <span className="text-brand-black font-medium">{lastUpdated}</span>
          </p>
        </div>

        {/* Content Body */}
        <div className="prose prose-neutral max-w-none text-neutral-700 leading-relaxed space-y-10 text-base">
          
          {/* Section 1 */}
          <section>
            <h2 className="font-heading font-bold text-2xl text-brand-black mb-3">
              1. Introduction and Acceptance
            </h2>
            <p>
              Welcome to {siteConfig.name} (&quot;BEESTUDIO&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), operated by {siteConfig.founder.name} ({siteConfig.founder.location}). By accessing our website ({siteConfig.url}), purchasing our services, or signing a statement of work or proposal, you (&quot;Client&quot;, &quot;you&quot;, or &quot;your&quot;) agree to be bound by these Terms &amp; Conditions (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our website or services.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-heading font-bold text-2xl text-brand-black mb-3">
              2. Services
            </h2>
            <p>
              BEESTUDIO provides custom software automation, AI voice receptionists, autonomous AI agents, missed-call text-back systems, and multi-channel lead follow-up workflows. The exact deliverables, milestones, technical scope, and timelines are defined in each written proposal, quote, or Statement of Work (&quot;SOW&quot;) agreed upon between BEESTUDIO and Client.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-heading font-bold text-2xl text-brand-black mb-3">
              3. Client Responsibilities
            </h2>
            <p>
              To ensure timely delivery and proper functioning of your automations, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Provide timely, accurate, and complete information regarding your business workflows and technical requirements.</li>
              <li>Provide required administrative credentials, API access tokens, or delegated access to third-party accounts (e.g., CRM, telephony, email providers) necessary for development.</li>
              <li>Ensure all systems and data provided to BEESTUDIO are used lawfully and do not violate third-party intellectual property or contractual agreements.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-heading font-bold text-2xl text-brand-black mb-3">
              4. Messaging and Compliance (TCPA &amp; Carrier Rules)
            </h2>
            <p>
              Automated communications, including SMS text messages and outbound telephone calls, are heavily regulated under United States federal and state laws (including the Telephone Consumer Protection Act &quot;TCPA&quot;, the Telemarketing Sales Rule, and cellular carrier A2P 10DLC compliance standards):
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Prior Express Written Consent:</strong> The Client is solely responsible for ensuring that all contacts, phone numbers, and leads imported into or contacted by the automated systems have provided legally valid prior express written consent to receive automated SMS messages and/or telephone calls.</li>
              <li><strong>Opt-Out Compliance:</strong> The Client must maintain and honor strict opt-out mechanisms (such as recognizing &quot;STOP&quot;, &quot;UNSUBSCRIBE&quot;, or verbal opt-out requests) and maintain an internal Do-Not-Call list.</li>
              <li><strong>Indemnification:</strong> The Client agrees to defend, indemnify, and hold harmless BEESTUDIO from any and all fines, carrier penalties, lawsuits, statutory damages, or legal fees arising from the Client&apos;s failure to obtain proper consent or comply with telecommunications laws.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-heading font-bold text-2xl text-brand-black mb-3">
              5. Fees and Payment
            </h2>
            <p>
              All fees for projects, builds, and monthly maintenance retainers are quoted and invoiced in United States Dollars (USD), unless expressly stated otherwise in writing:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Invoicing:</strong> Project build deposits are due prior to commencement of work. Retainer fees are invoiced in advance of each billing cycle.</li>
              <li><strong>Late Payments:</strong> Invoices unpaid after seven (7) days may result in temporary suspension of active automations or API connections until settled.</li>
              <li><strong>No Refunds:</strong> Due to the custom engineering and labor invested in each implementation, all payments made for completed hours, setup fees, or delivered software are strictly non-refundable.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-heading font-bold text-2xl text-brand-black mb-3">
              6. Intellectual Property
            </h2>
            <p>
              Upon full receipt of all agreed fees, BEESTUDIO grants the Client a non-exclusive, perpetual, worldwide license to use the custom automation workflows and prompts specifically developed for the Client&apos;s business. BEESTUDIO retains all ownership of pre-existing software libraries, proprietary scripts, foundational frameworks, code snippets, and tooling used across multiple client engagements.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="font-heading font-bold text-2xl text-brand-black mb-3">
              7. Confidentiality and Data Protection
            </h2>
            <p>
              Both parties agree to treat non-public business strategies, client records, and API credentials as strictly confidential. BEESTUDIO implements industry-standard security safeguards to protect Client credentials and data during the integration and deployment process.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="font-heading font-bold text-2xl text-brand-black mb-3">
              8. Third-Party Tools &amp; Service Dependencies
            </h2>
            <p>
              Our automations rely on third-party APIs and infrastructure providers (including, but not limited to, OpenAI, Twilio, Make, Zapier, Google Cloud, and specific CRM platforms). BEESTUDIO is not responsible for operational downtime, pricing changes, API deprecations, carrier filtering, or service interruptions caused by third-party platforms outside of our direct control.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="font-heading font-bold text-2xl text-brand-black mb-3">
              9. No Guarantee of Results
            </h2>
            <p>
              While BEESTUDIO designs and configures AI systems to the highest engineering standards to increase speed-to-lead and operational efficiency, we make no explicit guarantee regarding specific revenue numbers, close rates, booked deal counts, or customer satisfaction metrics. Business outcomes depend on numerous external variables including lead quality, technician availability, and market conditions.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="font-heading font-bold text-2xl text-brand-black mb-3">
              10. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, in no event shall BEESTUDIO or its founder be liable for any indirect, incidental, consequential, special, or punitive damages (including loss of profits, revenue, or business data) arising out of or in connection with our services. In all cases, BEESTUDIO&apos;s total aggregate liability shall not exceed the total fees paid by the Client to BEESTUDIO in the three (3) months immediately preceding the event giving rise to liability.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="font-heading font-bold text-2xl text-brand-black mb-3">
              11. Termination
            </h2>
            <p>
              Either party may terminate an ongoing monthly retainer agreement by providing thirty (30) days written notice via email. Upon termination, Client shall pay for all services rendered up to the effective termination date. Upon full settlement, BEESTUDIO will transfer operational keys and documentation to the Client.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="font-heading font-bold text-2xl text-brand-black mb-3">
              12. Governing Law and Dispute Resolution
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Karnataka, India (or the specific mutually agreed jurisdiction specified in the Client&apos;s formal Service Agreement), without regard to conflict of law principles. Any dispute arising out of or relating to these Terms shall first be attempted to be resolved amicably through good-faith negotiation. If unresolved within 30 days, disputes shall be submitted to confidential, binding arbitration.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="font-heading font-bold text-2xl text-brand-black mb-3">
              13. Changes to These Terms
            </h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. When updates are published, the &quot;Last updated&quot; date at the top of this page will be revised. Your continued use of our website or services after any modifications indicates your acceptance of the revised Terms.
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="font-heading font-bold text-2xl text-brand-black mb-3">
              14. Contact
            </h2>
            <p>
              For legal questions, inquiries, or notices regarding these Terms, please contact us directly:
            </p>
            <div className="mt-3 bg-neutral-50 border border-neutral-200 rounded-xl p-4 text-sm space-y-1">
              <p><strong>Entity:</strong> {siteConfig.legalName}</p>
              <p><strong>Founder:</strong> {siteConfig.founder.name} ({siteConfig.founder.location})</p>
              <p><strong>Email:</strong> <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-orange hover:underline">{siteConfig.contact.email}</a></p>
              <p><strong>Website:</strong> <a href={siteConfig.url} className="text-brand-orange hover:underline">{siteConfig.url}</a></p>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
