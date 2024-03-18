/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/**.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: "#1b1c1e",
        semidark:"#2b2c2e",
      },
    },
  },
  plugins: [],
};
