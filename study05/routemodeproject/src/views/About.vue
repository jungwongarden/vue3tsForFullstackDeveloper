<template>
  <div>
    <h1>About Page</h1>
    <p>Learn more about us on this page.</p>
    <button @click="replaceToPage('home')">Replace to Home</button>
    <button @click="goBack">Back</button>
    <button @click="goForward">Forward</button>
  </div>
</template>

<script>
export default {
  methods: {
    replaceToPage(page) {
      this.$router.replace({ name: page });
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