<template>
    <div>
      <Visual :src="src" alt="배송 서비스" />
      <Breadcrumb group="서비스" current="배송 서비스" :href="href" />
      <div class="container mt-5">
        <h1>배송 서비스</h1>
        <hr />
        <div class="content mt-4">
          <h2>빠르고 안전한 배송 서비스</h2>
          <p>
            저희 배송 서비스는 고객님의 소중한 상품을 빠르고 안전하게 전달합니다.
            전국 어디든지 빠르게 배송해 드리며, 실시간 배송 추적 시스템을 통해
            배송 현황을 쉽게 확인하실 수 있습니다.
          </p>
          <div class="row mt-4">
            <div class="col-md-6">
              <img :src="deliveryImage1" class="img-fluid" alt="Delivery Service 1">
              <p class="mt-2">신속한 배송</p>
            </div>
            <div class="col-md-6">
              <img :src="deliveryImage2" class="img-fluid" alt="Delivery Service 2">
              <p class="mt-2">안전한 포장</p>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-6">
              <img :src="deliveryImage3" class="img-fluid" alt="Delivery Service 3">
              <p class="mt-2">전국 어디든지</p>
            </div>
            <div class="col-md-6">
              <img :src="deliveryImage4" class="img-fluid" alt="Delivery Service 4">
              <p class="mt-2">실시간 배송 추적</p>
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
    name: 'DeliveryService',
    components: {
      Visual,
      Breadcrumb
    },
    data() {
      return {
        src: new URL('@/assets/vs029.jpg', import.meta.url).href,
        href: "/service/online",
        deliveryImage1: new URL('@/assets/delivery_service01.jpg', import.meta.url).href,
        deliveryImage2: new URL('@/assets/delivery_service02.jpg', import.meta.url).href,
        deliveryImage3: new URL('@/assets/delivery_service03.jpg', import.meta.url).href,
        deliveryImage4: new URL('@/assets/delivery_service04.jpg', import.meta.url).href,
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