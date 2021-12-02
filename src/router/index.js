import { createRouter, createWebHashHistory } from 'vue-router'
import { ROUTES } from '@/assets/constants/routes'
import Home from '@/views/Home.vue'
import AdventCalendar from '@/views/adventCalendar/AdventCalendar'
import DayDisplayer from '@/views/adventCalendar/DayDisplayer'

const routes = [
    {
        path: ROUTES.HOME,
        name: 'Home',
        component: Home
    },
    {
        path: ROUTES.ADVENT_CALENDAR,
        name: 'AdventCalendar',
        component: AdventCalendar,
        children: [{
            path: ROUTES.DAY_DISPLAYER,
            props: true,
            name: 'DayDisplayer',
            component: DayDisplayer
        }]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
