<template>
    <figure class="w-full max-h-400px overflow-hidden m-0 p-0" id="vs">
      <img :src="src" :alt="alt" class="w-full h-auto block">
    </figure>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Visual',
    props: {
      src: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        required: true
      }
    }
  });
  </script>
  
  <style scoped>
  /* Tailwind CSS handles most styles, additional custom styles can be added here if needed */
  #vs { max-height: 400px; overflow: hidden; }
  </style>