const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Noto Serif', 'serif'],
        open: ['Open Sans', 'sans-serif'],
      },
    },
    colors: {
      serpurple: {
        200: '#C0C1DB',
        400: '#928CAF',
        900: '#695D68',
      },
      serblack: {
        900: '#261523',
      },
      serblue: {
        200: '#E4F0F3',
        400: '#CCDEE6',
      },
      serpink: {
        200: '#F4E4EF',
        400: '#E2C5D3',
        900: '#FF7CCF',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
