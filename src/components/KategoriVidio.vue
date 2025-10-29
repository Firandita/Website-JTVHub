<template>
    <div class="container mx-auto px-6 py-16">
        <h2 class="text-3xl font-bold mb-8">Kategori Video</h2>
        <div class="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
            <div 
            v-for="kategori in daftarKategori"
            :key="kategori.nama"
            class="flex flex-col items-center gap-3 cursor-pointer group">

            <div class="w-28 h-28 md:w-32 bg-gray-700 rounded-full
            flex items-center justify-center
            transition-all duration-300
            group-hover:bg-orange-500 group-hover:scale-105">
            </div>
        
            <p class="text-lg font-semibold">{{ kategori.nama }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

//ini data dummy, 
// kita buat sebuah array data langsung di sini.
//nanti, data ini akan kita ambil dari "services" /API
const daftarKategori = ref([
{nama: 'News'},
{nama: 'Komedi'},
{nama: 'Musik'},
{nama: 'Religi'},
{nama: 'Talkshow'},
{nama: 'Olahraga'},
]);
</script>

<style scoped>
</style>