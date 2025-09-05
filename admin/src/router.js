import { createWebHistory, createRouter } from 'vue-router'
import { UserStore } from './stores/user.store';
import ThemePage from './views/site/themePage.vue';
import PostsPage from './views/posts/postsPage.vue';
import PostsEditPage from './views/posts/postsEditPage.vue'
import UsersPage from './views/users/usersPage.vue';
import LoginPage from './views/login/loginPage.vue';

const isLogged = (to, from, next) => {
  if (!UserStore.isLogged()) {
    router.push('/cms/login');
  }
  next();
}
const routes = [
  {
    path: '/cms/login',
    component: LoginPage,
  },
  {
    path: '/cms/post/:id',
    component: PostsEditPage,
    beforeEnter: isLogged
  },
  {
    path: '/cms/post',
    component: PostsEditPage,
    beforeEnter: isLogged
  },
  {
    path: '/cms/posts',
    component: PostsPage,
    beforeEnter: isLogged
  },
  {
    path: '/cms/users',
    component: UsersPage,
    beforeEnter: isLogged
  },
  {
    path: '/cms',
    redirect: '/cms/posts',
    beforeEnter: isLogged
  },
  { path: '/:pathMatch(.*)*', redirect: '/cms/login' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;