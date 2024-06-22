<template>
  <div>
    <h1>About</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About',
  beforeRouteEnter(to, from, next) {
    console.log('Component Guard: About - beforeRouteEnter');
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log('Component Guard: About - beforeRouteUpdate');
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('Component Guard: About - beforeRouteLeave');
    next();
  }
});
</script>

<style scoped>
/* Add your styles here */
</style>