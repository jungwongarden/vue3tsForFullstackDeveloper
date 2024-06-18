<template>
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/product">Product</router-link>
        <router-link to="/community">Community</router-link>
      </nav>
    </header>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'Header'
  })
  </script>
  
  <style scoped>
  /* 헤더 스타일 */
  nav {
    display: flex;
    gap: 1rem;
  }
  </style>