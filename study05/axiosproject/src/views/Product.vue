<template>
    <div>
      <h1>Product</h1>
      <div class="form">
        <input v-model="newProduct.name" placeholder="Product Name" /> <br><br>
        <input v-model.number="newProduct.price" placeholder="Product Price" /> <br><br>
        <button @click="addProduct">Add Product</button>
      </div>
      <ul>
        <li v-for="product in products" :key="product.id">
          <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">{{ product.name }}</router-link>
          <button @click="deleteProduct(product.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useStore } from 'vuex';
  import { Product } from '@/model';
  
  export default defineComponent({
    name: 'Product',
    data() {
      return {
        newProduct: {
          name: '',
          price: 0
        }
      };
    },
    computed: {
      products(): Product[] {
        const store = useStore();
        return store.state.products;
      }
    },
    methods: {
      async addProduct() {
        const store = useStore();
        const product: Product = {
          id: Math.floor(Math.random() * 1000), // 임의의 ID 생성 (실제로는 서버에서 생성)
          name: this.newProduct.name,
          price: this.newProduct.price
        };
        await store.dispatch('addProduct', product);
        this.newProduct.name = '';
        this.newProduct.price = 0;
      },
      async deleteProduct(id: number) {
        const store = useStore();
        await store.dispatch('deleteProduct', id);
      }
    }
  });
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>