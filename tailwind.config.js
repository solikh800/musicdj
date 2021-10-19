// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        100: '25rem',
        105: '27rem',
        110: '30rem',
        115: '33rem',
        120: '36rem',
        125: '40rem',
        130: '44rem',
        135: '48rem',
        140: '52rem',
        145: '56rem',
        150: '60rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
