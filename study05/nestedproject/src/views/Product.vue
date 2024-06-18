<template>
    <div>
      <h1>Product</h1>
      <p>Select a product to view details:</p>
      <ul>
        <li><router-link :to="{ name: 'ProductDetail', params: { id: 1 } }">Product 1</router-link></li>
        <li><router-link :to="{ name: 'ProductDetail', params: { id: 2 } }">Product 2</router-link></li>
        <li><router-link :to="{ name: 'ProductDetail', params: { id: 3 } }">Product 3</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  h1 {
    color: #42b983;
  }
  </style>