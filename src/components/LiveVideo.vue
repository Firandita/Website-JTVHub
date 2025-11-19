<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Hls from 'hls.js';

const props = defineProps({
  streamUrl: { type: String, required: true }
});

const videoPlayer = ref(null);
const containerRef = ref(null);
let hls = null;

onMounted(() => {
  const video = videoPlayer.value;
  if (Hls.isSupported()) {
    hls = new Hls();
    hls.loadSource(props.streamUrl);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(e => console.log("Autoplay blocked:", e));
    });
    hls.on(Hls.Events.ERROR, function (event, data) {
        if (data.fatal) {
            hls.startLoad();
        }
    });
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = props.streamUrl;
    video.addEventListener('loadedmetadata', () => {
      video.play();
    });
  }
});

onUnmounted(() => {
  if (hls) hls.destroy();
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <div ref="containerRef" class="relative w-full bg-black rounded-xl overflow-hidden shadow-lg group aspect-video border border-gray-800">
      
      <video ref="videoPlayer" class="w-full h-full object-cover" controls autoplay muted playsinline></video>

      <div class="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded flex items-center gap-2 animate-pulse z-10">
        <span class="w-2 h-2 bg-white rounded-full"></span> LIVE
      </div>

    </div>

    <div class="bg-gray-900 p-6 rounded-xl border border-gray-800">
      <div class="flex justify-between items-start">
        <div>
          <p class="text-orange-500 text-sm font-semibold mb-1 tracking-wider">SEDANG TAYANG</p>
          <h1 class="text-2xl md:text-3xl font-bold text-white mb-2 font-sans">Stasiun Dangdut</h1>
          
          <p class="text-gray-400 text-sm font-sans flex items-center gap-2">
            <span>22.00 - 23.30 WIB</span>
            <span class="text-gray-600">•</span>
            <span class="flex items-center gap-1 text-red-500 font-semibold">
              12.5K Menonton
            </span>
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
          <p class="text-xs text-gray-500">Official Broadcaster</p>
        </div>
      </div>
    </div>
  </div>
</template>