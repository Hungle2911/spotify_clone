/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {

    extend: {
      colors: {
        linkgreen: '#1DB954',
        fadednav: 'rgba(0, 0, 0, 0.6)',
        black: '#000',
        white: '#fff',
        faded: '#d9dadc',
        hvrgreen: '#1ed760',
        homebgcolor: '#2D46B9',
        secondary: '#919496',
        premiumblue: '#1d75de',
      }
    }
  },
  plugins: [],
};

