import { createRouter, createWebHashHistory } from 'vue-router';

import HomeTab from './views/HomeTab.vue';
import AboutMe from './views/AboutMe.vue';

const routes = [
    { path: '/', component: HomeTab },
    { path: '/about', component: AboutMe },
  ]

// Crea el router
export default createRouter({
    history: createWebHashHistory(),
    routes
});