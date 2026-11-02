import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: "#FFFFFF",
          cream: "#FFF7F0",
          orange: "#FF6A00",
          orangeLight: "#FF8A3D",
          orangeHover: "#E55F00",
          black: "#0A0A0A",
          dark: "#141414",
          surfaceDark: "#171717",
          border: "#E5E5E5",
          borderOrange: "rgba(255, 106, 0, 0.2)",
          muted: "#737373",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-jakarta)", "sans-serif"],
      },
      boxShadow: {
        "orange-glow": "0 10px 30px -5px rgba(255, 106, 0, 0.25)",
        "orange-soft": "0 4px 20px -2px rgba(255, 106, 0, 0.12)",
        "card-hover": "0 20px 40px -15px rgba(10, 10, 10, 0.08), 0 0 25px -5px rgba(255, 106, 0, 0.15)",
        "elevation": "0 1px 3px rgba(0,0,0,0.05), 0 10px 25px -5px rgba(0,0,0,0.04)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
