/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        onest: ['Onest', 'sans-serif']
      },
      backgroundImage: {
        underline: 'linear-gradient(to right, currentColor, currentColor)'
      }
    },
  },
  plugins: [],
}

