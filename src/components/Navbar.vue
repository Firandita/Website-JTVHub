<template>
  <nav class="bg-[#071F44] text-white shadow-md">
    
    <div class="container mx-auto px-6 py-3 flex justify-between items-center">
      
      <div class="flex items-center gap-8">
        
        <img src="/jtv_putih.png" alt="JTV Logo" class="h-10">
        
        <div class="hidden md:flex items-center gap-6 font-medium">
          <a href="#" class="text-orange-500 font-bold">Home</a>
          <a href="#" class="hover:text-orange-300 transition-colors">Live</a>
          <a href="#" class="hover:text-orange-300 transition-colors">Video</a>
          <a href="#" class="hover:text-orange-300 transition-colors">Event</a>
          <a href="#" class="flex items-center hover:text-orange-300 transition-colors">
            More
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 ml-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
        </div>
      </div>
      
      <div class="flex items-center gap-4">
        
        <button class="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg> 
        </button>
        
        <button class="bg-gradient-to-r from-orange-400 to-orange-600 px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
          Login
        </button>

        </div>
      
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
</style>