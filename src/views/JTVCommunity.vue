<script setup>
// Data Dummy untuk Magang dan Karir
const careerItems = [
  { 
    title: 'Magang', 
    description: 'Deskripsi singkat mengenai kesempatan magang di JTV Hub.',
    buttonText: 'Daftar Magang',
    type: 'internal',               // 🔥 Untuk RouterLink
    url: '/daftar-magang'
  },
  { 
    title: 'Kunjungan', 
    description: 'Program kunjungan langsung ke JTV untuk pelajar/mahasiswa.',
    buttonText: 'Daftar Kunjungan',
    type: 'external',               // 🔥 Biar jadi <a href="">
    url: 'https://google.com'       // Ganti ke link kamu
  },
];
</script>

<template>
  <div class="min-h-screen bg-black text-white font-roboto">
    
    <header class="relative h-64 md:h-80 bg-[#0F2D52] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-900 to-black opacity-80"></div>
        <h1 class="text-4xl md:text-6xl font-bold text-white relative z-10 tracking-wider">JTV COMMUNITY</h1>
    </header>

    <main class="container mx-auto px-4 py-12">
      
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-center text-white">Magang dan Karir</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div 
            v-for="(item, index) in careerItems" 
            :key="index" 
            class="bg-gray-900 rounded-xl shadow-xl overflow-hidden"
          >
            <div class="h-48 bg-gray-700/50 flex items-center justify-center"></div>
            
            <div class="p-6">
              <h3 class="text-xl font-bold text-white mb-2">{{ item.title }}</h3>
              <p class="text-gray-400 mb-4 text-sm">{{ item.description }}</p>

              <!-- 🔥 Jika internal → RouterLink -->
              <RouterLink 
                v-if="item.type === 'internal'"
                :to="item.url"
                class="px-5 py-2 text-sm font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition duration-150 inline-block"
              >
                {{ item.buttonText }}
              </RouterLink>

              <!-- 🔥 Jika external → <a href> -->
              <a 
                v-else
                :href="item.url"
                target="_blank"
                class="px-5 py-2 text-sm font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition duration-150 inline-block"
              >
                {{ item.buttonText }}
              </a>

            </div>
          </div>
          
        </div>
      </section>

      <div class="border-t border-gray-800 my-10"></div>

      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-center text-white">Jelajahi lebih banyak</h2>
        
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <div class="h-40 bg-gray-700/50 flex items-center justify-center">
              [Placeholder Konten 1]
            </div>
            <div class="p-4">
              <h3 class="text-lg font-semibold text-gray-300 truncate">Transportasi Publik</h3>
              <button class="mt-2 px-4 py-1 text-xs font-medium text-white bg-orange-600 rounded-full hover:bg-orange-700">
                Join WA Group
              </button>
            </div>
          </div>

          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <div class="h-40 bg-gray-700/50 flex items-center justify-center">
              [Placeholder Konten 2]
            </div>
            <div class="p-4">
              <h3 class="text-lg font-semibold text-gray-300 truncate">Transportasi Publik</h3>
              <button class="mt-2 px-4 py-1 text-xs font-medium text-white bg-orange-600 rounded-full hover:bg-orange-700">
                Join WA Group
              </button>
            </div>
          </div>

          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <div class="h-40 bg-gray-700/50 flex items-center justify-center">
              [Placeholder Konten 3]
            </div>
            <div class="p-4">
              <h3 class="text-lg font-semibold text-gray-300 truncate">Transportasi Publik</h3>
              <button class="mt-2 px-4 py-1 text-xs font-medium text-white bg-orange-600 rounded-full hover:bg-orange-700">
                Join WA Group
              </button>
            </div>
          </div>

          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <div class="h-40 bg-gray-700/50 flex items-center justify-center">
              [Placeholder Konten 4]
            </div>
            <div class="p-4">
              <h3 class="text-lg font-semibold text-gray-300 truncate">Transportasi Publik</h3>
              <button class="mt-2 px-4 py-1 text-xs font-medium text-white bg-orange-600 rounded-full hover:bg-orange-700">
                Join WA Group
              </button>
            </div>
          </div>

        </div>
      </section>

      <section class="py-10">
        <h2 class="text-3xl font-bold mb-8 text-center text-white">Partner</h2>
        
        <div class="flex justify-center space-x-12">
          <div class="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center text-sm text-gray-400">
            Logo 1
          </div>
          <div class="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center text-sm text-gray-400">
            Logo 2
          </div>
          <div class="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center text-sm text-gray-400">
            Logo 3
          </div>
        </div>
      </section>
      
    </main>

  </div>
</template>
