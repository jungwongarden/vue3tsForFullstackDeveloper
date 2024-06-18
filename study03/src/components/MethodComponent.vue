<template>
    <div>
      <button @click="increment">Increment</button>
      <p>{{ count }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    setup() {
      const count = ref(0);
  
      const increment = () => {
        count.value++;
      };
  
      return {
        count,
        increment
      };
    }
  });
  </script>