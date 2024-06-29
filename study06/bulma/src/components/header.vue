<template>
  <header>
    <nav class="navbar is-light">
      <div class="container" style="width: 900px; margin: 0 auto;">
        <!-- Logo -->
        <a href="/" class="navbar-item logo">
          <img src="@/assets/logo.png" alt="MyApp Logo">
        </a>
        <div class="navbar-burger" :class="{ 'is-active': isActive }" @click="toggleNavbar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <!-- Main Menu -->
        <div class="navbar-menu" :class="{ 'is-active': isActive }">
          <div class="navbar-start" style="margin-left: 60px;">
            <div class="navbar-item has-dropdown is-hoverable">
              <a href="/company" class="navbar-link">Company</a>
              <div class="navbar-dropdown">
                <a href="/company/intro" class="navbar-item">회사소개</a>
                <a href="/company/history" class="navbar-item">회사연혁</a>
                <a href="/company/greetings" class="navbar-item">인사말</a>
                <a href="/company/organization" class="navbar-item">조직</a>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a href="/product" class="navbar-link">Product</a>
              <div class="navbar-dropdown">
                <a href="/products" class="navbar-item">비스켓</a>
                <a href="/products" class="navbar-item">스낵</a>
                <a href="/products" class="navbar-item">기타</a>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a href="/service" class="navbar-link">Service</a>
              <div class="navbar-dropdown">
                <a href="/service/online" class="navbar-item">온라인 서비스</a>
                <a href="/service/visit" class="navbar-item">방문 서비스</a>
                <a href="/service/delivery" class="navbar-item">택배 서비스</a>
                <a href="/service/reservation" class="navbar-item">시설 이용 예약 서비스</a>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a href="/community" class="navbar-link">Community</a>
              <div class="navbar-dropdown">
                <a href="/community/notice" class="navbar-item">공지사항</a>
                <a href="/qna/list" class="navbar-item">질문 및 답변</a>
                <a href="/data/list" class="navbar-item">자료실</a>
                <a href="/community/faq" class="navbar-item">자주하는 질문</a>
                <a href="/send-email" class="navbar-item">온라인 상담</a>
                <a href="/chat" class="navbar-item">챗봇 상담</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Header',
  setup() {
    const isActive = ref(false);

    const toggleNavbar = () => {
      isActive.value = !isActive.value;
    };

    return {
      isActive,
      toggleNavbar
    };
  }
});
</script>

<style scoped>
.logo {
  display: block;
  width: 90px;
}

.logo img {
  display: block;
  width: 100%;
  height: auto;
}

.navbar-burger span {
  background-color: #333;
}

.navbar-menu.is-active {
  display: block;
}

.navbar-item.has-dropdown:hover .navbar-dropdown {
  display: block;
}

.navbar-dropdown {
  margin-top: 0;
}

.navbar-link {
  min-width: 180px;
  font-size: 1.4em;
}
</style>