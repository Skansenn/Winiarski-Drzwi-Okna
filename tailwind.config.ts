import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#DC2626", 
          hover: "#B91C1C",
        },
        background: {
          DEFAULT: "#FAF8F4",
          alt: "#F3F0E9",
          dark: "#1A1A1A",
          black: "#0A0A0A",
        },
        slate: {
          900: "#1A1A1A",
          800: "#2A2A2A",
          700: "#333333",
        }
      },
    },
  },
  plugins: [],
};

export default config;
