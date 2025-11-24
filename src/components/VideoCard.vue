<script setup>
defineProps({
  video: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <a
    :href="video.youtubeUrl"
    target="_blank"
    class="group block bg-gray-900 rounded-lg overflow-hidden shadow-md 
           hover:shadow-orange-500/20 hover:border-orange-500 transition-all duration-300 relative"
  >
    
    <div class="relative w-full aspect-video overflow-hidden bg-gray-700">
      <img 
        :src="video.thumbnail" 
        :alt="video.title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div class="bg-orange-600 rounded-full p-3 shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white">
            <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
    
    <div class="p-3">
      <h3 class="text-white text-base font-semibold line-clamp-2 mb-2 group-hover:text-orange-400 transition-colors duration-200">
        {{ video.title }}
      </h3>
      
      <div class="inline-flex items-center gap-1.5 bg-gray-800 text-yellow-500 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors duration-200 group-hover:bg-yellow-500 group-hover:text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
        </svg>
        <span>Tonton Sekarang</span>
      </div>
    </div>
  </a>
</template>