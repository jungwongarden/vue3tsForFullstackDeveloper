<template functional>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: 'Default Title' // title의 기본값 설정
    },
    message: {
      type: String,
      default: 'Default Message' // message의 기본값 설정
    }
  },
  computed: {
    title() {
      return this.$props.title;
    },
    message() {
      return this.$props.message;
    }
  }
});
</script>