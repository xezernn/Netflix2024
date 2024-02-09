/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'med': '600px',
      'w640': '640px',
      'w700': '700px',
      'tabl': '960px',
    },
    extend: {},
  },
  plugins: [],
}

