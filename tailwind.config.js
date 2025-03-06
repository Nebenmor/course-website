/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.html",
    "./src/js/**/*.js",
  ],
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px'
    // },
    extend: {
      screens: {
        sm: '480px'
      },

      fontFamily: {
        lato: '"Lato", serif'
      },

      colors: {
        bodyBG: '#0B0338',
        darkGray: '#121826',
        lightGray: '#212936',
        lightGray2: '#121826',
        lightGray3: '#1F2937',
        ashen: '#90CAC7',
        veryLightPurple: '#539D98',
        purplish: '#7575D7',
        offWhite: '#D2D5DA',
        lighterGray: '#9DA3AE',
        veryLightGray: '#D0D3D8',
        normalGray: '#D1D5DB',
        iconColor:'#5143B3'
      }
    },
  },
  plugins: [],
}

