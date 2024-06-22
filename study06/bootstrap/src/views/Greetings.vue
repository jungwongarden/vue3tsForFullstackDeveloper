<template>
    <div>
      <Visual :src="src" alt="인사말" />
      <Breadcrumb group="회사" current="인사말" :href="href" />
      <div class="container mt-5">
        <h1>인사말</h1>
        <hr />
        <div class="img-container">
          <div>
            <img :src="greetingsImage" class="img-fluid" alt="Greetings Image">
          </div>
        </div>
        <br>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Visual from '@/components/Visual.vue';
  import Breadcrumb from '@/components/Breadcrumb.vue';
  
  export default defineComponent({
    name: 'Greetings',
    components: {
      Visual,
      Breadcrumb
    },
    data() {
      return {
        src: new URL('@/assets/vs005.jpg', import.meta.url).href,
        href: '/company/intro',
        greetingsImage: new URL('@/assets/greetings01.png', import.meta.url).href
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
    width: 1000px;
    height: auto;
    margin: 0 auto;
  }

  .img-container img {
    display:block;
    max-width: 100%;
  }
  </style>