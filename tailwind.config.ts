import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b0f14",
        foreground: "#e6f5ef",
        primary: {
          DEFAULT: "#10b981",
          foreground: "#06271d"
        },
        muted: {
          DEFAULT: "#10161d",
          foreground: "#97a3ab"
        },
        card: {
          DEFAULT: "#0f151c",
          foreground: "#e6f5ef"
        },
        border: "#17202a"
      },
      boxShadow: {
        glow: "0 0 0 2px rgba(16,185,129,0.2), 0 0 40px rgba(16,185,129,0.15)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;