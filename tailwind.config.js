/** @type {import('tailwindcss').Config} */
export default {
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
    fontFamily: {
      'semi-bold': ['ClashDisplay-Semibold'],
      medium: ['ClashDisplay-Medium'],
      normal: ['ClashDisplay-Regular']
    }
  },
  plugins: []
};
