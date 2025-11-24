// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Ini ngasih tau Tailwind buat scan file .vue
  ],
  theme: {
    extend: {
      // Ini warna custom JTVHub kamu
      colors: {
        'primary': '#FF6600', //orange
        'surface': '#121212', // hitam
        'brand': '#E6427B', //magenta
        'secondary': '#0F2D52', //navy
        'info': '#00B0AD', //cyan
        'soft': '#EC9BAC', //pink soft
      },
    },
  },
  plugins: [],
}