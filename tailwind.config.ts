import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        konf: {
          background: "var(--konf-background)",
          foreground: "var(--konf-foreground)",
          primary: "var(--konf-primary)",
          accent: "var(--konf--accent)",
        },
      },
      fontFamily: {
        cygrotesk: ["var(--font-cygrotesk)"],
        interTight: ["var(--font-inter-tight)"],
      },
    },
    boxShadow: {
      ticket: "5px 10px var(--foreground)",
    },
  },
  plugins: [],
} satisfies Config;
