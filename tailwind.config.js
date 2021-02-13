module.exports = {
  purge: ['./components/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none',
      },
      zIndex: {
        1: 1,
        10: 10,
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['first', 'last'],
      boxShadow: ['focus'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
