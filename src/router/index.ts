import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: '*', redirect: { name: 'home' } },
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "main" */ '../views/HomePage.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "main" */ '../views/UserLoginPage.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "main" */ '../views/UserRegisterPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
