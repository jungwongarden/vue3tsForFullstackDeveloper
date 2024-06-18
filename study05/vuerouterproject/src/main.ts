import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Product from './views/Product.vue';
import Community from './views/Community.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/product', component: Product },
  { path: '/community', component: Community }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');