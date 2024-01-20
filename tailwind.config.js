/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/*.{js,ts,jsx,tsx,mdx}',
    './components/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '6rem',
      },
    },
    screens: {
      esm: '350px',
      sm: '480px',
      md: '768px',
      lg: '1110px',
      xl: '1440px',
      '2xmd': '930px'
    },
    extend: { 
      colors: {
        fontpink: "#D8277C",
        fontgrey: "#999999",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
