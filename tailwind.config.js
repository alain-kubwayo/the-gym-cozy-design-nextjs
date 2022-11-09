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
        'fraunces72': 'Fraunces72ptsupersoft,sans-serif',
        'fraunces144': 'Fraunces144ptsupersoft,sans-serif',
        'geomanist': 'Geomanist',
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
          200: '#1da1f2',
        }
      },
      fontSize: {
        'xs-md': '0.8125rem',
        'xl-md': '1.25rem',
        '2.5xl': '1.5625rem',
        '37px': '2.3125rem',
        '4.5xl': '2.5rem',
        '6.5xl': '3.8125rem',
        '6.75xl': '4.375rem',
        '7.5xl': '5.625rem',
      },
      backgroundImage: {
        'gradient-nav': 'linear-gradient(270deg,#302f39,#223240 95%)',
        'gradient-hero': 'linear-gradient(90deg,#302f39,#223240 95%)',
        'noise': 'url("/assets/noise.webp")',
        'text-noise': 'url("/assets/noise-2.webp")',
        'awards-noise': 'url("/assets/awards/awards-noise.webp")',
      },
      padding: {
        3.75: '0.9375rem',
        4.5: '1.125rem',
        7.5: "1.875rem",
        11.5: "2.85205rem",
        '60px': "3.75rem",
        15: '3.75rem',
        '120px': '7.5rem',
        '140px': '8.75rem',
      },
      borderRadius: {
        'lg-md': '0.625rem',
        '32%': '32%',
        'client-1': '80% 80% 0 100%',
        'client-2': '100% 100% 50% 0',
        'client-3': '100% 0% 60% 60%',
        'client-4': '0% 100% 60% 60%',
      },
      lineHeight: {
        '4.5': '1.1em',
        '5.5': '1.3em',
      },
      margin:{
        0.75: '0.1875rem',
        3.75: '0.9375rem',
      },
      borderWidth: {
        2.5: '0.1875rem',
      },
      height: {
        '50': '3.125',
        '102': '6.375rem',
        '500': '31.25rem',
      },
      maxHeight: {
        '32rem': '32rem',
        '40rem': '40rem',
        '50rem': '50rem',
      },
      maxWidth: {
        primary: '1400px',
        secondary: '1200px',
      },
      width: {
        '60': '3.75rem',
        '119': '7.4375rem',
      },
      gridTemplateColumns: {
        'clients': '28rem 30rem',
        'clients-lg': '25rem 26rem',
      },
      translate: {
        '70%': '70%',
      },
      flexBasis: {
        '40rem': '40rem',
      },
     
     
    },
  },
  plugins: [],
}

