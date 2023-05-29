import { createWebHistory, createRouter } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppProjects from './pages/AppProjects.vue';
import ProjectPage from './pages/ProjectPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import TypePage from './pages/TypePage.vue';

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
        { 
            path: '/:pathMatch(.*)*', 
            name: 'not-found',
            component: NotFoundPage 
        },
        {
            path: '/types/:slug',
            name: 'type',
            component: TypePage
        },
        ]
});

export { router };