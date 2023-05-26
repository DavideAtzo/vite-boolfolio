import { createWebHistory, createRouter } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppProjects from './pages/AppProjects.vue';
import ProjectPage from './pages/ProjectPage.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/',
            name: 'projects',
            component: AppProjects
        },
        {
            path: '/projects/:slug',
            name: 'project',
            component: ProjectPage
        },
        ]
});

export { router };