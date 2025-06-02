/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#042365',
        'orange': '#FD0000',
        'gray': '#3D3D3D',
      },
      fontSize: {
        'xl-plus': '1.375rem', // 22px
        '3.5xl': '32px',
        '7.5xl': '80px',
        '6.5xl': '64px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        jersey: ['JerseyM54', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/img/BG.png')",
      },
      lineHeight: {
        'lh-70': '70px',
      },
      width: {
        'w-120': '120px',
      },
      maxWidth: {
        '8xl': '1320px',
        '5.5xl': '1096px',
      },
    },
  },
  plugins: [],
}

