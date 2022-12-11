/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{yml, yaml}",
  ],
  theme: {
    extend: {
      colors: {
        'current': 'currentColor'
      },
      fontFamily: {
        'sans': ["'Montserrat'", 'Helvetica', 'Arial', 'sans-serif'],
        'serif': ["'Mountains of Christmas'", 'ui-serif', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}