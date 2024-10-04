/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'caveat': ['Caveat', 'cursive'],
    },
    extend: {
      spacing: {
        '0.5': '0.125rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '256': '64rem',
        '288': '72rem',
        '5/100': '5%',
        '45/100': '45%',
        '80/100': '85%',
      },
      colors: {
        'aquamarine': '#7fffd4',
        'whitesmoke': '#f5f5f5',
      }
    },
  },
  plugins: [],
}

