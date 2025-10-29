// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router' // <-- Impor router-mu

// 1. Buat SATU aplikasi
const app = createApp(App)

// 2. Beri tahu aplikasi itu untuk MENGGUNAKAN router
app.use(router)

// 3. Pasang aplikasi itu ke halaman
app.mount('#app')