/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      cursor: {
        pointer:
          'url(https://cdn.jsdelivr.net/gh/xiabo2/vieu@master/S2.cur),pointer',
      },
      width: {
        1280: '80rem',
      },
    },
  },
  plugins: [],
}
