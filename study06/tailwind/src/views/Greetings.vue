<template>
  <div>
    <Visual :src="src" alt="인사말" />
    <Breadcrumb group="회사" current="인사말" :href="href" />
    <div class="container mx-auto mt-5">
      <h1 class="text-3xl font-bold">인사말</h1>
      <hr class="my-4 border-2 border-gray-200" />
      <div class="max-w-4xl mx-auto">
        <img :src="greetingsImage" class="w-full h-auto" alt="Greetings Image">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Visual from '@/components/Visual.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';

export default defineComponent({
  name: 'Greetings',
  components: {
    Visual,
    Breadcrumb
  },
  data() {
    return {
      src: new URL('@/assets/vs005.jpg', import.meta.url).href,
      href: '/company/intro',
      greetingsImage: new URL('@/assets/greetings01.png', import.meta.url).href
    };
  }
});
</script>

<style scoped>
/* 필요에 따라 추가적인 스타일링을 여기에 작성할 수 있습니다. */
</style>