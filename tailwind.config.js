/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
