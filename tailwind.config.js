/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        DM_sans: "'DM Sans', sans-serif"
      },
      colors: {
        'primary': '#C9864F',
        'dark-gray': '#151414',
        'light-gray': '#1D1C1C'
      }
    },
  },
  plugins: [],
}