<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// === DATA BANNER ===
const banners = ref([
  {
    id: 1,
    image: "/BannerPromosi/banner-promosi-jtv1.png",
    alt: "Promo Aplikasi JTV",
  },
  {
    id: 2,
    image: "/BannerPromosi/banner-promosi-jtv2.png",
    alt: "Promo Merchandise",
  },
  {
    id: 3,
    image: "/BannerPromosi/banner-promosi-jtv3.png",
    alt: "Promo Event",
  },
]);

const currentSlide = ref(0);
const autoPlayInterval = ref(null);
const touchStartX = ref(0);
const touchEndX = ref(0);

// --- LOGIC SLIDER ---
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % banners.value.length;
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + banners.value.length) % banners.value.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
  resetAutoPlay();
};

// --- AUTO PLAY ---
const startAutoPlay = () => {
  stopAutoPlay();
  autoPlayInterval.value = setInterval(nextSlide, 5000);
};

const stopAutoPlay = () => {
  if (autoPlayInterval.value) clearInterval(autoPlayInterval.value);
};

const resetAutoPlay = () => {
  stopAutoPlay();
  startAutoPlay();
};

// --- SWIPE GESTURE ---
const handleTouchStart = (e) => {
  touchStartX.value = e.changedTouches[0].screenX;
  stopAutoPlay();
};

const handleTouchEnd = (e) => {
  touchEndX.value = e.changedTouches[0].screenX;
  handleSwipe();
  startAutoPlay();
};

const handleSwipe = () => {
  if (touchEndX.value < touchStartX.value - 50) nextSlide();
  if (touchEndX.value > touchStartX.value + 50) prevSlide();
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>

<template>
  <section class="container mx-auto px-6 py-16 pb-20" data-aos="fade-up">
    
    <h2 class="text-2xl font-family font-bold mb-16 text-center">
      Jangan Lewatkan <span class="text-orange-600"><br>Promo & Info</span> Spesial!
    </h2>

    <div 
      class="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl group touch-pan-y border border-gray-200 dark:border-gray-800"
      @mouseenter="stopAutoPlay"
      @mouseleave="startAutoPlay"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
      <div
        class="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div
          v-for="banner in banners"
          :key="banner.id"
          class="w-full flex-shrink-0"
        >
          <div class="w-full h-48 md:h-[400px] bg-gray-100 relative">
             <img
              :src="banner.image"
              :alt="banner.alt"
              @dragstart.prevent
              class="w-full h-full object-cover select-none"
            />
          </div>
        </div>
      </div>

      <button
        @click="prevSlide"
        class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-orange-600 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md hidden md:block"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
      </button>

      <button
        @click="nextSlide"
        class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-orange-600 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md hidden md:block"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
      </button>

      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 bg-black/20 px-4 py-2 rounded-full backdrop-blur-md">
        <button
          v-for="(banner, index) in banners"
          :key="index"
          @click="goToSlide(index)"
          class="h-2 rounded-full transition-all duration-300 shadow-sm"
          :class="currentSlide === index ? 'bg-orange-500 w-8' : 'bg-white/70 w-2 hover:bg-white'"
        ></button>
      </div>
    </div>
  </section>
</template>