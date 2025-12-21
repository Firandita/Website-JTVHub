<script setup>
import { ref, computed } from 'vue' 
// Import Component
import EventCard from '../components/EventCard.vue'
import CategoryItem from '../components/CategoryItem.vue'
import VideoCard from '../components/VideoCard.vue' 

// --- MODAL STATE (TIDAK DIUBAH) ---
const showPosterModal = ref(false)
const selectedPoster = ref({ image: '', title: '', description: '' })

function openPoster(poster) {
  if (!poster || !poster.image) return
  selectedPoster.value = poster
  showPosterModal.value = true
}

function closePoster() {
  showPosterModal.value = false
}

// --- DATA EVENTS (TIDAK DIUBAH - Tetap Event Card) ---
const ongoingEvents = [
  {
    id: 1,
    title: 'Hackathon Kuadran 4.0',
    type: 'Kompetisi',
    date: 'Hari, dd-mm-yy',
    link: 'https://link-pendaftaran-1.com',
    poster: { image: 'HACKATON.jpeg', title: 'Hackathon Kuadran 4.0', description: 'Detail poster Hackathon...' }
  },
  {
    id: 2,
    title: 'Event Komunitas Musik Lokal',
    type: 'Komunitas',
    date: 'Sabtu, 15-12-2024',
    link: 'https://link-pendaftaran-2.com',
    poster: { image: 'https://via.placeholder.com/600x400/33FF57/FFFFFF?text=Musik+Lokal+Poster', title: 'Event Komunitas', description: 'Saksikan penampilan band terbaik.' }
  },
  {
    id: 3,
    title: 'Seminar Nasional IoT',
    type: 'Seminar',
    date: 'Rabu, 01-11-2024',
    link: 'https://link-pendaftaran-3.com',
    poster: { image: 'https://via.placeholder.com/600x400/3357FF/FFFFFF?text=Seminar+IoT+Poster', title: 'Seminar Nasional IoT', description: 'Membahas tren terbaru IoT.' }
  },
  {
    id: 4,
    title: 'Voliga Jatim Cup 2024',
    type: 'Olahraga',
    date: 'Minggu, 05-01-2025',
    link: 'https://link-pendaftaran-4.com',
    poster: { image: 'https://via.placeholder.com/600x400/FFFF33/000000?text=Voliga+Poster', title: 'Voliga Jatim Cup', description: 'Kejuaraan bola voli se-Jatim.' }
  }
]

// --- DATA KATEGORI ---
const videoCategories = [
  { name: 'Awarding', img: '/logoevent.png'},
  { name: 'Provinsi KAB./Kota', img: '/logoevent.png' }, 
  { name: 'Komisi Pemilihan Umum', img: '/logoevent.png' },
  { name: 'Kenduren', img: '/logoevent.png' },
  { name: 'Kampung Ramadhan', img: '/logoevent.png' },
  { name: 'Event Komunitas', img: '/logoevent.png' },
  { name: 'Event Komunitas Pondok Pesantren', img: '/logoevent.png' },
  { name: 'Kompetisi', img: '/logoevent.png' },
  { name: 'Voliga', img: '/logoevent.png' },
  { name: 'CSR', img: '/logoevent.png' }
]

const selectedCategory = ref('Awarding')

function handleCategoryClick(categoryObj) {
  selectedCategory.value = categoryObj.name;
}

