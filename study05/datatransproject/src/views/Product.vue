<template>
    <div>
      <h1>상품</h1>
      <div>
        <h2>제품 등록</h2>
        <input v-model="newProduct.name" placeholder="제품명"/>
        <input v-model="newProduct.description" placeholder="설명"/>
        <button @click="addProduct">추가</button>
      </div>
      <div>
        <h2>제품 목록</h2>
        <ul>
          <li v-for="product in products" :key="product.id">
            <router-link :to="{ name: 'product-detail', params: { id: product.id }}">{{ product.name }}</router-link>
            <button @click="editProduct(product)">수정</button>
            <button @click="deleteProduct(product.id)">삭제</button>
          </li>
        </ul>
      </div>
      <router-view></router-view>
      <button @click="replaceToPage('home')">홈으로 이동</button>
      <button @click="goBack">뒤로</button>
      <button @click="goForward">앞으로</button>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    data() {
      return {
        newProduct: {
          id: null,
          name: '',
          description: ''
        }
      };
    },
    computed: {
      ...mapState(['products'])
    },
    methods: {
      addProduct() {
        if (this.newProduct.name && this.newProduct.description) {
          const id = this.products.length + 1;
          this.$store.dispatch('addProduct', { ...this.newProduct, id });
          this.newProduct.name = '';
          this.newProduct.description = '';
        }
      },
      editProduct(product) {
        this.$router.push({ name: 'product-edit', params: { id: product.id } });
      },
      deleteProduct(id) {
        this.$store.commit('DELETE_PRODUCT', id);
      },
      replaceToPage(page) {
        this.$router.replace({ path: `/${page}` });
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
  
  <style scoped>
  h1 {
    color: #42b983;
  }
  </style>