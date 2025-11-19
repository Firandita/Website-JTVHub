<script setup>
import { ref } from 'vue';
import HeroSection from '../components/HeroSection.vue';
import KategoriVidio from '../components/KategoriVidio.vue';
import VideoSlider from '../components/VideoSlider.vue';
import EventCard from '../components/EventCard.vue';

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
  <HeroSection />
  <KategoriVidio />
  <VideoSlider />

  <section class="mb-12">
        <h2 class="text-xl font-family font-bold mb-5 text-gray-300">Sedang Berlangsung</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <EventCard 
            v-for="event in ongoingEvents.slice(0, 4)"
            :key="event.id"
            :event="event"
          />
        </div>
      </section>

</template>