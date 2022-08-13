/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./src/**/**/*.tsx"],
  fontFamily: {
    manrope: ["Manrope", "sans-serif"],
  },
  theme: {
    extend: {
      colors: {
        primary: "#D87D4A",
        gray: {
          100: "#979797",
          200: "#F1F1F1",
        },
      },
    },
  },
  plugins: [],
};
