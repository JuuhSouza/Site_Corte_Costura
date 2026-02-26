import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Costura from '../views/Costura.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/costura',
        name: 'costura',
        component: Costura
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