/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#00C9FF',
        'secondary': '#92FE9D',
      },
    },
  },
  plugins: [],
};