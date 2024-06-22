<template>
    <div>
      <Visual :src="src" alt="Board" />
      <Breadcrumb group="Board" current="Edit" :href="href"/>
      <div class="container mt-5">
        <h1>Edit Post</h1>
        <hr>
        <form @submit.prevent="editPost">
          <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input type="text" class="form-control" id="title" v-model="post.title" required>
          </div>
          <div class="mb-3">
            <label for="author" class="form-label">Author</label>
            <input type="text" class="form-control" id="author" v-model="post.author" required>
          </div>
          <div class="mb-3">
            <label for="content" class="form-label">Content</label>
            <textarea class="form-control" id="content" v-model="post.content" rows="3" required></textarea>
          </div>
          <div class="btn-group">
            <button type="submit" class="btn btn-success">Save Changes</button>
            <router-link to="/board/list" class="btn btn-primary" aria-current="page">Cancel</router-link>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router';
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
          alert('Post updated successfully!');
          // Redirect to board list view
          this.$router.push('/board/list');
        } else {
          alert('Post not found!');
        }
      }
    }
  });
  </script>
  
  <style scoped>
  /* Your scoped styles here */
  </style>