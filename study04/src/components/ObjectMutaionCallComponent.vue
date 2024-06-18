<template>
    <div>
      <input type="text" v-model="newMessage" />
      <button @click="updateMessage">Update Message</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useStore } from 'vuex';
  
  export default defineComponent({
    setup() {
      const store = useStore();
      const newMessage = ref('');
  
      const updateMessage = () => {
        store.commit('updateMessage', { id: 1, message: newMessage.value });
        newMessage.value = ''; // Clear the input field after updating message
      };
  
      return {
        newMessage,
        updateMessage
      };
    }
  });
  </script>