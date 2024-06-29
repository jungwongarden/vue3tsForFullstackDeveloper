<template>
  <div>
    <Visual :src="src" alt="조직" />
    <Breadcrumb group="회사" current="조직" :href="href" />
    <div class="container mx-auto mt-5">
      <h1 class="text-3xl font-bold">조직</h1>
      <hr class="my-4">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="flex items-center justify-center">
          <img :src="organizationImage1" class="w-full max-w-lg mx-auto" alt="Organization Image 1">
        </div>
        <div class="flex items-center justify-center">
          <img :src="organizationImage2" class="w-full max-w-lg mx-auto" alt="Organization Image 2">
        </div>
        <div class="flex items-center justify-center">
          <img :src="organizationImage3" class="w-full max-w-lg mx-auto" alt="Organization Image 3">
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
      href: '/company/intro',
      organizationImage1: new URL('@/assets/organization01.png', import.meta.url).href,
      organizationImage2: new URL('@/assets/organization02.png', import.meta.url).href,
      organizationImage3: new URL('@/assets/organization03.png', import.meta.url).href,
    };
  }
});
</script>

<style scoped>
/* 추가적인 스타일링이 필요한 경우 여기에 작성할 수 있습니다. */
</style>