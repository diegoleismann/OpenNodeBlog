import { createWebHistory, createRouter } from 'vue-router'

import ThemePage from './views/site/themePage.vue';
import DashboardPage from './views/dashboard/dashboardPage.vue';
const routes = [
  { path: '/dashboard', component: DashboardPage },
  { path: '/', component: ThemePage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;