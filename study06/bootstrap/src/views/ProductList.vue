<template>
  <div>
    <Visual :src="src" alt="Product" />
    <Breadcrumb group="Product" current="List" :href="href" />
    <div class="container my-5">
      <h1>Product List</h1>
      <hr>
      <div v-if="loading" class="text-center">Loading...</div>
      <div v-if="error" class="alert alert-danger">{{ error }}</div>
      <div v-if="products.length" class="row">
        <div v-for="product in products" :key="product.id" class="col-md-4 mb-4">
          <router-link :to="`/product/${product.id}`">
            <div class="card h-100">
              <img :src="product.imageUrl" :alt="product.name" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title" style="font-weight:800;">{{ product.name }}</h5>
                <p class="card-text" v-html="product.description"></p>
                <p class="card-text"><strong>Price:</strong> {{ product.price }}원</p>
              </div>
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

export default {
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
          imageUrl: require(`../assets/product/${product.image.split('/').pop()}`),
          image2: require(`../assets/product/${product.image2.split('/').pop()}`)
        }));
      } catch (error) {
        this.error = 'Failed to load products.';
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.card {
  text-align: center;
}
.card-img-top {
  width: 100%;
  height: auto;
}

a {
  text-decoration: none;
}
</style>