import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Product from '@/views/Product.vue';
import ProductDetail from '@/views/ProductDetail.vue';
import Community from '@/views/Community.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  {
    path: '/product',
    name: 'Product',
    component: Product,
    children: [
      { path: ':id', name: 'ProductDetail', component: ProductDetail }
    ]
  },
  { path: '/community', name: 'Community', component: Community }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;