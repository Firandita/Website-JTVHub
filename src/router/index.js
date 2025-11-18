import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/live', name: 'Live', component: () => import('../views/Live.vue') },
    { path: '/video', name: 'Video', component: () => import('../views/Video.vue') },
    { path: '/event', name: 'Event', component: () => import('../views/Event.vue') },
    { path: '/community', name: 'JTV Community', component: () => import('../views/JTVCommunity.vue') },
    { path: '/social', name: 'Social Media', component: () => import('../views/SocialMedia.vue') },

];

const router = createRouter({
    history: createWebHistory(),
    routes,

    scrollBehavior(to, from, savedPosition) {
      
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

export default router;