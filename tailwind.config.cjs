/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./src/**/**/*.tsx"],
  fontFamily: {
    manrope: ["Manrope", "sans-serif"],
  },
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#979797",
        },
      },
    },
  },
  plugins: [],
};
