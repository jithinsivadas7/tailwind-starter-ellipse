const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: {
    enabled: false,
  },
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
      colors: {
        brown: {
          50: '#fbf9f7',
          100: '#f9f8f5',
          200: '#f7f4f0',
          300: '#f4f1eb',
          400: '#f2eee7',
        },
        'black-gray': '#1f1f1f',
      },
    },

  },
  plugins: [],
}