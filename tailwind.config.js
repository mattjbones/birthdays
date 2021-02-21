module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.json',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans:
        '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    },
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
      borderColor: ['hover'],
    },
  },
  plugins: [],
};
