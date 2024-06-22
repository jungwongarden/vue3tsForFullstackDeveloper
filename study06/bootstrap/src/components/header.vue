<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid" style="width:900px; margin:0 auto;">
        <!-- Logo -->
        <a href="/" class="navbar-brand logo">
          <img src="@/assets/logo.png" alt="MyApp Logo">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Main Menu -->
        <nav class="collapse navbar-collapse" id="navbarSupportedContent" style="margin-left:60px;">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a href="/company" class="nav-link dropdown-toggle" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">Company</a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li><a href="/company/intro" class="dropdown-item" >회사소개</a></li>
                <li><a href="/company/history" class="dropdown-item" >회사연혁</a></li>
                <li><a href="/company/greetings" class="dropdown-item" >인사말</a></li>
                <li><a href="/company/organization" class="dropdown-item" >조직</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a href="/product" class="nav-link dropdown-toggle" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">Product</a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
                <li><a href="/products" class="dropdown-item" >비스켓</a></li>
                <li><a href="/products" class="dropdown-item" >스낵</a></li>
                <li><a href="/products" class="dropdown-item" >기타</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a href="/service" class="nav-link dropdown-toggle" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">Service</a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown3">
                <li><a href="/service/online" class="dropdown-item" >온라인 서비스</a></li>
                <li><a href="/service/visit" class="dropdown-item" >방문 서비스</a></li>
                <li><a href="/service/delivery" class="dropdown-item" >택배 서비스</a></li>
                <li><a href="/service/reservation" class="dropdown-item" >시설 이용 예약 서비스</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a href="/community" class="nav-link dropdown-toggle" id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false">Community</a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown4">
                <li><a href="/community/notice" class="dropdown-item" >공지사항</a></li>
                <li><a href="/qna/list" class="dropdown-item" >질문 및 답변</a></li>
                <li><a href="/data/list" class="dropdown-item" >자료실</a></li>
                <li><a href="/community/faq" class="dropdown-item" >자주하는 질문</a></li>
                <li><a href="/send-email" class="dropdown-item" >온라인 상담</a></li>
                <li><a href="/chat" class="dropdown-item" >챗봇 상담</a></li>
              </ul>
            </li>
          </ul>
        </nav>
 
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  data() {
    return {
      isAuthenticated: false // 이 값은 실제 로그인 여부에 따라 변경되어야 합니다.
    };
  }
});
</script>

<style scoped>
/* Add custom CSS for hover dropdown */
.nav-item.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu {
  margin-top: 0; /* Adjust margin if needed */
}
.logo {
  display: block;
  width: 90px;
}

.logo img {
  display: block;
  width: 100%;
  height: auto;
}

.dropdown-toggle::after {
  border: none;
}

.nav-link {
  min-width: 180px; 
  font-size: 1.4em;
}
</style>