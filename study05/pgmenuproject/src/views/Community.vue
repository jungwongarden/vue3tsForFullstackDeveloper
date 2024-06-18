<template>
    <div>
      <h1>Community</h1>
      <p>Welcome to the community page.</p>
      <button @click="replaceToPage('home')">Replace to Home</button>
      <button @click="goBack">Back</button>
      <button @click="goForward">Forward</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      replaceToPage(page) {
        this.$router.replace({ name: page });
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