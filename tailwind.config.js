/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '500px',
      'med': '600px',
      'md': '768px',
      'tabl': '960px',
      'xlg': '1060px',
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50': '50px',
      '16': '4rem',
    },
    extend: {},
  },
  plugins: [],
}

