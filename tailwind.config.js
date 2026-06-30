/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      colors: {
        hospital: {
          teal: '#008F7A',
          blue: '#0096D6',
          darkGrey: '#334155',
          headingGrey: '#0f172a',
          steel: '#f8f7f4',
        }
      }
    }
  },
  plugins: [],
}