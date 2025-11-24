<script setup>
// 1. IMPORT YANG WAJIB ADA
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'; // <--- Kamu lupa ini tadi

// 2. DEFINISIKAN ROUTE
const route = useRoute(); // <--- Ini juga lupa, makanya error "route is undefined"

const isRegister = ref(false);

// Data Form
const form = ref({
  fullName: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
});

// Fungsi Toggle (Slider)
const toggleMode = (mode) => {
  isRegister.value = mode === 'register';
};

// Cek URL saat halaman dibuka (Login vs Register)
onMounted(() => {
  // Pastikan route sudah siap sebelum dicek
  if (route.query.mode === 'register') {
    isRegister.value = true; 
  }
});

const handleSubmit = () => {
  if(isRegister.value) {
    console.log("Melakukan Register...", form.value);
  } else {
    console.log("Melakukan Login...", { email: form.value.email, password: form.value.password });
  }
};
</script>

<template>
  <div class="min-h-screen w-full flex bg-black overflow-hidden">
    
    <div class="hidden lg:block lg:w-1/2 relative">
      
      <img 
        src="/gedung-jtv.JPG" 
        alt="Gedung JTV" 
        class="absolute inset-0 w-full h-full object-cover"
      />

      <div class="absolute inset-0 bg-gradient-to-r from-black/20 via-black/50 to-black"></div>

      <div class="absolute bottom-20 left-12 z-10 max-w-md">
        <h1 class="text-5xl font-bold text-white mb-4 leading-tight">
          Hiburan Jawa Timur <br> <span class="text-white">Dalam Genggaman.</span>
        </h1>
        <p class="text-gray-300 text-lg">
          Nikmati ribuan konten lokal, berita terkini, dan live streaming eksklusif hanya di JTVHub.
        </p>
      </div>
    </div>

    <div class="w-full lg:w-1/2 flex items-center justify-center p-8 bg-black relative">
      
      <div class="absolute top-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div class="w-full max-w-md z-10">
        
        <div class="text-center mb-10">
          <img src="/jtv_putih.png" alt="Logo JTV" class="h-12 mx-auto mb-6">
          <h2 class="text-3xl font-bold text-white mb-2">
            {{ isRegister ? 'Bergabung Sekarang' : 'Selamat Datang' }}
          </h2>
          <p class="text-gray-400">
            {{ isRegister ? 'Lengkapi data diri untuk membuat akun baru' : 'Masukan detail akun anda untuk melanjutkan' }}
          </p>
        </div>

        <div class="bg-gray-900 p-1 rounded-full mb-8 relative flex h-12 border border-gray-800">
          <div 
            class="absolute top-1 bottom-1 rounded-full bg-orange-600 transition-all duration-300 shadow-lg"
            :class="isRegister ? 'left-1/2 right-1' : 'left-1 right-1/2'"
          ></div>
          
          <button 
            @click="toggleMode('login')"
            class="w-1/2 relative z-10 text-sm font-bold transition-colors duration-300 focus:outline-none"
            :class="!isRegister ? 'text-white' : 'text-gray-400 hover:text-white'"
          >
            Masuk
          </button>

          <button 
            @click="toggleMode('register')"
            class="w-1/2 relative z-10 text-sm font-bold transition-colors duration-300 focus:outline-none"
            :class="isRegister ? 'text-white' : 'text-gray-400 hover:text-white'"
          >
            Daftar
          </button>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-5">
          
          <div v-if="isRegister" class="space-y-1 animate-fade-in">
            <label class="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider">Nama Lengkap</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-gray-500"><path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" /></svg>
              </div>
              <input v-model="form.fullName" type="text" class="w-full bg-gray-900/50 border border-gray-700 text-white text-sm rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent block pl-12 p-3.5 placeholder-gray-600 transition-all outline-none" placeholder="Nama Lengkap Anda" required>
            </div>
          </div>

          <div v-if="isRegister" class="space-y-1 animate-fade-in">
            <label class="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider">Username</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-gray-500"><path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" /><path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5-5.023a19.52 19.52 0 00-6.5 1.771v9.92h11.5v-9.92a19.358 19.358 0 00-5-1.77zm-2.25 5.441a.75.75 0 010 1.5h-1.5a.75.75 0 010-1.5h1.5z" clip-rule="evenodd" /></svg>
              </div>
              <input v-model="form.username" type="text" class="w-full bg-gray-900/50 border border-gray-700 text-white text-sm rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent block pl-12 p-3.5 placeholder-gray-600 transition-all outline-none" placeholder="@username" required>
            </div>
          </div>

          <div class="space-y-1">
            <label class="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider">Email Address</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-gray-500"><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" /><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" /></svg>
              </div>
              <input v-model="form.email" type="email" class="w-full bg-gray-900/50 border border-gray-700 text-white text-sm rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent block pl-12 p-3.5 placeholder-gray-600 transition-all outline-none" placeholder="nama@email.com" required>
            </div>
          </div>

          <div class="space-y-1">
            <div class="flex justify-between">
                <label class="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider">Password</label>
                <a v-if="!isRegister" href="#" class="text-xs font-bold text-orange-500 hover:text-orange-400">Lupa Password?</a>
            </div>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-gray-500"><path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" /></svg>
              </div>
              <input v-model="form.password" type="password" class="w-full bg-gray-900/50 border border-gray-700 text-white text-sm rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent block pl-12 p-3.5 placeholder-gray-600 transition-all outline-none" placeholder="••••••••" required>
            </div>
          </div>

          <div v-if="isRegister" class="space-y-1 animate-fade-in">
            <label class="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider">Konfirmasi Password</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-gray-500"><path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" /></svg>
              </div>
              <input v-model="form.confirmPassword" type="password" class="w-full bg-gray-900/50 border border-gray-700 text-white text-sm rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent block pl-12 p-3.5 placeholder-gray-600 transition-all outline-none" placeholder="Ulangi password" required>
            </div>
          </div>

          <button 
            type="submit" 
            class="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-orange-900/20 transition-all transform hover:scale-[1.02] active:scale-95 mt-4"
          >
            {{ isRegister ? 'Buat Akun Baru' : 'Masuk Sekarang' }}
          </button>

        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>