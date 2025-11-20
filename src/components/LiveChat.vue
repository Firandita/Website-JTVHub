<script setup>
import { ref } from 'vue';

const isLoggedIn = ref(false); // Ubah jadi true nanti kalau sudah ada auth

const chats = ref([
    { user: 'Budi Santoso', msg: 'Mantap JTV! Lagunya enak', color: 'text-blue-400' },
    { user: 'Siti Aminah', msg: 'Request lagu Bojo Galak dong min!', color: 'text-pink-400' },
    { user: 'Arek Suroboyo', msg: 'Salam dari Rungkut hadirrr', color: 'text-green-400' },
    { user: 'Joko', msg: 'Gambarnya jernih banget malam ini', color: 'text-yellow-400' },
    { user: 'Admin', msg: 'Selamat menikmati tayangan Stasiun Dangdut rek!', color: 'text-orange-500 font-bold' },
]);
</script>

<template>
  <div class="bg-gradient-to-b from-gray-900 to-gray-800  3 flex flex-col rounded-b-xl h-[600px] lg:sticky lg:top-24 shadow-2xl">
    <div class="p-4 border-b border-gray-700 bg-gray-800/50 flex justify-between items-center">
      <h3 class="font-bold text-white flex items-center gap-2">
        Live Chat
        <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
      </h3>
      <span class="text-xs text-gray-400">1.2K Online</span>
    </div>

    <div class="flex-grow overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
        <div v-for="(chat, i) in chats" :key="i" class="text-sm">
            <span :class="chat.color" class="font-bold mr-2">{{ chat.user }}:</span>
            <span class="text-gray-300">{{ chat.msg }}</span>
        </div>
        
        <div v-if="!isLoggedIn" class="mt-8 p-6 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-600 text-center">
            <p class="text-gray-300 mb-4 font-medium">Gabung obrolan sekarang!</p>
            <div class="flex flex-col gap-3">

                <RouterLink 
                    to="/login" 
                    class="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-2 rounded-lg font-bold hover:opacity-90 transition text-center block"
                >
                    Login Akun
                </RouterLink>

                <RouterLink 
                    to="/login?mode=register" 
                    class="w-full border border-orange-500 text-orange-500 py-2 rounded-lg font-bold hover:bg-orange-500 hover:text-white transition text-center block"
                >
                    Daftar Baru
                </RouterLink>
            </div>
        </div>
    </div>

    <div class="p-4 border-t border-gray-700 bg-gray-800/30 rounded-b-xl">
      <div class="relative">
        <input 
          type="text" 
          :placeholder="isLoggedIn ? 'Tulis pesan...' : 'Silahkan login untuk chat'" 
          class="w-full bg-gray-900/50 border border-gray-600 rounded-full py-2.5 pl-5 pr-12 text-white focus:outline-none focus:border-orange-500 transition"
          :disabled="!isLoggedIn"
        >
        <button 
            class="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-colors"
            :class="isLoggedIn ? 'text-orange-500 hover:bg-gray-700' : 'text-gray-600 cursor-not-allowed'"
            :disabled="!isLoggedIn"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
        </button>
      </div>
    </div>

  </div>
</template>