<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid" style="width: 900px; margin: 0 auto;">
      <router-link class="navbar-brand" to="/">Morning</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="justify-content: flex-end;">
          <li class="nav-item">
            <router-link v-if="isLoggedIn" :to="getUserDetailPath()" class="nav-link">My Page</router-link>
            <router-link v-else to="/signup" class="nav-link">SignUp</router-link>
          </li>
          <li class="nav-item">
            <a v-if="isLoggedIn" @click.prevent="logout" href="#" class="nav-link">Logout</a>
            <router-link v-else to="/login" class="nav-link">Login</router-link>
          </li>
        </ul>
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
      logout
    };
  }
});
</script>