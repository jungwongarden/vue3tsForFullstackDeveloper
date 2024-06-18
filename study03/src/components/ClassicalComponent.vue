<template>
    <div>
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
      <button @click="updateMessage">Update Message</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, toRefs } from 'vue';
  
  export default defineComponent({
    name: 'MyComponent',
    props: {
      title: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const { title, message } = toRefs(props);
      const updatedMessage = ref(message.value);
  
      const updateMessage = () => {
        updatedMessage.value = 'Message updated!';
      };
  
      return {
        title,
        message: updatedMessage,
        updateMessage,
      };
    },
  });
  </script>