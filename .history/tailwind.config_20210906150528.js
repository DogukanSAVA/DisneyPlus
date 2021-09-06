module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { backgroundImage: theme => ({
      "home": "url('/image/background.png')",
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

module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}