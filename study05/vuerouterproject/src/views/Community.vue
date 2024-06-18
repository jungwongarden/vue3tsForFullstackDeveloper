<template>
    <div>
      <h1>Community</h1>
      <Footer />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  
  export default defineComponent({
    name: 'Community',
    components: {
      Header,
      Footer
    }
  });
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>