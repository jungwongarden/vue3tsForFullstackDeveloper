<template>
    <div>
      <button @click="fetchDataWithPromise">Fetch Data</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useStore } from 'vuex';
  
  export default defineComponent({
    setup() {
      const store = useStore();
  
      const fetchDataWithPromise = () => {
        store.dispatch('fetchDataWithPromise')
          .then(data => {
            console.log('Data fetched:', data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      };
  
      return {
        fetchDataWithPromise
      };
    }
  });
  </script>