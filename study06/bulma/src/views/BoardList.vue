<template>
  <div>
    <Visual :src="src" alt="Board" />
    <Breadcrumb group="Board" current="List" :href="href" />
    <section class="section">
      <div class="container mt-5">
        <h1 class="title">게시글 목록</h1>
        <hr />
        <!-- 검색 입력 폼 -->
        <div class="field">
          <label for="searchText" class="label">검색</label>
          <div class="control">
            <input type="text" class="input" id="searchText" v-model="searchText" @input="filterPosts" />
          </div>
        </div>
        <!-- 글 목록 테이블 -->
        <table class="table is-striped">
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
        <nav class="pagination is-centered" role="navigation" aria-label="pagination">
          <ul class="pagination-list">
            <li>
              <button class="pagination-link" :disabled="currentPage === 1" @click="prevPage">이전</button>
            </li>
            <li v-for="pageNumber in totalPages" :key="pageNumber">
              <button class="pagination-link" :class="{ 'is-current': pageNumber === currentPage }" @click="goToPage(pageNumber)">{{ pageNumber }}</button>
            </li>
            <li>
              <button class="pagination-link" :disabled="currentPage === totalPages" @click="nextPage">다음</button>
            </li>
          </ul>
        </nav>
        <!-- 글쓰기 버튼 -->
        <div class="buttons mt-3">
          <router-link to="/board/create" class="button is-primary">글쓰기</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Visual from '@/components/Visual.vue';
import boards from '@/assets/boards.json';

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
    Visual,
    RouterLink
  },
  data() {
    return {
      posts: [] as Post[],
      filteredPosts: [] as Post[],
      searchText: '',
      src: new URL('@/assets/vs029.jpg', import.meta.url).href,
      href: "/board/list",
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
    this.posts = boards as Post[];
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