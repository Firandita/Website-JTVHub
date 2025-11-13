<template>
  <footer class="bg-[#071F44] mt-12 pt-8 pb-4 border-t border-gray-800 text-white">
    <div class="container mx-auto px-4">
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-sm">
        
        <div>
          <img src="/jtv_putih.png" alt="JTV Logo" class="h-10 mb-3"> 
          
          <p class="text-sm text-gray-400 mb-4 leading-relaxed max-w-xs">
            Stasiun TV asal Surabaya yang mengangkat kearifan lokal Jawa Timur
          </p>
          
          <button class="flex items-center bg-gray-700 hover:bg-gray-600 transition duration-150 px-3 py-2 rounded-lg text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 2v20l18-10L3 2zm2.5 13.5l6-3.5-6-3.5v7z"/>
            </svg>
            Download di Playstore
          </button>
        </div>

        <div>
          <h4 class="font-bold mb-3 text-white uppercase tracking-wider">Quick links</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="/" class="hover:text-orange-400 transition-colors">Home</a></li>
            <li><a href="/live" class="hover:text-orange-400 transition-colors">Live</a></li>
            <li><a href="/video" class="hover:text-orange-400 transition-colors">Video</a></li>
            <li><a href="#" class="hover:text-orange-400 transition-colors">Portal JTV</a></li>
            <li><a href="/event" class="hover:text-orange-400 transition-colors">Event</a></li>
            <li><a href="/jtvcommunity" class="hover:text-orange-400 transition-colors">JTV Community</a></li>
            <li><a href="/socialmedia" class="hover:text-orange-400 transition-colors">Social Media</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold mb-3 text-white uppercase tracking-wider">Contact us</h4>
          <p class="text-gray-400 mb-2">
            **Telp:** (031) 8202170
          </p>
          <p class="text-gray-400">
            **Email:** Official@jtv.co.id
          </p>
        </div>

        <div>
          <h4 class="font-bold mb-3 text-white uppercase tracking-wider">Alamat Kantor Pusat</h4>
          <address class="text-gray-400 not-italic leading-relaxed">
            Gedung JTV, Kompleks Graha Pena, Jl. Ahmad Yani No.88, Ketintang, Gayungan, Surabaya, Jawa Timur
          </address>
        </div>
      </div>
      
      <div class="border-t border-gray-700 pt-4 mt-6">
        <p class="text-xs text-gray-500 text-center">
          © 2025 JTV. All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Jika Anda ingin menggunakan RouterLink, Anda bisa mengimpornya di sini
// import { RouterLink } from 'vue-router';
</script>