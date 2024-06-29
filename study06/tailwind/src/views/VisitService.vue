<template>
  <div>
    <Visual :src="src" alt="방문 서비스" />
    <Breadcrumb group="서비스" current="방문 서비스" :href="href" />
    <div class="container mt-5">
      <h1 class="text-2xl font-bold">방문 서비스</h1>
      <hr class="my-4" />
      <div class="content mt-4">
        <h2 class="text-lg font-semibold mb-4">고객 맞춤형 방문 서비스 제공</h2>
        <p class="mb-4">
          저희 방문 서비스는 고객님께서 편리하게 서비스를 받을 수 있도록 직접 방문하여 서비스를 제공합니다.
          언제 어디서나 고객님의 요구에 맞춰 최상의 서비스를 제공하기 위해 노력하고 있습니다.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img :src="visitImage1" alt="Visit Service 1" class="w-full h-auto mb-2 rounded-lg">
            <p class="text-sm">전문적인 방문 서비스</p>
          </div>
          <div>
            <img :src="visitImage2" alt="Visit Service 2" class="w-full h-auto mb-2 rounded-lg">
            <p class="text-sm">고객 맞춤형 솔루션</p>
          </div>
          <div>
            <img :src="visitImage3" alt="Visit Service 3" class="w-full h-auto mb-2 rounded-lg">
            <p class="text-sm">시간과 장소에 구애받지 않는 서비스</p>
          </div>
          <div>
            <img :src="visitImage4" alt="Visit Service 4" class="w-full h-auto mb-2 rounded-lg">
            <p class="text-sm">신뢰할 수 있는 전문가 팀</p>
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
      src: require('@/assets/vs029.jpg'),
      href: "/service/online",
      visitImage1: require('@/assets/visit_service01.jpg'),
      visitImage2: require('@/assets/visit_service02.jpg'),
      visitImage3: require('@/assets/visit_service03.jpg'),
      visitImage4: require('@/assets/visit_service04.jpg'),
    };
  }
});
</script>

<style scoped>
/* 추가적인 스타일링 필요 시 여기에 작성 */
</style>