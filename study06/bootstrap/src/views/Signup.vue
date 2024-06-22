<template>
    <div>
      <Visual :src="src" alt="User" />
      <Breadcrumb group="User" current="Signup" :href="href" />
      <div class="container mt-5">
        <h1>Sign Up</h1>
        <form @submit.prevent="signup">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username" v-model="username" required>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" v-model="email" required>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="password" required>
          </div>
          <div class="btn-group">
            <button type="submit" class="btn btn-primary">회원가입</button>
          </div>
        </form>
      </div>

    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Breadcrumb from '@/components/Breadcrumb.vue';
  import Visual from '@/components/Visual.vue';
  
  export default defineComponent({
    name: 'Signup',
    components: {
      Breadcrumb,
      Visual
    },
    data() {
      return {
        username: '',
        email: '',
        password: '',
        src: new URL('@/assets/vs018.jpg', import.meta.url).href,
        href: "/user/login"
      };
    },
    methods: {
      signup() {
        // Logic to sign up
        alert('Signed up successfully!');
      }
    }
  });
  </script>