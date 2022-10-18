/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily:{
        'sans': 'Josefin Sans'
      },
      colors:{
        'desaturated-red': 'hsl(0, 36%, 70%)',
        'soft-red':'hsl(0, 36%, 70%)',
        'soft-pink':'hsl(0, 80%, 86%)',
        'salmon':'hsl(0, 74%, 74%)',
        'creme':'hsl(0, 100%, 98%)',
        'dark-red':'hsl(0, 6%, 24%)',
      }
    },
  },
  plugins: [],
}
