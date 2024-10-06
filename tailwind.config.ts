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
        background: "#f3f4f6", // Arka plan rengi (gerekirse değiştirebilirsin)
        foreground: "#1f2937", // Metin rengi (gerekirse değiştirebilirsin)
        primary: {
          light: "#b3a2e0", // Açık mor
          DEFAULT: "#8a6cd0", // Mor
          dark: "#5b47a2", // Koyu mor
        },
      },
    },
  },
  plugins: [],
};

export default config;
