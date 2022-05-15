module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
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
      backgroundImage: {
        pattern: 'var(--pattern)',
      },
      colors: {
        admin: {
          primary: 'var(--admin-primary)',
          secondary: 'var(--admin-secondary)',
          accent: {
            DEFAULT: 'var(--admin-accent)',
            secondary: 'var(--admin-accent-secondary)',
            sub: 'var(--admin-accent-sub)',
          },
          card: 'var(--admin-card)',
          highlight: {
            DEFAULT: 'var(--admin-highlight)',
            dark: 'var(--admin-highlight-dark)',
          },
          sub: {
            DEFAULT: 'var(--admin-sub)',
            light: 'var(--admin-sub-light)',
            secondary: 'var(--admin-sub-secondary)',
            highlight: 'var(--admin-sub-highlight)',
            bright: 'var(--admin-sub-bright)',
          },
        },
        primary: {
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          dark: 'var(--accent-dark)',
        },
        text: {
          DEFAULT: 'var(--text)',
          dark: 'var(--text-dark)'
        },
        card: {
          DEFAULT: 'var(--card)'
        },
        sub: {
          DEFAULT: 'var(--sub)'
        },
        highlight: {
          DEFAULT: 'var(--highlight)',
          dark: 'var(--highlight-dark)'
        },
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
