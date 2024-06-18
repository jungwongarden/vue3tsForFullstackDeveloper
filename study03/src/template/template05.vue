<template>
    <div>
      <button @click="showAlert">Click me</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    setup() {
      const showAlert = () => {
        alert('Button clicked!');
      };
  
      return {
        showAlert
      };
    }
  });
  </script>