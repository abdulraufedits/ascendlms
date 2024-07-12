/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Now Display', 'sans-serif'],
      }
    },
    colors: {
      'blue': '#4390cd'
    }
  },
  plugins: [],
}

