<template>
  <figure class="full-screen">
    <img :src="src" class="image" :alt="alt">
  </figure>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Visual',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped>
.full-screen {
  margin: 0;
  padding: 0;
  width: 100%;
  max-height: 400px;
  overflow: hidden;
}

.full-screen .image {
  display: block;
  width: 100%;
  height: auto;
}
</style>