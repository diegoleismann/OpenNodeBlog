import { createWebHistory, createRouter } from 'vue-router'

import ThemePage from './views/site/themePage.vue';
import DashboardPage from './views/dashboard/dashboardPage.vue';
import LoginPage from './views/login/loginPage.vue';
const routes = [
  { path: '/dashboard', component: DashboardPage },
  { path: '/login', component: LoginPage },
  { path: '/', component: ThemePage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;