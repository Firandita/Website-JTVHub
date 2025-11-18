<script setup>
import { ref } from 'vue';

// --- (Fungsi Fullscreen & Video) ---
const videoContainer = ref(null);
const toggleFullscreen = () => {
  const el = videoContainer.value;
  if (!el) return;
  if (!document.fullscreenElement) {
    if (el.requestFullscreen) el.requestFullscreen();
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
  }
};

// --- (State untuk Tab) ---
const activeTab = ref('Channel');

// --- (Data Dummy untuk Channel) ---
const channelLivestream = ref([
  { name: 'Jawa Pos', img: 'https://placehold.co/100x50/333/fff?text=Jawa+Pos' },
  { name: 'SBO', img: 'https://placehold.co/100x50/333/fff?text=SBO' },
  { name: 'Sultraco', img: 'https://placehold.co/100x50/333/fff?text=Sultraco' },
  { name: 'JTV', img: 'https://placehold.co/100x50/333/fff?text=JTV' },
  { name: 'Jawa Pos', img: 'https://placehold.co/100x50/333/fff?text=Jawa+Pos' },
  { name: 'Jawa Pos', img: 'https://placehold.co/100x50/333/fff?text=Jawa+Pos' },
  { name: 'Jawa Pos', img: 'https://placehold.co/100x50/333/fff?text=Jawa+Pos' },
  { name: 'Radar', img: 'https://placehold.co/100x50/333/fff?text=Radar' },
  { name: 'Sumeks', img: 'https://placehold.co/100x50/333/fff?text=Sumeks' },
  { name: 'Malang TV', img: 'https://placehold.co/100x50/333/fff?text=MalangTV' },
]);
const channelKomunitas = ref([
  { name: 'Jawa Pos', img: 'https://placehold.co/100x50/333/fff?text=Jawa+Pos' },
]);

</script>

<template>
  <div class="container mx-auto px-6 py-24">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

      <div class="lg:col-span-2">
        
        <div ref="videoContainer" class="relative bg-black rounded-lg overflow-hidden">
          <video 
            class="w-full aspect-video" 
            poster="https://placehold.co/1280x720/000000/ffffff?text=JTV+Live+Stream"
            controls
          >
          </video>
          <button @click="toggleFullscreen" class="absolute top-2 right-2 z-10 p-2 bg-black/30 rounded-full hover:bg-black/70">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75v4.5m0-4.5h-4.5m4.5 0L15 9m5.25 11.25v-4.5m0 4.5h-4.5m4.5 0L15 15" />
            </svg>
          </button>
        </div>

        <div class="mt-4">
          <p class="text-sm text-gray-400">Tayangan saat ini</p>
          <h1 class="text-3xl font-bold">Stasiun Dangdut</h1>
          <p class="text-gray-300">22.00 - 23.30 WIB</p>
          
          <div class="flex items-center gap-3 mt-4 pt-4 border-t border-gray-700">
            <img src="https://placehold.co/40x40/FF5722/000000?text=J" alt="JTV Rek" class="w-10 h-10 rounded-full bg-gray-700">
            <div>
              <h3 class="font-bold">JTV Rek</h3>
              <p class="text-sm text-gray-400">75K Menonton</p>
            </div>
          </div>
        </div>

        <div class="mt-8">
          <div class="w-full h-24 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">
            Iklan
          </div>

          <div class="mt-6 border-b border-gray-700">
            <div class="flex space-x-8">
              <button 
                @click="activeTab = 'Channel'"
                class="py-2 font-semibold transition-colors"
                :class="activeTab === 'Channel' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-400 hover:text-white'"
              >
                Channel
              </button>
              <button 
                @click="activeTab = 'Deskripsi'"
                class="py-2 font-semibold transition-colors"
                :class="activeTab === 'Deskripsi' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-400 hover:text-white'"
              >
                Deskripsi
              </button>
              <button 
                @click="activeTab = 'Jadwal'"
                class="py-2 font-semibold transition-colors"
                :class="activeTab === 'Jadwal' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-400 hover:text-white'"
              >
                Jadwal
              </button>
            </div>
          </div>

          <div class="py-6">
            
            <div v-if="activeTab === 'Channel'">
              <h3 class="text-xl font-bold mb-4">Channel Livestream</h3>
              <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                <div 
                  v-for="channel in channelLivestream" 
                  :key="channel.name" 
                  class="bg-gray-700 rounded-lg p-2 flex items-center justify-center hover:bg-gray-600 cursor-pointer"
                >
                  <img :src="channel.img" :alt="channel.name" class="w-full h-auto object-contain">
                </div>
              </div>
              <h3 class="text-xl font-bold mt-8 mb-4">Channel Komunitas</h3>
              <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                <div 
                  v-for="channel in channelKomunitas" 
                  :key="channel.name" 
                  class="bg-gray-700 rounded-lg p-2 flex items-center justify-center hover:bg-gray-600 cursor-pointer"
                >
                  <img :src="channel.img" :alt="channel.name" class="w-full h-auto object-contain">
                </div>
              </div>
            </div>

            <div v-if="activeTab === 'Deskripsi'">
              <h3 class="text-xl font-bold mb-2">Deskripsi Program</h3>
              <p class="text-gray-300">
                Stasiun Dangdut adalah program musik dangdut terpopuler di JTV...
              </p>
            </div>

            <div v-if="activeTab === 'Jadwal'">
              <h3 class="text-xl font-bold mb-4">Jadwal Hari Ini</h3>
              <ul class="space-y-2">
                <li class="flex justify-between p-2 rounded bg-gray-700">
                  <span>20.00 - 21.00</span>
                  <span class="font-semibold">Pojok Pitu</span>
                </li>
                <li class="flex justify-between p-2 rounded bg-orange-500/20 text-orange-400">
                  <span>21.00 - 22.00</span>
                  <span class="font-semibold">Stasiun Dangdut (LIVE)</span>
                </li>
                <li class="flex justify-between p-2 rounded bg-gray-700">
                  <span>22.00 - 23.00</span>
                  <span class="font-semibold">Jejak Paranormal</span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
        
      </div>

      <!-- SECTION LIVE CHAT -->
      <div class="lg:col-span-1 bg-gray-800 rounded-lg flex flex-col h-[500px] lg:h-[550px]">
        <div class="p-4 border-b border-gray-700">
          <h3 class="font-bold text-lg text-center">Live chat</h3>
        </div>
        
        <div class="flex-grow flex flex-col justify-center items-center gap-4 p-4 text-center">
          <p class="text-gray-300">Login atau Register untuk bergabung di Live Chat</p>
          
          <button class="w-3/4 bg-gradient-to-r from-orange-400 to-orange-600 px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Login
          </button>
          
          <button class="w-3/4 border border-orange-500 text-orange-500 px-5 py-2 rounded-lg font-semibold hover:bg-orange-500 hover:text-black transition-colors">
            Register
          </button>
        </div>

        <div class="p-4 border-t border-gray-700 mt-auto">
          <div class="relative">
            <input 
              type="text" 
              placeholder="Login untuk chat..." 
              class="w-full bg-gray-700 rounded-full py-2 px-5 text-white placeholder-gray-500"
              disabled
            >
            <button class="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-orange-500 hover:text-orange-400" disabled>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L6 12Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
    </div>
  </div>

<!-- LIVE CHAT END -->
 
</template>