module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
 
  theme: {
    extend: {
      fontFamily: {
        fugasOne: ["fugasOne", "serif"],
        typograhica:["typograhica","sanserif"],
        minionPro:["minionPro","serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
  ],
}
