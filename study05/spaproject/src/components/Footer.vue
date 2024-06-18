<template>
    <footer>
      <p>&copy; 2024 Your Company</p>
    </footer>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'Footer'
  })
  </script>
  
  <style scoped>
  /* 푸터 스타일 */
  footer {
    text-align: center;
    padding: 1rem;
    background-color: #f1f1f1;
  }
  </style>