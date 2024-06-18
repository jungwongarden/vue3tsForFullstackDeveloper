<template>
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about.html">About</a></li>
          <li><a href="/community.html">Community</a></li>
          <li><a href="/product.html">Product</a></li>
        </ul>
      </nav>
      <hr />
    </header>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'Header'
  })
  </script>
  
  <style scoped>
  nav ul {
    list-style: none;
    display: flex;
  }
  nav ul li {
    margin-right: 1rem;
  }
  </style>