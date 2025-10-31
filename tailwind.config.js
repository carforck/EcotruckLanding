/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['"Space Grotesk"', "sans-serif"], // ✅ Fuente principal aplicada
      },
      colors: {
        eco: {
          dark: "#014D40",
          lime: "#A6E22E",
          soft: "#F5F7F4",
          yellow: "#FFC300",
          gray: "#1A1A1A",
        },
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        shine: "shine 2s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
