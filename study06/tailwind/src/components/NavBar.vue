<template>
    <nav class="bg-gray-100 py-4 shadow-lg">
      <div class="container mx-auto flex justify-between items-center" style="width: 900px;">
        <router-link class="text-2xl font-bold text-gray-700" to="/">Morning</router-link>
        <button @click="toggleMenu" class="block md:hidden text-gray-700 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <div :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}" class="w-full md:flex md:items-center md:w-auto">
          <ul class="text-gray-700 pt-4 md:pt-0 md:flex md:space-x-6">
            <li>
              <router-link v-if="isLoggedIn" :to="getUserDetailPath()" class="block py-2 md:py-0">My Page</router-link>
              <router-link v-else to="/signup" class="block py-2 md:py-0">SignUp</router-link>
            </li>
            <li>
              <a v-if="isLoggedIn" @click.prevent="logout" href="#" class="block py-2 md:py-0">Logout</a>
              <router-link v-else to="/login" class="block py-2 md:py-0">Login</router-link>
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
      const isMenuOpen = ref(false); // 반응성 변수로 메뉴 상태 관리
  
      const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
      };
  
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
        isMenuOpen,
        toggleMenu,
        getUserDetailPath,
        logout
      };
    }
  });
  </script>