<template>
    <div>
      <p>Count: {{ count }}</p>
      <p>Message: {{ message }}</p>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
      <button @click="updateMessage">Update Message</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useStore } from 'vuex';
  
  export default defineComponent({
    setup() {
      const store = useStore();
  
      const increment = () => {
        store.commit('increment');
      };
  
      const decrement = () => {
        store.commit('decrement');
      };
  
      const updateMessage = () => {
        store.commit('updateMessage', 'New message');
      };
  
      return {
        count: store.state.count,
        message: store.state.message,
        increment,
        decrement,
        updateMessage
      };
    }
  });
  </script>