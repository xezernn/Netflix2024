/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'med': '600px',
      'md': '768px',
      'tabl': '960px',
    },
    extend: {},
  },
  plugins: [],
}

