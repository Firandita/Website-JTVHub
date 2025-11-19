<script setup>
import { ref, computed } from 'vue';

const activeTab = ref('Channel');
const activeDay = ref('Senin'); // Default hari

const channels = ref([
  { name: 'Jawa Pos', img: 'https://placehold.co/100x50/333/fff?text=Jawa+Pos' },
  { name: 'SBO', img: 'https://placehold.co/100x50/333/fff?text=SBO' },
  { name: 'JTV', img: 'https://placehold.co/100x50/333/fff?text=JTV' },
  { name: 'Radar', img: 'https://placehold.co/100x50/333/fff?text=Radar' },
  { name: 'Malang TV', img: 'https://placehold.co/100x50/333/fff?text=MalangTV' },
  { name: 'Sultraco', img: 'https://placehold.co/100x50/333/fff?text=Sultraco' },
]);

// 6. FIX: JADWAL PER HARI
const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

const jadwalData = {
    'Senin': [
        { jam: '08:00', acara: 'Berita Pagi', status: 'Selesai' },
        { jam: '18:00', acara: 'Jatim Awan', status: 'Selesai' },
        { jam: '22:00', acara: 'Stasiun Dangdut', status: 'Live' },
    ],
    'Selasa': [
        { jam: '08:00', acara: 'Kartun Anak', status: 'Akan Tayang' },
        { jam: '19:00', acara: 'Pojok Pitu', status: 'Akan Tayang' },
    ],
    'Rabu': [
        { jam: '10:00', acara: 'Masak Yuk', status: 'Akan Tayang' },
        { jam: '22:00', acara: 'Wayang Kulit', status: 'Akan Tayang' },
    ],
    // ... tambahkan hari lain sesuai kebutuhan, ini dummy biar tidak error jika kosong
    'Kamis': [], 'Jumat': [], 'Sabtu': [], 'Minggu': []
};

const currentSchedule = computed(() => {
    return jadwalData[activeDay.value] || [];
});
</script>

<template>
  <div class="mt-8">
    
    <div class="w-full h-24 bg-gray-900 rounded-lg flex flex-col items-center justify-center text-gray-600 border border-gray-800 mb-8">
      <span class="text-sm tracking-widest uppercase font-bold">Space Iklan</span>
    </div>

    <div class="border-b border-gray-800 mb-6">
      <div class="flex gap-8">
        <button 
          v-for="tab in ['Channel', 'Deskripsi', 'Jadwal']" 
          :key="tab"
          @click="activeTab = tab"
          class="pb-3 text-sm md:text-base font-semibold transition-all relative"
          :class="activeTab === tab ? 'text-orange-500' : 'text-gray-500 hover:text-gray-300'"
        >
          {{ tab }}
          <span v-if="activeTab === tab" class="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-t-full"></span>
        </button>
      </div>
    </div>

    <div class="min-h-[200px]">
      
      <div v-if="activeTab === 'Channel'" class="animate-fade-in">
        <h3 class="text-lg font-bold mb-4 text-white">Channel TV Lokal</h3>
        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          <div 
            v-for="(channel, index) in channels" 
            :key="index" 
            class="bg-gray-900 border border-gray-800 rounded-lg p-3 flex items-center justify-center hover:border-orange-500 hover:bg-gray-800 cursor-pointer transition-all group"
          >
            <img :src="channel.img" :alt="channel.name" class="w-full h-auto object-contain opacity-70 group-hover:opacity-100 transition">
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'Deskripsi'" class="animate-fade-in text-gray-300 leading-relaxed">
        <h3 class="text-xl font-bold text-white mb-2">Tentang Stasiun Dangdut</h3>
        <p>
            Stasiun Dangdut adalah program unggulan JTV yang menghadirkan orkes melayu terbaik dari Jawa Timur. 
            Menampilkan penyanyi-penyanyi top lokal dengan aransemen musik yang khas dan menghibur.
            Saksikan keseruannya setiap hari pukul 22.00 WIB hanya di JTV.
        </p>
      </div>

      <div v-if="activeTab === 'Jadwal'" class="animate-fade-in space-y-4">
         
         <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button 
                v-for="day in days" 
                :key="day"
                @click="activeDay = day"
                class="px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors border"
                :class="activeDay === day 
                    ? 'bg-orange-600 text-white border-orange-600' 
                    : 'bg-transparent text-gray-400 border-gray-700 hover:border-gray-500'"
            >
                {{ day }}
            </button>
         </div>

         <div class="space-y-3">
             <div v-if="currentSchedule.length === 0" class="text-center py-8 text-gray-500 italic">
                 Tidak ada jadwal untuk hari {{ activeDay }}.
             </div>

             <div v-for="(item, idx) in currentSchedule" :key="idx" 
                  class="flex justify-between items-center p-4 rounded-lg border transition-colors"
                  :class="item.status === 'Live' 
                    ? 'bg-orange-900/20 border-orange-500/30' 
                    : 'bg-gray-900 border-gray-800 opacity-80 hover:bg-gray-800'"
             >
                <div class="flex items-center gap-4">
                    <span class="font-mono text-orange-500 font-bold">{{ item.jam }}</span>
                    <span class="text-white font-medium">{{ item.acara }}</span>
                </div>
                <span 
                    class="text-[10px] md:text-xs px-2 py-1 rounded font-bold uppercase tracking-wider"
                    :class="{
                        'bg-red-600 text-white animate-pulse': item.status === 'Live',
                        'bg-gray-700 text-gray-400': item.status === 'Selesai',
                        'bg-blue-600 text-white': item.status === 'Akan Tayang'
                    }"
                >
                    {{ item.status }}
                </span>
             </div>
         </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>