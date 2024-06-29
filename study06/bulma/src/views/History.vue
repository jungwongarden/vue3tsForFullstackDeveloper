<template>
  <div>
    <Visual :src="src" alt="회사 연혁" />
    <Breadcrumb :group="breadcrumbGroup" :current="current" :href="href" />
    <section class="section">
      <div class="container mt-5">
        <h1 class="title">회사 연혁</h1>
        <hr />
        <div class="img-container">
          <figure class="image">
            <img :src="historyImage" alt="History Image">
          </figure>
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
  name: 'History',
  components: {
    Visual,
    Breadcrumb
  },
  data() {
    return {
      src: new URL('@/assets/vs023.jpg', import.meta.url).href,
      breadcrumbGroup: '회사',
      current: '연혁',
      href: '/company/intro',
      historyImage: new URL('@/assets/history01.png', import.meta.url).href
    };
  }
});
</script>

<style scoped>
.img-container {
  max-width: 900px;
  margin: 0 auto;
}

.img-container img {
  max-width: 100%;
  height: auto;
}
</style>