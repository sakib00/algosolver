module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      fontFamily: {
        sans: ['Inter'],
      },
      colors: {
        primary: {
          dark: '#24243c',
          light: '#63c1d8',
          DEFAULT: '',
        },
        secondary: {
          DEFAULT: '#63c1d8',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
