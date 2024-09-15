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
        primary: "#5e548e",
        secondary: "#6d597a",
        bgColor: "#ffffff",
        textColor: colors.gray,
    },
  },
  },
  plugins: [],
}