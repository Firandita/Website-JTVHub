<script setup>
import { ref, computed } from "vue";
import LiveVideo from "../components/LiveVideo.vue";
import LiveChat from "../components/LiveChat.vue";
import Channel from "../components/Channel.vue";

// --- DATA CHANNEL TERPUSAT ---
const channelList = [
  {
    id: "jtv_sby",
    name: "JTV Surabaya",
    category: "Komunitas",
    logo: "/logo/jawapostvsby.png",
    streamUrl:
      "https://63b2dc7196c38.streamlock.net:1937/JTVSURABAYA/_definst_/myStream/playlist.m3u8",
    viewers: "12.2k",
    description:
      "JTV Surabaya adalah saluran utama yang menyajikan konten berita, hiburan, dan budaya lokal Jawa Timur.",
    schedule: {
      Senin: [
        { jam: "08:00", acara: "Berita Jatim", status: "Selesai" },
        { jam: "22:00", acara: "Stasiun Dangdut", status: "Live" },
      ],
      Selasa: [{ jam: "10:00", acara: "Pojok Kampung", status: "Akan Tayang" }],
    },
  },
  {
    id: "ntt_stream",
    name: "Nusa Tenggara Timur",
    category: "Livestream",
    logo: "/logo/sultratv.png",
    streamUrl: "https://content.jwplatform.com/manifests/yp34SRmf.m3u8",
    viewers: "5.4k",
    description:
      "Siaran langsung dari Nusa Tenggara Timur, menampilkan keindahan alam dan budaya lokal.",
    schedule: {
      Senin: [{ jam: "09:00", acara: "Pesona NTT", status: "Live" }],
      Selasa: [],
    },
  },
  {
    id: "jawa_pos_tv",
    name: "Jawa Pos TV",
    category: "Livestream",
    logo: "/logo/sultratv.png",
    streamUrl: "https://content.jwplatform.com/manifests/yp34SRmf.m3u8",
    viewers: "8.1k",
    description:
      "Jawa Pos TV menghadirkan berita aktual dan hiburan keluarga masa kini.",
    schedule: {
      Senin: [{ jam: "12:00", acara: "Breaking News", status: "Selesai" }],
      Selasa: [{ jam: "18:00", acara: "Talkshow", status: "Akan Tayang" }],
    },
  },
];

// State channel aktif
const activeChannel = ref(channelList[0]);

// Fungsi ganti channel
const handleChannelChange = (channel) => {
  activeChannel.value = channel;
};

// Computed untuk judul program dinamis
const currentProgramName = computed(() => {
  const todaySchedule = activeChannel.value.schedule["Senin"] || [];
  const liveProgram = todaySchedule.find((p) => p.status === "Live");
  return liveProgram ? liveProgram.acara : activeChannel.value.name;
});
</script>

<template>
  <div class="min-h-screen bg-black text-white font-sans">
    <div class="container mx-auto px-4 md:px-6 py-24 md:py-20">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div class="order-1 lg:col-span-2">
          <LiveVideo
            :key="activeChannel.streamUrl"
            :streamUrl="activeChannel.streamUrl"
          />

          <div class="mt-12 pb-2">
            <div class="mb-2">
              <span
                class="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider"
                >Sedang Tayang</span
              >
            </div>

            <h1 class="font-family text-3xl md:text-3 font-bold mb-1">
              {{ currentProgramName }}
            </h1>
            <p class="text-gray-400 text-sm mb-4">22.00 - 23.30 WIB</p>

            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 bg-white rounded-full p-1 flex items-center justify-center overflow-hidden"
              >
                <img
                  :src="activeChannel.logo"
                  :alt="activeChannel.name"
                  class="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 class="font-bold text-white leading-none">
                  {{ activeChannel.name }}
                </h4>
                <span class="text-orange-500 text-xs font-semibold"
                  >{{ activeChannel.viewers }} Menonton</span
                >
              </div>
            </div>
          </div>
        </div>

        <div class="order-2 lg:col-span-1 lg:row-span-2 lg:top-28">
          <LiveChat :key="activeChannel.id" />
        </div>

        <div class="order-3 lg:col-span-2">
          <Channel
            :all-channels="channelList"
            :active-channel="activeChannel"
            @change-channel="handleChannelChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>
