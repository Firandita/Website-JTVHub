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
  <div class="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-700">

    <div class="bg-gray-700 h-40 flex items-center justify-center text-gray-400 text-sm">
      [Gambar Event]
    </div>

    <div class="p-4">

      <p class="text-orange-400 text-xs font-bold mb-1">
        {{ event.type.toUpperCase() }}
      </p>

      <h3 class="text-lg font-semibold text-white leading-tight">
        {{ event.title }}
      </h3>

      <p class="text-gray-400 text-xs mt-1">
        {{ event.date }}
      </p>

      <div class="flex flex-col mt-4 space-y-3">

        <!-- LIHAT POSTER -->
        <button
          class="bg-orange-500 text-black py-2 rounded-lg font-semibold hover:bg-orange-400 transition"
          @click="emit('lihatPoster', event.poster)"
        >
          Lihat Poster
        </button>

        <!-- DAFTAR (MENUJU LINK) -->
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
