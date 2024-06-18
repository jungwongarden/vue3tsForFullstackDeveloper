<template>
    <div>
      <p>Count: {{ state.count }}</p>
      <p>Message: {{ state.message }}</p>
      <button @click="increment">Increment</button>
      <button @click="changeMessage">Change Message</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive } from 'vue';
  
  export default defineComponent({
    setup() {
      const state = reactive({
        count: 0,
        message: 'Hello Vue!'
      });
  
      const increment = () => {
        state.count++;
      };
  
      const changeMessage = () => {
        state.message = 'Message changed!';
      };
  
      return {
        state,
        increment,
        changeMessage
      };
    }
  });
  </script>