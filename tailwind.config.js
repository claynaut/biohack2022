module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
      },
      width: {
        76: '19rem',
        112: '28rem',
        128: '36rem',
      },
      minHeight: {
        'min': 'min-content',
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
    extend: {
      backgroundColor: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
