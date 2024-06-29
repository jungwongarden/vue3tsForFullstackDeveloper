<template>
  <div>
    <Visual :src="src" alt="인사말" />
    <Breadcrumb :group="breadcrumbGroup" :current="current" :href="href" />
    <section class="section">
      <div class="container mt-5">
        <h1 class="title">인사말</h1>
        <hr />
        <div class="img-container">
          <figure class="image">
            <img :src="greetingsImage" alt="Greetings Image">
          </figure>
        </div>
        <br>
      </div>
    </section>
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
      breadcrumbGroup: '회사',
      current: '인사말',
      href: '/company/intro',
      greetingsImage: new URL('@/assets/greetings01.png', import.meta.url).href
    };
  }
});
</script>

<style scoped>
.img-container {
  max-width: 1000px;
  margin: 0 auto;
}

.img-container img {
  max-width: 100%;
  height: auto;
}
</style>