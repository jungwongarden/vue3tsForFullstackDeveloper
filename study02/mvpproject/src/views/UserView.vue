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
  import User from '@/models/User';
  import UserPresenter from '@/presenters/UserPresenter';
  
  export default defineComponent({
    data() {
      return {
        user: new User(1, 'Gitae Kim', 'kim@example.com')
      };
    },
    methods: {
      async fetchUser() {
        const presenter = new UserPresenter();
        this.user = await presenter.getUser();
      }
    }
  });
  </script>