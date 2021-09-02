module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { backgroundImage: theme => ({
      'hero-pattern': "url('/img/hero-pattern.svg')",
      'footer-texture': "url('/img/footer-texture.png')",
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
