/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      'semi-bold': ['ClashDisplay-Semibold'],
      medium: ['ClashDisplay-Medium'],
      normal: ['ClashDisplay-Regular']
    }
  },
  plugins: []
};
