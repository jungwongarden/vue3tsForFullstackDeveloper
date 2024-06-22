<template>
    <div>
      <Visual :src="src" alt="방문 서비스" />
      <Breadcrumb group="서비스" current="방문 서비스" :href="href" />
      <div class="container mt-5">
        <h1>방문 서비스</h1>
        <hr />
        <div class="content mt-4">
          <h2>고객 맞춤형 방문 서비스 제공</h2>
          <p>
            저희 방문 서비스는 고객님께서 편리하게 서비스를 받을 수 있도록 직접 방문하여 서비스를 제공합니다. 
            언제 어디서나 고객님의 요구에 맞춰 최상의 서비스를 제공하기 위해 노력하고 있습니다.
          </p>
          <div class="row mt-4">
            <div class="col-md-6">
              <img :src="visitImage1" class="img-fluid" alt="Visit Service 1">
              <p class="mt-2">전문적인 방문 서비스</p>
            </div>
            <div class="col-md-6">
              <img :src="visitImage2" class="img-fluid" alt="Visit Service 2">
              <p class="mt-2">고객 맞춤형 솔루션</p>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-6">
              <img :src="visitImage3" class="img-fluid" alt="Visit Service 3">
              <p class="mt-2">시간과 장소에 구애받지 않는 서비스</p>
            </div>
            <div class="col-md-6">
              <img :src="visitImage4" class="img-fluid" alt="Visit Service 4">
              <p class="mt-2">신뢰할 수 있는 전문가 팀</p>
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
    name: 'VisitService',
    components: {
      Visual,
      Breadcrumb
    },
    data() {
      return {
        src: new URL('@/assets/vs029.jpg', import.meta.url).href,
        href: "/service/online",
        visitImage1: new URL('@/assets/visit_service01.jpg', import.meta.url).href,
        visitImage2: new URL('@/assets/visit_service02.jpg', import.meta.url).href,
        visitImage3: new URL('@/assets/visit_service03.jpg', import.meta.url).href,
        visitImage4: new URL('@/assets/visit_service04.jpg', import.meta.url).href,
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