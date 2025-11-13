<script setup>
defineProps({
  category: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <a href="#" class="flex items-center space-x-3 p-3 rounded-lg transition duration-150 hover:bg-gray-700/50">
    <div class="w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center text-lg shadow-md text-black">
      {{ category.icon }}
    </div>
    <span class="text-sm font-medium text-gray-300">
      {{ category.name }}
    </span>
  </a>
</template>