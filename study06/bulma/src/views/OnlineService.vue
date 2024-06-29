<template>
  <div>
    <Visual :src="src" alt="온라인 서비스" />
    <Breadcrumb :group="breadcrumbGroup" :current="current" :href="href" />
    <section class="section">
      <div class="container mt-5">
        <h1 class="title">온라인 서비스</h1>
        <hr />
        <div class="content mt-4">
          <h2>편리한 온라인 서비스 제공</h2>
          <p>
            저희 온라인 서비스는 고객님께 편리하고 신속한 서비스를 제공하기 위해 최선을 다하고 있습니다. 
            다양한 서비스를 온라인으로 제공하여 언제 어디서나 쉽게 이용하실 수 있습니다.
          </p>
          <div class="columns mt-4">
            <div class="column">
              <figure class="image">
                <img :src="serviceImage1" alt="Online Service 1">
              </figure>
              <p class="mt-2 has-text-centered">24/7 온라인 지원</p>
            </div>
            <div class="column">
              <figure class="image">
                <img :src="serviceImage2" alt="Online Service 2">
              </figure>
              <p class="mt-2 has-text-centered">다양한 서비스와 기능</p>
            </div>
          </div>
          <div class="columns mt-4">
            <div class="column">
              <figure class="image">
                <img :src="serviceImage3" alt="Online Service 3">
              </figure>
              <p class="mt-2 has-text-centered">쉽고 빠른 접근</p>
            </div>
            <div class="column">
              <figure class="image">
                <img :src="serviceImage4" alt="Online Service 4">
              </figure>
              <p class="mt-2 has-text-centered">안전한 거래 보장</p>
            </div>
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
  name: 'OnlineService',
  components: {
    Visual,
    Breadcrumb
  },
  data() {
    return {
      src: new URL('@/assets/vs029.jpg', import.meta.url).href,
      breadcrumbGroup: '서비스',
      current: '온라인 서비스',
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

.has-text-centered {
  text-align: center;
}
</style>