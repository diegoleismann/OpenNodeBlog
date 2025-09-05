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
    path: '/cms/posts',
    component: PostsPage,
    beforeEnter: isLogged
  },
  { path: '/cms/users', component: UsersPage },
  { path: '/cms/login', component: LoginPage },
  { path: '/cms', redirect: '/cms/posts' },
  { path: '/:pathMatch(.*)*', redirect: '/cms/login' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;