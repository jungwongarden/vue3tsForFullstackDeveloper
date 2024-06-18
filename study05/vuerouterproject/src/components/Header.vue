<template>
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/product">Product</router-link></li>
          <li><router-link to="/community">Community</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Header'
  });
  </script>
  
  <style scoped>
  nav ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 0;
  }
  nav ul li {
    margin-right: 1rem;
  }
  nav ul li a {
    text-decoration: none;
    color: #42b983;
  }
  </style>