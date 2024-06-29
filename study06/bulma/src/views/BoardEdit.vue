<template>
  <div>
    <Visual :src="src" alt="Board" />
    <Breadcrumb group="Board" current="Edit" :href="href"/>
    <section class="section">
      <div class="container mt-5">
        <h1 class="title">게시글 수정</h1>
        <div>
          <form @submit.prevent="editPost">
            <div class="field">
              <label for="title" class="label">제목</label>
              <div class="control">
                <input type="text" class="input" id="title" v-model="post.title" required>
              </div>
            </div>
            <div class="field">
              <label for="author" class="label">작성자</label>
              <div class="control">
                <input type="text" class="input" id="author" v-model="post.author" required>
              </div>
            </div>
            <div class="field">
              <label for="content" class="label">내용</label>
              <div class="control">
                <textarea class="textarea" id="content" v-model="post.content" rows="3" required></textarea>
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <button type="submit" class="button is-success">변경 사항 저장</button>
              </div>
              <div class="control">
                <router-link to="/board/list" class="button is-primary" aria-current="page">취소</router-link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
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
  name: 'BoardEdit',
  components: {
    Breadcrumb,
    Visual
  },
  data() {
    return {
      src: new URL('@/assets/vs029.jpg', import.meta.url).href,
      post: {} as Post,
      href: "/board/list"
    };
  },
  mounted() {
    this.fetchPost();
  },
  methods: {
    fetchPost() {
      const route = useRoute();
      const postId = Number(route.params.id);
      this.post = boards.find(post => post.id === postId) || {} as Post;
    },
    editPost() {
      // Find index of the post in the array
      const index = boards.findIndex(post => post.id === this.post.id);
      if (index !== -1) {
        // Update post in the array
        boards[index] = { ...this.post };
        // Optional: Save to localStorage or perform backend API call to persist data
        alert('게시글이 성공적으로 수정되었습니다!');
        // Redirect to board list view
        this.$router.push('/board/list');
      } else {
        alert('게시글을 찾을 수 없습니다!');
      }
    }
  }
});
</script>

<style scoped>
/* Your scoped styles here */
</style>