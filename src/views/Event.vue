<script setup>
import EventCard from '../components/EventCard.vue'
import CategoryItem from '../components/CategoryItem.vue'
import { ref, computed } from 'vue' 

// --- MODAL STATE ---
const showPosterModal = ref(false)

const selectedPoster = ref({
  image: '',
  title: '',
  description: ''
})

/**
 * Membuka modal poster dengan data poster yang diterima dari EventCard.
 * @param {Object} poster - Objek yang berisi image, title, dan description poster.
 */
function openPoster(poster) {
  if (!poster || !poster.image) return
  selectedPoster.value = poster
  showPosterModal.value = true
}

function closePoster() {
  showPosterModal.value = false
}

// --- DATA EVENTS ---
const ongoingEvents = [
  {
    id: 1,
    title: 'Hackathon Kuadran 4.0',
    type: 'Kompetisi',
    date: 'Hari, dd-mm-yy',
    link: 'https://link-pendaftaran-1.com',
    poster: {
      image: 'https://via.placeholder.com/600x400/FF5733/FFFFFF?text=Hackathon+Poster+1',
      title: 'Hackathon Kuadran 4.0',
      description: 'Detail poster Hackathon Kuadran 4.0'
    }
  },
  {
    id: 2,
    title: 'Event Komunitas Musik Lokal',
    type: 'Komunitas',
    date: 'Sabtu, 15-12-2024',
    link: 'https://link-pendaftaran-2.com',
    poster: {
      image: 'https://via.placeholder.com/600x400/33FF57/FFFFFF?text=Musik+Lokal+Poster',
      title: 'Event Komunitas Musik Lokal',
      description: 'Saksikan penampilan band-band terbaik dari kota Anda.'
    }
  },
  {
    id: 3,
    title: 'Seminar Nasional IoT',
    type: 'Seminar',
    date: 'Rabu, 01-11-2024',
    link: 'https://link-pendaftaran-3.com',
    poster: {
      image: 'https://via.placeholder.com/600x400/3357FF/FFFFFF?text=Seminar+IoT+Poster',
      title: 'Seminar Nasional IoT',
      description: 'Membahas tren terbaru dan implementasi Internet of Things.'
    }
  },
  {
    id: 4,
    title: 'Voliga Jatim Cup 2024',
    type: 'Olahraga',
    date: 'Minggu, 05-01-2025',
    link: 'https://link-pendaftaran-4.com',
    poster: {
      image: 'https://via.placeholder.com/600x400/FFFF33/000000?text=Voliga+Poster',
      title: 'Voliga Jatim Cup 2024',
      description: 'Kejuaraan bola voli antar kota se-Jawa Timur.'
    }
  }
]

// --- DATA KATEGORI & VIDEO ---
const videoCategories = [
  { name: 'Awarding', icon: '🏆' },
  { name: 'Provinsi KAB./Kota', icon: '🗺️' },
  { name: 'Komisi Pemilihan Umum', icon: '🗳️' },
  { name: 'Kenduren', icon: '🍽️' },
  { name: 'Kampung Ramadhan', icon: '🌙' },
  { name: 'Event Komunitas', icon: '🤝' },
  { name: 'Event Komunitas Pondok Pesantren', icon: '🕌' },
  { name: 'Kompetisi', icon: '🏅' },
  { name: 'Voliga', icon: '🏐' },
  { name: 'CSR', icon: '🌱' }
]

const selectedCategory = ref('Awarding')

// Data Video - Menggunakan link YouTube lengkap
const videos = {
  Awarding: [
    {
      id: 1, 
      title: 'Jatim Bangkit Awards',
      link: 'https://www.youtube.com/watch?v=_mL3YVdN1Oo', 
      thumbnail: 'https://i.ytimg.com/vi/_mL3YVdN1Oo/hqdefault.jpg', 
      description: 'Selamat Datang di Channel Resmi JTV Rek JTV adalah televisi regional di Surabaya, Jawa Timur. JTV merupakan jaringan televisi swasta regional pertama sekaligus yang terbesar di Indonesia hingga saat ini.'
    },
    { 
      id: 2,
      title: 'Jatim Legislatif Awards', 
      link: 'https://www.youtube.com/watch?v=0cRW4m2xcx4', 
      thumbnail: 'https://i.ytimg.com/vi/0cRW4m2xcx4/hqdefault.jpg',
      description: 'Legislatif Jatim Awards 2025, sebuah momen penghargaan yang diberikan kepada para wakil rakyat Jawa Timur yang telah menunjukkan dedikasi, inovasi, dan komitmen dalam menjalankan fungsi legislasi, anggaran, serta pengawasan demi kemajuan daerah dan kesejahteraan masyarakat.   Acara ini menjadi momentum penting untuk memberikan apresiasi kepada anggota legislatif yang berprestasi, berintegritas, dan konsisten dalam memperjuangkan aspirasi rakyat. Melalui penghargaan ini, JTV ingin menginspirasi lahirnya wakil rakyat yang visioner, dekat dengan masyarakat, serta mampu menghadirkan kebijakan yang solutif dan berdampak nyata.  TEMA : LEGISLATIF JATIM AWARDS 2025 Hari & Tanggal : Rabu, 17 September 2025 Pukul : 19.00WIB  ????? Tonton sampai habis, dan beri komentar anda. Jangan lupa untuk like dan subscribe agar tidak ketinggalan event-event inspiratif berikutnya.'
    },
  ],
  'Provinsi KAB./Kota': [
    { 
      id: 5,
      title: 'Desa Ngijo, Karangploso, Malang ', 
      link: 'https://youtu.be/rl65974Xb-s?si=6Xg8jjvlUQ-SYw7I',
      thumbnail: 'https://i.ytimg.com/vi/6Xg8jjvlUQ-SYw7I/hqdefault.jpg',
      description: 'JTV is a Local TV in East Java that presents original content including news, traditions and entertainment. Subscribe to the JTV rek Youtube channel to always be informed with the latest videos from JTV rek.  JTV adalah sebuah TV Lokal di Jawa Timur yang menyajikan konten asli meliputi tayangan berita, tradisi dan hiburan. Subscribe channel Youtube JTV rek agar selalu mendapat informasi dengan video-video terbaru dari JTV rek.'
    },
  ],
}

