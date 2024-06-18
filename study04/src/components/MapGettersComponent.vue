<template>
    <div>
      <p>Count: {{ count }}</p>
      <p>Double Count: {{ doubleCount }}</p>
      <p>Full Name: {{ fullName }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { mapGetters } from 'vuex';
  
  export default defineComponent({
    computed: {
      ...mapGetters(['doubleCount', 'fullName']),
      count() {
        return this.$store.state.count;
      }
    }
  });
  </script>