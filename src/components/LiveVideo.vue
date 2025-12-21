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

  if (hls) hls.destroy();

  if (Hls.isSupported()) {
    hls = new Hls();
    hls.loadSource(props.streamUrl);
    hls.attachMedia(video);
    
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(e => console.log("Autoplay blocked:", e));
    });

    hls.on(Hls.Events.ERROR, function (event, data) {
        if (data.fatal) {
            console.log("Stream Error, reconnecting...");
            hls.startLoad();
        }
    });

  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = props.streamUrl;
    video.addEventListener('loadedmetadata', () => {
      video.play();
    });
  }
};

onMounted(() => {
  initPlayer();
});

watch(() => props.streamUrl, () => {
  initPlayer();
});

onUnmounted(() => {
  if (hls) hls.destroy();
});
</script>

<template>
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
</template>