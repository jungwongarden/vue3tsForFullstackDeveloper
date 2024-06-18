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
  import { mapMutations } from 'vuex';
  
  export default defineComponent({
    setup() {
      const store = useStore();
  
      const { increment, decrement, updateMessage } = mapMutations({
        increment: 'increment',
        decrement: 'decrement',
        updateMessage: 'updateMessage'
      });
  
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