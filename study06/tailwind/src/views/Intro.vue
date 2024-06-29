<template>
  <div>
    <Visual :src="src" alt="회사 소개" />
    <Breadcrumb group="회사" current="소개" :href="href" />
    <div class="container mx-auto mt-5">
      <h1 class="text-3xl font-bold">회사 소개</h1>
      <hr class="my-4 border-2 border-gray-200" />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(image, index) in introImages" :key="index" class="img-container">
          <img :src="image" class="w-full h-auto" :alt="'Intro Image ' + (index + 1)">
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

<style scoped>
/* 필요에 따라 추가적인 스타일링을 여기에 작성할 수 있습니다. */
</style>