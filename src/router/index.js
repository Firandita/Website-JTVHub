import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/', // Jika URL-nya adalah '/' (halaman utama)
        name: 'Home',
        component: Home, // Tampilkan HomeView
    },
    {
        path: '/live',
        // Ini cara "lazy load", komponennya baru di-load saat dibuka
        // Ini bagus untuk performa
        name: 'Live',
        component: () => import('../views/Live.vue'),
    },
    {
        path: '/video',
        name: 'Video',
        component: () => import('../views/Video.vue'),
    },
    {
        path: '/event',
        name: 'Event',
        component: () => import('../views/Event.vue'),
    },
    {
        path: '/community',
        name: 'JTVCommunity',
        component: () => import('../views/JTVCommunity.vue'),
    },
    {
        path: '/social',
        name: 'SocialMedia',
        component: () => import('../views/SocialMedia.vue'),
    },
];

//instance router
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;