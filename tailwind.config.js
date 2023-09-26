/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        sans: ["Instrument Sans", "sans-serif"],
      },
      colors: {
        Violet: "#9775fa",
        Grape: "#cc5de8",
      },
      screens: {
        sm: "900px",
      },
    },
  },
  plugins: [],
};
