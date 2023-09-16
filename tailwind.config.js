/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,}'],
  theme: {
    extend: {
      screens: {
        sm: '460px',
        lg: '1110px',
        xl: '1200px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
