<template>
    <div>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    setup() {
      const message = ref('Hello, Vue!');
      return {
        message
      };
    }
  });
  </script>