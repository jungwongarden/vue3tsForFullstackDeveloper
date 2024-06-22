<template>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/product">Product</router-link>
      <router-link to="/community">Community</router-link>
    </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Header'
  });
  </script>
  
  <style scoped>
  nav { padding-bottom: 2em; border-bottom: 2px solid #333; }
  </style>