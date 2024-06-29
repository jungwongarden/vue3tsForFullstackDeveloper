<template>
  <div id="app">
    <NavBar />
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar, 
    Header,
    Footer
  }
});
</script>

<style>
@import './assets/styles/main.css';
</style>

