/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Helvetica', ...defaultTheme.fontFamily.sans],
      main: ['Helvetica-rounded', ...defaultTheme.fontFamily.sans],
      hightlight: ['Georgia', ...defaultTheme.fontFamily.serif],
    },
    extend: {
      colors: {
        primary: '#013A85',
        secondary: '#4AAFF7',
        accent: '#FEFBEE',
      }
    }
  },
  plugins: []
}
