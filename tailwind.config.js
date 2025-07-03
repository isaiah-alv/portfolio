/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
        rubik: ["Rubik", "sans-serif"],
        roboto: ["Roboto Mono", "monospace"]
      }
    },
  },
  plugins: [],
}