/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        big: ['Helvetica Now Display', 'sans-serif'],
        small: ['Roboto', 'sans-serif'],
      },
      colors: {
        'primary': '#3C3ACF',
        "white": "#FEFEFE",
        "secondary": "#F97FC2",
        "accent" : "#8FD965",
        "black" : "#050505",
        "success": "#46BD84",
        "red" : "#CF3A3A",
        "yellow" : "#F5E12C"
      }
    }
  },
  plugins: [],
}

