<script setup>
defineProps({
  category: {
    type: Object,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["selectCategory"]);
</script>

<template>
  <div
    @click="emit('selectCategory', category)"
    class="group flex items-center space-x-3 p-2 rounded-xl transition-all duration-300 cursor-pointer"
    :class="isActive ? 'bg-gray-800 shadow-md' : 'hover:bg-gray-800/50'"
  >
    <div
      class="w-10 h-10 rounded-full p-0.5 transition-all duration-300 flex items-center justify-center"
      :class="
        isActive
          ? 'bg-gradient-to-br from-yellow-400 to-orange-600 shadow-[0_0_10px_rgba(243,109,33,0.6)] scale-105'
          : 'bg-gray-800 group-hover:bg-gray-600'
      "
    >
      <img
        :src="category.img"
        :alt="category.name"
        class="w-full h-full rounded-full object-cover border border-gray-900/50"
      />
    </div>

    <span
      class="text-sm font-medium transition-colors duration-300"
      :class="
        isActive
          ? 'text-white font-bold'
          : 'text-gray-400 group-hover:text-gray-200'
      "
    >
      {{ category.name }}
    </span>
  </div>
</template>
