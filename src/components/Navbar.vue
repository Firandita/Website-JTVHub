<script setup>
import { ref, onMounted, onUnmounted, onUpdated, nextTick } from "vue";
import { RouterLink } from "vue-router";
import { useAuth } from "../useAuth"; 

const { isLoggedIn, userSession, logout } = useAuth();

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const checkScreenSize = () => {
  if (window.innerWidth >= 1024) {
    isMobileMenuOpen.value = false;
  }
};

const loadIcons = () => {
  nextTick(() => {
    if (window.feather) window.feather.replace();
  });
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const handleMobileLogout = () => {
    toggleMobileMenu();
    logout();
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", checkScreenSize);
  loadIcons();
});

onUpdated(() => {
  loadIcons();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", checkScreenSize);
});
</script>

<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300 text-white font-sans"
    :class="
      isMobileMenuOpen
        ? 'bg-[#071f44] py-4'
        : isScrolled
        ? 'bg-gradient-to-b from-[#071f44] to-transparent py-3 shadow-lg'
        : 'bg-transparent py-5'
    "
  >
    <div class="container mx-auto px-6 flex justify-between items-center">
      <div class="flex items-center gap-4 lg:gap-12">
        <RouterLink to="/" class="flex items-center gap-2 z-50 flex-shrink-0">
          <img
            src="/jtv_putih.png"
            alt="JTV Logo"
            class="h-8 md:h-9 object-contain"
          />
        </RouterLink>

        <div class="hidden lg:flex items-center gap-6 xl:gap-8 font-medium font-family text-sm">
          <RouterLink to="/" class="hover:text-orange-400 transition-colors aria-[current=page]:text-orange-500 aria-[current=page]:font-bold">Home</RouterLink>
          <RouterLink to="/live" class="hover:text-orange-400 transition-colors aria-[current=page]:text-orange-500 aria-[current=page]:font-bold">Live</RouterLink>
          <RouterLink to="/video" class="hover:text-orange-400 transition-colors aria-[current=page]:text-orange-500 aria-[current=page]:font-bold">Video</RouterLink>
          <RouterLink to="/event" class="hover:text-orange-400 transition-colors aria-[current=page]:text-orange-500 aria-[current=page]:font-bold">Event</RouterLink>
          <RouterLink to="/community" class="hover:text-orange-400 transition-colors aria-[current=page]:text-orange-500 aria-[current=page]:font-bold">JTV Community</RouterLink>
          <RouterLink to="/social" class="hover:text-orange-400 transition-colors aria-[current=page]:text-orange-500 aria-[current=page]:font-bold">Social Media</RouterLink>
        </div>
      </div>

      <div class="flex items-center gap-3 z-50">
        
        <div class="hidden lg:block">
            <div v-if="isLoggedIn" class="flex items-center gap-2 pl-4">
                
                <div class="w-8 h-8 rounded-full bg-orange-600 grid place-items-center flex-shrink-0">
                    <span class="text-white font-bold text-xs font-family leading-none mt-[1px]">{{ userSession?.initial }}</span>
                </div>

                <div class="flex flex-col justify-center">
                    <span class="text-xs font-bold text-white font-family leading-tight">{{ userSession?.name }}</span>
                    <span class="text-[10px] text-gray-400 font-family leading-tight">{{ userSession?.email }}</span>
                </div>

                <button 
                    @click="logout" 
                    class="ml-2 text-gray-500 hover:text-red-500 transition-colors"
                    title="Keluar"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                </button>
            </div>
            <RouterLink
                v-else
                to="/login"
                class="bg-gradient-to-r from-orange-400 to-orange-600 px-5 py-1.5 rounded-lg font-family font-semibold hover:opacity-90 transition-opacity text-xs text-white shadow-md"
            >
                Login
            </RouterLink>
        </div>

        <button
          @click="toggleMobileMenu"
          class="lg:hidden p-2 w-10 h-10 flex justify-center items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
        >
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
    </div>

    <transition name="slide-fade">
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden absolute top-full left-0 w-full bg-[#071F44] flex flex-col py-6 px-6 gap-2 pb-10 border-t border-white/10 shadow-2xl"
      >
        <div v-if="isLoggedIn" class="flex items-center gap-3 mb-4 p-3 border-b border-white/5">
            <div class="w-10 h-10 bg-orange-600 rounded-full grid place-items-center font-bold text-white text-sm font-family">
                <span class="leading-none mt-[1px]">{{ userSession?.initial }}</span>
            </div>
            <div>
                <p class="font-bold text-white font-family text-sm">{{ userSession?.name }}</p>
                <p class="text-xs text-gray-400 font-family">{{ userSession?.email }}</p>
            </div>
        </div>

        <RouterLink to="/" @click="toggleMobileMenu" class="block py-2 hover:text-orange-400 text-center text-lg font-family font-medium aria-[current=page]:text-orange-500">Home</RouterLink>
        <RouterLink to="/live" @click="toggleMobileMenu" class="block py-2 hover:text-orange-400 text-center text-lg font-family font-medium aria-[current=page]:text-orange-500">Live</RouterLink>
        <RouterLink to="/video" @click="toggleMobileMenu" class="block py-2 hover:text-orange-400 text-center text-lg font-family font-medium aria-[current=page]:text-orange-500">Video</RouterLink>
        <RouterLink to="/event" @click="toggleMobileMenu" class="block py-2 hover:text-orange-400 text-center text-lg font-family font-medium aria-[current=page]:text-orange-500">Event</RouterLink>
        <RouterLink to="/community" @click="toggleMobileMenu" class="block py-2 hover:text-orange-400 text-center text-lg font-family font-medium aria-[current=page]:text-orange-500">JTV Community</RouterLink>
        <RouterLink to="/social" @click="toggleMobileMenu" class="block py-2 hover:text-orange-400 text-center text-lg font-family font-medium aria-[current=page]:text-orange-500">Social Media</RouterLink>

        <div class="mt-6">
             <button 
                v-if="isLoggedIn"
                @click="handleMobileLogout"
                class="w-full bg-red-600/80 hover:bg-red-700 py-2.5 rounded-lg font-family font-bold text-center transition-colors text-white text-sm"
            >
                Logout
            </button>

             <RouterLink
                v-else
                to="/login"
                @click="toggleMobileMenu"
                class="block w-full bg-gradient-to-r from-orange-400 to-orange-600 py-2.5 rounded-lg font-family font-bold text-center shadow-lg text-white text-sm"
            >
                Login
            </RouterLink>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>