<template>
  <section class="min-h-screen bg-[#0F172A] py-16 text-white font-sans">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center mb-16">
        <h1 class="text-5xl font-extrabold text-orange-500 mb-4 tracking-tight">Program Magang JTV</h1>
        <p class="text-lg text-gray-400 max-w-2xl mx-auto">
          Ingin berkarir di dunia media? Pilih posisi yang sesuai dan daftar secara eksklusif melalui aplikasi <span class="text-orange-400 font-bold">JTVHub</span>.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in magangList"
          :key="index"
          class="bg-[#1E293B] border border-slate-700 rounded-2xl overflow-hidden shadow-xl flex flex-col transition duration-300 hover:border-orange-500/50"
        >
          <div class="p-8 flex-grow">
            <div class="flex justify-between items-start mb-4">
              <h2 class="text-2xl font-bold text-white leading-tight">{{ item.title }}</h2>
              <span 
                :class="item.sisa > 0 ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'"
                class="px-3 py-1 rounded-full text-[10px] uppercase font-black tracking-widest border"
                style="border-color: currentColor;"
              >
                {{ item.sisa > 0 ? 'Tersedia' : 'Penuh' }}
              </span>
            </div>

            <p class="text-sm text-gray-300 mb-2">
              <span class="font-semibold text-orange-400">Mentor:</span> {{ item.mentor }}
            </p>
            <p class="text-sm text-gray-400 mb-6 italic line-clamp-2">
              "{{ item.deskripsiSingkat }}"
            </p>
            
            <div class="flex flex-wrap gap-2 mb-8">
              <div class="bg-slate-800 px-3 py-2 rounded-lg border border-slate-700">
                <p class="text-[10px] text-gray-500 uppercase font-bold">Kuota</p>
                <p class="text-sm font-bold">{{ item.butuh }}</p>
              </div>
              <div class="bg-slate-800 px-3 py-2 rounded-lg border border-slate-700">
                <p class="text-[10px] text-gray-500 uppercase font-bold">Terisi</p>
                <p class="text-sm font-bold text-blue-400">{{ item.daftar }}</p>
              </div>
              <div class="bg-slate-800 px-3 py-2 rounded-lg border border-slate-700">
                <p class="text-[10px] text-gray-500 uppercase font-bold">Sisa</p>
                <p class="text-sm font-bold" :class="item.sisa > 0 ? 'text-green-400' : 'text-red-400'">{{ item.sisa }}</p>
              </div>
            </div>
          </div>

          <div class="p-6 bg-slate-900/50 border-t border-slate-700">
            <div class="text-center">
              <p class="text-xs text-gray-400 mb-3 uppercase tracking-widest">Daftar Melalui Aplikasi</p>
              <a 
                :href="jtvHubLink" 
                target="_blank" 
                class="flex justify-center items-center gap-2 bg-orange-600 hover:bg-orange-700 py-3 rounded-xl transition-all shadow-lg shadow-orange-950/20 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M17.523 15.341l-3.103 2.113-3.103-2.113v-10.682l3.103-2.113 3.103 2.113v10.682zm-3.103-8.818l-1.552 1.057v5.341l1.552 1.057 1.551-1.057v-5.341l-1.551-1.057zm-6.207 8.818l-3.103 2.113-3.104-2.113v-10.682l3.104-2.113 3.103 2.113v10.682zm-3.103-8.818l-1.552 1.057v5.341l1.552 1.057 1.552-1.057v-5.341l-1.552-1.057z"/></svg>
                <span class="font-bold text-sm text-white">Buka JTVHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-24 bg-gradient-to-br from-orange-600 to-orange-800 rounded-3xl p-10 shadow-2xl overflow-hidden relative">
        <div class="relative z-10 md:flex items-center justify-between">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h2 class="text-3xl font-black mb-4 text-white">Cara Mendaftar Magang</h2>
            <div class="space-y-4 text-white/90">
              <div class="flex items-start gap-4">
                <div class="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                <p>Unduh aplikasi <span class="font-bold underline">JTVHub</span> di Google Play Store atau App Store.</p>
              </div>
              <div class="flex items-start gap-4">
                <div class="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                <p>Masuk atau buat akun baru menggunakan email aktif Anda.</p>
              </div>
              <div class="flex items-start gap-4">
                <div class="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
                <p>Pilih menu <span class="font-bold italic">"Karir & Magang"</span> pada halaman utama aplikasi dan kirim CV Anda.</p>
              </div>
            </div>
          </div>
          <div class="md:w-1/3 flex justify-center">
            <div class="w-48 h-64 bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-800 shadow-2xl flex flex-col items-center justify-center p-4 relative">
                <div class="w-12 h-1 bg-slate-800 rounded-full mb-4"></div>
                <div class="text-orange-500 font-black text-2xl mb-1 italic">jtv</div>
                <div class="text-[8px] text-gray-500 mb-4 tracking-tighter uppercase font-bold">Digital Hub</div>
                <div class="w-full bg-slate-800 h-2 rounded-full mb-2"></div>
                <div class="w-2/3 bg-slate-800 h-2 rounded-full mb-8"></div>
                <div class="w-full bg-orange-600 h-8 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
        <div class="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// --- LINK APLIKASI ---
// Ganti URL di bawah ini dengan link download aplikasi JTVHub yang sebenarnya
const jtvHubLink = ref('https://play.google.com/store/apps/details?id=com.jtv.jtvhub');

// --- DATA MAGANG ---
const magangList = ref([
    {
        title: "Reporter / Jurnalis",
        butuh: 4,
        daftar: 3,
        sisa: 1,
        mentor: "Bapak Rahmat Hidayat",
        deskripsiSingkat: "Melakukan liputan berita lapangan dan membuat script/naskah berita harian.",
    },
    {
        title: "Video Editor",
        butuh: 5,
        daftar: 5,
        sisa: 0,
        mentor: "Ibu Dian Pratiwi, S.Kom",
        deskripsiSingkat: "Mengedit materi visual program TV dan digital menggunakan Adobe Premiere Pro.",
    },
    {
        title: "Cameraman",
        butuh: 3,
        daftar: 1,
        sisa: 2,
        mentor: "Tim Produksi Lapangan JTV",
        deskripsiSingkat: "Bertanggung jawab atas kualitas visual dan pengambilan gambar di studio maupun luar studio.",
    },
]);
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical; 
  overflow: hidden;
}
</style>