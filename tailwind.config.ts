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
          light2: "#EBD3F8", // Açık mor
          light: "#AD49D1", // Açık mor
          DEFAULT: "#7A1CAC", // Mor
          dark: "#2E073F", // Koyu mor
        },
      },
    },
  },
  plugins: [],
};

export default config;
