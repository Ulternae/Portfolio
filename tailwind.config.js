export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        direction: {
        'rtl': 'rtl',
        'ltr': 'ltr',
      },
      colors: {
        eur: {
          100: '#DCF4FF',
          200: '#8997A1',
          300: '#828FA3',
          400: '#404555',
          500: '#303241',
          600: '#21232E',
          700: '#1B1C25',
          800: '#0B0C13',
        },
        lt2: {
          100: '#DCF4FF',
          200: '#9FAFC9',
          300: '#515768',
          400: '#566070',
          500: '#4A5161',
          600: '#343A4D',
          700: '#1A1E31',
        },
      }
    },
  },
  plugins: [],
}
