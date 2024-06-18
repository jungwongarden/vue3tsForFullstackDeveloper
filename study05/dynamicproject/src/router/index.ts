import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ProductView from '@/views/ProductView.vue';
import CommunityView from '@/views/CommunityView.vue';
import NotFound from '@/views/NotFound.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/product/:id', name: 'Product', component: ProductView },
  { path: '/community/:slug', name: 'Community', component: CommunityView },
  { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;