<template>
  <div>
    <Visual :src="src" alt="예약 서비스" />
    <Breadcrumb :group="breadcrumbGroup" :current="current" :href="href" />
    <section class="section">
      <div class="container mt-5">
        <h1 class="title">예약 서비스</h1>
        <hr />
        <div class="content mt-4">
          <h2 class="subtitle">간편하고 빠른 예약 서비스</h2>
          <p>
            저희 예약 서비스는 고객님이 원하는 시간을 편리하게 예약할 수 있도록 도와드립니다.
            온라인으로 간편하게 예약을 진행하실 수 있으며, 예약 확인 및 취소도 손쉽게 할 수 있습니다.
          </p>
          <div class="columns mt-4">
            <div class="column is-half">
              <figure class="image is-4by3">
                <img :src="reservationImage1" alt="Reservation Service 1">
              </figure>
              <p class="mt-2 has-text-centered">쉽고 빠른 예약</p>
            </div>
            <div class="column is-half">
              <figure class="image is-4by3">
                <img :src="reservationImage2" alt="Reservation Service 2">
              </figure>
              <p class="mt-2 has-text-centered">원하는 시간 선택</p>
            </div>
          </div>
          <div class="columns mt-4">
            <div class="column is-half">
              <figure class="image is-4by3">
                <img :src="reservationImage3" alt="Reservation Service 3">
              </figure>
              <p class="mt-2 has-text-centered">간편한 온라인 예약</p>
            </div>
            <div class="column is-half">
              <figure class="image is-4by3">
                <img :src="reservationImage4" alt="Reservation Service 4">
              </figure>
              <p class="mt-2 has-text-centered">예약 확인 및 취소</p>
            </div>
          </div>
        </div>
      </div>
    </section>
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
      breadcrumbGroup: '서비스',
      current: '예약 서비스',
      href: '/service/online',
      reservationImage1: require('@/assets/reservation_service01.jpg'),
      reservationImage2: require('@/assets/reservation_service02.jpg'),
      reservationImage3: require('@/assets/reservation_service03.jpg'),
      reservationImage4: require('@/assets/reservation_service04.jpg'),
    };
  }
});
</script>

<style scoped>
.container {
  margin-top: 30px;
}
.content {
  margin-top: 20px;
}
.content h2 {
  margin-bottom: 20px;
}
</style>