<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'; 
// IMPORT INI PENTING:
import { useAuth } from '../useAuth'; 

const route = useRoute();
const router = useRouter(); 
// AMBIL FUNGSI LOGIN DARI USEAUTH
const { login } = useAuth();

const isRegister = ref(false);
const loginMethod = ref('password'); 

const form = ref({
  fullName: '',
  email: '',
  birthDate: '',
  gender: '',
  password: '',
  confirmPassword: ''
});

const toggleMode = (mode) => {
  isRegister.value = mode === 'register';
  if(mode === 'login') loginMethod.value = 'password';
};

onMounted(() => {
  if (route.query.mode === 'register') {
    isRegister.value = true; 
  }
});

// --- LOGIC MOCKING DATA (LOGIN/REGISTER) ---
const handleSubmit = () => {
  let displayName = '';

  if (isRegister.value) {
    displayName = form.value.fullName;
  } else {
    // Ambil nama dari depan email
    const emailName = form.value.email.split('@')[0];
    displayName = emailName.charAt(0).toUpperCase() + emailName.slice(1);
  }

  const initial = displayName.charAt(0).toUpperCase();

  // MOCK DATA USER
  const fakeUser = {
    id: Date.now(),
    name: displayName,      
    email: form.value.email,
    initial: initial,
    // Tambahan avatar biar keren dikit (opsional, bisa dihapus kalau gamau)
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${displayName}`, 
    isLoggedIn: true
  };

  // --- BAGIAN INI SAYA UBAH SUPAYA KONEK KE NAVBAR ---
  // Panggil fungsi login() dari useAuth.js
  login(fakeUser);
  // ---------------------------------------------------

  // Feedback sederhana
  if(isRegister.value) {
    alert(`Akun berhasil dibuat! Selamat datang, ${displayName}.`);
  } else {
    console.log("Login sukses sebagai:", displayName);
  }
  
  // Redirect ke halaman live
  router.push('/live'); 
};
</script>

<template>
  <div class="min-h-screen w-full flex bg-black overflow-hidden font-sans">
    <div class="hidden lg:block lg:w-1/2 relative">
      <img
        src="/gedung-jtv.JPG"
        alt="Gedung JTV"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-black/20 via-black/50 to-black"
      ></div>
      <div class="absolute bottom-20 left-12 z-10 max-w-md">
        <h1 class="text-5xl font-bold text-white mb-4 leading-tight">
          Hiburan Jawa Timur <br />
          <span class="text-orange-500">Dalam Genggaman.</span>
        </h1>
        <p class="text-gray-300 text-lg">
          Satu akun untuk semua akses. Nikmati konten lokal, berita, dan live
          streaming di Web & Aplikasi JTVHub.
        </p>
      </div>
    </div>

    <div
      class="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 bg-black relative overflow-y-auto overflow-x-hidden"
    >
      <div
        class="absolute top-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"
      ></div>

      <div class="w-full max-w-md z-10 py-10">
        <div class="text-center mb-8">
          <img src="/jtv_putih.png" alt="Logo JTV" class="h-10 mx-auto mb-4" />
          <h2 class="text-3xl font-bold text-white mb-2">
            {{ isRegister ? "Gabung JTVHub" : "Selamat Datang" }}
          </h2>
          <p class="text-gray-400 text-sm">
            {{
              isRegister
                ? "Satu akun untuk Web dan Aplikasi Mobile"
                : "Masuk untuk melanjutkan aktivitas anda"
            }}
          </p>
        </div>

        <div
          class="bg-gray-900 p-1 rounded-full mb-8 relative flex h-12 border border-gray-800"
        >
          <div
            class="absolute top-1 bottom-1 rounded-full bg-orange-600 transition-all duration-300 shadow-lg"
            :class="isRegister ? 'left-1/2 right-1' : 'left-1 right-1/2'"
          ></div>

          <button
            @click="toggleMode('login')"
            class="w-1/2 relative z-10 text-sm font-bold transition-colors duration-300 focus:outline-none"
            :class="
              !isRegister ? 'text-white' : 'text-gray-400 hover:text-white'
            "
          >
            Masuk
          </button>
          <button
            @click="toggleMode('register')"
            class="w-1/2 relative z-10 text-sm font-bold transition-colors duration-300 focus:outline-none"
            :class="
              isRegister ? 'text-white' : 'text-gray-400 hover:text-white'
            "
          >
            Daftar
          </button>
        </div>

        <div v-if="!isRegister" class="animate-fade-in">
          <div class="flex justify-center gap-4 mb-6">
            <button
              @click="loginMethod = 'password'"
              class="pb-2 text-sm font-semibold transition-colors border-b-2"
              :class="
                loginMethod === 'password'
                  ? 'text-white border-orange-500'
                  : 'text-gray-500 border-transparent hover:text-gray-300'
              "
            >
              Kata Sandi
            </button>
            <button
              @click="loginMethod = 'qr'"
              class="pb-2 text-sm font-semibold transition-colors border-b-2"
              :class="
                loginMethod === 'qr'
                  ? 'text-white border-orange-500'
                  : 'text-gray-500 border-transparent hover:text-gray-300'
              "
            >
              QR Code (App)
            </button>
          </div>

          <form
            v-if="loginMethod === 'password'"
            @submit.prevent="handleSubmit"
            class="space-y-5 animate-fade-in"
          >
            <div class="space-y-1">
              <label
                class="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider"
                >Email</label
              >
              <div class="relative">
                <input
                  v-model="form.email"
                  type="text"
                  class="w-full bg-gray-900/50 border border-gray-700 text-white text-sm rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent block px-4 py-3.5 placeholder-gray-600 transition-all outline-none"
                  placeholder="Masukan email"
                  required
                />
              </div>
            </div>

            <div class="space-y-1">
              <div class="flex justify-between">
                <label
                  class="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider"
                  >Password</label
                >
                <a
                  href="#"
                  class="text-xs font-bold text-orange-500 hover:text-orange-400"
                  >Lupa Password?</a
                >
              </div>
              <div class="relative">
                <input
                  v-model="form.password"
                  type="password"
                  class="w-full bg-gray-900/50 border border-gray-700 text-white text-sm rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent block px-4 py-3.5 placeholder-gray-600 transition-all outline-none"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              class="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-orange-900/20 transition-all transform hover:scale-[1.02] active:scale-95 mt-4"
            >
              Masuk Sekarang
            </button>
          </form>

          <div
            v-else
            class="flex flex-col items-center justify-center animate-fade-in bg-gray-900/50 p-6 rounded-2xl border border-gray-800"
          >
            <div class="bg-white p-2 rounded-lg mb-4">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=JTVHubLoginSimulasi"
                alt="Scan Login"
                class="w-40 h-40"
              />
            </div>
            <h3 class="text-white font-bold text-lg mb-2">
              Login via Aplikasi
            </h3>
            <ol
              class="text-gray-400 text-sm list-decimal list-inside space-y-1 text-center"
            >
              <li>Buka aplikasi <strong>JTVHub</strong> di HP kamu</li>
              <li>Buka menu <strong>Scan QR</strong></li>
              <li>Arahkan kamera ke kode di atas</li>
            </ol>
          </div>
        </div>

        <form
          v-else
          @submit.prevent="handleSubmit"
          class="space-y-4 animate-fade-in"
        >
          <div class="space-y-1">
            <label
              class="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider"
              >Nama Lengkap</label
            >
            <input
              v-model="form.fullName"
              type="text"
              class="w-full bg-gray-900/50 border border-gray-700 text-white text-sm rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent block px-4 py-3 placeholder-gray-600 transition-all outline-none"
              placeholder="Nama Lengkap Anda"
              required
            />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-1">
              <label
                class="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider"
                >Tgl Lahir</label
              >
              <input
                v-model="form.birthDate"
                type="date"
                class="w-full bg-gray-900/50 border border-gray-700 text-white text-sm rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent block px-4 py-3 placeholder-gray-600 transition-all outline-none [color-scheme:dark]"
                required
              />
            </div>
            <div class="space-y-1">
              <label
                class="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider"
                >Jenis Kelamin</label
              >
              <select
                v-model="form.gender"
                class="w-full bg-gray-900/50 border border-gray-700 text-white text-sm rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent block px-4 py-3 placeholder-gray-600 transition-all outline-none appearance-none"
                required
              >
                <option value="" disabled selected>Pilih...</option>
                <option value="L">Laki-laki</option>
                <option value="P">Perempuan</option>
              </select>
            </div>
          </div>

          <div class="space-y-1">
            <label
              class="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider"
              >Email Address</label
            >
            <input
              v-model="form.email"
              type="email"
              class="w-full bg-gray-900/50 border border-gray-700 text-white text-sm rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent block px-4 py-3 placeholder-gray-600 transition-all outline-none"
              placeholder="nama@email.com"
              required
            />
          </div>

          <div class="space-y-1">
            <label
              class="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider"
              >Password</label
            >
            <input
              v-model="form.password"
              type="password"
              class="w-full bg-gray-900/50 border border-gray-700 text-white text-sm rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent block px-4 py-3 placeholder-gray-600 transition-all outline-none"
              placeholder="••••••••"
              required
            />
          </div>

          <div class="space-y-1">
            <label
              class="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider"
              >Ulangi Password</label
            >
            <input
              v-model="form.confirmPassword"
              type="password"
              class="w-full bg-gray-900/50 border border-gray-700 text-white text-sm rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent block px-4 py-3 placeholder-gray-600 transition-all outline-none"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            class="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-orange-900/20 transition-all transform hover:scale-[1.02] active:scale-95 mt-2"
          >
            Buat Akun Baru
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.4s ease-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

select {
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
}
</style>