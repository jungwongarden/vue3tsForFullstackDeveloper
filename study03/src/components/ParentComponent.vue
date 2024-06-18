<template>
    <div>
      <ChildComponent :message="parentMessage" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import ChildComponent from './ChildComponent.vue';
  
  export default defineComponent({
    components: {
      ChildComponent
    },
    setup() {
      const parentMessage = ref('Message from parent');
      return {
        parentMessage
      };
    }
  });
  </script>