// Komputasi untuk mendapatkan semua video (tanpa memisahkannya menjadi "utama" dan "lainnya")
// Kita akan menggunakan seluruh array video di template
const currentVideos = computed(() => {
    return videos[selectedCategory.value] || [];
});

// --- FUNGSI UTILITY ---
/**
 * Mengubah URL YouTube menjadi URL Embed yang aman untuk IFRAME.
 */
const getEmbedUrl = (link) => {
  if (!link) return ''
  // ... (Logika getEmbedUrl tetap sama) ...
  let videoId = ''
  const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=))([^&?]{11})/;
  const match = link.match(regExp);

  if (match) {
    videoId = match[1];
  } else {
    return '' 
  }

  return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`
}
</script>

<template>
  <div class="min-h-screen bg-black text-white font-roboto">
    <header
      class="relative h-64 md:h-80 bg-cover bg-center overflow-hidden"
      style="background-image: url('/event.png');"
    >
      <div class="absolute inset-0 z-10 bg-black opacity-10" />
    </header>

    <main class="container mx-auto px-4 py-10">

      <section class="mb-12">
        <h2 class="text-3xl font-extrabold mb-5 text-orange-500 border-b-2 border-gray-800 pb-2">
          🔥 Sedang Berlangsung
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <EventCard
            v-for="event in ongoingEvents"
            :key="event.id"
            :event="event"
            @lihatPoster="openPoster"
          />
        </div>
      </section>

      <hr class="border-gray-800 my-10" />

      <section class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div class="lg:col-span-1">
          <h2 class="text-xl font-bold mb-4 text-gray-300">Kategori Video</h2>

          <nav class="space-y-1 p-0">
            <CategoryItem
              v-for="category in videoCategories"
              :key="category.name"
              :category="{ name: category.name, icon: category.icon }"
              :isActive="selectedCategory === category.name"
              @click="selectedCategory = category.name"
            />
          </nav>
        </div>

        <div class="lg:col-span-3">
          <div class="bg-gray-800 p-3 mb-6 rounded-lg border-b-4 border-gray-700">
            <h2 class="text-xl font-bold text-center uppercase tracking-widest text-white">
              📺 {{ selectedCategory }}
            </h2>
          </div>

          <div 
            v-if="currentVideos.length === 0" 
            class="text-gray-400 p-5 bg-gray-900 rounded-lg text-center"
          >
            Belum ada video untuk kategori ini.
          </div>

          <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div
              v-for="vid in currentVideos"
              :key="vid.id"
              class="bg-gray-900 p-3 rounded-lg border-b-4 border-gray-700 hover:border-orange-600 transition duration-200"
            >
              <a :href="vid.link" target="_blank" class="group block">
                <div
                  class="relative bg-gray-700/50 rounded overflow-hidden mb-3 flex items-center justify-center aspect-video"
                >
                  <img 
                    :src="vid.thumbnail || 'https://via.placeholder.com/300x168?text=Thumbnail+Video'" 
                    :alt="vid.title"
                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div class="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 text-orange-500">
                      <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>

                <div>
                  <h3 class="text-md font-semibold text-gray-300 mb-1 line-clamp-2">
                    {{ vid.title }}
                  </h3>
                  <p class="text-sm text-gray-500 line-clamp-2">
                    {{ vid.description }}
                  </p>
                  <span class="inline-block mt-2 bg-orange-600 text-xs font-semibold px-3 py-1 rounded-full text-black">
                    Tonton Video
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <div
      v-if="showPosterModal"
      class="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      @click.self="closePoster"
    >
      <div class="bg-gray-900 rounded-lg p-6 max-w-lg w-full relative border border-gray-700 max-h-[90vh] overflow-y-auto">
        <button
          class="absolute top-2 right-2 text-white text-3xl hover:text-orange-500 transition"
          @click="closePoster"
        >
          &times;
        </button>

        <img
          :src="selectedPoster.image"
          :alt="'Poster ' + selectedPoster.title"
          class="rounded-lg w-full mb-4 object-contain"
        />

        <h3 class="text-xl font-bold mb-2">{{ selectedPoster.title }}</h3>
        <p class="text-gray-400 text-sm mb-4">{{ selectedPoster.description }}</p>

        <button
          class="bg-blue-600 hover:bg-blue-700 w-full py-2 rounded-lg text-white font-semibold"
          @click="closePoster"
        >
          Tutup
        </button>
      </div>
    </div>
  </div>
</template>