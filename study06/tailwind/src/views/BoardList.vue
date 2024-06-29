<template>
  <div>
    <Visual :src="src" alt="Board" />
    <Breadcrumb group="Board" current="List" :href="href" />
    <div class="container mx-auto mt-5">
      <h1 class="text-3xl font-bold">Board List</h1>
      <hr class="my-4">
      <!-- 검색 입력 폼 -->
      <div class="mb-4">
        <label for="searchText" class="block text-sm font-medium text-gray-700">검색</label>
        <input type="text" v-model="searchText" id="searchText" @input="filterPosts" placeholder="검색어를 입력하세요"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      </div>
      <!-- 글 목록 테이블 -->
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="(post, index) in paginatedPosts" :key="post.id">
            <td class="px-6 py-4 whitespace-nowrap">{{ index + 1 + (currentPage - 1) * postsPerPage }}</td>
            <td class="px-6 py-4 whitespace-nowrap"><router-link :to="`/board/${post.id}`" class="text-indigo-600 hover:text-indigo-900">{{ post.title }}</router-link></td>
            <td class="px-6 py-4 whitespace-nowrap">{{ post.author }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ post.date }}</td>
          </tr>
        </tbody>
      </table>
      <!-- 페이지네이션 -->
      <nav class="mt-4" aria-label="Pagination">
        <ul class="flex justify-center items-center space-x-2">
          <li :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }">
            <button @click="prevPage" :disabled="currentPage === 1"
              class="px-3 py-1 bg-gray-200 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400">
              Previous
            </button>
          </li>
          <template v-for="pageNumber in totalPages" :key="pageNumber">
            <li>
              <button @click="goToPage(pageNumber)"
                :class="{ 'bg-indigo-500 text-white': pageNumber === currentPage, 'bg-gray-200 text-gray-700': pageNumber !== currentPage }"
                class="px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400">
                {{ pageNumber }}
              </button>
            </li>
          </template>
          <li :class="{ 'opacity-50 cursor-not-allowed': currentPage === totalPages }">
            <button @click="nextPage" :disabled="currentPage === totalPages"
              class="px-3 py-1 bg-gray-200 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400">
              Next
            </button>
          </li>
        </ul>
      </nav>
      <!-- 글쓰기 버튼 -->
      <div class="mt-4">
        <router-link to="/board/create"
          class="inline-block px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          글쓰기
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Visual from '@/components/Visual.vue';
import boards from '@/assets/boards.json'; // boards.json 파일 import

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
}

export default defineComponent({
  name: 'BoardList',
  components: {
    Breadcrumb,
    Visual
  },
  data() {
    return {
      posts: [] as Post[], // 타입 정의 추가
      filteredPosts: [] as Post[], // 타입 정의 추가
      searchText: '',
      src: new URL('@/assets/vs029.jpg', import.meta.url).href,
      href: "/board/list",
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
    this.posts = boards as Post[]; // boards.json에서 데이터 가져오기
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