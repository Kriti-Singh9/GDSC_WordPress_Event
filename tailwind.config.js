/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'ml':{'max':'856px'},
        'ss':{'max':'762px'},
        'ls':{'max':'414px'},
        
      }
    },
  },
  plugins: [],
}