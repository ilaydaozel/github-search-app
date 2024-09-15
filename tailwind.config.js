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
        primary: '#dfc5c4',
        secondary: "#598277",
        bgColor: "#ffffff",
        textColor: colors.gray,
    },
  },
  },
  plugins: [],
}