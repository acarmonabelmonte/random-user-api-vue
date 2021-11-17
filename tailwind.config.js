module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#38AFDD",
          200: "#277898",
          300: "#29728F",
          400: "#205A71",
          500: "#173F4F"
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}