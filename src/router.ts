import { createRouter, createWebHashHistory } from 'vue-router';

import HomeTab from './views/HomeTab.vue';
import AboutMe from './views/AboutMe.vue';
import ResumeTab from './views/ResumeTab.vue';

const routes = [
    { path: '/', component: HomeTab },
    { path: '/about', component: AboutMe },
    { path: '/resume', component: ResumeTab },
  ]

// Crea el router
export default createRouter({
    history: createWebHashHistory(),
    routes
});