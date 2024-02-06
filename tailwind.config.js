/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html","./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      colors:{
        "abu":"#eff0f3",
        "pink":"#d9376e",
        "oren":"#ff8e3c"
      },
    },
  },
  plugins: [],
}

