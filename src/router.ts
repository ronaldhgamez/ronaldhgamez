import { createRouter, createWebHashHistory } from 'vue-router';

import HomeTab from './views/HomeTab.vue';
import AboutMe from './views/AboutMe.vue';
import ResumeTab from './views/ResumeTab.vue';
import ProjectDetails from './views/ProjectDetails.vue';

const routes = [
    { path: '/', component: AboutMe },
    { path: '/home', component: HomeTab },
    { path: '/about', component: AboutMe },
    { path: '/resume', component: ResumeTab },
    { path: '/test', component: ProjectDetails },
  ]

// Crea el router
export default createRouter({
    history: createWebHashHistory(),
    routes
});