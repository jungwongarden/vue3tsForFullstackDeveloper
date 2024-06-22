import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Bootstrap의 JavaScript 파일 임포트
import 'bootstrap/dist/js/bootstrap.js';
// Bootstrap의 CSS 파일 임포트
import 'bootstrap/dist/css/bootstrap.css';

createApp(App).use(router).use(store).mount('#app');