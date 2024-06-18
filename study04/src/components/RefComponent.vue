<template>
    <div>
      <p>Count: {{ count }}</p>
      <p>Message: {{ message }}</p>
      <button @click="increment">Increment</button>
      <button @click="changeMessage">Change Message</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    setup() {
      const count = ref(0);
      const message = ref('Hello Vue!');
  
      const increment = () => {
        count.value++;
      };
  
      const changeMessage = () => {
        message.value = 'Message changed!';
      };
  
      return {
        count,
        message,
        increment,
        changeMessage
      };
    }
  });
  </script>