const videos = {
  Awarding: [
    {
      id: 1,
      title: "Jatim Bangkit Awards",
      category: "Awarding", 
      date: "21 Des 2025",
      duration: "04:20",
      thumbnail: "https://i.ytimg.com/vi/_mL3YVdN1Oo/hqdefault.jpg", 
    },
    {
      id: 2,
      title: "Jatim Bangkit Awards",
      category: "Awarding", 
      date: "21 Des 2025",
      duration: "04:20",
      thumbnail: "https://i.ytimg.com/vi/_mL3YVdN1Oo/hqdefault.jpg", 
    },
    {
      id: 3,
      title: "Jatim Bangkit Awards",
      category: "Awarding", 
      date: "21 Des 2025",
      duration: "04:20",
      thumbnail: "https://i.ytimg.com/vi/_mL3YVdN1Oo/hqdefault.jpg", 
    },
    {
      id: 4,
      title: "Jatim Bangkit Awards",
      category: "Awarding", 
      date: "21 Des 2025",
      duration: "04:20",
      thumbnail: "https://i.ytimg.com/vi/_mL3YVdN1Oo/hqdefault.jpg", 
    },
    {
      id: 5,
     title: "Jatim Bangkit Awards",
      category: "Awarding", 
      date: "21 Des 2025",
      duration: "04:20",
      thumbnail: "https://i.ytimg.com/vi/_mL3YVdN1Oo/hqdefault.jpg", 
    },
    {
      id: 6,
     title: "Jatim Bangkit Awards",
      category: "Awarding", 
      date: "21 Des 2025",
      duration: "04:20",
      thumbnail: "https://i.ytimg.com/vi/_mL3YVdN1Oo/hqdefault.jpg", 
    },
    {
      id: 7,
      title: "Jatim Bangkit Awards",
      category: "Awarding", 
      date: "21 Des 2025",
      duration: "04:20",
      thumbnail: "https://i.ytimg.com/vi/_mL3YVdN1Oo/hqdefault.jpg", 
    },
    {
      id: 8,
     title: "Jatim Bangkit Awards",
      category: "Awarding", 
      date: "21 Des 2025",
      duration: "04:20",
      thumbnail: "https://i.ytimg.com/vi/_mL3YVdN1Oo/hqdefault.jpg", 
    }
  ],
  'Provinsi KAB./Kota': [
    {
      id: 9,
     title: "Jatim Bangkit Awards",
      category: "Awarding", 
      date: "21 Des 2025",
      duration: "04:20",
      thumbnail: "https://i.ytimg.com/vi/_mL3YVdN1Oo/hqdefault.jpg", 
    }
  ],
}

const currentVideos = computed(() => {
    return videos[selectedCategory.value] || [];
});

</script>

<template>
  <div class="min-h-screen bg-black text-white font-roboto">
    
    <header class="relative h-64 md:h-80 bg-[#0F2D52] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-900 to-black opacity-80"></div>
        <h1 class="text-4xl md:text-6xl font-bold text-white relative z-10 tracking-wider">EVENT</h1>
    </header>

    <main class="container mx-auto px-4 md:px-16 py-10">

      <section class="mb-12">
        <h2 class="font-family text-center text-2xl font-medium mb-8 text-white-500 border-gray-800 pb-2">
          Sedang Berlangsung
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <EventCard
            v-for="event in ongoingEvents"
            :key="event.id"
            :event="event"
            @lihatPoster="openPoster"
          />
        </div>
      </section>

      <hr class="border-gray-800 my-10" />

      <section class="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          
         <div class="lg:col-span-3">
          <div class="sticky top-4"> 
            <h2 class="text-xl font-bold mb-6 text-white pl-2 border-l-4 border-orange-500">
              Kategori Event
            </h2>
            <div class="space-y-2">
               <CategoryItem
                  v-for="cat in videoCategories"
                  :key="cat.name"
                  :category="cat"
                  :isActive="selectedCategory === cat.name"
                  @selectCategory="handleCategoryClick"
               />
            </div>
          </div>
        </div>

        <div class="lg:col-span-9">
          
          <div 
            v-if="currentVideos.length === 0" 
            class="text-gray-400 p-5 text-center"
          >
            Belum ada dokumentasi video untuk kategori ini.
          </div>

          <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
            
            <VideoCard
              v-for="vid in currentVideos"
              :key="vid.id"
              :video="vid"
            />
            
          </div>
        </div>

      </section>
    </main>

    <div
      v-if="showPosterModal"
      class="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      @click.self="closePoster"
    >
      <div class="bg-gray-900 rounded-lg p-6 max-w-lg w-full relative border border-gray-700 max-h-[90vh] overflow-y-auto">
        <button
          class="absolute top-2 right-2 text-white text-3xl hover:text-orange-500 transition"
          @click="closePoster"
        >
          &times;
        </button>

        <img
          :src="selectedPoster.image"
          :alt="'Poster ' + selectedPoster.title"
          class="rounded-lg w-full mb-4 object-contain"
        />

        <h3 class="text-xl font-bold mb-2">{{ selectedPoster.title }}</h3>
        <p class="text-gray-400 text-sm mb-4">{{ selectedPoster.description }}</p>

        <button
          class="bg-blue-600 hover:bg-blue-700 w-full py-2 rounded-lg text-white font-semibold"
          @click="closePoster"
        >
          Tutup
        </button>
      </div>
    </div>
  </div>
</template>