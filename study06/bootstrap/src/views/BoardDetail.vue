<template>
    <div>
      <Visual :src="src" alt="Board" />
      <Breadcrumb group="Board" current="Detail" :href="href" />
      <div class="container mt-5">
        <h1>Board Detail</h1>
        <table v-if="post" class="table table-bordered">
        <tr>
          <th>Title</th>
          <td>{{ post.title }}</td>
        </tr>
        <tr>
          <th>Author</th>
          <td>{{ post.author }}</td>
        </tr>
        <tr>
          <th>Date</th>
          <td>{{ post.date }}</td>
        </tr>
        <tr>
          <th>Content</th>
          <td>{{ post.content }}</td>
        </tr>
      </table>
      <div v-else>
        <p>Post not found.</p>
      </div>      
      <div class="btn-group">
        <a :href="`/board/edit/${id}`" class="btn btn-warning">글 수정</a>
        <a @click="deletePost(post.id)" class="btn btn-danger">글 삭제</a>
        <a href="/board/create" class="btn btn-info">글 쓰기</a>
        <a href="/board/list" class="btn btn-primary" aria-current="page">글 목록</a>
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