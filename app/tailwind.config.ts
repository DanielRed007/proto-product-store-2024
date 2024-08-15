import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      extend: {
        colors: {
          light: {
            background: "#ffffff",
            text: "#000000",
          },
          dark: {
            background: "#1a202c",
            text: "#ffffff",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
