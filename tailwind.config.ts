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
        gold: {
          50: '#fdfbf7',
          100: '#f9f4e8',
          200: '#f2e8d0',
          300: '#e8d6a8',
          400: '#dbbf7a',
          500: '#c9a24d',
          600: '#b18838',
          700: '#8f6b2a',
          800: '#75562a',
          900: '#624828',
        },
      },
    },
  },
  plugins: [],
};

export default config;
