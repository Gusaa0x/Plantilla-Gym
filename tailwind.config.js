/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { top: '50px' },
          '50%': { transform: 'translateY(.5em)' },
        }
      },
      colors: {
        'pNaranja': '#C2775D',
        'pVerde': '#8FA18D',
        'pRojo': '#9D1915'
      },
    },
    fontFamily: {
      abc:["Lobster", "cursive"]
    }
  },
  plugins: [],
}