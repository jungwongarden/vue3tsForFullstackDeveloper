<template>
    <div>
      <Visual :src="src" alt="온라인 서비스" />
      <Breadcrumb group="서비스" current="온라인 서비스" :href="href" />
      <div class="container mt-5">
        <h1>온라인 서비스</h1>
        <hr />
        <div class="content mt-4">
          <h2>편리한 온라인 서비스 제공</h2>
          <p>
            저희 온라인 서비스는 고객님께 편리하고 신속한 서비스를 제공하기 위해 최선을 다하고 있습니다. 
            다양한 서비스를 온라인으로 제공하여 언제 어디서나 쉽게 이용하실 수 있습니다.
          </p>
          <div class="row mt-4">
            <div class="col-md-6">
              <img :src="serviceImage1" class="img-fluid" alt="Online Service 1">
              <p class="mt-2">24/7 온라인 지원</p>
            </div>
            <div class="col-md-6">
              <img :src="serviceImage2" class="img-fluid" alt="Online Service 2">
              <p class="mt-2">다양한 서비스와 기능</p>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-6">
              <img :src="serviceImage3" class="img-fluid" alt="Online Service 3">
              <p class="mt-2">쉽고 빠른 접근</p>
            </div>
            <div class="col-md-6">
              <img :src="serviceImage4" class="img-fluid" alt="Online Service 4">
              <p class="mt-2">안전한 거래 보장</p>
            </div>
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
    name: 'OnlineService',
    components: {
      Visual,
      Breadcrumb
    },
    data() {
      return {
        src: new URL('@/assets/vs029.jpg', import.meta.url).href,
        href: "/service/online",
        serviceImage1:  new URL('@/assets/online_service01.jpg', import.meta.url).href,
        serviceImage2:  new URL('@/assets/online_service02.jpg', import.meta.url).href,
        serviceImage3:  new URL('@/assets/online_service03.jpg', import.meta.url).href,
        serviceImage4:  new URL('@/assets/online_service04.jpg', import.meta.url).href,
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
  .content {
    margin-top: 20px;
  }
  .content h2 {
    margin-bottom: 20px;
  }
  </style>