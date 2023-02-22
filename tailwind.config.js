/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
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
