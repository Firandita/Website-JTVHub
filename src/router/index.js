// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Live from "../views/Live.vue";
import Video from "../views/Video.vue";
import Event from "../views/Event.vue";
import JTVCommunity from "../views/JTVCommunity.vue";
import SocialMedia from "../views/SocialMedia.vue";
import AuthView from "../views/AuthView.vue";
import DaftarMagang from "../views/DaftarMagang.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/live", name: "live", component: Live },
    { path: "/video", name: "video", component: Video },
    { path: "/event", name: "event", component: Event },
    { path: "/community", name: "community", component: JTVCommunity },
    { path: "/social", name: "social", component: SocialMedia },
    {
      path: "/daftar-magang",
      name: "DaftarMagang",
      component: DaftarMagang,
    },

    {
      path: "/login",
      name: "login",
      component: AuthView,
      meta: {
        hideNavbar: true,
        hideFooter: true,
      },
    },

  ],
});

export default router;
