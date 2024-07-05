<template>
    <div>
      <h1>User Details</h1>
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import User from '@/models/User'; // default export를 import할 때는 중괄호 없이 사용합니다.
  
  export default defineComponent({
    data() {
      return {
        user: {} as User // 예시로 User 인터페이스 사용
      };
    },
    // 나머지 컴포넌트 코드
  });
  </script>