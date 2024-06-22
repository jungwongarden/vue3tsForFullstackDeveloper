<template>
    <div>
      <Visual :src="src" alt="조직" />
      <Breadcrumb group="회사" current="조직" :href="href" />
      <div class="container mt-5">
        <h1>조직</h1>
        <hr />
        <div class="container">
          <div class="img-container">
            <img :src="organizationImage1" class="img-fluid" alt="Organization Image 1">
          </div>
          <div class="img-container">
            <img :src="organizationImage2" class="img-fluid" alt="Organization Image 2">
          </div>
          <div class="img-container">
            <img :src="organizationImage3" class="img-fluid" alt="Organization Image 3">
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
    name: 'Organization',
    components: {
      Visual,
      Breadcrumb
    },
    data() {
      return {
        src: new URL('@/assets/vs023.jpg', import.meta.url).href,
        href: "/company/intro",
        organizationImage1: new URL('@/assets/organization01.png', import.meta.url).href,
        organizationImage2: new URL('@/assets/organization02.png', import.meta.url).href,
        organizationImage3: new URL('@/assets/organization03.png', import.meta.url).href,
      };
    }
  });
  </script>
  
  <style scoped>
  .container {
    margin-top: 30px;
  }
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