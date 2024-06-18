<template>
    <div>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    props: {
      message: {
        type: String,
        required: true
      }
    }
  });
  </script>