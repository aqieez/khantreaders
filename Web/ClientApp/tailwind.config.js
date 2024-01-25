/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        khanOrange: '#FF6600',
        khanBlue: '#1C1D3B'
      }
    },
  },
  plugins: [],
}
