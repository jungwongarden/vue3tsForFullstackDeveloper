<template>
  <div>
    <Visual :src="src" alt="Board" />
    <Breadcrumb group="Board" current="List" :href="href" />
    <div class="container mt-5">
      <h1>Board List</h1>
      <hr />
      <!-- 검색 입력 폼 -->
      <div class="mb-3">
        <label for="searchText" class="form-label">검색</label>
        <input type="text" class="form-control" id="searchText" v-model="searchText" @input="filterPosts" />
      </div>
      <!-- 글 목록 테이블 -->
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(post, index) in paginatedPosts" :key="post.id">
            <td>{{ index + 1 + (currentPage - 1) * postsPerPage }}</td>
            <td><router-link :to="`/board/${post.id}`">{{ post.title }}</router-link></td>
            <td>{{ post.author }}</td>
            <td>{{ post.date }}</td>
          </tr>
        </tbody>
      </table>
      <!-- 페이지네이션 -->
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
            <button class="page-link" @click="prevPage">&laquo;</button>
          </li>
          <li class="page-item" v-for="pageNumber in totalPages" :key="pageNumber" :class="{ 'active': pageNumber === currentPage }">
            <button class="page-link" @click="goToPage(pageNumber)">{{ pageNumber }}</button>
          </li>
          <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
            <button class="page-link" @click="nextPage">&raquo;</button>
          </li>
        </ul>
      </nav>
      <!-- 글쓰기 버튼 -->
      <div class="btn-group">
        <router-link to="/board/create" class="btn btn-primary">글쓰기</router-link>
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