<template>
  <div class="relative overflow-hidden">
    
    <div class="absolute top-0 left-0 w-full h-[300px]
                bg-gradient-to-b from-orange-600 to-transparent 
                opacity-20 blur-3xl z-0"></div>

    <div class="container mx-auto px-6 py-16 grid md:grid-cols-2 items-center gap-12 relative z-10">
      
      <div class="flex flex-col gap-4">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight">
          Nikmati Tayangan Favoritmu di JTVHub
        </h1>
        <p class="text-gray-300 text-lg mt-2">
          JTVHub menghadirkan konten televisi, berita terkini, hiburan, dan tayangan lokal yang relevan dengan hidupmu. Nikmati pengalaman menonton yang lebih mudah, cepat, dan interaktif.
        </p>
        
        <div class="flex flex-wrap gap-4 mt-6">
          
          <a 
            href="https://play.google.com/store/apps/details?id=com.jtvplusplus.jtv_plus_plus" 
             target="_blank"
  rel="noopener noreferrer"

            class="bg-[#071F44] text-white font-semibold px-5 py-3 rounded-lg 
                   flex items-center gap-2 whitespace-nowrap 
                   hover:bg-[#051124] transition-colors"
          >
            <img src="/public/playstore 1.png" alt="Google Play Store Logo" class="h-6 w-auto"> 
            
            Download di Playstore
          </a>
          
          <a 
  href="#" 
  class="border border-orange-500 text-white font-semibold px-5 py-3 rounded-lg
         flex items-center gap-2 
         hover:bg-orange-500 transition-all duration-300 group"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    class="h-5 w-5 text-orange-500 group-hover:text-black transition-colors duration-300"
  >
    <path d="M7 6.2C7 5.1 8.1 4.5 9.1 5.1L17.3 10.6C18.2 11.2 18.2 12.6 17.3 13.2L9.1 18.7C8.1 19.3 7 18.7 7 17.6V6.2Z" />
  </svg>
  
  <span class="group-hover:text-black transition-colors duration-300">
    Tonton Live Stream
  </span>
</a>

        </div>
      </div>
      
      <div class="relative flex justify-center items-center mt-10 md:mt-0 z-10">
        <div class="absolute w-[300px] h-[300px] bg-red-500 rounded-full mix-blend-multiply opacity-30 blur-2xl animate-blob -left-10"></div>
        <div class="absolute w-[300px] h-[300px] bg-yellow-500 rounded-full mix-blend-multiply opacity-30 blur-2xl animate-blob animation-delay-2000 top-0 right-0"></div>
        <div class="absolute w-[300px] h-[300px] bg-blue-500 rounded-full mix-blend-multiply opacity-30 blur-2xl animate-blob animation-delay-4000 -bottom-8 left-20"></div>

        <img 
          src="/public/gambar HP JtvHub.png" 
          alt="Aplikasi JTVHub" 
          class="w-[400px] md:w-[500px] rounded-2xl shadow-lg transform -rotate-6 relative z-20"
        >
        <!-- <img 
          src="/phone-app-2.png" 
          alt="Aplikasi JTVHub" 
          class="w-[200px] md:w-[250px] rounded-2xl shadow-2xl z-30 transform rotate-6 -ml-16 border-4 border-gray-800"
        > -->
        
      </div>
    </div>
  </div>
</template>