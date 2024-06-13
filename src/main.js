import { createApp } from 'vue'
import { createRoute, createWebHistory } from 'vue-router'
import App from './App.vue'
import AppHome from './pages/AppHome.vue'


const routes = [{path: '/', component: AppHome}]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add()

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')