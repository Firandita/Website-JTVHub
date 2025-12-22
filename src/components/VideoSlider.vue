<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const router = useRouter();

const modules = [Navigation, Autoplay];

// === DATA PROGRAM ===
const daftarProgram = ref([
  {
    id: 1,
    name: "Pojok Kampung",
    category: "News",
    image: "/VideoSlider/berita.png",
  },
  {
    id: 2,
    name: "Pojok Pitu",
    category: "News",
    image: "/VideoSlider/berita.png",
  },
  {
    id: 3,
    name: "Jatim Awan",
    category: "News",
    image: "/VideoSlider/berita.png",
  },
  {
    id: 4,
    name: "Ngopi Sek",
    category: "Komedi",
    image: "/VideoSlider/berita.png",
  },
  {
    id: 5,
    name: "Semar Mesem",
    category: "Komedi",
    image: "/VideoSlider/berita.png",
  },
  {
    id: 6,
    name: "Ndoro Bei",
    category: "Komedi",
    image: "/VideoSlider/berita.png",
  },
  {
    id: 7,
    name: "Stasiun Dangdut",
    category: "Musik",
    image: "/VideoSlider/berita.png",
  },
  {
    id: 8,
    name: "Padange Ati",
    category: "Religi",
    image: "/VideoSlider/berita.png",
  },
  {
    id: 9,
    name: "Ngaji Blusukan",
    category: "Religi",
    image: "/VideoSlider/berita.png",
  },
  {
    id: 10,
    name: "Mancing Bois",
    category: "Olahraga",
    image: "/VideoSlider/berita.png",
  },
]);

const goToProgram = (program) => {
  router.push({
    path: "/video",
    query: { kategori: program.category, sub: program.name },
  });
};
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 md:px-8 py-12 mb-20">
    <h2
      data-aos="fade-up"
      class="text-2xl font-family font-bold mb-16 text-center"
    >
      Berbagai <span class="text-orange-600">Program</span> Menarik Siap
      <br class="hidden md:block" />
      Menghibur <span class="text-orange-600">Anda!</span>
    </h2>

    <div class="relative group">
      <swiper
        :modules="modules"
        :navigation="{
          prevEl: '.prev-arrow',
          nextEl: '.next-arrow',
        }"
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :centeredSlides="true"
        :spaceBetween="30"
        :breakpoints="{
          320: { slidesPerView: 1.2, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }"
        class="pb-12 !overflow-visible"
      >
        <swiper-slide
          v-for="program in daftarProgram"
          :key="program.id"
          class="program-slide group cursor-pointer"
          @click="goToProgram(program)"
        >
          <div
            class="relative overflow-hidden rounded-2xl aspect-video bg-gray-800 shadow-2xl border border-gray-700 transition-all duration-300"
          >
            <img
              :src="program.image"
              :alt="program.name"
              onerror="this.src='https://placehold.co/600x400/1e1e1e/FFF?text=No+Image'"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div
              class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"
            ></div>

            <div class="absolute bottom-0 left-0 w-full p-5">
              <span
                class="text-xs font-bold text-orange-400 uppercase tracking-wider mb-2 block"
              >
                {{ program.category }}
              </span>
              <h3
                class="text-xl md:text-2xl font-bold text-white leading-tight group-hover:text-orange-200 transition-colors"
              >
                {{ program.name }}
              </h3>
            </div>

            <div
              class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20"
            >
              <div
                class="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(234,88,12,0.5)] transform scale-0 group-hover:scale-100 transition-transform duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>

      <div
        class="prev-arrow absolute top-1/2 left-2 md:-left-12 z-20 cursor-pointer bg-gray-900/80 hover:bg-orange-600 border border-gray-700 p-3 rounded-full transition-all duration-300 shadow-lg -translate-y-1/2 -mt-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="currentColor"
          class="w-6 h-6 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </div>

      <div
        class="next-arrow absolute top-1/2 right-2 md:-right-12 z-20 cursor-pointer bg-gray-900/80 hover:bg-orange-600 border border-gray-700 p-3 rounded-full transition-all duration-300 shadow-lg -translate-y-1/2 -mt-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="currentColor"
          class="w-6 h-6 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
.program-slide {
  transform: scale(0.9);
  opacity: 0.5;
  transition: all 0.5s ease;
  filter: blur(1px);
}

.swiper-slide-active {
  transform: scale(1.05);
  opacity: 1;
  filter: blur(0);
  z-index: 20;
}

.swiper {
  overflow: visible !important;
}
</style>
