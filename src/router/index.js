import { createRouter, createWebHashHistory } from 'vue-router'
import { ROUTES } from '@/assets/constants/routes'
import Home from '@/views/Home.vue'

const routes = [
    {
        path: ROUTES.HOME,
        name: 'Home',
        component: Home
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
