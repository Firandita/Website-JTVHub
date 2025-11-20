<script setup>
import { RouterView, useRoute } from 'vue-router'; // Import useRoute
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue'; // Asumsi kamu punya Footer component

const route = useRoute(); // Inisialisasi route untuk baca meta
</script>

<template>
  <Navbar v-if="!route.meta.hideNavbar" />

  <RouterView />

  <Footer v-if="!route.meta.hideFooter" />
</template>