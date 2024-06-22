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
import { defineComponent, reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { Product } from '@/model';

export default defineComponent({
  name: 'Product',
  setup() {
    const store = useStore();

    const newProduct = reactive({
      name: '',
      price: 0
    });

    const products = computed(() => store.state.products);

    const addProduct = () => {
      const product: Product = {
        id: Math.floor(Math.random() * 1000), // 임의의 ID 생성 (실제로는 서버에서 생성)
        name: newProduct.name,
        price: newProduct.price
      };
      store.dispatch('addProduct', product);
      newProduct.name = '';
      newProduct.price = 0;
    };

    const deleteProduct = (id: number) => {
      store.dispatch('deleteProduct', id);
    };

    return {
      newProduct,
      products,
      addProduct,
      deleteProduct
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log('Route Guard: Product - beforeRouteEnter');
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log('Route Guard: Product - beforeRouteUpdate');
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('Route Guard: Product - beforeRouteLeave');
    next();
  }
});
</script>

<style scoped>
/* Add your styles here */
</style>