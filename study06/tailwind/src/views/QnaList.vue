<template>
  <div>
    <Visual :src="src" alt="QnA" />
    <Breadcrumb group="QnA" current="List" :href="href" />
    <div class="container mt-5" style="width:1000px; margin:10px auto;">
      <h1 class="text-2xl font-bold">QnA 목록</h1>
      <!-- 검색 입력 폼 -->
      <div class="mt-4 mb-6">
        <label for="searchText" class="block text-sm font-medium text-gray-700">검색</label>
        <input type="text" v-model="searchText" id="searchText" class="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" @input="filterPosts">
      </div>
      <!-- 목록 -->
      <ul class="divide-y divide-gray-200">
        <li v-for="post in paginatedPosts" :key="post.id" class="py-4">
          <router-link :to="`/qna/${post.id}`" class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
            <div class="flex items-center justify-between">
              <div class="text-sm font-medium text-indigo-600 truncate">
                {{ post.title }}
              </div>
              <div class="ml-4 flex-shrink-0">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                  {{ post.author }}
                </span>
              </div>
            </div>
            <div class="mt-2 flex justify-between">
              <div class="flex items-center text-sm text-gray-500">
                <span>{{ post.date }}</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
      <!-- 페이지네이션 -->
      <nav class="mt-6 flex justify-between items-center" aria-label="Pagination">
        <div class="flex space-x-2">
          <button @click="prevPage" :disabled="currentPage === 1" class="btn btn-sm btn-outline-gray" :class="{ 'disabled': currentPage === 1 }">&laquo; 이전</button>
          <template v-for="pageNumber in totalPages" :key="pageNumber">
            <button @click="goToPage(pageNumber)" class="btn btn-sm btn-outline-gray" :class="{ 'btn-primary': pageNumber === currentPage }">
              {{ pageNumber }}
            </button>
          </template>
          <button @click="nextPage" :disabled="currentPage === totalPages" class="btn btn-sm btn-outline-gray" :class="{ 'disabled': currentPage === totalPages }">다음 &raquo;</button>
        </div>
        <!-- 글쓰기 버튼 -->
        <router-link to="/qna/create" class="btn btn-secondary">글쓰기</router-link>
      </nav>
    </div>
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
      posts: [] as Post[],
      filteredPosts: [] as Post[],
      searchText: '',
      src: new URL('@/assets/vs025.jpg', import.meta.url).href,
      href: "/qna/list",
      currentPage: 1,
      postsPerPage: 5
    };
  },
  computed: {
    paginatedPosts(): Post[] {
      const startIndex = (this.currentPage - 1) * this.postsPerPage;
      return this.filteredPosts.slice(startIndex, startIndex + this.postsPerPage);
    },
    totalPages(): number {
      return Math.ceil(this.filteredPosts.length / this.postsPerPage);
    }
  },
  mounted() {
    this.posts = qnas as Post[];
    this.filterPosts();
  },
  methods: {
    filterPosts(): void {
      if (this.searchText.trim() === '') {
        this.filteredPosts = this.posts;
      } else {
        this.filteredPosts = this.posts.filter(post =>
          post.title.toLowerCase().includes(this.searchText.toLowerCase())
        );
      }
      this.currentPage = 1;
    },
    goToPage(pageNumber: number): void {
      this.currentPage = pageNumber;
    },
    prevPage(): void {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
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