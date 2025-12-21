// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Live from "../views/Live.vue";
import Video from "../views/Video.vue";
import Event from "../views/Event.vue";
import JTVCommunity from "../views/JTVCommunity.vue";
import SocialMedia from "../views/SocialMedia.vue";
import AuthView from "../views/AuthView.vue";

// --- IMPOR YANG PERLU DITAMBAHKAN ---
import DaftarMagang from "../views/DaftarMagang.vue";
// DINONAKTIFKAN SEMENTARA: Akan menyebabkan ERROR karena file MagangApplyForm.vue belum ada.
// import MagangApplyForm from "../views/MagangApplyForm.vue";
// Opsional: Untuk halaman 404
// import NotFound from '../views/NotFound.vue';

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

    // --- Rute Magang ---
    {
      path: "/daftar-magang",
      name: "DaftarMagang",
      component: DaftarMagang,
    },
    // DINONAKTIFKAN SEMENTARA: Akan menyebabkan ERROR karena MagangApplyForm belum ada.
    /* {
        path: "/apply/:id", 
        name: "MagangApply",
        component: MagangApplyForm,
        props: true
    }, */

    // --- Rute Login ---
    {
      path: "/login",
      name: "login",
      component: AuthView,
      meta: {
        hideNavbar: true,
        hideFooter: true,
      },
    },

    // Opsional: Rute Catch-all (404 Not Found)
    // ❌ DINONAKTIFKAN SEMENTARA: Akan menyebabkan ERROR karena NotFound.vue belum ada.
    /* {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue') // Asumsi Anda punya komponen NotFound.vue
    } */
  ],
});

export default router;
