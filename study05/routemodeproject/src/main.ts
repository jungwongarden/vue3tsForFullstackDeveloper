import { createApp } from 'vue';
import App from './App.vue';
import router from './router/history'; // Use 'hash' for hash mode
import store from './store';

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
