<template>
    <div>
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'MyComponent',
    setup() {
      const title = ref('Hello Vue 3');
      const message = ref('This is a single file component');
      return {
        title,
        message
      };
    }
  });
  </script>
  
  <style scoped>
  h1 {
    color: blue;
  }
  </style>