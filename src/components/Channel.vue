<script setup>
import { ref, computed } from 'vue';

// Menerima Props dari Parent
const props = defineProps({
  allChannels: {
    type: Array,
    required: true
  },
  activeChannel: {
    type: Object,
    required: true
  }
});

// Emit event ke parent saat channel diklik
const emit = defineEmits(['change-channel']);

const activeTab = ref('Channel');
const activeDay = ref('Senin'); 
const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

// Filter Channel berdasarkan Kategori
const livestreamChannels = computed(() => props.allChannels.filter(c => c.category === 'Livestream'));
const communityChannels = computed(() => props.allChannels.filter(c => c.category === 'Komunitas'));

// Jadwal Dinamis berdasarkan Channel yang Aktif
const currentSchedule = computed(() => {
    // Mengambil jadwal dari channel yang sedang dipilih di Parent
    const schedules = props.activeChannel.schedule || {};
    return schedules[activeDay.value] || [];
});

const selectChannel = (channel) => {
    emit('change-channel', channel);
    // Opsional: pindah ke tab deskripsi atau tetap di channel
};
</script>

<template>
  <div class="mt-2">
    
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
      
      <div v-if="activeTab === 'Channel'" class="animate-fade-in space-y-8">
        
        <div>
            <h3 class="text-lg font-bold mb-4 text-white">Channel Livestream</h3>
            <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              <div 
                v-for="channel in livestreamChannels" 
                :key="channel.id" 
                @click="selectChannel(channel)"
                class="bg-white rounded-lg p-2 aspect-video flex items-center justify-center cursor-pointer transition-all group border-2 relative"
                :class="activeChannel.id === channel.id ? 'border-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]' : 'border-transparent hover:border-gray-300'"
              >
                <img :src="channel.logo" :alt="channel.name" class="w-full h-full object-contain">
                
                <div v-if="activeChannel.id === channel.id" class="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
              </div>
            </div>
        </div>

        <div>
            <h3 class="text-lg font-bold mb-4 text-white">Channel Komunitas</h3>
            <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              <div 
                v-for="channel in communityChannels" 
                :key="channel.id" 
                @click="selectChannel(channel)"
                class="bg-white rounded-lg p-2 aspect-video flex items-center justify-center cursor-pointer transition-all group border-2 relative"
                :class="activeChannel.id === channel.id ? 'border-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]' : 'border-transparent hover:border-gray-300'"
              >
                <img :src="channel.logo" :alt="channel.name" class="w-full h-full object-contain">
                <div v-if="activeChannel.id === channel.id" class="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
              </div>
            </div>
        </div>

      </div>

      <div v-if="activeTab === 'Deskripsi'" class="animate-fade-in text-gray-300 leading-relaxed">
        <h3 class="text-xl font-bold text-white mb-2">Tentang {{ activeChannel.name }}</h3>
        <p>
            {{ activeChannel.description }}
        </p>
      </div>

      <div v-if="activeTab === 'Jadwal'" class="animate-fade-in space-y-4">
         
         <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button 
                v-for="day in days" 
                :key="day"
                @click="activeDay = day"
                class="px-4 py-1.5 rounded-full text-sm font-family font-semibold whitespace-nowrap transition-colors border"
                :class="activeDay === day 
                    ? 'bg-orange-600 text-white border-orange-600' 
                    : 'bg-transparent text-gray-400 border-gray-700 hover:border-gray-500'"
            >
                {{ day }}
            </button>
         </div>

         <div class="space-y-3">
             <div v-if="currentSchedule.length === 0" class="text-center font-family py-8 text-gray-500 italic">
                 Tidak ada jadwal {{ activeChannel.name }} untuk hari {{ activeDay }}.
             </div>

             <div v-for="(item, idx) in currentSchedule" :key="idx" 
                  class="flex justify-between items-center p-4 rounded-lg transition-colors"
                  :class="item.status === 'Live' 
                    ? 'bg-transparent' 
                    : 'border-gray-800 border-b opacity-80'"
             >
                <div class="flex items-center gap-4">
                    <span class="font-family text-orange-500 font-bold">{{ item.jam }}</span>
                    <span class="text-white font-medium">{{ item.acara }}</span>
                </div>
                <span 
                    class="text-[10px] md:text-xs px-2 py-1 rounded font-family font-medium tracking-wider"
                    :class="{
                        'bg-red-600 text-white animate-pulse': item.status === 'Live',
                        'bg-gray-700 text-gray-400': item.status === 'Selesai',
                        'bg-blue-800 text-white': item.status === 'Akan Tayang'
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
/* Menghilangkan scrollbar tapi tetap bisa discroll */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>