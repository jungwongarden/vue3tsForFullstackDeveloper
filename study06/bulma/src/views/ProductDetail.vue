<template>
  <div>
    <Visual :src="src" alt="Product" />
    <Breadcrumb :group="breadcrumbGroup" :current="current" :href="href" />
    <section class="section">
      <div class="container mt-5">
        <h1 class="title">제품 상세 정보</h1>
        <hr />
        <div class="columns is-centered">
          <div class="column is-8">
            <table class="table is-fullwidth">
              <tbody v-if="product">
                <tr>
                  <td style="background-color: #fff;">
                    <div class="product-images">
                      <figure class="image">
                        <img :src="productImage" alt="제품 이미지">
                      </figure>
                    </div>
                  </td>
                  <td style="background-color: #fff;">
                    <div class="content">
                      <h2>{{ product.name }}</h2>
                      <p><strong>가격:</strong> {{ product.price }} 원</p>
                      <div v-html="product.description"></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div class="product-images" style="text-align: center;">
                      <figure class="image">
                        <img :src="productImage2" alt="제품 추가 이미지">
                      </figure>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
                <tr>
                  <td colspan="2"><p>제품 정보를 불러오는 중 오류가 발생했습니다.</p></td>
                </tr>
              </tbody>
            </table>
            <div class="buttons mt-3">
              <router-link to="/product/list" class="button is-primary">제품 목록</router-link>
            </div>
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
  components: {
    Visual,
    Breadcrumb
  },
  data() {
    return {
      product: null as Product | null,
      productImage: '',
      productImage2: '',
      src: new URL('@/assets/vs013.jpg', import.meta.url).href,
      breadcrumbGroup: 'Product',
      current: 'Detail',
      href: '/products'
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
        this.productImage = require(`@/assets/product/${product.image.split('/').pop()}`);
        this.productImage2 = require(`@/assets/product/${product.image2.split('/').pop()}`);
      }
    }
  }
});
</script>

<style scoped>
.product-images img {
  max-width: 100%;
  margin-bottom: 10px;
}
</style>