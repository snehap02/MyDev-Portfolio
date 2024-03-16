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
      },
      colors:{
        'yellow': '#EEE4B1',
        'blue': '#387ADF',
        'sky': '#86B6F6',
        'pink': '#E9A8F2',
        'orange': '#F6995C',
        'green': '#87A922'
      }
    },
  },
  plugins: [],
}