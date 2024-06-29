<template>
  <div>
    <Visual :src="src" alt="Board" />
    <Breadcrumb group="Board" current="Detail" :href="href" />
    <section class="section">
      <div class="container mt-5">
        <h1 class="title">게시글 상세 정보</h1>
        <div v-if="post">
          <table class="table is-bordered">
            <tbody>
              <tr>
                <th>제목</th>
                <td>{{ post.title }}</td>
              </tr>
              <tr>
                <th>작성자</th>
                <td>{{ post.author }}</td>
              </tr>
              <tr>
                <th>작성일</th>
                <td>{{ post.date }}</td>
              </tr>
              <tr>
                <th>내용</th>
                <td>{{ post.content }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else>
          <p>게시글을 찾을 수 없습니다.</p>
        </div>
        <div class="buttons mt-3">
          <router-link :to="`/board/edit/${id}`" class="button is-warning">글 수정</router-link>
          <button @click="deletePost(post.id)" class="button is-danger">글 삭제</button>
          <router-link to="/board/create" class="button is-info">글 쓰기</router-link>
          <router-link to="/board/list" class="button is-primary">글 목록</router-link>
        </div>
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