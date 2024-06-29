<template>
  <div>
    <Visual :src="src" alt="QnA" />
    <Breadcrumb :group="breadcrumbGroup" :current="current" :href="href" />
    <section class="section">
      <div class="container mt-5">
        <h1 class="title">QnA 목록</h1>
        <!-- 검색 입력 폼 -->
        <div class="field mb-4">
          <label for="searchText" class="label">검색</label>
          <div class="control">
            <input type="text" class="input" id="searchText" v-model="searchText" @input="filterPosts" />
          </div>
        </div>
        <ul class="mb-4">
          <li class="mb-3" v-for="post in paginatedPosts" :key="post.id">
            <router-link :to="`/qna/${post.id}`" class="has-text-black">
              <strong>{{ post.title }}</strong> - {{ post.author }} ({{ post.date }})
            </router-link>
          </li>
        </ul>
        <!-- 페이지네이션 -->
        <nav class="pagination is-centered" role="navigation" aria-label="pagination">
          <a class="pagination-previous" @click="prevPage" :disabled="currentPage === 1">이전</a>
          <a class="pagination-next" @click="nextPage" :disabled="currentPage === totalPages">다음</a>
          <ul class="pagination-list">
            <li v-for="pageNumber in totalPages" :key="pageNumber">
              <a class="pagination-link" @click="goToPage(pageNumber)" :class="{ 'is-current': pageNumber === currentPage }">
                {{ pageNumber }}
              </a>
            </li>
          </ul>
        </nav>
        <!-- 글쓰기 버튼 -->
        <div class="buttons mt-5">
          <router-link to="/qna/create" class="button is-primary">글쓰기</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Visual from '@/components/Visual.vue';
import qnas from '@/assets/qnas.json';

interface Post {
  id: number;
  lev: number;
  parno: number;
  title: string;
  author: string;
  date: string;
  content: string;
}

export default defineComponent({
  name: 'QnaList',
  components: {
    Breadcrumb,
    Visual
  },
  data() {
    return {
      posts: [] as Post[], // 타입 정의 추가
      filteredPosts: [] as Post[], // 타입 정의 추가
      searchText: '',
      src: new URL('@/assets/vs025.jpg', import.meta.url).href,
      breadcrumbGroup: 'QnA',
      current: 'List',
      href: '/qna/list',
      currentPage: 1,
      postsPerPage: 5 // 페이지당 글 개수
    };
  },
  computed: {
    // 필터된 포스트를 현재 페이지에 맞게 슬라이스하여 보여줍니다.
    paginatedPosts(): Post[] {
      const startIndex = (this.currentPage - 1) * this.postsPerPage;
      return this.filteredPosts.slice(startIndex, startIndex + this.postsPerPage);
    },
    // 전체 페이지 수 계산
    totalPages(): number {
      return Math.ceil(this.filteredPosts.length / this.postsPerPage);
    }
  },
  mounted() {
    this.posts = qnas as Post[]; // qnas.json에서 데이터 가져오기
    this.filterPosts(); // 초기 필터링 적용
  },
  methods: {
    // 검색어에 따라 글 목록 필터링
    filterPosts(): void {
      if (this.searchText.trim() === '') {
        this.filteredPosts = this.posts;
      } else {
        this.filteredPosts = this.posts.filter(post =>
          post.title.toLowerCase().includes(this.searchText.toLowerCase())
        );
      }
      this.currentPage = 1; // 필터링 후 첫 페이지로 이동
    },
    // 페이지 이동
    goToPage(pageNumber: number): void {
      this.currentPage = pageNumber;
    },
    // 이전 페이지로 이동
    prevPage(): void {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    // 다음 페이지로 이동
    nextPage(): void {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }
  }
});
</script>

<style scoped>
/* 추가적인 스타일링 필요 시 여기에 작성 */
</style>