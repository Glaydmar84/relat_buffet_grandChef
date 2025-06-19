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
       'xsplus': {'min': '390px', 'max': '719px'},
       'xsm360': {'min': '344px', 'max': '389px'},
      'mdcol': { 'min': '768px', 'max': '1024px' }
      },
    },
  },
  plugins: [],
};







  
  