<template>
  <div>
    <Visual :src="src" alt="Board" />
    <Breadcrumb group="Board" current="Edit" :href="href"/>
    <div class="container mx-auto mt-5">
      <h1 class="text-3xl font-bold">Edit Post</h1>
      <hr class="my-4">
      <form @submit.prevent="editPost">
        <div class="mb-4">
          <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
          <input type="text" v-model="post.title" id="title" name="title" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
        </div>
        <div class="mb-4">
          <label for="author" class="block text-sm font-medium text-gray-700">Author</label>
          <input type="text" v-model="post.author" id="author" name="author" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
        </div>
        <div class="mb-4">
          <label for="content" class="block text-sm font-medium text-gray-700">Content</label>
          <textarea id="content" name="content" v-model="post.content" rows="3" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required></textarea>
        </div>
        <div class="flex space-x-4">
          <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">Save Changes</button>
          <router-link to="/board/list" class="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Cancel</router-link>
        </div>
      </form>
    </div>
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
      const index = boards.findIndex(post => post.id === this.post.id);
      if (index !== -1) {
        boards[index] = { ...this.post };
        alert('Post updated successfully!');
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