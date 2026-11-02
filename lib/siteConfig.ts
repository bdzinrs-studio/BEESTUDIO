/**
 * BEESTUDIO — Site Configuration & Single Source of Truth
 *
 * IMPORTANT FOR CLIENT:
 * All external links, phone numbers, email addresses, and social handles
 * are configured strictly in this file. Replace the placeholder values below
 * with your verified production details.
 */

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  founder: {
    name: string;
    age: number;
    location: string;
    city: string;
    country: string;
    title: string;
    bioShort: string;
  };
  contact: {
    // [PLACEHOLDER - REPLACE WITH YOUR REAL EMAIL]
    email: string;

    // [PLACEHOLDER - REPLACE WITH YOUR REAL WHATSAPP NUMBER IN INTERNATIONAL FORMAT WITHOUT SPACES OR '+', e.g. '919876543210']
    whatsappDisplay: string;
    whatsappNumber: string;

    // Pre-filled WhatsApp greeting message when user taps "Book a Free AI Audit"
    whatsappDefaultMessage: string;

    // [PLACEHOLDER - REPLACE WITH YOUR INSTAGRAM PROFILE URL]
    instagram: string;

    // [PLACEHOLDER - REPLACE WITH YOUR FACEBOOK PAGE URL]
    facebook: string;
  };
  navigation: Array<{
    name: string;
    href: string;
  }>;
  industries: Array<{
    name: string;
    slug: string;
  }>;
}

export const siteConfig: SiteConfig = {
  name: "BEESTUDIO",
  legalName: "BEESTUDIO AI SERVICES",
  tagline: "Automate the Busywork. Grow the Business.",
  description:
    "BEESTUDIO engineers custom AI agents, missed-call voice assistants, and instant lead follow-up systems for local service businesses.",
  url: "https://beestudio.com", // [PLACEHOLDER - REPLACE WITH YOUR CUSTOM DOMAIN]

  founder: {
    name: "Bee",
    age: 23,
    location: "Bangalore, India",
    city: "Bangalore",
    country: "India",
    title: "Founder & Automation Engineer",
    bioShort:
      "I'm Bee, 23, from Bangalore, India. I personally design, engineer, and deploy AI automation systems that save hours of busywork and turn missed inquiries into booked revenue.",
  },

  contact: {
    email: "beestudiooz@gmail.com",
    whatsappDisplay: "+91 90358 31215",
    whatsappNumber: "919035831215",

    // Default pre-filled message for WhatsApp CTA
    whatsappDefaultMessage:
      "Hi Bee, I run a local service business and I'd like to book a Free AI Audit to see what we can automate.",

    instagram: "https://www.instagram.com/beestudiooz",

    // [PLACEHOLDER - REPLACE WITH YOUR REAL FACEBOOK URL WHEN READY]
    facebook: "https://facebook.com/YOUR_PAGE",
  },

  navigation: [
    { name: "What We Do", href: "/#what-we-do" },
    { name: "Who We Serve", href: "/#who-we-serve" },
    { name: "Solutions", href: "/#solutions" },
    { name: "Approach", href: "/#approach" },
  ],

  industries: [
    { name: "HVAC", slug: "hvac" },
    { name: "Plumbing", slug: "plumbing" },
    { name: "Med Spas", slug: "med-spas" },
    { name: "Roofing", slug: "roofing" },
    { name: "Dental", slug: "dental" },
  ],
};

/**
 * Helper to generate direct WhatsApp click-to-chat link
 */
export function getWhatsAppLink(customMessage?: string): string {
  const message = encodeURIComponent(
    customMessage || siteConfig.contact.whatsappDefaultMessage
  );
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${message}`;
}

/**
 * Helper to generate direct Mailto link
 */
export function getMailtoLink(subject?: string): string {
  const mailSubject = encodeURIComponent(
    subject || "Inquiry: Free AI Audit for my business"
  );
  return `mailto:${siteConfig.contact.email}?subject=${mailSubject}`;
}
