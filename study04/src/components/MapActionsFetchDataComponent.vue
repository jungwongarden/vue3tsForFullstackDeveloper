<template>
    <div>
      <button @click="fetchData">Fetch Data</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useStore } from 'vuex';
  import { mapActions } from 'vuex';
  
  export default defineComponent({
    methods: {
      ...mapActions(['fetchData'])
    }
  });
  </script>