<template>
    <div>
      <h1>Product</h1>
      <p>Here are our products.</p>
      <button @click="replaceToPage('home')">Replace to Home</button>
      <button @click="replaceToPage('info')">Info</button>
      <button @click="replaceToPage('board')">Board</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      replaceToPage(page) {
        this.$router.push({ path: `/${page}` });
      },
      goBack() {
        this.$router.go(-1);
      },
      goForward() {
        this.$router.go(1);
      }
    }
  };
  </script>
  
  <style scoped>
  h1 {
    color: #42b983;
  }
  </style>