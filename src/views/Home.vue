<script setup>
import { ref } from "vue";
// Import Component
import HeroSection from "../components/HeroSection.vue";
import KategoriVidio from "../components/KategoriVidio.vue";
import VideoSlider from "../components/VideoSlider.vue";
import EventCard from "../components/EventCard.vue";
import PromoCarousel from "../components/PromoCarousel.vue"; 

// --- 1. MODAL STATE (Supaya Card Event bisa diklik Poster-nya) ---
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

// --- 2. DATA EVENTS LENGKAP (Sama persis dengan Event.vue) ---
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
</script>

<template>
  <HeroSection />
  <KategoriVidio />
  <VideoSlider />

  <section class="container mx-auto px-4 md:px-16 py-10">
    <h2
      data-aos="fade-up"
      data-aos-offset="0"
      class="text-2xl font-family font-bold mb-10 text-center"
    >
      Ikuti Dan Ramaikan <span class="text-orange-600"> Keseruan <br>Event </span>Kami!
    </h2>

    <div data-aos-offset="0" data-aos="fade-up" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <EventCard
        v-for="event in ongoingEvents.slice(0, 4)"
        :key="event.id"
        :event="event"
        @lihatPoster="openPoster" 
      />
      </div>

    <div 
      class="flex justify-center mt-12" 
      data-aos="fade-up"
      data-aos-offset="0" 
      data-aos-delay="100"
    >
      <router-link to="/event">
        <button class="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-full shadow-lg transform transition-all duration-300 hover:-translate-y-1">
          Jelajahi Lebih Banyak Event Menarik!
        </button>
      </router-link>
    </div>
  </section>

  <PromoCarousel />
  
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

</template>