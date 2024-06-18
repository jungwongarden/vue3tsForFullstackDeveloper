<template>
    <div>
      <img :src="imageUrl" alt="Vue logo">
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    setup() {
      const imageUrl = ref('https://vuejs.org/images/logo.png');
      return {
        imageUrl
      };
    }
  });
  </script>