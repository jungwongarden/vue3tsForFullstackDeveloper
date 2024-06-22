<template>
  <div>
    <Visual :src="src" alt="User" />
    <Breadcrumb group="User" current="Login" :href="href" />
    <div class="container mt-5">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="id" class="form-label">ID</label>
          <input type="text" class="form-control" id="id" v-model="id" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" v-model="password" required>
        </div>
        <div class="btn-group">
          <button type="submit" class="btn btn-primary">Submit</button>
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
      href: "/user/login"
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
        window.location.href = '/';
        //this.$router.push('/');
      } else {
        alert('Login failed. Please check your credentials.');
      }
    }
  }
});
</script>