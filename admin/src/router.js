import { createWebHistory, createRouter } from 'vue-router'
import { UserStore } from './stores/user.store';
import ThemePage from './views/site/themePage.vue';
import PostsPage from './views/posts/postsPage.vue';
import UsersPage from './views/users/usersPage.vue';
import LoginPage from './views/login/loginPage.vue';

const isLogged = (to, from, next) => {
  if (!UserStore.isLogged()) {
    router.push('/login');
  }
  next();
}
const routes = [
  {
    path: '/posts',
    component: PostsPage,
    beforeEnter: isLogged
  },
  { path: '/users', component: UsersPage },
  { path: '/login', component: LoginPage },
  { path: '/', component: ThemePage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;