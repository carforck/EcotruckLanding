/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        eco: {
          dark: "#014D40",
          lime: "#A6E22E",
          soft: "#F5F7F4",
          yellow: "#FFC300",
          gray: "#1A1A1A",
        },
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
