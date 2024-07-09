const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#A6180E',
        secondary: '#B2B2B2',
        white: '#ffffff',
        'bg-primary': '#A6180E',
        'bg-black': '#000000',
        'bg-secondary': '#151515',
        border: '#303030',
        muted: '#303030',
      },
      screens: {
        xl: '1140px',
        '2xl': '1140px',
      },
      fontFamily: {
        gip: ['GIP', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
