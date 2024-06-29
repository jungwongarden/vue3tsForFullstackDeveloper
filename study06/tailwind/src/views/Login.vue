<template>
  <div>
    <Visual :src="src" alt="User" />
    <Breadcrumb group="User" current="Login" :href="href" />
    <div class="container mx-auto mt-5">
      <h1 class="text-3xl font-bold">Login</h1>
      <form @submit.prevent="login" class="mt-4 space-y-4">
        <div>
          <label for="id" class="block text-sm font-medium text-gray-700">ID</label>
          <input type="text" v-model="id" id="id" name="id" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required>
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" v-model="password" id="password" name="password" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required>
        </div>
        <div>
          <button type="submit" class="block w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Visual from '@/components/Visual.vue';
import users from '@/assets/users.json';

interface User {
  id: string;
  pw: string;
}

export default defineComponent({
  name: 'Login',
  components: {
    Breadcrumb,
    Visual
  },
  data() {
    return {
      id: '',
      password: '',
      src: new URL('@/assets/vs018.jpg', import.meta.url).href,
      href: '/user/login'
    };
  },
  methods: {
    login() {
      const user: User | undefined = users.find((u: User) => u.id === this.id && u.pw === this.password);

      if (user) {
        // 로그인 성공 처리: 세션 또는 쿠키 설정
        sessionStorage.setItem('currentUser', JSON.stringify(user)); // 세션에 사용자 정보 저장

        alert('Logged in successfully!');

        // 로그인 후 리다이렉션 또는 다음 동작을 수행할 수 있습니다.
        // 현재 페이지를 새로고침
        window.location.reload();

        // 메인 페이지로 이동
        // window.location.href = '/';
        // this.$router.push('/');
      } else {
        alert('Login failed. Please check your credentials.');
      }
    }
  }
});
</script>

<style scoped>
/* 추가적인 스타일링이 필요한 경우 여기에 작성할 수 있습니다. */
</style>