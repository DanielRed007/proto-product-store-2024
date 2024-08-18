import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#f59e0b",
          text: "#000000",
        },
        dark: {
          background: "#be123c",
          text: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};

export default config;
