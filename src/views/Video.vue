<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import CategoryItem from "../components/CategoryItem.vue";
import VideoCard from "../components/VideoCard.vue";

// Import data dari folder Data
import { videos as allDatabaseVideos } from "../Data/videos.js";

const route = useRoute();

// Kategori
const videoCategories = ref([
  { name: "News", img: "/KategoriVideo/news.png" },
  { name: "Komedi", img: "/KategoriVideo/komedi.png" },
  { name: "Musik", img: "/KategoriVideo/musik.png" },
  { name: "Religi", img: "/KategoriVideo/religi.png" },
  { name: "Talkshow", img: "/KategoriVideo/talkshow.png" },
  { name: "Olahraga", img: "/KategoriVideo/olahraga.png" },
]);

// Sub Kategori
const subCategories = ref({
  News: ["Pojok Kampung", "Pojok Pitu", "Jatim Awan"],
  Komedi: ["Ngopi Sek", "Semar Mesem", "Ndoro bei"],
  Musik: ["Stasiun Dangdut"],
  Religi: ["Padange Ati", "Ngaji Blusukan"],
  Talkshow: ["Ruang Karir", "Hukum ditengah kita", "Podcast jatim"],
  Olahraga: ["Mancing Bois"],
});

// --- STATE ---
const activeCategoryName = ref("News");
const activeSubCategoryName = ref("Pojok Kampung");
const searchQuery = ref("");

// Config Load More
const initialCount = 8;
const visibleCount = ref(initialCount);

// --- FILTER DATA VIDEO ---
const currentVideos = computed(() => {
  return allDatabaseVideos.filter((video) => {
    return (
      video.category === activeCategoryName.value &&
      video.subCategory === activeSubCategoryName.value
    );
  });
});

// --- FILTER PENCARIAN ---
const searchedVideos = computed(() => {
  if (!searchQuery.value) return currentVideos.value;

  const query = searchQuery.value.toLowerCase();
  return currentVideos.value.filter((video) =>
    video.title.toLowerCase().includes(query)
  );
});

// --- LOGIC TAMPILAN (LOAD MORE) ---
const visibleVideos = computed(() => {
  return searchedVideos.value.slice(0, visibleCount.value);
});

const showLoadMoreBtn = computed(() => {
  return visibleCount.value < searchedVideos.value.length;
});

const showShowLessBtn = computed(() => {
  return (
    visibleCount.value >= searchedVideos.value.length &&
    searchedVideos.value.length > initialCount
  );
});

const currentSubCategoryTabs = computed(
  () => subCategories.value[activeCategoryName.value] || []
);

// --- FUNCTIONS ---
function handleCategoryClick(categoryObj) {
  activeCategoryName.value = categoryObj.name;
  if (subCategories.value[categoryObj.name]) {
    activeSubCategoryName.value = subCategories.value[categoryObj.name][0];
  }
  resetState();
}

function handleSubCategoryClick(subCategory) {
  activeSubCategoryName.value = subCategory;
  resetState();
}

function resetState() {
  visibleCount.value = initialCount;
  searchQuery.value = "";
}

function loadMore() {
  visibleCount.value += 12;
}

function showLess() {
  visibleCount.value = initialCount;
  document
    .getElementById("video-content-area")
    ?.scrollIntoView({ behavior: "smooth" });
}

watch(searchQuery, () => {
  visibleCount.value = initialCount;
});

onMounted(() => {
  const catUrl = route.query.kategori;
  if (catUrl && subCategories.value[catUrl])
    handleCategoryClick({ name: catUrl });
});
</script>

<template>
  <div class="min-h-screen text-white font-sans">
    <header
      class="relative h-64 md:h-80 bg-[#0F2D52] flex items-center justify-center overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-900 to-black opacity-80"
      ></div>

      <div class="relative z-10 text-center px-4 animate-fade-in">
        <h1
          class="text-4xl md:text-6xl font-bold text-white tracking-wider mb-3"
        >
          VIDEO
        </h1>

        <p
          class="text-white text-sm md:text-lg max-w-xl mx-auto font-normal leading-relaxed opacity-90"
        >
          Nikmati pengalaman menonton yang lebih seru, lancar, dan eksklusif
          lewat <span class="font-semibold">Aplikasi JTVHub</span>.
        </p>
      </div>
    </header>

    <main class="container mx-auto px-4 md:px-8 py-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
        <div class="lg:col-span-3">
          <div class="sticky">
            <h2
              class="text-xl font-bold mb-6 text-white pl-2 border-l-4 border-orange-500"
            >
              Kategori Video
            </h2>
            <div class="space-y-2">
              <CategoryItem
                v-for="cat in videoCategories"
                :key="cat.name"
                :category="cat"
                :isActive="activeCategoryName === cat.name"
                @selectCategory="handleCategoryClick"
              />
            </div>
          </div>
        </div>

        <div class="lg:col-span-9" id="video-content-area">
          <div
            class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8"
          >
            <div class="flex flex-wrap items-center gap-2">
              <button
                v-for="subCat in currentSubCategoryTabs"
                :key="subCat"
                @click="handleSubCategoryClick(subCat)"
                class="px-4 py-2 rounded-full text-xs font-medium tracking-wider transition-all border"
                :class="
                  activeSubCategoryName === subCat
                    ? 'bg-orange-600 border-orange-600 text-white shadow-md'
                    : 'bg-[#1e1e1e] border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white'
                "
              >
                {{ subCat }}
              </button>
            </div>

            <div class="relative w-full md:w-64">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                v-model="searchQuery"
                type="text"
                class="block w-full py-2 pl-10 pr-3 text-sm text-white bg-[#1e1e1e] border border-gray-700 rounded-full focus:ring-orange-500 focus:border-orange-500 placeholder-gray-500 transition-all shadow-sm outline-none"
                placeholder="Cari video..."
              />
              <button
                v-if="searchQuery"
                @click="searchQuery = ''"
                class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 min-h-[300px]"
          >
            <div
              v-if="visibleVideos.length === 0"
              class="col-span-full text-center py-20 text-gray-500"
            >
              <div v-if="searchQuery">
                <p class="text-lg">
                  Tidak ada video:
                  <span class="text-orange-500 font-bold"
                    >"{{ searchQuery }}"</span
                  >
                </p>
              </div>
              <div v-else>
                <p>Belum ada video di kategori ini.</p>
              </div>
            </div>

            <VideoCard
              v-for="video in visibleVideos"
              :key="video.id"
              :video="video"
            />
          </div>

          <div
            class="flex justify-center mt-12 pt-8 border-t border-gray-800"
            v-if="showLoadMoreBtn || showShowLessBtn"
          >
            <button
              v-if="showLoadMoreBtn"
              @click="loadMore"
              class="group flex flex-col items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors"
            >
              <span class="text-sm font-family font-bold tracking-widest"
                >Tampilkan Lebih Banyak</span
              >
              <div
                class="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-orange-500 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </button>
            <button
              v-if="showShowLessBtn"
              @click="showLess"
              class="group flex flex-col items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors"
            >
              <span class="text-sm font-family font-bold tracking-widest"
                >Tampilkan Lebih Sedikit</span
              >
              <div
                class="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-orange-500 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
