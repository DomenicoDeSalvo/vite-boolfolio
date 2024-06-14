import { createRouter, createWebHistory } from 'vue-router'
import AppHome from './pages/AppHome.vue'
import AppPortfolio from './pages/AppPortfolio.vue'
import AppContact from './pages/AppContact.vue'
import AppProject from './pages/AppProject.vue'

const routes = [
    {path: '/', name:'home', component: AppHome},
    {path: '/portfolio', name: 'portfolio', component: AppPortfolio},
    {path: '/portfolio/:slug', name: 'project', component: AppProject},
    {path: '/contact', name: 'contact', component: AppContact},
]

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name:'home', component: AppHome},
        {path: '/portfolio', name: 'portfolio', component: AppPortfolio},
        {path: '/portfolio/:slug', name: 'project', component: AppProject},
        {path: '/contact', name: 'contact', component: AppContact},
    ],
})

export default router