<template>
    <div>
      <Visual :src="src" alt="Board" />
      <Breadcrumb group="Board" current="Detail" :href="href" />
      <div class="container mx-auto mt-5">
        <h1 class="text-3xl font-bold">Board Detail</h1>
        <div v-if="post" class="mt-5">
          <div class="overflow-hidden border border-gray-200 rounded-lg shadow-md">
            <table class="min-w-full divide-y divide-gray-200">
              <tbody class="bg-white divide-y divide-gray-200">
                <tr class="bg-gray-50">
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <td class="px-6 py-4 whitespace-nowrap">{{ post.title }}</td>
                </tr>
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                  <td class="px-6 py-4 whitespace-nowrap">{{ post.author }}</td>
                </tr>
                <tr class="bg-gray-50">
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <td class="px-6 py-4 whitespace-nowrap">{{ post.date }}</td>
                </tr>
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content</th>
                  <td class="px-6 py-4 whitespace-pre-line">{{ post.content }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div v-else class="mt-5">
          <p class="text-gray-500">Post not found.</p>
        </div>
        <div class="flex mt-5 space-x-4">
          <a :href="`/board/edit/${id}`" class="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-yellow-600">글 수정</a>
          <button @click="deletePost(post.id)" class="bg-red-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-600">글 삭제</button>
          <a href="/board/create" class="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600">글 쓰기</a>
          <a href="/board/list" class="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600">글 목록</a>
        </div>
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
    date: string;
    content: string;
  }
  
  export default defineComponent({
    name: 'BoardDetail',
    components: {
      Visual,
      Breadcrumb
    },
    props: {
      id: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        src: new URL('@/assets/vs028.jpg', import.meta.url).href,
        post: {} as Post,
        href: "/board/list"
      };
    },
    mounted() {
      this.fetchPost();
    },
    methods: {
      fetchPost() {
        const route = this.$route;
        const postId = Number(route.params.id);
        this.post = boards.find(post => post.id === postId) || {} as Post;
      },
      deletePost(id: number) {
        // Filter out the post with the given id and update boards.json
        const updatedPosts = boards.filter(post => post.id !== id);
        // Replace the original boards.json (simulated action, replace with actual logic)
        console.log(updatedPosts);
        alert('게시글이 삭제되었습니다.');
        // Redirect to the list page
        this.$router.push('/board/list');
      }
    }
  });
  </script>
  
  <style scoped>
  /* Your scoped styles here */
  </style>