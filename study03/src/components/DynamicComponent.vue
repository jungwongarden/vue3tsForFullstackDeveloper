<template>
    <div>
      <button @click="toggleComponent">Toggle Component</button>
      <component :is="currentComponent"></component>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import FirstComponent from './FirstComponent.vue';
  import SecondComponent from './SecondComponent.vue';
  
  export default defineComponent({
    setup() {
      const currentComponent = ref('FirstComponent');
  
      const toggleComponent = () => {
        currentComponent.value = currentComponent.value === 'FirstComponent'
          ? 'SecondComponent'
          : 'FirstComponent';
      };
  
      return {
        currentComponent,
        toggleComponent
      };
    }
  });
  </script>