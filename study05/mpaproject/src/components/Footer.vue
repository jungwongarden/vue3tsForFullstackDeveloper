<template>
    <footer>
      <hr />
      <p>&copy; 2024 My Company</p>
    </footer>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'Footer'
  })
  </script>
  
  <style scoped>
  footer {
    text-align: center;
    margin-top: 2rem;
  }
  </style>