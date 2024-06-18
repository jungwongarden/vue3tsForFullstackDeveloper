<template>
  <div>
    <button @click="goToPage('home')">홈</button>
    <button @click="goToPage('about')">소개</button>
    <button @click="goToPage('product')">상품</button>
    <button @click="goToPage('community')">커뮤니티</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToPage(page) {
      this.$router.push({ path: `/${page}` });
    }
  }
};
</script>