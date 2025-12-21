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
    class="group block w-full h-full cursor-pointer"
  >
    <div class="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-800 mb-2">
      <img 
        :src="video.thumbnail" 
        :alt="video.title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>

      <div class="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-medium px-1.5 py-0.5 rounded">
        {{ video.duration || '00:00' }}
      </div>
    </div>

    <div class="flex flex-col gap-1">
      <h3 
        class="text-white text-sm font-medium leading-snug line-clamp-2 group-hover:text-orange-800 transition-colors"
        :title="video.title"
      >
        {{ video.title }}
      </h3>
      
      <span class="text-gray-500 text-xs">
         {{ video.date }}
      </span>
    </div>
  </a>
</template>