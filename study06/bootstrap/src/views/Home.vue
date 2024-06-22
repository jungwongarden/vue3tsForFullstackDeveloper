<template>
  <div>
    <div class="container-fluid mt-5">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item item1 active">
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item item2">
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item item3">
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <!-- 제품 목록 카드 -->
    <div class="container my-5">
      <h2 class="mb-4">Hot Item</h2>
      <div class="row">
        <div v-for="product in products" :key="product.id" class="col-md-4 mb-4">
          <div class="card h-100">
            <img :src="product.image" :alt="product.name" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <!-- 수정된 부분: v-html을 이용하여 제품 설명 HTML을 출력 -->
              <div v-html="product.description"></div>
              <p class="card-text"><strong>Price:</strong> {{ product.price }}원</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import products from '@/assets/products.json';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string; // HTML 형식의 제품 설명
  image: string;
}

export default defineComponent({
  name: 'Home',
  data() {
    return {
      products: [] as Product[],
      loading: false,
      error: null,
    };
  },
  methods: {
    reloadPage() {
      window.location.reload();
    }
  },
  created() {
    this.products = products.slice(0, 3).map(product => ({
      ...product,
      image: require(`@/assets/product/${product.image.split('/').pop()}`),
    })); 
  },
});
</script>

<style>
body {  -ms-overflow-style: none;  }
::-webkit-scrollbar {   display: none;  }
.container-fluid { margin: 0; padding: 0; width: 100vw; box-sizing: border-box; }
#carouselExampleCaptions { width: 100%; margin: 0; padding: 0; }
.carousel-item { 
  height: 400px;
  background-repeat: no-repeat; 
  background-size:100% auto; 
  background-position:center center; 
}
.carousel-item.item1 { 
  background-image: url("../assets/vs001.jpg");
}
.carousel-item.item2 { 
  background-image: url("../assets/vs005.jpg");
}
.carousel-item.item3 { 
  background-image: url("../assets/vs004.jpg");
}
</style>