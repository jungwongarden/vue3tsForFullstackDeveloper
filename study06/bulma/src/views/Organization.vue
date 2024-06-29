<template>
  <div>
    <Visual :src="src" alt="조직" />
    <Breadcrumb :group="breadcrumbGroup" :current="current" :href="href" />
    <section class="section">
      <div class="container mt-5">
        <h1 class="title">조직</h1>
        <hr />
        <div class="columns is-centered">
          <div class="column is-4">
            <figure class="image">
              <img :src="organizationImage1" alt="Organization Image 1">
            </figure>
          </div>
          <div class="column is-4">
            <figure class="image">
              <img :src="organizationImage2" alt="Organization Image 2">
            </figure>
          </div>
          <div class="column is-4">
            <figure class="image">
              <img :src="organizationImage3" alt="Organization Image 3">
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
  name: 'Organization',
  components: {
    Visual,
    Breadcrumb
  },
  data() {
    return {
      src: new URL('@/assets/vs023.jpg', import.meta.url).href,
      breadcrumbGroup: '회사',
      current: '조직',
      href: '/company/intro',
      organizationImage1: new URL('@/assets/organization01.png', import.meta.url).href,
      organizationImage2: new URL('@/assets/organization02.png', import.meta.url).href,
      organizationImage3: new URL('@/assets/organization03.png', import.meta.url).href,
    };
  }
});
</script>

<style scoped>
.section {
  padding: 1.5rem 1.5rem;
}

.title {
  margin-bottom: 1.5rem;
}

.image {
  margin-bottom: 1rem;
}

.image img {
  max-width: 100%;
  height: auto;
}
</style>