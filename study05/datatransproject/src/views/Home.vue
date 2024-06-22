<template>
  <div>
    <h1>홈</h1>
    <p>환영합니다!</p>
    <button @click="replaceToPage('home')">홈으로 이동</button>
    <button @click="goBack">뒤로</button>
    <button @click="goForward">앞으로</button>
  </div>
</template>

<script>
export default {
  methods: {
    replaceToPage(page) {
      this.$router.replace({ path: `/${page}` });
    },
    goBack() {
      this.$router.go(-1);
    },
    goForward() {
      this.$router.go(1);
    }
  }
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>