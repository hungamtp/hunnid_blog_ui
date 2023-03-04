/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
    './components/**/*.js',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {
      keyframes: {
        moveup: {
          '0%, 100%': { transform: 'translateY(100px)' },
          '50%': { transform: 'translateY(1000px)' },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        'a-moveup': 'moveup',
        'waving-hand': 'wave 2s linear infinite',
      },
    },
    screens: {
      ssm: '20px',
      sm: '640px',
      md: '758px',
      lg: '1024px',
      xl: '1228px',
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
