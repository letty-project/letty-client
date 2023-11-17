/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-default': '#15a091',
        'primary-dark': '#116057',
        'primary-light': '#75c7be',
      },
    },
    fontFamily: {
      sans: [
        '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
      ],
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
