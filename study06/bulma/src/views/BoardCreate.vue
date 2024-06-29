<template>
  <div>
    <Visual :src="src" alt="Board" />
    <Breadcrumb group="Board" current="Create" :href="href"/>
    <section class="section">
      <div class="container mt-5">
        <h1 class="title">새로운 글 작성</h1>
        <hr>
        <form @submit.prevent="createPost">
          <div class="field">
            <label for="title" class="label">제목</label>
            <div class="control">
              <input type="text" class="input" id="title" v-model="title" required>
            </div>
          </div>
          <div class="field">
            <label for="author" class="label">작성자</label>
            <div class="control">
              <input type="text" class="input" id="author" v-model="author" required>
            </div>
          </div>
          <div class="field">
            <label for="content" class="label">내용</label>
            <div class="control">
              <textarea class="textarea" id="content" v-model="content" rows="3" required></textarea>
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button type="submit" class="button is-danger">글 쓰기</button>
            </div>
            <div class="control">
              <router-link to="/board/list" class="button is-primary">글 목록</router-link>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Visual from '@/components/Visual.vue';
import boards from '@/assets/boards.json'; // Import boards.json file

interface Post {
  id: number;
  title: string;
  author: string;
  date: string; // Optional if you want to track creation date
  content: string;
}

export default defineComponent({
  name: 'BoardCreate',
  components: {
    Breadcrumb,
    Visual
  },
  data() {
    return {
      title: '',
      author: 'Admin', // Default author is 'Admin'
      content: '',
      src: new URL('@/assets/vs029.jpg', import.meta.url).href,
      href: "/board/list"
    };
  },
  methods: {
    createPost() {
      const newPost: Post = {
        id: boards.length > 0 ? boards[boards.length - 1].id + 1 : 1, // Generate new ID
        title: this.title,
        author: this.author,
        content: this.content,
        date: new Date().toISOString() // Optional: Set current date/time
      };

      boards.push(newPost); // Add new post to the boards array

      // Optional: Save to localStorage or perform backend API call to persist data

      alert('글이 작성되었습니다!'); // Inform user about successful creation

      // Redirect to board list view
      this.$router.push('/board/list');
    }
  }
});
</script>

<style scoped>
/* Your scoped styles here */
</style>