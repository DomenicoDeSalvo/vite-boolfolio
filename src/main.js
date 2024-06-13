import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import AppHome from './pages/AppHome.vue'
import AppPortfolio from './pages/AppPortfolio.vue'
import AppContact from './pages/AppContact.vue'

const routes = [
    {path: '/', component: AppHome},
    {path: '/portfolio', component: AppPortfolio},
    {path: '/contact', component: AppContact},
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

createApp(App).use(router).mount('#app')