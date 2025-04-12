import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [
    heroui({
      prefix: "heroui",
      addCommonColors: false,
      defaultTheme: "light",
      defaultExtendTheme: "light",
      layout: {
        borderRadius: "0.5rem",
        spacing: "1rem",
      },
      themes: {
        light: {
          layout: {
            borderRadius: "0.75rem",
          },
          colors: {
            primary: "#1a2533", 
            secondary: "#d1d5db", 
            background: "#ffffff",
            text: "#1a2533",
          },
        },
        dark: {
          layout: {
            borderRadius: "0.65rem",
          },
          colors: {
            primary: "#ffffff",     
            secondary: "#9ca3af",   
            background: "#1a2533",  
            text: "#ffffff",
          },
        },
      },
    }),
  ],
};

module.exports = config;
