/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./src/**/**/*.tsx"],
  fontFamily: {
    manrope: ["Manrope", "sans-serif"],
  },
  theme: {
    extend: {
      backgroundPosition: {
        "right-bottom": "right bottom",
      },
      colors: {
        primary: {
          500: "#FBAF85",
          900: "#D87D4A",
        },
        gray: {
          100: "#979797",
          200: "#F1F1F1",
        },
      },
    },
  },
  plugins: [],
};
