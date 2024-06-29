<template>
    <header>
      <nav class="bg-gray-100 py-4 shadow-lg">
        <div class="container mx-auto flex justify-between items-center" style="width: 900px;">
          <!-- Logo -->
          <a href="/" class="logo">
            <img src="@/assets/logo.png" alt="MyApp Logo" class="w-24 h-auto">
          </a>
          <button @click="toggleMenu" class="block md:hidden text-gray-700 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <!-- Main Menu -->
          <nav class="w-full md:flex md:items-center md:w-auto" style="margin-left: 50px; margin-top: 30px">
            <ul class="flex flex-col md:flex-row text-gray-700 pt-4 md:pt-0 md:space-x-6">
              <li class="relative group">
                <a href="/company" class="block py-2 md:py-0">Company</a>
                <ul class="sub absolute left-0 hidden mt-2 bg-white shadow-lg group-hover:block">
                  <li><a href="/company/intro" class="block px-4 py-2">회사소개</a></li>
                  <li><a href="/company/history" class="block px-4 py-2">회사연혁</a></li>
                  <li><a href="/company/greetings" class="block px-4 py-2">인사말</a></li>
                  <li><a href="/company/organization" class="block px-4 py-2">조직</a></li>
                </ul>
              </li>
              <li class="relative group">
                <a href="/product" class="block py-2 md:py-0">Product</a>
                <ul class="sub absolute left-0 hidden mt-2 bg-white shadow-lg group-hover:block">
                  <li><a href="/products" class="block px-4 py-2">비스켓</a></li>
                  <li><a href="/products" class="block px-4 py-2">스낵</a></li>
                  <li><a href="/products" class="block px-4 py-2">기타</a></li>
                </ul>
              </li>
              <li class="relative group">
                <a href="/service" class="block py-2 md:py-0">Service</a>
                <ul class="sub absolute left-0 hidden mt-2 bg-white shadow-lg group-hover:block">
                  <li><a href="/service/online" class="block px-4 py-2">온라인 서비스</a></li>
                  <li><a href="/service/visit" class="block px-4 py-2">방문 서비스</a></li>
                  <li><a href="/service/delivery" class="block px-4 py-2">택배 서비스</a></li>
                  <li><a href="/service/reservation" class="block px-4 py-2">시설 이용 예약 서비스</a></li>
                </ul>
              </li>
              <li class="relative group">
                <a href="/community" class="block py-2 md:py-0">Community</a>
                <ul class="sub absolute left-0 hidden mt-2 bg-white shadow-lg group-hover:block">
                  <li><a href="/community/notice" class="block px-4 py-2">공지사항</a></li>
                  <li><a href="/qna/list" class="block px-4 py-2">질문 및 답변</a></li>
                  <li><a href="/data/list" class="block px-4 py-2">자료실</a></li>
                  <li><a href="/community/faq" class="block px-4 py-2">자주하는 질문</a></li>
                  <li><a href="/send-email" class="block px-4 py-2">온라인 상담</a></li>
                  <li><a href="/chat" class="block px-4 py-2">챗봇 상담</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </header>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'Header',
    setup() {
      const isMenuOpen = ref(false);
  
      const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
      };
  
      return {
        isMenuOpen,
        toggleMenu
      };
    }
  });
  </script>
  
  <style scoped>
  /* Tailwind CSS handles most styles, additional custom styles can be added here */
  .group:hover .group-hover\:block {
    display: block;
  }
  .logo img {
    display: block;
    width: 100%;
    height: auto;
  }

  .relative.group {
    position: relative;
    height: 100px;
    min-width: 180px; 
  }

  .relative.group > a {
    font-weight: 700;
    color: #999;
  }

  .relative.group:hover > a {
    color: #333;
  }

  .relative.group .sub {
    display: none;
    width: 200px;
    z-index: 9999;
  }

  .relative.group:hover .sub {
    display: block;
    z-index: 9999;
  }

  .relative.group .sub li {
    min-width: 180x; 
  }

  .relative.group .sub li:hover {
    background-color: #ececec;
  }
  </style>