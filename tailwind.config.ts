import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#050A14",
        "dark-card": "#0D1627",
        violet: {
          primary: "#7C3AED",
          light: "#9D5FFB",
        },
        cyan: {
          accent: "#00D4FF",
        },
        pink: {
          pop: "#E879F9",
        },
        text: {
          primary: "#E2E8F0",
          muted: "#3A4A6B",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Space Grotesk", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
