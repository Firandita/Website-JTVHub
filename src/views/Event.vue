 
<script setup>
import EventCard from '../components/EventCard.vue';
import CategoryItem from '../components/CategoryItem.vue'; // Asumsi dibuat sebagai komponen pembantu

// Data dummy untuk acara 'Sedang Berlangsung'
const ongoingEvents = [
  { id: 1, title: 'Hackathon Kuadran 4.0', type: 'Kompetisi', date: 'Hari, dd-mm-yy' },
  { id: 2, title: 'Hackathon Kuadran 4.0', type: 'Kompetisi', date: 'Hari, dd-mm-yy' },
  { id: 3, title: 'Hackathon Kuadran 4.0', type: 'Kompetisi', date: 'Hari, dd-mm-yy' },
  { id: 4, title: 'Hackathon Kuadran 4.0', type: 'Kompetisi', date: 'Hari, dd-mm-yy' },
];

// Data dummy untuk 'Kategori Video'
const videoCategories = [
  { name: 'Awarding', icon: '🏆' },
  { name: 'Kuis/Quiz', icon: '❓' },
  { name: 'Khazanah Musik', icon: '🎶' },
  { name: 'Klarifikasi', icon: '💬' },
  { name: 'Kampanye Komunitas', icon: '📣' },
  { name: 'Rapat Komunitas', icon: '🤝' },
  { name: 'Kompetisi', icon: '🥇' },
  { name: 'E-Sport', icon: '🎮' },
  { name: 'CSR', icon: '🌱' },
];
</script>

<template>
  <div class="min-h-screen bg-black text-white font-sans">
    
    <header class="relative h-64 md:h-80 bg-cover bg-center overflow-hidden"
            style="background-color: #0d1a33;">
      <div class="absolute inset-0 z-10 opacity-70" 
           style="background-image: linear-gradient(to right, #2563eb, #0ea5e9, #14b8a6);">
      </div>
      <div class="absolute inset-0 z-20 flex items-center justify-center">
        <div class="p-6 border-2 border-white max-w-fit mx-auto">
          <h1 class="text-6xl md:text-8xl font-extrabold tracking-widest uppercase text-white">
            EVENT
          </h1>
        </div>
      </div>
    </header>

    <main class="container mx-auto px-4 py-10">
      
      <section class="mb-12">
        <h2 class="text-xl font-bold mb-5 text-gray-300">Sedang Berlangsung</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <EventCard 
            v-for="event in ongoingEvents.slice(0, 4)"
            :key="event.id"
            :event="event"
          />
        </div>
      </section>

      <hr class="border-gray-800 my-10">

      <section class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        <div class="lg:col-span-1">
          <h2 class="text-xl font-bold mb-4 text-gray-300">Kategori Video</h2>
          <nav class="space-y-1 p-0">
            <CategoryItem 
              v-for="category in videoCategories"
              :key="category.name"
              :category="category"
            />
          </nav>
        </div>

        <div class="lg:col-span-3">
          <div class="bg-gray-800 p-3 mb-6 rounded-lg border-b-4 border-gray-700">
            <h2 class="text-xl font-bold text-center uppercase tracking-widest text-white">AWARDING</h2>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            
            <div v-for="i in 3" :key="'award-1-' + i" class="bg-gray-900 p-4 rounded-lg h-36 flex flex-col justify-between border-b-2 border-orange-600">
              <div class="text-sm text-gray-400 h-10 bg-gray-700/50 rounded"></div>
              <p class="text-sm text-gray-400 mt-2">Judul</p>
              <div class="text-center">
                <span class="inline-block bg-orange-600 text-xs font-semibold px-3 py-1 rounded-full text-white">
                  Telah tayang
                </span>
              </div>
            </div>

            <div v-for="i in 3" :key="'award-2-' + i" class="bg-gray-900 p-4 rounded-lg h-36 flex flex-col justify-between border-b-2 border-orange-600">
              <div class="text-sm text-gray-400 h-10 bg-gray-700/50 rounded"></div>
              <p class="text-sm text-gray-400 mt-2">Judul</p>
              <div class="text-center">
                <span class="inline-block bg-orange-600 text-xs font-semibold px-3 py-1 rounded-full text-white">
                  Sedang tayang
                </span>
              </div>
            </div>

            <div v-for="i in 3" :key="'award-3-' + i" class="bg-gray-900 p-4 rounded-lg h-36 flex flex-col justify-between border-b-2 border-orange-600">
              <div class="text-sm text-gray-400 h-10 bg-gray-700/50 rounded"></div>
              <p class="text-sm text-gray-400 mt-2">Judul</p>
              <div class="text-center">
                <span class="inline-block bg-orange-600 text-xs font-semibold px-3 py-1 rounded-full text-white">
                  Segera tayang
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>

</template>