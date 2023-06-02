/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        snell: ['Snell Roundhand'],
        vivaldi: ['Vivaldi script'],
      },
    },
  },
  plugins: [],
};
