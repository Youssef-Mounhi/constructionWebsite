/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffb627',
        secondary: '#023047',
        accent: "#fb8500"
      },
      fontFamily: {
        sans : ['var(--inter-font)', ...fontFamily.sans],
        serif: ['var(--source-serif-4-font)', ...fontFamily.serif]
      }
    },
  },
plugins: [require('@tailwindcss/forms')]
  // plugins: [require("./plugins/colors")],
}