<script setup>
defineProps({
  category: { type: Object, required: true },
  active: { type: Boolean, default: false }
});
</script>

<template>
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
