<template>
    <div>
      <p>{{ node.name }}</p>
      <ul v-if="node.children && node.children.length">
        <recursive-component v-for="child in node.children" :key="child.id" :node="child" />
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'RecursiveComponent',
    props: {
      node: {
        type: Object,
        required: true
      }
    }
  });
  </script>