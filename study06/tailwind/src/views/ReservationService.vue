<template>
  <div>
    <Visual :src="src" alt="예약 서비스" />
    <Breadcrumb group="서비스" current="예약 서비스" :href="href" />
    <div class="container mt-5">
      <h1 class="text-2xl font-bold">예약 서비스</h1>
      <hr class="my-4">
      <div class="content mt-4">
        <h2 class="text-xl font-semibold mb-4">간편하고 빠른 예약 서비스</h2>
        <p class="mb-4">
          저희 예약 서비스는 고객님이 원하는 시간을 편리하게 예약할 수 있도록 도와드립니다.
          온라인으로 간편하게 예약을 진행하실 수 있으며, 예약 확인 및 취소도 손쉽게 할 수 있습니다.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img :src="reservationImage1" class="w-full h-auto" alt="Reservation Service 1">
            <p class="mt-2">쉽고 빠른 예약</p>
          </div>
          <div>
            <img :src="reservationImage2" class="w-full h-auto" alt="Reservation Service 2">
            <p class="mt-2">원하는 시간 선택</p>
          </div>
          <div>
            <img :src="reservationImage3" class="w-full h-auto" alt="Reservation Service 3">
            <p class="mt-2">간편한 온라인 예약</p>
          </div>
          <div>
            <img :src="reservationImage4" class="w-full h-auto" alt="Reservation Service 4">
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
      src: require('@/assets/vs029.jpg'),
      href: "/service/online",
      reservationImage1: require('@/assets/reservation_service01.jpg'),
      reservationImage2: require('@/assets/reservation_service02.jpg'),
      reservationImage3: require('@/assets/reservation_service03.jpg'),
      reservationImage4: require('@/assets/reservation_service04.jpg'),
    };
  }
});
</script>

<style scoped>
/* 추가적인 스타일링 필요 시 여기에 작성 */
</style>