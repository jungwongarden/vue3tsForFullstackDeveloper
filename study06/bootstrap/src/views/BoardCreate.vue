<template>
  <div>
    <Visual :src="src" alt="Board" />
    <Breadcrumb group="Board" current="Create" :href="href"/>
    <div class="container mt-5">
      <h1>Create New Post</h1>
      <hr>
      <form @submit.prevent="createPost">
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input type="text" class="form-control" id="title" v-model="title" required>
        </div>
        <div class="mb-3">
          <label for="author" class="form-label">Author</label>
          <input type="text" class="form-control" id="author" v-model="author" required>
        </div>
        <div class="mb-3">
          <label for="content" class="form-label">Content</label>
          <textarea class="form-control" id="content" v-model="content" rows="3" required></textarea>
        </div>
        <div class="btn-group">
          <button type="submit" class="btn btn-danger">글 쓰기</button>
          <router-link to="/board/list" class="btn btn-primary" aria-current="page">글 목록</router-link>
        </div>
      </form>
    </div>
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

      alert('Post created!'); // Inform user about successful creation

      // Redirect to board list view
      this.$router.push('/board/list');
    }
  }
});
</script>

<style scoped>
/* Your scoped styles here */
</style>