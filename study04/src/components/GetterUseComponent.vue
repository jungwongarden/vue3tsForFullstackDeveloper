<template>
    <div>
      <p>Count: {{ count }}</p>
      <p>Double Count: {{ doubleCount }}</p>
      <p>Full Name: {{ fullName }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useStore } from 'vuex';
  
  export default defineComponent({
    setup() {
      const store = useStore();
  
      return {
        count: store.state.count,
        doubleCount: store.getters.doubleCount,
        fullName: store.getters.fullName
      };
    }
  });
  </script>