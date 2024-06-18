<template>
    <div>
      <p v-if="status === 'switch'">Switch</p>
      <p v-else-if="status === 'pending'">Pending</p>
      <p v-else>This is not visible</p>
      <button @click="toggleVisibility">Toggle Visibility</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'StatusComponent',
    setup() {
      const status = ref<string>('switch');
  
      const toggleVisibility = () => {
        status.value = status.value === 'switch' ? 'pending' : 'switch';
      };
  
      return {
        status,
        toggleVisibility
      };
    }
  });
  </script>
  
  <style scoped>
  /* 스타일은 필요에 따라 추가하세요 */
  </style>