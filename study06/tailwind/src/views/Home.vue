<template>
  <div>
    <div class="w-full mt-5">
      <div id="carouselExampleCaptions" class="relative" data-carousel="slide">
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          <button type="button" data-carousel-slide-to="0" class="w-3 h-3 rounded-full bg-white opacity-50" aria-label="Slide 1" aria-current="true"></button>
          <button type="button" data-carousel-slide-to="1" class="w-3 h-3 rounded-full bg-white opacity-50" aria-label="Slide 2"></button>
          <button type="button" data-carousel-slide-to="2" class="w-3 h-3 rounded-full bg-white opacity-50" aria-label="Slide 3"></button>
        </div>
        <div class="relative h-96 overflow-hidden rounded-lg img-box carousel-inner">
          <div class="duration-700 ease-in-out carousel-item" data-carousel-item>
            <div class="absolute inset-0 bg-cover bg-center item1"></div>
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
              <h5 class="text-white text-xl">First slide label</h5>
              <p class="text-white">Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="duration-700 ease-in-out carousel-item" data-carousel-item>
            <div class="absolute inset-0 bg-cover bg-center item2"></div>
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
              <h5 class="text-white text-xl">Second slide label</h5>
              <p class="text-white">Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="duration-700 ease-in-out carousel-item" data-carousel-item>
            <div class="absolute inset-0 bg-cover bg-center item3"></div>
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
              <h5 class="text-white text-xl">Third slide label</h5>
              <p class="text-white">Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white opacity-50 group-hover:opacity-75">
            <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </span>
          <span class="sr-only">Previous</span>
        </button>
        <button class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white opacity-50 group-hover:opacity-75">
            <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </span>
          <span class="sr-only">Next</span>
        </button>
      </div>
    </div>

    <!-- 제품 목록 카드 -->
    <div class="container mx-auto my-5">
      <h2 class="mb-4 text-2xl font-bold">Hot Item</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="product in products" :key="product.id" class="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
          <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover">
          <div class="p-4 flex flex-col flex-grow">
            <h5 class="text-lg font-semibold mb-2">{{ product.name }}</h5>
            <div v-html="product.description" class="flex-grow mb-4"></div>
            <p class="text-gray-700 font-bold">Price: {{ product.price }}원</p>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import products from '@/assets/products.json';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export default defineComponent({
  name: 'Home',
  data() {
    return {
      products: [] as Product[],
      loading: false,
      error: null,
    };
  },
  methods: {
    reloadPage() {
      window.location.reload();
    }
  },
  created() {
    this.products = products.slice(0, 3).map(product => ({
      ...product,
      image: require(`@/assets/product/${product.image.split('/').pop()}`),
    })); 
  },
});
</script>

<style scoped>
#carouselExampleCaptions {
  width: 100%;
  margin: 0;
  padding: 0;
}

.item1 {
  background-image: url('@/assets/vs001.jpg');
}

.item2 {
  background-image: url('@/assets/vs005.jpg');
}

.item3 {
  background-image: url('@/assets/vs004.jpg');
}

#carouselExampleCaptions .bg-cover {
  width: 100vw;
  height: 480px;
  background-color: #333;
}
</style>