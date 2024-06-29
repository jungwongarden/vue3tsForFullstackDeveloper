<template>
    <div>
      <Visual :src="src" alt="Board" />
      <Breadcrumb group="Board" current="Create" :href="href"/>
      <div class="container mx-auto mt-5">
        <h1 class="text-3xl font-bold mb-5">Create New Post</h1>
        <hr class="mb-5">
        <form @submit.prevent="createPost" class="space-y-5">
          <div>
            <label for="title" class="block text-lg font-medium text-gray-700">Title</label>
            <input type="text" id="title" v-model="title" required class="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
          </div>
          <div>
            <label for="author" class="block text-lg font-medium text-gray-700">Author</label>
            <input type="text" id="author" v-model="author" required class="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
          </div>
          <div>
            <label for="content" class="block text-lg font-medium text-gray-700">Content</label>
            <textarea id="content" v-model="content" rows="3" required class="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
          </div>
          <div class="flex space-x-4">
            <button type="submit" class="bg-red-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-600">글 쓰기</button>
            <router-link to="/board/list" class="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600" aria-current="page">글 목록</router-link>
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