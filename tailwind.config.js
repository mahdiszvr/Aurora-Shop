/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}" , "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {},
    fontFamily: {
      IranYekan: ["IRANyekan"],
      IranYekanL: ["IRANyekanL"],
      IranYekanN: ["IRANyekanN"],
      Ananda: ["ANANDA"],
      Lalezar: ["LalehZar"],
    },
    colors: {
      primary1: "#e1aeff",
      nav: "#dda7fc",
      secondary1: "#580063",
      icon: "#faeafb",
      menu: "#e7c2fd",
      hover: "#57006369",
      footer: "#f8d6ff",
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

