<template>
    <div>
      <h1>Product Page</h1>
      <p>Manage your products here.</p>
      <div>
        <h2>Product List</h2>
        <ul>
          <li v-for="product in products" :key="product.id">
            {{ product.name }} - {{ product.description }} - ${{ product.price }}
            <button @click="deleteProduct(product.id)">Delete</button>
          </li>
        </ul>
      </div>
      <div>
        <h2>Add Product</h2>
        <form @submit.prevent="addProduct">
          <input v-model="newProduct.name" placeholder="Name" />
          <input v-model="newProduct.description" placeholder="Description" />
          <input v-model.number="newProduct.price" placeholder="Price" />
          <button type="submit">Add</button>
        </form>
      </div>
      <button @click="replaceToPage('home')">Replace to Home</button>
      <button @click="goBack">Back</button>
      <button @click="goForward">Forward</button>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        newProduct: {
          id: 0,
          name: '',
          description: '',
          price: 0
        }
      };
    },
    computed: {
      ...mapState(['products'])
    },
    methods: {
      ...mapActions(['addProduct', 'deleteProduct']),
      addProduct() {
        this.addProduct({ ...this.newProduct, id: Date.now() });
        this.newProduct = { id: 0, name: '', description: '', price: 0 };
      },
      replaceToPage(page) {
        this.$router.replace({ name: page });
      },
      goBack() {
        this.$router.go(-1);
      },
      goForward() {
        this.$router.go(1);
      }
    }
  };
  </script>