<template>
    <div>
      <h1>User Details</h1>
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import User from '@/models/User';
  
  export default defineComponent({
    data() {
      return {
        user: new User(1, 'John Doe', 'john@example.com')
      };
    }
  });
  </script>