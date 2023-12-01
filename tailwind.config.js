/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html" , "./node_modules/tw-elements/dist/js/*.js","./js/*.js"],
  theme: {
    extend: {
      boxShadow: {
        'menuShadow': '0 1000px 0 1000px #D2AFFF',
      }
    },
    presets: [],
    fontFamily: {
      IranYekan: ["IRANyekan"],
      IranYekanL: ["IRANyekanL"],
      IranYekanN: ["IRANyekanN"],
      Ananda: ["ANANDA"],
      Lalezar: ["LalehZar"],
    },
    colors: {
      primary1: "#D2AFFF",
      nav: "#D8B9FF",
      secondary1: "#580063",
      icon: "#faeafb",
      menu: "#E1C4FF",
      hover: "#57006369",
      footer: "#f8d6ff",
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

