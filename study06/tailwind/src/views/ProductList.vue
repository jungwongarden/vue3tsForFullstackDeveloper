<template>
  <div>
    <Visual :src="src" alt="Product" />
    <Breadcrumb group="Product" current="List" :href="href" />
    <div class="container mx-auto my-5">
      <h1 class="text-3xl font-bold">Product List</h1>
      <hr class="my-4">
      <div v-if="loading" class="text-center">Loading...</div>
      <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{{ error }}</div>
      <div v-if="products.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="product in products" :key="product.id" class="bg-white shadow-md rounded-lg overflow-hidden">
          <router-link :to="`/product/${product.id}`" class="block">
            <img :src="product.imageUrl" :alt="product.name" class="w-full h-64 object-cover">
            <div class="px-6 py-4">
              <h2 class="font-bold text-xl mb-2">{{ product.name }}</h2>
              <p class="text-gray-700 text-base" v-html="product.description"></p>
              <p class="text-gray-800 text-base"><strong>Price:</strong> {{ product.price }}원</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Visual from '@/components/Visual.vue';
import products from '@/assets/products.json';

export default defineComponent({
  name: 'ProductList',
  components: {
    Breadcrumb,
    Visual
  },
  data() {
    return {
      products: [],
      loading: false,
      error: null,
      src: new URL('@/assets/vs013.jpg', import.meta.url).href,
      href: "/products"
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      this.loading = true;
      try {
        this.products = products.map(product => ({
          ...product,
          imageUrl: require(`../assets/product/${product.image.split('/').pop()}`)
        }));
      } catch (error) {
        this.error = 'Failed to load products.';
      } finally {
        this.loading = false;
      }
    }
  }
});
</script>

<style scoped>
/* 추가적인 스타일링이 필요한 경우 여기에 작성할 수 있습니다. */
</style>