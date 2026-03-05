import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SewingPage from '../views/SewingPage.vue'
import FabricPage from '../views/FabricPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/sewingPage',
        name: 'sewingPage',
        component: SewingPage
    }, {
        path: '/fabricPage',
        name: 'fabricPage',
        component: FabricPage
    }
]

const router = createRouter({
    history: createWebHashHistory(), // HASH MODE funciona no GitHub Pages
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
    },
})

export default router