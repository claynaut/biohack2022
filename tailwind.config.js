module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: {
          primary: '#007fff',
          'primary-dark': '#006cd9',
        },
        overlay: '#00000032',
        'white-50': '#ffffff32',
      }
    },
    transitionProperty: {
      'size': 'width, max-width, height, max-height, margin, padding',
     },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
