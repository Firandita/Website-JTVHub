<script setup>
import { ref, onMounted } from 'vue';
import AOS from 'aos';
import { useRouter } from 'vue-router';
import 'aos/dist/aos.css';

const router = useRouter(); 

const daftarKategori = ref([
  { nama: "News", img: "/KategoriVideo/news.png" },
  { nama: "Komedi", img: "/KategoriVideo/komedi.png" },
  { nama: "Musik", img: "/KategoriVideo/musik.png" },
  { nama: "Religi", img: "/KategoriVideo/religi.png" },
  { nama: "Talkshow", img: "/KategoriVideo/talkshow.png" },
  { nama: "Olahraga", img: "/KategoriVideo/olahraga.png" },
]);

const keHalamanVideo = (namaKategori) => {
  router.push({
    path: '/video',
    query: { kategori: namaKategori } 
  });
};

onMounted(() => {
  AOS.init({
    once: true,
    duration: 800,
    offset: 100,
  });
});
</script>

<template>
  <div class="container mx-auto px-6 py-16 pb-20">
    <h2 
      data-aos="fade-up"
      class="text-2xl font-family font-bold mb-16 text-center">
    <span class="text-orange-600">Temukan</span> Kategori <span class="text-orange-600">Video </span>
      Yang Ingin <br><span class="text-orange-600">Anda </span> Tonton!
    </h2>
    <div class="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
      <div
        v-for="(kategori, index) in daftarKategori"
        :key="kategori.nama"
        @click="keHalamanVideo(kategori.nama)"
        data-aos="fade-up"
        :data-aos-delay="index * 100"
        class="flex flex-col items-center gap-3 cursor-pointer group"
      >
        <img 
            :src="kategori.img" 
            :alt="kategori.nama"
            class="w-full h-full md:w-32 md:h-32 bg-white rounded-full group-hover:scale-105 transition-all duration-300" 
        />
    
        <p class="text-lg font-semibold group-hover:font-bold group-hover:text-orange-500 transition-all duration-300">
          {{ kategori.nama }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>