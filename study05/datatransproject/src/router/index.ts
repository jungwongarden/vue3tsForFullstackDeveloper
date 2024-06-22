import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Product from '@/views/Product.vue';
import Community from '@/views/Community.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/home', redirect: '/' },
  { path: '/about', alias: '/info', component: About },
  { path: '/product', alias: ['/goods', '/event'], component: Product, 
    children: [
      { path: 'detail/:id', name: 'product-detail', component: Product },
      { path: 'edit/:id', name: 'product-edit', component: Product }
    ] 
  },
  { path: '/community', alias: ['/board', '/notice'], component: Community, 
    children: [
      { path: 'detail/:id', name: 'post-detail', component: Community },
      { path: 'edit/:id', name: 'post-edit', component: Community }
    ] 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;