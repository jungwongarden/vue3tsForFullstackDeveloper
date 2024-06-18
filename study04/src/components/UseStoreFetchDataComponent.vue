<template>
    <div>
      <button @click="fetchData">Fetch Data</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useStore } from 'vuex';
  
  export default defineComponent({
    setup() {
      const store = useStore();
  
      const fetchData = () => {
        store.dispatch('fetchData');
      };
  
      return {
        fetchData
      };
    }
  });
  </script>