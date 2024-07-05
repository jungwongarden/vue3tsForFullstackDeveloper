<!-- src/views/UserView.vue -->
<template>
    <div>
      <h1>User Details</h1>
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
      <button @click="fetchUser">Fetch User</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useUserViewModel } from '@/viewmodels/UserViewModel';
  
  export default defineComponent({
    setup() {
      const { user, fetchUser } = useUserViewModel();
  
      return {
        user,
        fetchUser
      };
    }
  });
  </script>