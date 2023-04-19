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
        'pVerdeTransparente': 'rgba(143, 161, 141, 0.5)',
        'fondoCirculo': 'rgba(93, 167, 126, 0.41)',
        'FondoCirculoTransparente': 'rgba(19, 158, 84, 0.09)',
        'pRojo': '#9D1915',
        'fondoTransparenteNegro':'rgba(0, 0, 0, 0.04)'
      },
    },
    fontFamily: {
      abc:["Lobster", "cursive"]
    }
  },
  plugins: [],
}