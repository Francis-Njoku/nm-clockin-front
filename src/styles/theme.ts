// @ts-check

/** @type {import('tailwindcss').Config['theme']} */

export default {
  fontFamily: {
    roboto: ['Roboto', 'sans-serif'],
    montserrat: ['Montserrat', 'sans-serif'],
    einsteinRomanOpti: ['EinsteinRomanOpti', 'serif'],
    tangerine: ['Tangerine', 'cursive'],
    vibes: ['Great Vibes', 'cursive'],
    playfair: ['Playfair Display', 'serif']
  },
  extend: {
    colors: {
      primary: {
        DEFAULT: '#253c92'
      },
      secondary: {
        DEFAULT: '#41b3a3'
      },
      accent: {
        DEFAULT: '#41b3a3'
      },
      muted: {
        DEFAULT: '#E5E7EB'
      },
      background: {
        DEFAULT: '#edf1f7'
      },
      foreground: '#11181C',
      focus: '#BEF264'
    },
    screens: {
      '2xl': '1366px',
      // => @media (min-width: 1366px) { ... }

      '3xl': '1440px',
      // => @media (min-width: 1440px) { ... }

      '4xl': '1920px'
      // => @media (min-width: 1920px) { ... }
    },
    keyframes: {
      'slide-left': {
        '0%': { transform: 'translate(50%, 0)', opacity: '0.5' },
        '100%': { transform: 'translate(0, 0)', opacity: '1' }
      },
      'slide-right': {
        '0%': { transform: 'translate(-100%, 0)', opacity: '0.5' },
        '100%': { transform: 'translate(0, 0)', opacity: '1' }
      },
      'slide-down': {
        '0%': { transform: 'translate(0, -100%)', opacity: '0.5' },
        '100%': { transform: 'translate(0, 0)', opacity: '1' }
      },
      'fade-out': {
        from: { opacity: '1' },
        to: { opacity: '0' }
      },
      'scroll-stick': {
        '0%': { position: 'sticky', top: '0' },
        '100%': { position: 'static', top: '0' }
      }
    },
    animation: {
      'slide-down': 'slide-down 300ms',
      'slide-right': 'slide-right 300ms',
      'slide-left': 'slide-left 300ms',
      'fade-out': 'fade-in-out 300ms',
      'scroll-stick': 'scroll-stick 300ms'
    }
  },
  darkMode: 'class'
}
