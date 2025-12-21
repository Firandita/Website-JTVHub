<template>
  <section class="min-h-screen bg-gray-950 py-16 text-white font-sans">
    <div class="max-w-6xl mx-auto px-4">
      <h1 class="text-4xl font-extrabold text-center text-orange-500 mb-4">Program Magang JTV</h1>
      <p class="text-center text-gray-400 mb-12">Temukan peluang magang yang sesuai dengan minat dan bakat Anda.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div
          v-for="(item, index) in magangList"
          :key="index"
          :class="{ 
            'opacity-70': item.sisa === 0 || item.sudahDaftar 
          }"
          class="bg-[#141A29] border border-[#1F2937] rounded-xl overflow-hidden shadow-2xl transition duration-300 transform hover:scale-[1.01]"
        >
          <div class="p-6 pt-8"> <h2 class="text-xl font-bold mb-3 text-white">
              {{ item.title }}
            </h2>

            <p class="text-sm text-gray-300 mb-1">
                <span class="font-semibold text-orange-400">Mentor:</span> {{ item.mentor }}
            </p>
            <p class="text-sm text-gray-400 mb-4 italic h-10 overflow-hidden">
                {{ item.deskripsiSingkat }}
            </p>
            
            <div class="flex flex-wrap items-center gap-2 mt-1 mb-6">
              <span class="px-3 py-1 rounded-full text-xs font-medium bg-[#0F2D52] text-[#FFFFFF]">
                Kuot: {{ item.butuh }}
              </span>
              <span class="px-3 py-1 rounded-full text-xs font-medium bg-[#F6D44C] text-[#FFFFFF]">
                Daftar: {{ item.daftar }}
              </span>
              <span
                class="px-3 py-1 rounded-full text-xs font-semibold"
                :class="
                  item.sisa > 0 
                    ? 'bg-[#00B0AD] text-bg-[#FFFFFF]' 
                    : 'bg-[#E6427B] text-bg-[#FFFFFF]'
                "
              >
                Sisa: {{ item.sisa }}
              </span>
            </div>

            <button
              @click="openModal(item)"
              class="w-full py-3 rounded-lg font-semibold transition duration-200"
              :disabled="item.sisa === 0 || item.sudahDaftar"
              :class="[
                item.sisa === 0
                  ? 'bg-gray-600 text-gray-300 cursor-not-allowed' // Penuh
                  : item.sudahDaftar
                  ? 'bg-orange-900 text-gray-300 cursor-not-allowed' // Sudah Daftar
                  : 'bg-orange-600 text-white cursor-pointer hover:bg-orange-700', // Daftar Sekarang
              ]"
            >
              <span v-if="item.sisa === 0">Penuh</span>
              <span v-else-if="item.sudahDaftar">Sudah Daftar</span>
              <span v-else>Daftar Sekarang</span>
            </button>
            
          </div>
        </div>
      </div>
    </div>

    <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity">
      <div class="bg-gray-900 rounded-xl w-full max-w-lg p-8 shadow-3xl transform transition-transform duration-300 scale-100">
          
          <h2 class="text-2xl font-bold mb-4 text-orange-500">
              Daftar Magang: {{ selectedJob.title }}
          </h2>
          <p class="text-gray-400 mb-6">
              Unggah CV (Curriculum Vitae) terbaru Anda untuk melanjutkan proses pendaftaran magang.
          </p>

          <form @submit.prevent="submitCV">
              <div class="mb-6">
                  <label class="block text-gray-300 text-sm font-semibold mb-2" for="cv_upload">
                      Unggah CV (Hanya file PDF, Max 2MB)
                  </label>
                  <input 
                      type="file" 
                      id="cv_upload" 
                      accept=".pdf" 
                      @change="handleFileUpload"
                      class="block w-full text-sm text-gray-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-orange-500 file:text-white
                          hover:file:bg-orange-600 transition"
                      required
                  />
                  <p v-if="fileError" class="mt-2 text-sm text-red-500">{{ fileError }}</p>
              </div>

              <div class="flex justify-end space-x-3">
                  <button 
                      type="button" 
                      @click="closeModal"
                      class="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
                  >
                      Batal
                  </button>
                  <button 
                      type="submit" 
                      :disabled="!selectedFile"
                      class="px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-700 transition"
                  >
                      Kirim
                  </button>
              </div>
          </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// --- STATE MODAL ---
const isModalOpen = ref(false);
const selectedJob = ref({});
const selectedFile = ref(null);
const fileError = ref('');

// --- LOGIKA MODAL ---

const openModal = (job) => {
    selectedJob.value = job;
    selectedFile.value = null; // Reset file
    fileError.value = ''; // Reset error
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};

const handleFileUpload = (event) => {
    const file = event.target.files[0];
    selectedFile.value = null;
    fileError.value = '';

    if (file) {
        // Cek Tipe File (hanya PDF)
        if (file.type !== 'application/pdf') {
            fileError.value = 'Hanya file PDF yang diizinkan.';
            event.target.value = null; // Hapus file dari input
            return;
        }

        // Cek Ukuran File (Max 2MB)
        if (file.size > 2 * 1024 * 1024) { 
            fileError.value = 'Ukuran file maksimal 2MB.';
            event.target.value = null;
            return;
        }

        selectedFile.value = file;
    }
};

const submitCV = () => {
    if (selectedFile.value) {
        console.log(`Mengirim CV untuk posisi: ${selectedJob.value.title}`);
        console.log('File yang akan diunggah:', selectedFile.value);
        
        // Di sini nanti Anda akan menambahkan logika untuk:
        // 1. Mengirim file ke API (backend) menggunakan FormData.
        // 2. Mengubah status magang di frontend menjadi "Sudah Daftar".
        
        alert(`Magang ${selectedJob.value.title} berhasil diajukan dengan file: ${selectedFile.value.name}`);

        // Ubah status lokal (simulasi pendaftaran berhasil)
        const jobIndex = magangList.value.findIndex(job => job.title === selectedJob.value.title);
        if (jobIndex !== -1) {
             magangList.value[jobIndex].sudahDaftar = true;
        }

        closeModal();
    }
};


// --- DATA MAGANG ---
const magangList = ref([
    {
        title: "Reporter / Jurnalis",
        image: "/images/magang1.jpg", 
        butuh: 4,
        daftar: 3,
        sisa: 1,
        sudahDaftar: false,
        mentor: "Bapak Rahmat Hidayat",
        deskripsiSingkat: "Melakukan liputan berita lapangan dan membuat script/naskah berita harian.",
    },
    {
        title: "Video Editor",
        image: "/images/magang2.jpg",
        butuh: 5,
        daftar: 5,
        sisa: 0,
        sudahDaftar: false,
        mentor: "Ibu Dian Pratiwi, S.Kom",
        deskripsiSingkat: "Mengedit materi visual program TV dan digital menggunakan Adobe Premiere Pro.",
    },
    {
        title: "Cameraman",
        image: "/images/magang3.jpg",
        butuh: 3,
        daftar: 1,
        sisa: 2,
        sudahDaftar: true,
        mentor: "Tim Produksi Lapangan JTV",
        deskripsiSingkat: "Bertanggung jawab atas kualitas visual dan pengambilan gambar di studio maupun luar studio.",
    },
]);
</script>

<style scoped>
/* Anda bisa menambahkan gaya non-Tailwind di sini jika diperlukan */
</style>