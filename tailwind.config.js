/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js'
  ],
  theme: {
    extend: {
      tableLastOfType: {
        '&:last-of-type': {
          borderBottom: 'none'
        }
      }
    },
    screens: {
      360: '360px',
      480: '480px',
      '<480': { max: '479px' },
      578: '578px',
      '<578': { max: '577px' },
      768: '768px',
      '<768': { max: '767px' },
      1024: '1024px',
      '<1024': { max: '1023px' },
      1280: '1280px',
      '<1280': { max: '1279px' },
      1440: '1440px',
      '<1440': { max: '1439px' },
      1650: '1650px',
      '<1650': { max: '1649px' },
      sm: '360px',
      md: '768px',
      lg: '1280px',
      xl: '1650px'
    }
  },
  plugins: []
};
