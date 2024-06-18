import { createApp } from 'vue';
import View from './view.html';
import Controller from './controller.js';

const app = createApp({
  ...View,
  ...Controller
});
app.mount('#app');