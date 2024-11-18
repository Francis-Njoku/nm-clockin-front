import theme from './src/styles/theme'

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html", './src/**/*.{js,jsx,ts,tsx}'],
  important: 'html',
  theme: {
    ...theme
  }
}
