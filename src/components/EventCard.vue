<script setup>
defineProps({
  event: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-700 hover:border-yellow-500 transition duration-300">
    <div class="h-32 bg-gray-700 relative flex items-center justify-center">
        <span class="text-sm text-gray-400">
          [Gambar Event]
        </span>
    </div>
    
    <div class="p-4">
      <p class="text-xs text-yellow-400 uppercase font-semibold">{{ event.type }}</p>
      <h3 class="text-lg font-bold truncate mb-2">{{ event.title }}</h3>
      <p class="text-sm text-gray-400 mb-4">{{ event.date }}</p>
      
      <div class="flex space-x-2">
        <button class="flex-1 py-2 text-sm font-medium text-center text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 transition duration-150 shadow-md">
          Lihat Detail
        </button>
        <button class="flex-1 py-2 text-sm font-medium text-center text-yellow-500 bg-gray-900 border border-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-black transition duration-150">
          Daftar
        </button>
      </div>
    </div>
  </div>
</template>