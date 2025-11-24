<script setup>
import { ref, onMounted, onUnmounted, onUpdated, nextTick } from 'vue';
import { RouterLink } from 'vue-router';

const isScrolled = ref(false);
const isSearchOpen = ref(false);
const searchQuery = ref('');
const isMobileMenuOpen = ref(false);

// --- LOGIC SCROLL ---
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

// --- LOGIC SEARCH ---
const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
  if (isSearchOpen.value) {
    setTimeout(() => document.getElementById('searchInput').focus(), 100);
  }
};

// --- LOGIC RESPONSIF (BIAR MENU TUTUP SENDIRI DI LAPTOP) ---
const checkScreenSize = () => {
  // Jika layar lebih besar dari 1024px (Laptop), tutup menu HP
  if (window.innerWidth >= 1024) {
    isMobileMenuOpen.value = false;
  }
};

// --- LOGIC ICON FEATHER ---
const loadIcons = () => {
  nextTick(() => {
    if (window.feather) window.feather.replace();
  });
};

// --- LOGIC TOMBOL MENU (MANUAL BIAR GAK ERROR) ---
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// --- LIFECYCLE ---
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', checkScreenSize); // Pasang sensor layar
  loadIcons();
});

onUpdated(() => {
  loadIcons();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', checkScreenSize); // Copot sensor layar
});
</script>

<template>
  <nav 
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300 text-white font-sans"
    :class="isMobileMenuOpen 
      ? 'bg-[#071f44] py-4' 
      : (isScrolled ? 'bg-gradient-to-b from-[#071f44] to-transparent py-4' : 'bg-transparent py-5')"
  >

    <div class="container mx-auto px-6 flex justify-between items-center">
      
      <div class="flex items-center gap-4 lg:gap-12">
        <RouterLink to="/" class="flex items-center gap-2 z-50 flex-shrink-0">
          <img src="/jtv_putih.png" alt="JTV Logo" class="h-8 md:h-10 object-contain">
        </RouterLink>

        <div class="hidden lg:flex items-center gap-6 xl:gap-8 font-medium font-family text-sm xl:text-base">
          <RouterLink to="/" class="hover:text-orange-400 transition-colors aria-[current=page]:text-orange-500 aria-[current=page]:font-bold">Home</RouterLink>
          <RouterLink to="/live" class="hover:text-orange-400 transition-colors aria-[current=page]:text-orange-500 aria-[current=page]:font-bold">Live</RouterLink>
          <RouterLink to="/video" class="hover:text-orange-400 transition-colors aria-[current=page]:text-orange-500 aria-[current=page]:font-bold">Video</RouterLink>
          <RouterLink to="/event" class="hover:text-orange-400 transition-colors aria-[current=page]:text-orange-500 aria-[current=page]:font-bold">Event</RouterLink>
          <RouterLink to="/community" class="hover:text-orange-400 transition-colors aria-[current=page]:text-orange-500 aria-[current=page]:font-bold">Community</RouterLink>
          <RouterLink to="/social" class="hover:text-orange-400 transition-colors aria-[current=page]:text-orange-500 aria-[current=page]:font-bold">Social Media</RouterLink>
        </div>
      </div>

      <div class="flex items-center gap-3 z-50">
        <div class="flex items-center rounded-full p-1 relative overflow-hidden transition-all duration-300"
             :class="isSearchOpen ? 'pr-3 bg-white/10' : 'bg-white/10 hover:bg-white/20'">
          <button @click="toggleSearch" class="w-8 h-8 flex items-center justify-center rounded-full transition-colors flex-shrink-0" :class="isSearchOpen ? 'text-orange-100' : 'text-white'">
            <i data-feather="search" class="w-4 h-4"></i>
          </button>
          <input id="searchInput" v-model="searchQuery" type="text" placeholder="Cari..." class="bg-transparent border-none outline-none text-white text-sm placeholder-white/50 transition-all duration-300" :class="isSearchOpen ? 'w-32 md:w-48 ml-2 opacity-100' : 'w-0 opacity-0'"/>
        </div>

        <RouterLink 
          to="/login" 
          class="hidden lg:block bg-gradient-to-r from-orange-400 to-orange-600 px-6 py-2 rounded-lg font-family font-semibold hover:opacity-90 transition-opacity text-sm"        >
          Login
        </RouterLink>

        <!-- <button class="hidden lg:block bg-gradient-to-r from-orange-400 to-orange-600 px-6 py-2 rounded-lg font-family font-semibold hover:opacity-90 transition-opacity text-sm">Login</button> -->

        <button @click="toggleMobileMenu" class="lg:hidden p-2 w-10 h-10 flex justify-center items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50">
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
    </div>

    <transition name="slide-fade">
      <div 
        v-if="isMobileMenuOpen" 
        class="lg:hidden absolute top-full left-0 w-full bg-[#071F44] flex flex-col py-6 px-6 gap-2 pb-10"
        style="top: calc(100% - 1px);"
      >
        <RouterLink to="/" @click="toggleMobileMenu" class="block py-2 hover:text-orange-400 text-center text-lg font-family font-medium aria-[current=page]:text-orange-500">Home</RouterLink>
        <RouterLink to="/live" @click="toggleMobileMenu" class="block py-2 hover:text-orange-400 text-center text-lg font-family font-medium aria-[current=page]:text-orange-500">Live</RouterLink>
        <RouterLink to="/video" @click="toggleMobileMenu" class="block py-2 hover:text-orange-400 text-center text-lg font-family font-medium aria-[current=page]:text-orange-500">Video</RouterLink>
        <RouterLink to="/event" @click="toggleMobileMenu" class="block py-2 hover:text-orange-400 text-center text-lg font-family font-medium aria-[current=page]:text-orange-500">Event</RouterLink>
        <RouterLink to="/community" @click="toggleMobileMenu" class="block py-2 hover:text-orange-400 text-center text-lg font-family font-medium aria-[current=page]:text-orange-500">JTV Community</RouterLink>
        <RouterLink to="/social" @click="toggleMobileMenu" class="block py-2 hover:text-orange-400 text-center text-lg font-family font-medium aria-[current=page]:text-orange-500">Social Media</RouterLink>

        <RouterLink 
          to="/login" 
          @click="toggleMobileMenu"
          class="w-full mt-4 bg-gradient-to-r from-orange-400 to-orange-600 py-3 rounded-lg font-family font-bold text-center shadow-lg"
        >
          Login
        </RouterLink>

        <!-- Belum bikin halaman login -->
        <!-- <button @click="toggleMobileMenu" class="w-full mt-4 bg-gradient-to-r from-orange-400 to-orange-600 py-3 rounded-lg font-family font-bold text-center shadow-lg">Login</button> -->
      </div>
    </transition>

  </nav>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>