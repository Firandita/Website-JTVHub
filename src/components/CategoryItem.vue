<script setup>
// 1. Tentukan "Props" (data) apa yang dia terima dari induk
defineProps({
<<<<<<< HEAD
  category: { type: Object, required: true },
  active: { type: Boolean, default: false }
=======
  category: {
    type: Object,
    required: true
  },
  // Kita tambahkan prop 'isActive' untuk tahu apakah tombol ini sedang aktif
  isActive: {
    type: Boolean,
    default: false
  }
>>>>>>> 7faecfd16efc195b4e191878dcbfbf991ce362e9
});

// 2. Tentukan "Emits" (sinyal) apa yang dia kirim ke induk
const emit = defineEmits(['selectCategory']);
</script>

<template>
<<<<<<< HEAD
  <a
    class="flex items-center space-x-3 p-3 rounded-lg transition duration-150 cursor-pointer"
    :class="active 
      ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg' 
      : 'hover:bg-gray-700/50'"
  >
    <!-- ICON -->
    <div
      class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold shadow-md"
      :class="[
        // Gradasi icon sesuai Figma
        'bg-gradient-to-br from-[#FFB457] via-[#FF8A00] to-[#FF6A00]',
        active ? 'ring-2 ring-white ring-offset-2 ring-offset-blue-500' : ''
      ]"
    >
      {{ category.icon }}
    </div>

    <!-- TEXT -->
    <span 
      class="text-sm font-medium"
      :class="active ? 'text-white' : 'text-gray-300'"
    >
      {{ category.name }}
    </span>
  </a>
</template>
=======
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
>>>>>>> 7faecfd16efc195b4e191878dcbfbf991ce362e9
