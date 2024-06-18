<template>
    <div>
      <h1>Community</h1>
      <p>Welcome to the community page.</p>
      <button @click="replaceToPage('home')">Home</button>
      <button @click="replaceToPage('info')">Info</button>
      <button @click="replaceToPage('goods')">Goods</button>
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