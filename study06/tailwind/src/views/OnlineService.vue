<template>
  <div>
    <Visual :src="src" alt="온라인 서비스" />
    <Breadcrumb group="서비스" current="온라인 서비스" :href="href" />
    <div class="container mx-auto mt-5">
      <h1 class="text-3xl font-bold">온라인 서비스</h1>
      <hr class="my-4">
      <div class="content">
        <h2 class="text-xl font-bold mb-4">편리한 온라인 서비스 제공</h2>
        <p class="text-gray-700">
          저희 온라인 서비스는 고객님께 편리하고 신속한 서비스를 제공하기 위해 최선을 다하고 있습니다. 
          다양한 서비스를 온라인으로 제공하여 언제 어디서나 쉽게 이용하실 수 있습니다.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <div class="flex items-center justify-center">
            <img :src="serviceImage1" class="w-full max-w-sm mx-auto" alt="Online Service 1">
            <p class="text-center mt-2 text-gray-700">24/7 온라인 지원</p>
          </div>
          <div class="flex items-center justify-center">
            <img :src="serviceImage2" class="w-full max-w-sm mx-auto" alt="Online Service 2">
            <p class="text-center mt-2 text-gray-700">다양한 서비스와 기능</p>
          </div>
          <div class="flex items-center justify-center">
            <img :src="serviceImage3" class="w-full max-w-sm mx-auto" alt="Online Service 3">
            <p class="text-center mt-2 text-gray-700">쉽고 빠른 접근</p>
          </div>
          <div class="flex items-center justify-center">
            <img :src="serviceImage4" class="w-full max-w-sm mx-auto" alt="Online Service 4">
            <p class="text-center mt-2 text-gray-700">안전한 거래 보장</p>
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
      href: '/service/online',
      serviceImage1: new URL('@/assets/online_service01.jpg', import.meta.url).href,
      serviceImage2: new URL('@/assets/online_service02.jpg', import.meta.url).href,
      serviceImage3: new URL('@/assets/online_service03.jpg', import.meta.url).href,
      serviceImage4: new URL('@/assets/online_service04.jpg', import.meta.url).href,
    };
  }
});
</script>

<style scoped>
/* 추가적인 스타일링이 필요한 경우 여기에 작성할 수 있습니다. */
</style>