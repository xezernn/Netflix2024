/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xsm': '250px',
      'xxm': '350px',
      'xmm': '400px',
      'sm': '500px',
      'med': '600px',
      'md': '768px',
      "hed": "880px",
      'tabl': '960px',
      'xlg': '1060px',
      'xmd': '1200px',
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50': '50px',
      '16': '4rem',
    },
    extend: {
      backgroundImage: {
        'loginBg': "red",
      },
      transitionProperty: {
        'width': 'width',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

