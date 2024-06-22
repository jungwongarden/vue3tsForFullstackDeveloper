<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 1.2em;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}

form, .form {
  margin-top: 2em;
  margin-bottom: 3em;
}

button { 
  background-color: transparent;
  outline: none;
  border: none;
  color: #333;
  padding: 0.7em 1.5em;
  font-weight: bold;
  margin-bottom: 1em;
}

form button, .form button {
  color: #fff;
  background-color: #333;
}

form input, .form input, .form textarea {
  padding: 0.5em;
  margin-right: 1em;
}
</style>
