<script setup>
// 1. Tentukan "Props" (data) apa yang dia terima dari induk
defineProps({
  category: {
    type: Object,
    required: true
  },
  // Kita tambahkan prop 'isActive' untuk tahu apakah tombol ini sedang aktif
  isActive: {
    type: Boolean,
    default: false
  }
});

// 2. Tentukan "Emits" (sinyal) apa yang dia kirim ke induk
const emit = defineEmits(['selectCategory']);
</script>

<template>
  <button 
    @click="emit('selectCategory', category)"
    class="w-full flex items-center gap-3 p-2 rounded-lg transition-all duration-200"
    :class="isActive ? 'bg-orange-500/20 text-orange-400' : 'hover:bg-gray-800'"
  >
    <img
      v-if="category.img"
      :src="category.img"
      :alt="category.name"
      class="w-8 h-8 object-cover rounded flex-shrink-0"
    />
    <div
      v-else
      class="w-8 h-8 rounded bg-gray-700 flex-shrink-0"
    ></div>
    
    <span class="font-semibold">{{ category.name }}</span>
  </button>
</template>