/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fraunces': "Fraunces72ptsupersoft,sans-self",
       
      },
      colors: {
        primary: {
          100: '#e4ded5',
          200: '#c47d57',
          300: '#d4ac8e',
          400: '#b55730',
          500: '#7c4e49',
          
        },
        secondary: {
          100: '#2d4850',
          200: '#223240',
        },
        tertiary: {
          100: '#d90f54',
        }
      },
      fontSize: {
        '2.5xl': '1.5625rem',
      },
      padding: {
        3.75: '0.9375rem'
      },
      backgroundImage: {
        'gradient-nav': 'linear-gradient(270deg,#302f39,#223240 95%)',
      }
     
    },
  },
  plugins: [],
}

// background-color: rgba(82,91,115,.7); up button
