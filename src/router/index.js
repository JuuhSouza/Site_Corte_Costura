import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SewingPage from '../views/SewingPage.vue'
import FabricPage from '../views/FabricPage.vue'
import AdminEditor from '../views/AdminEditor.vue'

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
    }, {
        path: '/adminEditor',
        name: 'adminEditor',
        component: AdminEditor
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