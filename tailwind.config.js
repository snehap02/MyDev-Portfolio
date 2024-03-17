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
        '375': '375px',
        '500': '500px',
        '450': '450px',
        '1440': '1440px',
      },
      colors:{
        'compYellow': '#EEE4B1',
        'textBlue': '#387ADF',
        'textSky': '#86B6F6',
        'textPink': '#E9A8F2',
        'textOrange': '#F6995C',
        'commentGreen': '#87A922'
      }
    },
  },
  plugins: [],
}