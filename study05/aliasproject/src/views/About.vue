<template>
  <div>
    <h1>About</h1>
    <p>This is the about page.</p>
    <button @click="replaceToPage('home')">Replace to Home</button>
    <button @click="replaceToPage('event')">Event</button>
    <button @click="replaceToPage('notice')">Notice</button>
  </div>
</template>

<script>
export default {
  methods: {
    replaceToPage(page) {
      this.$router.push({ path: `/${page}` });
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