/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-default': '#15a091',
        'primary-dark': '#116057',
        'primary-light': '#75c7be',
      },
    },
  },
  plugins: [require('daisyui')],
};
