import { createRouter, createWebHashHistory } from 'vue-router';

import ProjectsView from './views/ProjectsView.vue';
import HomeView from './views/HomeView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/home', component: HomeView },
    { path: '/projects', component: ProjectsView },
  ]

// Crea el router
export default createRouter({
    history: createWebHashHistory(),
    routes
});