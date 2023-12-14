import { createRouter, createWebHashHistory } from 'vue-router';

import HomeTab from './views/HomeTab.vue';
import AboutMe from './views/AboutMe.vue';
import ResumeTab from './views/ResumeTab.vue';
import TestTab from './views/TestTab.vue';

const routes = [
    { path: '/', component: HomeTab },
    { path: '/about', component: AboutMe },
    { path: '/resume', component: ResumeTab },
    { path: '/test', component: TestTab },
  ]

// Crea el router
export default createRouter({
    history: createWebHashHistory(),
    routes
});