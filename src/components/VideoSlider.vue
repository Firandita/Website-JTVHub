<script setup>
import { ref } from 'vue';

// 1. Impor Swiper & modul Navigasi (untuk panah)
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

// 2. Impor CSS Swiper
import 'swiper/css';
import 'swiper/css/navigation'; // <-- Impor CSS untuk Navigasi

// 3. Daftarkan modul Navigasi
const modules = [Navigation];

// siapkan data dummy. Perhatikan properti 'thumbnail'.
// pakai placeholder dulu. Nanti kamu tinggal ganti URL-nya.
const daftarProgram = ref([
  { 
    id: 1, 
    judul: 'Pojok Pitu', 
    thumbnail: 'https://placehold.co/400x300/6b7280/ffffff?text=Pojok+Pitu' 
  },
  { 
    id: 2, 
    judul: 'Stasiun Dangdut', 
    thumbnail: 'https://placehold.co/400x300/6b7280/ffffff?text=Stasiun+Dangdut' 
  },
  { 
    id: 3, 
    judul: 'Pojok Kampung', 
    thumbnail: 'https://placehold.co/400x300/6b7280/ffffff?text=Pojok+Kampung' 
  },
  { 
    id: 4, 
    judul: 'Program Lain', 
    thumbnail: 'https://placehold.co/400x300/6b7280/ffffff?text=Program+Lain' 
  },
]);
</script>

<template>
  <div class="container mx-auto px-6 py-16 pb-32 relative">
    
    <div class="h-1 bg-gradient-to-r from-teal-400 via-yellow-300 to-pink-500 mb-12"></div>
    
    <h2 class="text-3xl font-bold mb-8 text-center">Program</h2>
    
    <swiper
      :modules="modules"
      :navigation="{
        prevEl: '.prev-arrow',
        nextEl: '.next-arrow',
      }"
      :loop="true"
      :slidesPerView="1"
      :spaceBetween="30"
      :centeredSlides="true"
      :breakpoints="{
        768: {
          slidesPerView: 3,
        }
      }"
      class="pb-10"
    >
      <swiper-slide 
        v-for="program in daftarProgram" 
        :key="program.id"
        class="program-slide"
      >
        <img 
          :src="program.thumbnail" 
          :alt="program.judul"
          class="w-full h-auto aspect-video object-cover rounded-lg shadow-lg bg-gray-700"
        >
        
        <p class="text-center font-semibold text-lg mt-4">{{ program.judul }}</p>

      </swiper-slide>
    </swiper>
    
    <div class="prev-arrow absolute top-1/2 -left-4 z-10 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-10 h-10 text-orange-500 hover:text-orange-400">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </div>
    <div class="next-arrow absolute top-1/2 -right-4 z-10 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-10 h-10 text-orange-500 hover:text-orange-400">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </div>

    <div class="h-1 bg-gradient-to-r from-teal-400 via-yellow-300 to-pink-500 mt-12"></div>

  </div>
</template>

<style scoped>
/* Kita buat slide yang tidak aktif jadi sedikit
  mengecil dan transparan.
*/
.program-slide {
  opacity: 0.6;
  transform: scale(0.9);
  transition: opacity 0.3s, transform 0.3s;
}

/* Slide yang aktif akan jadi 100% opacity 
  dan ukurannya normal.
*/
.swiper-slide-active {
  opacity: 1;
  transform: scale(1);
}
</style>