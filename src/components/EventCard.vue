<script setup>
const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['lihatPoster']);
</script>

<template>
  <div class="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-700 flex flex-col h-full">

    <div class="relative h-48 w-full bg-gray-800">
      <img 
        :src="event.poster" 
        :alt="event.title"
        class="w-full h-full object-cover object-top"
        @error="(e) => e.target.src = '/HACKATON.jpeg'"
      />
    </div>

    <div class="p-4 flex flex-col flex-grow">
      <p class="text-orange-400 text-xs font-bold mb-1">
        {{ event.type?.toUpperCase() }}
      </p>

      <h3 class="text-lg font-semibold text-white leading-tight min-h-[3rem]">
        {{ event.title }}
      </h3>

      <p class="text-gray-400 text-xs mt-1">
        {{ event.date }}
      </p>

      <div class="flex flex-col mt-auto pt-4 space-y-3">
        <button
          class="bg-orange-500 text-black py-2 rounded-lg font-semibold hover:bg-orange-400 transition"
          @click="emit('lihatPoster', event.poster)"
        >
          Lihat Poster
        </button>

        <a
          :href="event.link"
          target="_blank"
          class="text-center border border-orange-500 text-orange-500 py-2 rounded-lg font-semibold hover:bg-orange-500 hover:text-black transition"
        >
          Daftar
        </a>
      </div>
    </div>
  </div>
</template>