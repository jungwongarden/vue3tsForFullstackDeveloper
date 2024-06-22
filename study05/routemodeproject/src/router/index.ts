import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Product from '@/views/Product.vue';
import Community from '@/views/Community.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/home', redirect: '/' },
  { path: '/about', alias: '/info', component: About },
  { path: '/product', alias: ['/goods', '/event'], component: Product },
  { path: '/community', alias: ['/board', '/notice'], component: Community }
];

// For Hash Mode
const routerHash = createRouter({
  history: createWebHashHistory(),
  routes
});

// For History Mode
const routerHistory = createRouter({
  history: createWebHistory(),
  routes
});

export { routerHash, routerHistory };