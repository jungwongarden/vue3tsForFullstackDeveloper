<template>
    <div>
      <Visual :src="src" alt="예약 서비스" />
      <Breadcrumb group="서비스" current="예약 서비스" :href="href" />
      <div class="container mt-5">
        <h1>예약 서비스</h1>
        <hr />
        <div class="content mt-4">
          <h2>간편하고 빠른 예약 서비스</h2>
          <p>
            저희 예약 서비스는 고객님이 원하는 시간을 편리하게 예약할 수 있도록 도와드립니다.
            온라인으로 간편하게 예약을 진행하실 수 있으며, 예약 확인 및 취소도 손쉽게 할 수 있습니다.
          </p>
          <div class="row mt-4">
            <div class="col-md-6">
              <img :src="reservationImage1" class="img-fluid" alt="Reservation Service 1">
              <p class="mt-2">쉽고 빠른 예약</p>
            </div>
            <div class="col-md-6">
              <img :src="reservationImage2" class="img-fluid" alt="Reservation Service 2">
              <p class="mt-2">원하는 시간 선택</p>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-6">
              <img :src="reservationImage3" class="img-fluid" alt="Reservation Service 3">
              <p class="mt-2">간편한 온라인 예약</p>
            </div>
            <div class="col-md-6">
              <img :src="reservationImage4" class="img-fluid" alt="Reservation Service 4">
              <p class="mt-2">예약 확인 및 취소</p>
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
    name: 'ReservationService',
    components: {
      Visual,
      Breadcrumb
    },
    data() {
      return {
        src: new URL('@/assets/vs029.jpg', import.meta.url).href,
        href: "/service/online",
        reservationImage1: new URL('@/assets/reservation_service01.jpg', import.meta.url).href,
        reservationImage2: new URL('@/assets/reservation_service02.jpg', import.meta.url).href,
        reservationImage3: new URL('@/assets/reservation_service03.jpg', import.meta.url).href,
        reservationImage4: new URL('@/assets/reservation_service04.jpg', import.meta.url).href,
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