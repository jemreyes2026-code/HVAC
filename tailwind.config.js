/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        accent: { DEFAULT: '#C41230', hover: '#A30E26' },
      },
    },
  },
  plugins: [],
};
