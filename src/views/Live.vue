<script>
import { ref } from "vue";

// ref untuk menampung elemen pembungkus video
const videoContainer = ref(null);

// fungsi untuk mengaktifkan/menonaktifkan fullscreen
const toggleFullscreen = () => {
  const el = videoContainer.value; // mengambil elemen

  if (!el) return; //jika elemen tidak ditemukan, stop

  if (!document.fullscreenElement) {
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    }
  } else {
    //jika iya fullscreen, minta keluar fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
};
</script>

<template>
  <div class="container mx-auto px-6 py-24">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2">
        <div
          ref="videoContainer"
          class="relative bg-black rounded-lg overflow-hidden"
        >
          <video
            class="w-full aspect-video"
            poster="https://placehold.co/1280x720/000000/ffffff?text=JTV+Live+Stream"
            controls
          ></video>

          <button
            @click="toggleFullscreen"
            class="absolute top-2 right-2 z-10 p-2 bg-black/30 rounded-full hover:bg-black/70 transition-colors"
            title="Toggle Fullscreen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75v4.5m0-4.5h-4.5m4.5 0L15 9m5.25 11.25v-4.5m0 4.5h-4.5m4.5 0L15 15"
              />
            </svg>
          </button>
        </div>
        <div class="mt-4">
          <p class="text-sm text-gray-400">Tayangan saat ini</p>
          <h1 class="text-3xl font-bold">Stasiun Dangdut</h1>
          <p class="text-gray-300">22.00 - 23.30 WIB</p>

          <div
            class="flex flex-col md:flex-row justify-between items-center mt-4 pt-4 border-t border-gray-700"
          >
            <div class="flex items-center gap-3 self-start">
              <img
                src="https://placehold.co/40x40/FF5722/000000?text=J"
                alt="JTV Rek"
                class="w-10 h-10 rounded-full bg-gray-700"
              />
              <div>
                <h3 class="font-bold">JTV Rek</h3>
                <p class="text-sm text-gray-400">75K Menonton</p>
              </div>
            </div>

            <div class="flex-grow w-full md:flex-grow-0 md:w-1/2 mt-4 md:mt-0">
              <div class="relative">
                <input
                  type="text"
                  placeholder="Ketik sesuatu..."
                  class="w-full bg-gray-700 rounded-full py-2 px-5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  class="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-orange-500 hover:text-orange-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L6 12Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="lg:col-span-1 bg-gray-800 rounded-lg flex flex-col h-[600px] lg:h-[700px]"
      >
        <div class="p-4 border-b border-gray-700">
          <h3 class="font-bold text-lg text-center">Live chat</h3>
        </div>

        <div
          class="flex-grow flex flex-col justify-center items-center gap-4 p-4 text-center"
        >
          <p class="text-gray-300">
            Login atau Register untuk bergabung di Live Chat
          </p>

          <button
            class="w-3/4 bg-gradient-to-r from-orange-400 to-orange-600 px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Login
          </button>

          <button
            class="w-3/4 border border-orange-500 text-orange-500 px-5 py-2 rounded-lg font-semibold hover:bg-orange-500 hover:text-black transition-colors"
          >
            Register
          </button>
        </div>

        <div class="p-4 border-t border-gray-700 mt-auto">
          <input
            type="text"
            placeholder="Login untuk chat..."
            class="w-full bg-gray-700 rounded-full py-2 px-5 text-white placeholder-gray-500"
            disabled
          />
        </div>
      </div>
    </div>
  </div>
</template>
