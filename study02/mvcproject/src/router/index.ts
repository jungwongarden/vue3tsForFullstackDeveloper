//src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import UserView from '@/views/UserView.vue';

const routes = [
  { path: '/', component: UserView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;