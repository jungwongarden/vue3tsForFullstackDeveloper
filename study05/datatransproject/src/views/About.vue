<template>
  <div>
    <h1>소개</h1>
    <p>이것은 소개 페이지입니다. 이 페이지는 /about 및 /info를 통해 접근할 수 있습니다.</p>
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