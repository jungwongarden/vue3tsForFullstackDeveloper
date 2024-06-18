import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Product from '@/views/Product.vue';
import Community from '@/views/Community.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/product', name: 'product', component: Product },
  { path: '/community', name: 'community', component: Community }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;