<template>
  <footer class="bg-[#071F44] mt-12 pt-8 pb-4 border-t border-gray-800 text-white">
    <div class="container mx-auto px-4">
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-sm">
        
        <!-- LOGO & PLAYSTORE / APPSTORE -->
        <div>
          <img src="/jtv_putih.png" alt="JTV Logo" class="h-10 mb-3">

          <p class="text-sm text-gray-400 mb-4 leading-relaxed max-w-xs">
            Stasiun TV asal Surabaya yang mengangkat kearifan lokal Jawa Timur
          </p>

          <div class="flex flex-wrap gap-3">

            <!-- PLAYSTORE -->
          <a 
              href="https://play.google.com/store"
              target="_blank"
              class="flex items-center gap-3 bg-[#0D1117] border border-[#1F2937] rounded-xl px-4 py-3 shadow-md hover:bg-[#1A1F25] transition w-48"
          >
            <img src="/playstore-hd.png" alt="Google Play" class="h-8">

          <div class="flex flex-col leading-tight">
           <span class="text-[10px] text-gray-300 font-semibold tracking-wide">GET IT ON</span>
           <span class="text-sm font-bold text-white">Google Play</span>
          </div>
          </a>

            <!-- APP STORE -->
          <a 
            href="https://apps.apple.com"
            target="_blank"
            class="flex items-center gap-3 bg-[#0D1117] border border-[#1F2937] rounded-xl px-4 py-3 shadow-md hover:bg-[#1A1F25] transition w-48"
          >
          <img src="/apple-hd-2.png" alt="App Store" class="h-8">

          <div class="flex flex-col leading-tight">
            <span class="text-[10px] text-gray-300 font-semibold tracking-wide">DOWNLOAD ON THE</span>
            <span class="text-sm font-bold text-white">App Store</span>
          </div>
        </a>



          </div>
        </div>

        <!-- QUICK LINKS -->
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

        <!-- CONTACT US -->
        <div>
          <h4 class="font-bold mb-3 text-white uppercase tracking-wider">Contact us</h4>
          <p class="text-gray-400 mb-2">
            <strong>Telp:</strong> (031) 8202170
          </p>
          <p class="text-gray-400">
            <strong>Email:</strong> Official@jtv.co.id
          </p>
        </div>

        <!-- ALAMAT -->
        <div>
          <h4 class="font-bold mb-3 text-white uppercase tracking-wider">Alamat Kantor Pusat</h4>
          <address class="text-gray-400 not-italic leading-relaxed">
            Gedung JTV, Kompleks Graha Pena, Jl. Ahmad Yani No.88,  
            Ketintang, Gayungan, Surabaya, Jawa Timur
          </address>
        </div>
      </div>
      
      <!-- COPYRIGHT -->
      <div class="border-t border-gray-700 pt-4 mt-6">
        <p class="text-xs text-gray-500 text-center">
          © 2025 JTV. All Rights Reserved
        </p>
      </div>

    </div>
  </footer>
</template>

<script setup>
</script>
