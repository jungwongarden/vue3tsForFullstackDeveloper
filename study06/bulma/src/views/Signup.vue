<template>
  <div>
    <Visual :src="src" alt="User" />
    <Breadcrumb :group="breadcrumbGroup" :current="current" :href="href" />
    <section class="section">
      <div class="container mt-5">
        <h1 class="title">회원 가입</h1>
        <form @submit.prevent="signup">
          <div class="field">
            <label for="username" class="label">사용자 이름</label>
            <div class="control">
              <input type="text" class="input" id="username" v-model="username" required>
            </div>
          </div>
          <div class="field">
            <label for="email" class="label">이메일 주소</label>
            <div class="control">
              <input type="email" class="input" id="email" v-model="email" required>
            </div>
          </div>
          <div class="field">
            <label for="password" class="label">비밀번호</label>
            <div class="control">
              <input type="password" class="input" id="password" v-model="password" required>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button type="submit" class="button is-primary">회원가입</button>
            </div>
          </div>
        </form>
      </div>
    </section>
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
      breadcrumbGroup: 'User',
      current: 'Signup',
      href: '/user/login'
    };
  },
  methods: {
    signup() {
      // 회원가입 로직을 구현합니다.
      alert('회원 가입이 완료되었습니다!');
      // 회원가입 후 로그인 페이지로 이동합니다.
      this.$router.push('/user/login');
    }
  }
});
</script>

<style scoped>
.container {
  margin-top: 30px;
}
</style>