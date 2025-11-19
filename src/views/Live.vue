<script setup>
import LiveVideo from '../components/LiveVideo.vue';
import LiveChat from '../components/LiveChat.vue';
import Channel from '../components/Channel.vue';

const streamLink = 'https://63b2dc7196c38.streamlock.net:1937/JTVSURABAYA/definst/myStream/playlist.m3u8';
</script>

<template>
  <div class="min-h-screen bg-black text-white font-sans">
    
    <div class="container mx-auto px-4 md:px-6 py-24 md:py-28">
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

        <div class="order-1 lg:col-span-2">
           <LiveVideo :streamUrl="streamLink" />
        </div>

        <div class="order-2 lg:col-span-1 lg:row-span-2 lg:top-28">
           <LiveChat />
        </div>

        <div class="order-3 lg:col-span-2">
           <Channel />
        </div>

      </div>
    </div>

  </div>
</template>