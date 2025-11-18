<template>
  <div class="container mx-auto px-6 py-16">
    <h2 class="text-3xl font-bold mb-8 text-center">Kategori Video</h2>
    <div class="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
      <div
        v-for="kategori in daftarKategori"
        :key="kategori.nama"
        class="flex flex-col items-center gap-3 cursor-pointer group"
      >
        <!-- <div class="w-28 h-28 md:w-32 md:h-32 bg-white rounded-full
            flex items-center justify-center relative overflow-hidden
            transition-all duration-300
            group-hover:bg-orange-500 group-hover:scale-105 border-2 border-transparent group-hover:border-orange-500">
     -->
    <img 
        :src="kategori.img" 
        :alt="kategori.nama"
        class="w-full h-full md:w-32 md:h-32 bg-white rounded-full group-hover:scale-105 transition-all duration-300" 
    />
    
<!-- </div> -->

        <p
          class="text-lg font-semibold group-hover:font-bold group-hover:text-orange-500 transition-all duration-300"
        >
          {{ kategori.nama }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const daftarKategori = ref([
  // Pastikan file gambar ini ada di folder 'public' kamu
  { nama: "News", img: "/KategoriVideo/news.png" },
  { nama: "Komedi", img: "/KategoriVideo/komedi.png" },
  { nama: "Musik", img: "/KategoriVideo/musik.png" },
  { nama: "Religi", img: "/KategoriVideo/religi.png" },
  { nama: "Talkshow", img: "/KategoriVideo/talkshow.png" },
  { nama: "Olahraga", img: "/KategoriVideo/olahraga.png" },
]);
</script>

<style scoped></style>
