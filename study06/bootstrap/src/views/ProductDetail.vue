<template>
    <div>
        <Visual :src="src" alt="Product" />
        <Breadcrumb group="Product" current="Detail" :href="href" />
        <div class="container mt-5">
        <h1>제품 상세 정보</h1>
        <hr />
        <table class="table" style="width:900px; margin:0 auto;">
            <tbody v-if="product">
                <tr>
                    <td style="background-color: #fff;">
                        <div class="product-images">
                            <img :src="productImage" alt="제품 이미지" class="img-fluid" />
                        </div>
                    </td>
                    <td style="background-color: #fff;">
                        <br><br>
                        <h2>{{ product.name }}</h2>
                        <p><strong>가격:</strong> {{ product.price }} 원</p>
                        <div v-html="product.description"></div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <br><br><br>        
                        <div class="product-images" style="text-align: center;">   
                            <img :src="productImage2" alt="제품 추가 이미지" class="img-fluid" />
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
        <div class="btn-group mt-3">
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
        if(product) {
            this.product = product;
            this.productImage = require(`../assets/product/${product.image.split('/').pop()}`);
            this.productImage2 = require(`../assets/product/${product.image2.split('/').pop()}`);
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