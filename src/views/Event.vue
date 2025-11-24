 
<script setup>
import EventCard from '../components/EventCard.vue';
import CategoryItem from '../components/CategoryItem.vue';

import { ref } from 'vue';

// Modal state
const showPosterModal = ref(false);

// Data poster yang dipilih
const selectedPoster = ref({
  image: '',
  title: '',
  description: ''
});

// Buka modal
function openPoster(poster) {
  selectedPoster.value = poster;
  showPosterModal.value = true;
}

// Tutup modal
function closePoster() {
  showPosterModal.value = false;
}

// Data dummy untuk acara 'Sedang Berlangsung'
const ongoingEvents = [
  { 
    id: 1, 
    title: 'Hackathon Kuadran 4.0', 
    type: 'Kompetisi', 
    date: 'Hari, dd-mm-yy',
    link: '',
    poster: {
      image: '/poster/poster1.jpg',
      title: 'Hackathon Kuadran 4.0',
      description: 'Detail poster Hackathon Kuadran 4.0'
    }
  },
  { 
    id: 2, 
    title: 'Hackathon Kuadran 4.0', 
    type: 'Kompetisi', 
    date: 'Hari, dd-mm-yy',
    link: '',
    poster: {
      image: '/poster/poster1.jpg',
      title: 'Hackathon Kuadran 4.0',
      description: 'Detail poster Hackathon Kuadran 4.0'
    }
  },
  { 
    id: 3, 
    title: 'Hackathon Kuadran 4.0', 
    type: 'Kompetisi', 
    date: 'Hari, dd-mm-yy',
    link: '',
    poster: {
      image: '/poster/poster1.jpg',
      title: 'Hackathon Kuadran 4.0',
      description: 'Detail poster Hackathon Kuadran 4.0'
    }
  },
  { 
    id: 4, 
    title: 'Hackathon Kuadran 4.0', 
    type: 'Kompetisi', 
    date: 'Hari, dd-mm-yy',
    link: '',
    poster: {
      image: '/poster/poster1.jpg',
      title: 'Hackathon Kuadran 4.0',
      description: 'Detail poster Hackathon Kuadran 4.0'
    }
  },
];

// Data kategori video
const videoCategories = [
{ name: 'Awarding', icon: '🏆' },                        
{ name: 'Provinsi KAB./Kota', icon: '🗺️' },              
{ name: 'Komisi Pemilihan Umum', icon: '🗳️' },           
{ name: 'Kenduren', icon: '🍽️' },                        
{ name: 'Kampung Ramadhan', icon: '🌙' },                 
{ name: 'Event Komunitas', icon: '🤝' },                  
{ name: 'Event Komunitas Pondok Pesantren', icon: '🕌' }, 
{ name: 'Kompetisi', icon: '🏅' },                        
{ name: 'Voliga', icon: '🏐' },                           
{ name: 'CSR', icon: '🌱' },       
];

// Kategori yang sedang dipilih
const selectedCategory = ref("Awarding");

// Dummy video per kategori (bisa diganti nanti)
const videos = {
  Awarding: [{}, {}, {}, {}, {}, {}],
  "Provinsi KAB./Kota": [{}, {}, {}],
  "Komisi Pemilihan Umum": [{}, {}, {}, {}],
  Kenduren: [{}, {}],
  "Kampung Ramadhan": [{}, {}, {}, {}],
  "Event Komunitas": [{}, {}, {}, {}],
  "Event Komunitas Pondok Pesantren": [{}, {}, {}],
  Kompetisi: [{}, {}, {}, {}, {}],
  Voliga: [{}, {}, {}],
  CSR: [{}, {}],
};

</script>

<template>
  <div class="min-h-screen bg-black text-white font-roboto">

    <header
  class="relative h-64 md:h-80 bg-cover bg-center overflow-hidden"
  style="background-image: url('/event.png');"
>
  <div class="absolute inset-0 z-10 bg-black opacity-10"></div>

</header>

    <main class="container mx-auto px-4 py-10">

      <!-- SEDANG BERLANGSUNG -->
      <section class="mb-12">
        <h2 class="text-xl font-bold mb-5 text-gray-300">Sedang Berlangsung</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <EventCard 
            v-for="event in ongoingEvents.slice(0, 4)"
            :key="event.id"
            :event="event"
            @lihatPoster="openPoster"
          />

        </div>
      </section>

      <hr class="border-gray-800 my-10">

      <section class="grid grid-cols-1 lg:grid-cols-4 gap-8">

        <!-- SIDEBAR -->
        <div class="lg:col-span-1">
          <h2 class="text-xl font-bold mb-4 text-gray-300">Kategori Video</h2>
          <nav class="space-y-1 p-0">
            <CategoryItem 
              v-for="category in videoCategories"
              :key="category.name"
              :category="category"
              @click="selectedCategory = category.name"
            />
          </nav>
        </div>

        <!-- VIDEO LIST -->
        <div class="lg:col-span-3">
          <div class="bg-gray-800 p-3 mb-6 rounded-lg border-b-4 border-gray-700">
            <h2 class="text-xl font-bold text-center uppercase tracking-widest text-white">
              {{ selectedCategory }}
            </h2>
          </div>

          <!-- VIDEO GRID -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            <div
              v-for="(vid, i) in videos[selectedCategory]"
              :key="selectedCategory + i"
              class="bg-gray-900 p-4 rounded-lg h-36 flex flex-col justify-between border-b-2 border-orange-600 
                     hover:bg-gray-800 cursor-pointer transition"
            >
              <div class="text-sm text-gray-400 h-10 bg-gray-700/50 rounded"></div>
              <p class="text-sm text-gray-400 mt-2">Judul Video {{ i + 1 }}</p>
              <div class="text-center">
                <span class="inline-block bg-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
                  Tonton Sekarang
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  </div>
  
  <!-- MODAL POSTER -->
  <div 
    v-if="showPosterModal" 
    class="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
  >
    <div class="bg-gray-900 rounded-lg p-6 w-96 relative border border-gray-700">

      <button 
        class="absolute top-2 right-2 text-white text-xl"
        @click="closePoster()"
      >
        ✕
      </button>

      <img 
        :src="selectedPoster.image" 
        alt="Poster Event" 
        class="rounded-lg w-full mb-4"
      >

      <h3 class="text-xl font-bold text-white mb-2">
        {{ selectedPoster.title }}
      </h3>
      <p class="text-gray-400 text-sm mb-4">
        {{ selectedPoster.description }}
      </p>

      <button 
        class="bg-blue-600 hover:bg-blue-700 w-full py-2 rounded-lg text-white font-semibold"
        @click="closePoster()"
      >
        Tutup
      </button>

    </div>
  </div>

</template>