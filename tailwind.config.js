/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // Ganti yang lama dengan pola REKURSIF ini:
    "./src/**/*.{vue,js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}