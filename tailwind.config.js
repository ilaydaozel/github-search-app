/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  
      colors: {
        ...colors,
        primary: "#b56576",
        secondary: "#6d597a",
        bgColor: "#ffffff",
        textColor: colors.gray,
    },
  },
  },
  plugins: [],
}