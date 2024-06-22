<template>
    <div>
      <Visual :src="src" alt="회사 연혁" />
      <Breadcrumb group="회사" current="연혁" :href="href" />
      <div class="container mt-5">
        <h1>회사 연혁</h1>
        <hr />

          <div class="img-container">
            <img :src="historyImage" class="img-fluid" alt="History Image">
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Visual from '@/components/Visual.vue';
  import Breadcrumb from '@/components/Breadcrumb.vue';
  
  export default defineComponent({
    name: 'History',
    components: {
      Visual,
      Breadcrumb
    },
    data() {
      return {
        src: new URL('@/assets/vs023.jpg', import.meta.url).href,
        href: '/company/intro',
        historyImage: new URL('@/assets/history01.png', import.meta.url).href
      };
    }
  });
  </script>
  
  <style>
  .img-fluid {
    max-width: 100%;
    height: auto;
  }

  .img-container {
    width: 900px;
    height: auto;
    margin: 0 auto;
  }

  .img-container img {
    display:block;
    max-width: 100%;
  }
  </style>