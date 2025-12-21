<script setup>
import { ref } from "vue";
import HeroSection from "../components/HeroSection.vue";
import KategoriVidio from "../components/KategoriVidio.vue";
import VideoSlider from "../components/VideoSlider.vue";
import EventCard from "../components/EventCard.vue";
// 1. IMPORT KOMPONEN BARU
import PromoCarousel from "../components/PromoCarousel.vue"; 

// Data dummy untuk acara 'Sedang Berlangsung'
const ongoingEvents = [
  {
    id: 1,
    title: "Hackathon Kuadran 4.0",
    type: "Kompetisi",
    date: "Hari, dd-mm-yy",
  },
  {
    id: 2,
    title: "Hackathon Kuadran 4.0",
    type: "Kompetisi",
    date: "Hari, dd-mm-yy",
  },
  {
    id: 3,
    title: "Hackathon Kuadran 4.0",
    type: "Kompetisi",
    date: "Hari, dd-mm-yy",
  },
  {
    id: 4,
    title: "Hackathon Kuadran 4.0",
    type: "Kompetisi",
    date: "Hari, dd-mm-yy",
  },
];

// Data dummy untuk 'Kategori Video'
const videoCategories = [
  { name: "Awarding", icon: "🏆" },
  { name: "Kuis/Quiz", icon: "❓" },
  { name: "Khazanah Musik", icon: "🎶" },
  { name: "Klarifikasi", icon: "💬" },
  { name: "Kampanye Komunitas", icon: "📣" },
  { name: "Rapat Komunitas", icon: "🤝" },
  { name: "Kompetisi", icon: "🥇" },
  { name: "E-Sport", icon: "🎮" },
  { name: "CSR", icon: "🌱" },
];
</script>

<template>
  <HeroSection />
  <KategoriVidio />
  <VideoSlider />

  <section class="container mx-auto px-4 md:px-16 py-10">
    <h2
      data-aos="fade-up"
      class="text-2xl font-family font-bold mb-10 text-center"
    >
      Ikuti Dan Ramaikan <span class="text-orange-600"> Keseruan <br>Event </span>Kami!
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <EventCard
        v-for="event in ongoingEvents.slice(0, 4)"
        :key="event.id"
        :event="event"
      />
    </div>
<div 
  class="flex justify-center mt-12" 
  data-aos="fade-up"
  data-aos-offset="10" 
  data-aos-delay="100   "
>
  <router-link to="/event">
    <button class="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-full shadow-lg transform transition-all duration-300 hover:-translate-y-1">
      Jelajahi Lebih Banyak Event Menarik!
    </button>
  </router-link>
</div>
  </section>

  
  <PromoCarousel />
  
</template>