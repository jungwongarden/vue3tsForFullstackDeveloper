<template>
    <div>
      <Visual :src="src" alt="회사 소개" />
      <Breadcrumb group="회사" current="소개" :href="href" />
      <div class="container mt-5">
        <h1>회사 소개</h1>
        <hr />
        <div class="intro">
          <div class="img-container">
            <img :src="introImages[0]" class="img-fluid" alt="Intro Image 1">
          </div>
          <div class="img-container">
            <img :src="introImages[1]" class="img-fluid" alt="Intro Image 2">
          </div>
          <div class="img-container">
            <img :src="introImages[2]" class="img-fluid" alt="Intro Image 3">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Visual from '@/components/Visual.vue';
  import Breadcrumb from '@/components/Breadcrumb.vue';
  
  export default defineComponent({
    name: 'Intro',
    components: {
      Visual,
      Breadcrumb
    },
    data() {
      return {
        src: new URL('@/assets/vs005.jpg', import.meta.url).href,
        href: '/company/intro',
        introImages: [
          new URL('@/assets/intro01.png', import.meta.url).href,
          new URL('@/assets/intro02.png', import.meta.url).href,
          new URL('@/assets/intro03.png', import.meta.url).href
        ]
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
  </style>