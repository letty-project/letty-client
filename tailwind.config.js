/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-default': '#15a091',
        'primary-dark': '#116057',
        'primary-light': '#75c7be',
      },
    },
  },
  daisyui: {
    themes: [
      {
        letty: {
          primary: '#15a091',
          'base-100': '#ffffff',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
