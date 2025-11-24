
<script setup>
const officialJTV = [
  { name: 'Facebook', handle: 'JTV Official', logoUrl: '/logo-medsos/fb.png', link: 'https://facebook.com/jtvofficial' },
  { name: 'Instagram', handle: '@JTV_rek', logoUrl: '/logo-medsos/ig.png', link: 'https://instagram.com/jtv_rek' },
  { name: 'YouTube', handle: 'JTV Official', logoUrl: '/logo-medsos/yt.png', link: 'https://youtube.com/jtvofficial' },
  { name: 'Twitter (X)', handle: '@JTV_rek', logoUrl: '/logo-medsos/x.png', link: 'https://twitter.com/jtv_rek' },
];

const portalJTV = [
  { name: 'Facebook', handle: 'Portal JTV', logoUrl: '/logo-medsos/fb.png', link: 'https://www.facebook.com/portaljtvcom' },
  { name: 'Instagram', handle: '@portaljtvcom', logoUrl: '/logo-medsos/ig.png', link: 'https://www.instagram.com/portaljtvcom?igsh=MWkzMDE2YnhpMnhyOA==' },
  { name: 'Youtube', handle: 'Portal JTV', logoUrl: '/logo-medsos/yt.png', link: 'https://youtube.com/@portaljtvdotcom?si=6KWFLqZ9ws1qdtK2' },
  { name: 'Twitter (X)', handle: '@portaljtvcom', logoUrl: '/logo-medsos/x.png', link: '' },
  { name: 'Tiktok', handle: '@portaljtvcom', logoUrl: '/logo-medsos/tiktok.png', link: 'https://www.tiktok.com/@portaljtvcom?_r=1&_t=ZS-91VAH2W3cAR' },
  { name: 'WhatsApp', handle: 'Portal JTV', logoUrl: '/logo-medsos/wa.png', link: '' },
];

const StasiunDangdut = [
  { name: 'Instagram', handle: '@stasiundangdutjtv', logoUrl: '/logo-medsos/ig.png', link: 'https://www.instagram.com/stasiundangdut_jtv?igsh=bjAxcXVqdnRsNjIx' },
  { name: 'Youtube', handle: 'stasiun dangdut', logoUrl: '/logo-medsos/yt.png', link: 'https://youtube.com/@stasiundangdut?si=tcxx53LkL0TrOI03' },
];

const isYouTube = (url) => url.toLowerCase().includes('yt');
</script>

<template>
  <div class="min-h-screen bg-black text-white font-roboto">

    <!-- HEADER -->
    <header
      class="relative h-72 overflow-hidden flex items-center justify-center p-4"
      style="background: linear-gradient(135deg, #071F44 0%, #1a3b68 70%, #104e8b 100%);"
    >
      <div class="absolute inset-0 opacity-10 bg-repeat"></div>

      <div class="z-10 text-center">
        <h1 class="text-5xl md:text-6xl font-black tracking-tight text-white mb-2 shadow-text">
          TERHUBUNG DENGAN KAMI
        </h1>
        <p class="text-xl text-gray-200 font-light">
          Jelajahi Dunia JTV melalui semua platform kami.
        </p>
      </div>
    </header>

    <main class="container mx-auto px-4 py-16">

      <!-- PLATFORM RESMI JTV -->
      <section class="mb-25">
        <h2 class="text-3xl font-extrabold mb-8 text-left text-orange-400 pb-2">
          PLATFORM RESMI JTV
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <a
            v-for="platform in officialJTV"
            :key="platform.name"
            :href="platform.link"
            target="_blank"
            rel="noopener noreferrer"
            class="group bg-gray-900/80 p-6 rounded-2xl shadow-2xl transition duration-300 transform hover:scale-[1.03] hover:shadow-orange-700/50 hover:bg-gray-800 cursor-pointer"
          >
            <div class="flex items-center space-x-4">
              <div
                class="w-14 h-14 rounded-xl flex items-center justify-center bg-white shadow-lg transition-all group-hover:rotate-6 overflow-hidden"
                :class="isYouTube(platform.logoUrl) ? 'p-[6px]' : 'p-[3px]'"
              >
                <img :src="platform.logoUrl" class="w-full h-full object-contain" />
              </div>

              <div class="flex-grow">
                <h3 class="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                  {{ platform.name }}
                </h3>
                <p class="text-gray-400 text-sm font-medium">{{ platform.handle }}</p>
              </div>
            </div>

            <div class="mt-4 text-right">
              <span class="text-sm font-semibold text-orange-500 group-hover:text-orange-300 transition-colors">
                Kunjungi Profil →
              </span>
            </div>
          </a>
        </div>
      </section>

      <!-- PORTAL JTV -->
      <section class="mb-25">
        <h2 class="text-3xl font-extrabold mb-8 text-left text-blue-400 pb-2">
          PORTAL JTV
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <a
            v-for="portal in portalJTV"
            :key="portal.name + portal.handle"
            :href="portal.link"
            target="_blank"
            rel="noopener noreferrer"
            class="group bg-gray-900/80 p-6 rounded-2xl shadow-2xl transition duration-300 transform hover:scale-[1.03] hover:shadow-blue-700/50 hover:bg-gray-800 cursor-pointer"
          >
            <div class="flex items-center space-x-4">
              <div
                class="w-14 h-14 rounded-xl flex items-center justify-center bg-white shadow-lg transition-all group-hover:rotate-6 overflow-hidden"
                :class="isYouTube(portal.logoUrl) ? 'p-[6px]' : 'p-[3px]'"
              >
                <img :src="portal.logoUrl" class="w-full h-full object-contain" />
              </div>

              <div class="flex-grow">
                <h3 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {{ portal.name }}
                </h3>
                <p class="text-gray-400 text-sm font-medium">{{ portal.handle }}</p>
              </div>
            </div>

            <div class="mt-4 text-right">
              <span class="text-sm font-semibold text-blue-500 group-hover:text-blue-300 transition-colors">
                Akses Portal →
              </span>
            </div>
          </a>
        </div>
      </section>

      <!-- STASIUN DANGDUT -->
      <section class="mb-25">
        <h2 class="text-3xl font-extrabold mb-8 text-left text-pink-400 pb-2">
          STASIUN DANGDUT
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <a
            v-for="platform in StasiunDangdut"
            :key="platform.name"
            :href="platform.link"
            target="_blank"
            rel="noopener noreferrer"
            class="group bg-gray-900/80 p-6 rounded-2xl shadow-2xl transition duration-300 transform hover:scale-[1.03] hover:shadow-pink-700/50 hover:bg-gray-800 cursor-pointer"
          >
            <div class="flex items-center space-x-4">
              <div
                class="w-14 h-14 rounded-xl flex items-center justify-center bg-white shadow-lg transition-all group-hover:rotate-6 overflow-hidden"
                :class="isYouTube(platform.logoUrl) ? 'p-[6px]' : 'p-[3px]'"
              >
                <img :src="platform.logoUrl" class="w-full h-full object-contain" />
              </div>

              <div class="flex-grow">
                <h3 class="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
                  {{ platform.name }}
                </h3>
                <p class="text-gray-400 text-sm font-medium">{{ platform.handle }}</p>
              </div>
            </div>

            <div class="mt-4 text-right">
              <span class="text-sm font-semibold text-pink-500 group-hover:text-pink-300 transition-colors">
                Kunjungi Profil →
              </span>
            </div>
          </a>
        </div>
      </section>

    </main>
  </div>
</template>

<style scoped>
.shadow-text {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
