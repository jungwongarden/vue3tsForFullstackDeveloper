<template>
  <div>
    <Visual :src="src" alt="회사 소개" />
    <Breadcrumb :group="breadcrumbGroup" :current="current" :href="href" />
    <section class="section">
      <div class="container mt-5">
        <h1 class="title">회사 소개</h1>
        <hr />
        <div class="columns is-multiline">
          <div class="column is-4">
            <figure class="image">
              <img :src="introImages[0]" alt="Intro Image 1">
            </figure>
          </div>
          <div class="column is-4">
            <figure class="image">
              <img :src="introImages[1]" alt="Intro Image 2">
            </figure>
          </div>
          <div class="column is-4">
            <figure class="image">
              <img :src="introImages[2]" alt="Intro Image 3">
            </figure>
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
  name: 'Intro',
  components: {
    Visual,
    Breadcrumb
  },
  data() {
    return {
      src: new URL('@/assets/vs005.jpg', import.meta.url).href,
      breadcrumbGroup: '회사',
      current: '소개',
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
.image {
  max-width: 100%;
  height: auto;
}

.columns {
  margin-top: 20px;
}
</style>