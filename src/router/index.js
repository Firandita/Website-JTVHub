// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Live from "../views/Live.vue"; // Halaman Live
import Video from "../views/Video.vue"; // Halaman Video
import Event from "../views/Event.vue"; // Halaman Video
import JTVCommunity from "../views/JTVCommunity.vue"; // Halaman Video
import SocialMedia from "../views/SocialMedia.vue"; // Halaman Video
import AuthView from "../views/AuthView.vue"; // Halaman Login (Baru)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    // Rute Live Streaming

    {
      path: "/live",
      name: "live",
      component: Live,
    },

    // Rute Video

    {
      path: "/video",
      name: "video",
      component: Video,
    },

    // Rute Event

    {
      path: "/event",
      name: "event",
      component: Event,
    },

    // Rute JTV Community

    {
      path: "/community",
      name: "community",
      component: JTVCommunity,
    },

    // Rute Social Media

    {
      path: "/social",
      name: "social",
      component: SocialMedia,
    },

    {
      path: "/login",
      name: "login",
      component: AuthView,
      // TAMBAHKAN INI: Tanda pengenal untuk menyembunyikan nav/footer
      meta: {
        hideNavbar: true,
        hideFooter: true,
      },
    },
  ],
});

export default router;
