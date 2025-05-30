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
        'orange': '#FD0000'
      },
      fontSize: {
        'xl-plus': '1.375rem', // 22px
        '7.5xl': '80px',
        '6.5xl': '64px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        jersey: ['JerseyM54', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/img/Stadium.jpg')",
      },
      lineHeight: {
        'lh-70': '70px',
      }
    },
  },
  plugins: [],
}

