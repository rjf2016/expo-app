/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.js',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/screens/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins-Regular', ...defaultTheme.fontFamily.sans],
        semi: ['Poppins-SemiBold', ...defaultTheme.fontFamily.sans],
        bold: ['Poppins-Bold', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '15px' }],
        sm: ['14px', { lineHeight: '16px' }],
        base: ['16px', { lineHeight: '22px' }],
        lg: ['20px', { lineHeight: '22px' }],
        xl: ['24px', { lineHeight: '26px' }],
      },
    },
  },
  plugins: [],
};
