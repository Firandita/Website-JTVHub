<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import Hls from 'hls.js';

const props = defineProps({
  streamUrl: { type: String, required: true }
});

const videoPlayer = ref(null);
const containerRef = ref(null);
let hls = null;

const initPlayer = () => {
  const video = videoPlayer.value;
  if (!video) return;

  // Bersihkan instance lama jika ada
  if (hls) hls.destroy();

  // Cek apakah browser support HLS Native (Safari) atau butuh Hls.js (Chrome/Firefox)
  if (Hls.isSupported()) {
    hls = new Hls();
    hls.loadSource(props.streamUrl);
    hls.attachMedia(video);
    
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
        // Browser modern memblokir suara otomatis, jadi harus di-mute dulu biar bisa autoplay
        video.play().catch(e => console.log("Autoplay blocked (User must interact first):", e));
    });

    // Penanganan Error biar gak diem aja kalau link putus
    hls.on(Hls.Events.ERROR, function (event, data) {
        if (data.fatal) {
            console.log("Stream Error, mencoba reconnect...");
            hls.startLoad();
        }
    });

  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    // Khusus Safari (iPhone/Mac)
    video.src = props.streamUrl;
    video.addEventListener('loadedmetadata', () => {
      video.play();
    });
  }
};

onMounted(() => {
  initPlayer();
});

// Kalau link berubah, restart player
watch(() => props.streamUrl, () => {
  initPlayer();
});

onUnmounted(() => {
  if (hls) hls.destroy();
});
</script>

<template>
  <div class="flex flex-col gap-4">

    <!-- Video -->
    <div ref="containerRef" class="relative w-full bg-black overflow-hidden shadow-lg group aspect-video border border-gray-800">
      
      <video 
        ref="videoPlayer" 
        class="w-full h-full object-cover" 
        controls 
        autoplay 
        muted 
        playsinline
      ></video>

      <div class="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded flex items-center gap-2 animate-pulse z-10 pointer-events-none">
        <span class="w-2 h-2 bg-white rounded-full"></span> LIVE
      </div>

    </div>
    <!-- Video end -->

    <!-- Deskripsi Tayangan -->
    <div class="mt-8">
      <div class="flex justify-between items-start">
        <div>
          
          <div class="bg-red-600 w-fit px-1 py-1 rounded mb-2 flex items-center justify-center">
          <p class="text-white text-[10px] font-bold tracking-widest uppercase">SEDANG TAYANG
          </p>
          </div>

          <!-- untuk judul tayangan ini masih dummy -->
          <h1 class="text-2xl md:text-3xl font-bold text-white mb-2 font-sans">Pojok Arena</h1>
          
          <p class="text-white text-sm font-sans font-medium flex items-center gap-2">
            <span>22.00 - 23.30 WIB</span>
          </p>
        </div>
        
        <div class="flex gap-2">
            <button class="p-2 bg-gray-800 rounded-full hover:bg-orange-600 hover:text-white transition text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" /></svg>
            </button>
        </div>
      </div>

      <div class="flex items-center gap-3 mt-6 pt-4 border-t border-gray-800">
        <div class="w-10 h-10 rounded-full bg-white p-0.5">
             <img src="/jtv_putih.png" alt="JTV" class="w-full h-full object-contain bg-black rounded-full"> 
        </div>
        <div>
          <h3 class="font-bold text-white font-sans text-lg">JTV Rek</h3>
          <p class="text-xs text-orange-400">12.2k Menonton</p>
        </div>
      </div>
    </div>
    <!-- Deskripsi tayangan end -->

  </div>
</template>