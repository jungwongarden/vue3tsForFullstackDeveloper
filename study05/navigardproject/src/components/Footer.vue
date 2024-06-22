<template>
    <footer>
      <p>&copy; 2024 My Company</p>
    </footer>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Footer'
  });
  </script>
  
  <style scoped>
  footer { padding-top:2em; border-top: 2px solid #333; }
  </style>