module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset : {
        '-34': '-8.5rem',
      },
      width: {
        76: '19rem',
        112: '28rem',
        128: '36rem',
      },
      maxHeight: {
        18: '4.5rem',
        112: '28rem',
      },
      borderWidth: {
        '3': '3px',
      },
      colors: {
        accent: {
          primary: '#007fff',
          'primary-dark': '#006cd9',
        },
        overlay: '#00000032',
        'white-50': '#ffffff32',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
