/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{hmtl,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dorado': '#beaf87',
        'darkslategray': '#252526'
      }
    }
  },
  plugins: [
    // require('flowbite/plugin'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/forms'),
  ]
}