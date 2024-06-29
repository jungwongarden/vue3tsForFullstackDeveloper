<template>
  <div>
    <div class="container is-fluid mt-5">
      <div class="carousel-box">
        <div class="slider" id="carousel-demo">
          <div class="carousel-item item1 is-active">
            <div class="carousel-caption">
              <br>
              <h5 class="title is-5">First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item item2">
            <div class="carousel-caption">
              <br>
              <h5 class="title is-5">Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item item3">
            <div class="carousel-caption">
              <br>
              <h5 class="title is-5">Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>  
        <button class="carousel-control-prev" @click="prevSlide">
          <span class="icon is-small">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
          </span>
        </button>
        <button class="carousel-control-next" @click="nextSlide">
          <span class="icon is-small">
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>

    <!-- 제품 목록 카드 -->
    <div class="container my-5">
      <h2 class="title is-4 mb-4">Hot Item</h2>
      <div class="columns is-multiline">
        <div v-for="product in products" :key="product.id" class="column is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="product.image" :alt="product.name">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-5">{{ product.name }}</p>
                </div>
              </div>
              <!-- 수정된 부분: v-html을 이용하여 제품 설명 HTML을 출력 -->
              <div class="content" v-html="product.description"></div>
              <p><strong>Price:</strong> {{ product.price }}원</p>
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
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';

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
      currentIndex: 0,
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % 3;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + 3) % 3;
    },
  },
  created() {
    this.products = products.slice(0, 3).map(product => ({
      ...product,
      image: require(`@/assets/product/${product.image.split('/').pop()}`),
    })); 
  },
  mounted() {
    // mounted 훅에서 Bulma Carousel 초기화
    bulmaCarousel.attach('#carousel-demo', {
      slidesToScroll: 1,
      slidesToShow: 1,
      loop: true,
      infinite: true,
      autoplay: true
      // 원하는 다른 옵션들을 추가할 수 있습니다
    });
  }
});
</script>

<style scoped>
body { 
  -ms-overflow-style: none; 
}
::-webkit-scrollbar { 
  display: none; 
}
.container.is-fluid { 
  margin: 0; 
  padding: 0; 
  width: 100vw; 
  box-sizing: border-box; 
}
.carousel { 
  width: 100%; 
  margin: 0; 
  padding: 0; 
}
.carousel-item { 
  height: 400px;
  background-repeat: no-repeat; 
  background-size: 100% auto; 
  background-position: center center; 
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
.carousel-control-prev, .carousel-control-next {
  background-color: transparent;
  border: none;
}
.carousel-caption {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 1em;
}

.carousel-caption .title {
  color:#fff;
}
</style>