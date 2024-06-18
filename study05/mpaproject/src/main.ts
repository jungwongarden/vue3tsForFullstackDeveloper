import { createApp } from 'vue'
import store from './store'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export function initApp(component: any) {
  const app = createApp(component)
  app.component('Header', Header)
  app.component('Footer', Footer)
  app.use(store)
  app.mount('#app')
}