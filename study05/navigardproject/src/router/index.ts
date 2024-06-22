import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Product from '@/views/Product.vue';
import Community from '@/views/Community.vue';

// Global guard example
const globalGuard = (to: any, from: any, next: any) => {
  console.log('Global Guard:', to, from);
  next();
};

const routes = [
  { path: '/', component: Home },
  { path: '/home', redirect: '/' },
  { path: '/about', alias: '/info', component: About },
  { path: '/product', alias: ['/goods', '/event'], component: Product },
  { path: '/community', alias: ['/board', '/notice'], component: Community }
];

const router = createRouter({
  // Use either createWebHistory() or createWebHashHistory()
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes
});

router.beforeEach(globalGuard);

export default router;