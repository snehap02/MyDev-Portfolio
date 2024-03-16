/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'openSans': "Open Sans",
      },
      screens:{
        '400': '400px',
        '1404': '1404px',
      }
    },
  },
  plugins: [],
}