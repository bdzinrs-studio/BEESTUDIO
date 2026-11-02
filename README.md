# BEESTUDIO — AI Automation Agency Website

A modern, production-ready marketing website for **BEESTUDIO**, built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion. 

100% free and open-source stack. Ready for zero-config deployment to Vercel.

---

## ⚡ Tech Stack (100% Free & Open-Source)

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Custom tokens, 60/30/10 palette)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (Scroll-reveal and micro-interactions)
- **Icons**: [Lucide React](https://lucide.dev/) + Inline brand SVGs
- **Typography**: `Plus Jakarta Sans` (Headings) and `Inter` (Body) via `next/font`
- **Zero Backend Required**: Contact actions use direct WhatsApp click-to-chat (`wa.me`) and email (`mailto:`).

---

## 🎨 Brand & Design System

- **60% White / Cream**: Clean backgrounds (`#FFFFFF`, `#FFF7F0`), rounded-2xl cards, soft shadows.
- **30% Electric Orange**: Primary accents, buttons, neural nodes, and highlights (`#FF6A00` & `#FF8A3D`).
- **10% Jet Black**: Contrasting elements, sticky footer, and final CTA band (`#0A0A0A`).
- **WCAG AA / AAA Accessibility**: High contrast dark text on solid orange buttons (~7.4:1 contrast ratio) ensuring compliance.

---

## 📂 Project Structure

```
├── app/
│   ├── layout.tsx         # Root layout with fonts, metadata, Navbar & Footer
│   ├── page.tsx           # Home page assembling all 8 sections
│   ├── terms/page.tsx     # Comprehensive Terms & Conditions
│   ├── privacy/page.tsx   # Plain-English Privacy Policy
│   ├── sitemap.ts         # Dynamic SEO sitemap
│   ├── robots.ts          # Search engine crawlers config
│   ├── icon.png           # Site favicon
│   └── globals.css        # Tailwind styles & smooth scroll
├── components/
│   ├── Navbar.tsx         # Sticky glassmorphic nav with official logo & mobile drawer
│   ├── Hero.tsx           # High-impact typography, dual CTAs & animated SVG graphic
│   ├── Overview.tsx       # 83-word plain explanation + founder Bee intro
│   ├── WhoWeServe.tsx     # 5 industry cards (HVAC, Plumbing, Med Spas, Roofing, Dental)
│   ├── Solutions.tsx      # 4 core automation cards (Missed-Call, Lead Follow-Up, AI Agents, Voice)
│   ├── Benefits.tsx       # Large numbered cards (01 Save Money, 02 Save Time, 03 Make More Money)
│   ├── ResultsPlaceholder.tsx # Transparent "Results coming soon" founder card
│   ├── Approach.tsx       # 5-step vertical timeline connected with orange line
│   ├── CTA.tsx            # High-contrast black band with direct audit & email buttons
│   └── Footer.tsx         # 4-column footer with legal and contact links
├── lib/
│   └── siteConfig.ts      # Single source of truth for all links and contact info
├── public/                # Static assets (official logos, icons)
└── tailwind.config.ts     # Custom colors, shadows, and animations
```

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies
```bash
git clone <your-repo-url>
cd WEBSITE
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## ⚙️ Configuration (`lib/siteConfig.ts`)

All contact details, social links, and phone numbers are centralized in `lib/siteConfig.ts`. To update any information, edit that file directly:

```typescript
export const siteConfig = {
  contact: {
    email: "beestudiooz@gmail.com",
    whatsappDisplay: "+91 90358 31215",
    whatsappNumber: "919035831215",
    instagram: "https://www.instagram.com/beestudiooz",
    facebook: "https://facebook.com/YOUR_PAGE",
  },
  // ...
};
```

---

## 🚢 Deploy to Vercel (Free Tier)

This repository is optimized for zero-config deployment on Vercel:

1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) with GitHub.
3. Click **Add New Project** and select this repository.
4. Leave all default settings (Framework: Next.js) and click **Deploy**.
5. Your website will be live in under 60 seconds with an automatic SSL certificate.

---

## 📄 License

MIT License. Free to use and customize for commercial and personal projects.
