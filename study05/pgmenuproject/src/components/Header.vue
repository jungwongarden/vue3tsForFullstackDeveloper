<template>
    <div>
      <button @click="goToPage('home')">Home</button>
      <button @click="goToPage('about')">About</button>
      <button @click="goToPage('product')">Product</button>
      <button @click="goToPage('community')">Community</button>
      <br> <hr />
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToPage(page) {
        this.$router.push({ name: page });
      }
    }
  };
  </script>