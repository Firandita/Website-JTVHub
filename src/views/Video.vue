<script setup>
import { ref, computed } from "vue";
import CategoryItem from "../components/CategoryItem.vue";
import VideoCard from "../components/VideoCard.vue";

// --- KUMPULAN DATA ---

// 1. Data Kategori (Sidebar Kiri)
const videoCategories = ref([
  { name: "News", img: "/KategoriVideo/news.png" },
  { name: "Komedi", img: "/KategoriVideo/komedi.png" },
  { name: "Musik", img: "/KategoriVideo/musik.png" },
  { name: "Religi", img: "/KategoriVideo/religi.png" },
  { name: "Talkshow", img: "/KategoriVideo/talkshow.png" },
  { name: "Olahraga", img: "/KategoriVideo/olahraga.png" },
]);

// 2. (BARU) Data Sub-Kategori
//    Ini adalah daftar "tab" untuk SETIAP kategori utama
const subCategories = ref({
  News: ["Pojok Kampung", "Pojok Pitu", "Jatim Awan"],
  Komedi: ["Cak Lontong", "Srimulat"],
  Musik: ["Stasiun Dangdut", "Jazz Traffic"],
  Religi: ["Ustadz X", "Ustadz Y"],
});

// 3. (UPGRADE) "Master List" SEMUA video
//    Kita tambahkan properti 'subCategory'
const allVideos = ref([
  // Kategori News
  {
    id: 1, 
    title: 'Arek Lanang Kelemon Dievakuasi', // (Judul dari screenshot-mu)
    category: 'News', 
    subCategory: 'Pojok Kampung', 
    status: 'Telah Tayang', 
    statusColor: 'bg-orange-600',
    thumbnail: '/ThumbnailVideo/arek_lanang_kelemon.png',
    youtubeUrl: 'https://youtu.be/Gh3TNTWAsSs?si=yDdkKCFRV0kqZmyS'
  },
  {
    id: 2,
    title: "Berita 2",
    category: "News",
    subCategory: "Pojok Pitu",
    thumbnail: "...",
  },
  {
    id: 3,
    title: "Berita 3",
    category: "News",
    subCategory: "Jatim Awan",
    thumbnail: "...",
  },
  {
    id: 4,
    title: "Berita 4",
    category: "News",
    subCategory: "Pojok Kampung",
    thumbnail: "...",
  },
  // Kategori Komedi
  {
    id: 5,
    title: "Cak Lontong Eps 1",
    category: "Komedi",
    subCategory: "Cak Lontong",
    thumbnail: "...",
  },
  {
    id: 6,
    title: "Srimulat Jadul",
    category: "Komedi",
    subCategory: "Srimulat",
    thumbnail: "...",
  },
]);

// --- LOGIC (OTAK) HALAMAN ---

// 4. (STATE 1) Kategori Utama yang Aktif
const activeCategoryName = ref("News"); // Set 'News' sebagai default

// 5. (STATE 2) Sub-Kategori yang Aktif
const activeSubCategoryName = ref("Pojok Kampung"); // Set 'Pojok Kampung' sebagai default

// 6. (UPGRADE) Fungsi "Sihir" (Computed)
//    Sekarang mem-filter berdasarkan DUA state
const filteredVideos = computed(() => {
  return allVideos.value.filter(
    (video) =>
      video.category === activeCategoryName.value &&
      video.subCategory === activeSubCategoryName.value
  );
});

// 7. (BARU) Computed untuk mengambil daftar tab yang benar
const currentSubCategoryTabs = computed(() => {
  return subCategories.value[activeCategoryName.value] || [];
});

// 8. (FUNGSI AKSI 1) Saat Sidebar Kiri diklik
function handleCategoryClick(category) {
  activeCategoryName.value = category.name;
  // (PENTING) Reset sub-kategori ke 'default' (tab pertama)
  activeSubCategoryName.value = subCategories.value[category.name][0];
}

// 9. (FUNGSI AKSI 2) Saat Tab Kanan Atas diklik
function handleSubCategoryClick(subCategory) {
  activeSubCategoryName.value = subCategory;
}
</script>

<template>
  <div class="min-h-screen bg-black text-white font-sans">
    <header
      class="relative h-64 md:h-80 bg-cover bg-center overflow-hidden bg-[#0d1a33]"
    >
      <div
        class="absolute inset-0 z-10 opacity-70 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500"
      ></div>
      <div class="absolute inset-0 z-20 flex items-center justify-center">
        <div class="p-6 border-2 border-white max-w-fit mx-auto">
          <h1
            class="text-6xl md:text-8xl font-extrabold tracking-widest uppercase text-white"
          >
            VIDEO
          </h1>
        </div>
      </div>
    </header>

    <main class="container mx-auto px-16 py-10">
    
      <section class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div class="lg:col-span-1">
          <h2 class="text-xl font-bold mb-4 text-gray-300 ">Kategori Video</h2>
          <nav class="space-y-1 p-0">
            <CategoryItem
              v-for="category in videoCategories"
              :key="category.name"
              :category="category"
              :isActive="category.name === activeCategoryName"
              @selectCategory="handleCategoryClick"
            />
          </nav>
        </div>

        <div class="lg:col-span-3">
          <div class="bg-gray-800 p-3 mb-6 rounded-lg border-b-4 border-gray-700">
            <h2 class="text-xl font-bold text-center uppercase tracking-widest text-white">{{ activeCategoryName }}</h2>
          </div>

          <div class="flex items-center gap-2 mb-6">
            <button
              v-for="subCat in currentSubCategoryTabs"
              :key="subCat"
              @click="handleSubCategoryClick(subCat)"
              class="px-4 py-1.5 rounded-full text-sm font-semibold transition-colors"
              :class="
                activeSubCategoryName === subCat
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              "
            >
              {{ subCat }}
            </button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <p
              v-if="filteredVideos.length === 0"
              class="text-gray-400 col-span-3"
            >
              Belum ada video di kategori ini.
            </p>

            <VideoCard
              v-for="video in filteredVideos"
              :key="video.id"
              :video="video"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
