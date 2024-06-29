<template>
  <div>
    <Visual :src="src" alt="User" />
    <Breadcrumb group="User" current="Signup" :href="href" />
    <div class="container mt-5">
      <h1 class="text-2xl font-bold">회원 가입</h1>
      <form @submit.prevent="signup" class="mt-4">
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-700">사용자 이름</label>
          <input type="text" id="username" v-model="username" required
                 class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">이메일 주소</label>
          <input type="email" id="email" v-model="email" required
                 class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">비밀번호</label>
          <input type="password" id="password" v-model="password" required
                 class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div>
          <button type="submit"
                  class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            회원가입
          </button>
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
      src: require('@/assets/vs018.jpg'),
      href: "/user/login"
    };
  },
  methods: {
    signup() {
      // 회원가입 로직을 여기에 구현합니다.
      alert('회원가입 성공!');
    }
  }
});
</script>

<style scoped>
/* 추가적인 스타일링 필요 시 여기에 작성 */
</style>