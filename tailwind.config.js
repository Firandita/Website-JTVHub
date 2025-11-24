// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        'primary': '#FF6600', //orange
        'surface': '#121212', // hitam
        'brand': '#E6427B', //magenta
        'secondary': '#0F2D52', //navy
        'info': '#00B0AD', //cyan
        'soft': '#EC9BAC', //pink soft
=======
        primary: '#FF6600',
        surface: '#121212',
        brand: '#E6427B',
        secondary: '#0f2d52',
        info: '#00b0ad',
        soft: '#ec9bac',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
>>>>>>> 7faecfd16efc195b4e191878dcbfbf991ce362e9
      },
    },
  },
  plugins: [],
}