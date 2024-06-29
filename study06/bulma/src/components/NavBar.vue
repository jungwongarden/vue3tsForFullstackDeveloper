<template>
  <nav class="navbar is-light">
    <div class="container" style="width: 900px; margin: 0 auto;">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">Morning</router-link>
        <button class="navbar-burger" :class="{ 'is-active': isActive }" @click="toggleNavbar">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': isActive }">
        <div class="navbar-end">
          <div class="navbar-item">
            <router-link v-if="isLoggedIn" :to="getUserDetailPath()" class="navbar-item">My Page</router-link>
            <router-link v-else to="/signup" class="navbar-item">SignUp</router-link>
          </div>
          <div class="navbar-item">
            <a v-if="isLoggedIn" @click.prevent="logout" href="#" class="navbar-item">Logout</a>
            <router-link v-else to="/login" class="navbar-item">Login</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'NavBar',
  setup() {
    const router = useRouter();
    const isLoggedIn = ref(false); // 반응성 변수로 로그인 상태 관리
    const isActive = ref(false); // Navbar burger 상태 관리

    const getUserDetailPath = () => {
      const currentUser = JSON.parse(sessionStorage.getItem('currentUser') || '{}');
      return `/user/${currentUser.id}`;
    };

    const logout = () => {
      // 세션 스토리지에서 사용자 정보 삭제
      sessionStorage.removeItem('currentUser');
      isLoggedIn.value = false; // 로그아웃 상태로 변경

      // 로그아웃 후 메인 페이지로 이동
      router.push('/');
    };

    const checkSession = () => {
      const currentUser = sessionStorage.getItem('currentUser');
      isLoggedIn.value = currentUser !== null;
    };

    const toggleNavbar = () => {
      isActive.value = !isActive.value;
    };

    // 페이지 로드 시 세션 체크
    onMounted(checkSession);

    // 세션 변경 감지
    watch(() => sessionStorage.getItem('currentUser'), (newValue, oldValue) => {
      if (newValue !== oldValue) {
        isLoggedIn.value = newValue !== null;
        window.location.reload();
      }
      router.push('/');
    });

    return {
      isLoggedIn,
      getUserDetailPath,
      logout,
      isActive,
      toggleNavbar
    };
  }
});
</script>