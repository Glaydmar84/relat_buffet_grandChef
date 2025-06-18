/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'mobile:text-lg',
    'mobile:text-xl',
    'mobile:text-2xl',
    'mb375:text-lg',
    'mb375:text-xl',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
      },
      fontFamily: {
        comfortaa: ['Comfortaa', 'cursive'],
      },
      screens: {
        'mobile': {'raw': '(min-width: 390px) and (max-width: 767px)'},
        'mb360': {'raw': '(min-width: 360px) and (max-width: 375px)'},
      },
    },
  },
  plugins: [],
};







  
  