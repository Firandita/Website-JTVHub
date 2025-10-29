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
        'jtv-orange': '#FF6600',
        'jtv-dark': '#121212',
      },
    },
  },
  plugins: [],
}