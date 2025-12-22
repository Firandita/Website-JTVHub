<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="relative pb-4">
    <div class="absolute top-0 left-0 w-full h-[300px]"></div>

    <div
      class="container mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 items-center gap-12 relative z-10"
    >
      <div class="flex flex-col gap-4">
        <h1 class="text-4xl md:text-5xl font-family font-bold leading-tight">
          Nikmati Tayangan Favoritmu di JTVHub
        </h1>
        <p class="text-gray-300 text-lg mt-2 font-family">
          JTVHub menghadirkan konten televisi, berita terkini, hiburan, dan
          tayangan lokal yang relevan dengan hidupmu. Nikmati pengalaman
          menonton yang lebih mudah, cepat, dan interaktif.
        </p>

        <div class="flex flex-wrap gap-4 mt-6">
          <a
            href="https://play.google.com/store/apps/details?id=com.jtvplusplus.jtv_plus_plus"
            target="_blank"
            class="flex items-center gap-2 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 text-white rounded-lg px-6 py-2 hover:opacity-90 hover:shadow-lg transition-all duration-300 group"
          >
            <img
              src="/playstore-hd.png"
              alt="Google Play Logo"
              class="w-7 h-7 object-contain group-hover:scale-110 transition-transform"
            />

            <div class="flex flex-col leading-1 mt-1">
              <span
                class="text-[10px] uppercase font-medium tracking-wider text-gray-300"
              >
                GET IT ON
              </span>
              <span class="text-base font-medium font-sans mt-0.5">
                Google Play
              </span>
            </div>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.jtvplusplus.jtv_plus_plus"
            target="_blank"
            class="flex items-center gap-1 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 hover:opacity-90 hover:shadow-lg transition-all duration-300 group"
          >
            <img
              src="/apple-hd-2.png"
              alt="App Store Logo"
              class="w-10 h-10 object-contain group-hover:scale-110 transition-transform pb-1"
            />

            <div class="flex flex-col leading-1 mt-1">
              <span
                class="text-[10px] uppercase font-normal tracking-wider text-gray-300"
              >
                Download on the
              </span>
              <span class="text-base font-medium font-sans mt-0.5">
                App Store
              </span>
            </div>
          </a>
        </div>
      </div>

      <div class="relative flex justify-center items-center mt-10 md:mt-0 z-10">
        <div
          class="absolute w-[300px] h-[300px] bg-red-500 rounded-full mix-blend-multiply opacity-30 blur-2xl animate-blob -left-10"
        ></div>
        <div
          class="absolute w-[300px] h-[300px] bg-yellow-500 rounded-full mix-blend-multiply opacity-30 blur-2xl animate-blob animation-delay-2000 top-0 right-0"
        ></div>
        <div
          class="absolute w-[300px] h-[300px] bg-blue-500 rounded-full mix-blend-multiply opacity-30 blur-2xl animate-blob animation-delay-4000 -bottom-8 left-20"
        ></div>

        <img
          data-aos="zoom-in"
          src="/public/gambar HP JtvHub.png"
          alt="Aplikasi JTVHub"
          class="w-[400px] md:w-[500px] rounded-2xl shadow-lg transform -rotate-6 relative z-20"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Definisi Animasi Blob */
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
