module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { backgroundImage: theme => ({
      "home": "url('/img/hero-pattern.svg')",
     })},
    FontFamily:{
      body: ["Montserrat" , "sans-serif"],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
