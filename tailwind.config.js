module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Red Hat Display', 'sans-serif'],
      mono: ['Red Hat Mono', 'monospace'],
    },
    screens: {
      'xs': '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: {
          100: '#D1C6AC',
        },
        accent: {
          primary: '#007fff',
          'primary-dark': '#006cd9',
        },
        overlay: '#00000032',
        text: '#172025',
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
