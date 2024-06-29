<template>
  <div>
    <Visual :src="src" alt="Product" />
    <Breadcrumb group="Product" current="Detail" :href="href" />
    <div class="container mx-auto mt-5">
      <h1 class="text-3xl font-bold">제품 상세 정보</h1>
      <hr class="my-4">
      <div class="table w-full max-w-3xl mx-auto">
        <template v-if="product">
          <div class="table-row">
            <div class="table-cell bg-white">
              <div class="product-images">
                <img :src="productImage" alt="제품 이미지" class="w-full h-auto" />
              </div>
            </div>
            <div class="table-cell bg-white p-4">
              <h2 class="text-xl font-bold mb-2">{{ product.name }}</h2>
              <p><strong>가격:</strong> {{ product.price }} 원</p>
              <div v-html="product.description" class="mt-4"></div>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell bg-white p-4" colspan="2">
              <div class="product-images text-center">
                <img :src="productImage2" alt="제품 추가 이미지" class="w-full h-auto" />
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="table-row">
            <div class="table-cell" colspan="2">
              <p class="text-red-500">제품 정보를 불러오는 중 오류가 발생했습니다.</p>
            </div>
          </div>
        </template>
      </div>
      <div class="flex justify-center mt-4">
        <router-link to="/product/list" class="btn btn-primary">제품 목록</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouteLocationNormalizedLoaded } from 'vue-router';
import products from '@/assets/products.json';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  image2: string;
}

export default defineComponent({
  name: 'ProductDetail',
  data() {
    return {
      product: null as Product | null,
      productImage: '',
      productImage2: '',
      src: new URL('@/assets/vs013.jpg', import.meta.url).href,
      href: "/products"
    };
  },
  mounted() {
    this.fetchProduct();
  },
  methods: {
    fetchProduct() {
      const route = this.$route as RouteLocationNormalizedLoaded;
      const productId = Number(route.params.id);
      const product = products.find(product => product.id === productId) || null;
      if (product) {
        this.product = product;
        this.productImage = require(`../assets/product/${product.image.split('/').pop()}`);
        this.productImage2 = require(`../assets/product/${product.image2.split('/').pop()}`);
      }
    }
  }
});
</script>

<style scoped>
/* 추가적인 스타일링이 필요한 경우 여기에 작성할 수 있습니다. */
.product-images img {
  max-width: 100%;
  margin-bottom: 10px;
}
</style>