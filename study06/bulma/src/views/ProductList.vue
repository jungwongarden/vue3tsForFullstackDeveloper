<template>
  <div>
    <Visual :src="src" alt="Product" />
    <Breadcrumb :group="breadcrumbGroup" :current="current" :href="href" />
    <section class="section">
      <div class="container my-5">
        <h1 class="title">Product List</h1>
        <hr>
        <div v-if="loading" class="has-text-centered">Loading...</div>
        <div v-if="error" class="notification is-danger">{{ error }}</div>
        <div v-if="products.length" class="columns is-multiline">
          <div v-for="product in products" :key="product.id" class="column is-4">
            <router-link :to="`/product/${product.id}`" class="card mb-4">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="product.image" :alt="product.name">
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <h5 class="title is-5">{{ product.name }}</h5>
                  <p v-html="product.description"></p>
                  <p><strong>Price:</strong> {{ product.price }}원</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Visual from '@/components/Visual.vue';
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
  name: 'ProductList',
  components: {
    Breadcrumb,
    Visual
  },
  data() {
    return {
      products: [] as Product[],
      loading: false,
      error: null as string | null,
      src: new URL('@/assets/vs013.jpg', import.meta.url).href,
      breadcrumbGroup: 'Product',
      current: 'List',
      href: '/products'
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
          image: require(`@/assets/product/${product.image.split('/').pop()}`),
          image2: require(`@/assets/product/${product.image2.split('/').pop()}`)
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
.card {
  text-align: center;
  cursor: pointer;
}

.card-image img {
  width: 100%;
  height: auto;
}

.card-content {
  padding: 1rem;
}

.router-link-active {
  background-color: #f0f0f0;
}

.title.is-5 {
  font-weight: bold;
}

.notification.is-danger {
  margin-top: 1rem;
}
</style>