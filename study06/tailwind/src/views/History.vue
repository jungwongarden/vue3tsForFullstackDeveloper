<template>
  <div>
    <Visual :src="src" alt="회사 연혁" />
    <Breadcrumb group="회사" current="연혁" :href="href" />
    <div class="container mx-auto mt-5">
      <h1 class="text-3xl font-bold">회사 연혁</h1>
      <hr class="my-4 border-2 border-gray-200" />
      <div class="max-w-4xl mx-auto">
        <img :src="historyImage" class="w-full h-auto" alt="History Image">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Visual from '@/components/Visual.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';

export default defineComponent({
  name: 'History',
  components: {
    Visual,
    Breadcrumb
  },
  data() {
    return {
      src: new URL('@/assets/vs023.jpg', import.meta.url).href,
      href: '/company/intro',
      historyImage: new URL('@/assets/history01.png', import.meta.url).href
    };
  }
});
</script>

<style scoped>
/* 필요에 따라 추가적인 스타일링을 여기에 작성할 수 있습니다. */
</style>