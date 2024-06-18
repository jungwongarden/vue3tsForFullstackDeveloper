<template>
    <div class="container">
      <p class="text">Scoped CSS Example</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ScopedComponent'
  });
  </script>
  
  <style scoped>
  .container {
    background-color: lightgrey;
  }
  .text {
    color: blue;
  }
  </style>