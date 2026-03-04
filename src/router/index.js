import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Costura from '../views/Costura.vue'
import Tecidos from '../views/Tecidos.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/costura',
        name: 'costura',
        component: Costura
    }, {
        path: '/tecidos',
        name: 'tecidos',
        component: Tecidos
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