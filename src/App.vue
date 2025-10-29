<script setup>
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="min-h-screen bg-black text-white">
    
    <Navbar />
    <RouterView />
    
  </div>
</template>