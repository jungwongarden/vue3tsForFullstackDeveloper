<template>
  <div>
    <Visual :src="src" alt="QnA" />
    <Breadcrumb group="QnA" current="Detail" :href="href" />
    <div class="container mt-5">
      <h1>QnA 상세 정보</h1>
      <hr />
      <div v-if="post">
        <table class="table table-bordered">
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
        </table>
        <div class="btn-group" v-if="post.lev === 0">
          <router-link :to="`/qna/answer/${post.id}`" class="btn btn-info">답변하기</router-link>
          <router-link :to="`/qna/edit/${post.id}`" class="btn btn-warning">글 수정</router-link>
          <button @click="deletePost(post.id)" class="btn btn-danger">글 삭제</button>
          <router-link to="/qna/list" class="btn btn-primary" aria-current="page">글 목록</router-link>
        </div>
        <div class="btn-group" v-else>
          <router-link :to="`/qna/edit/${post.id}`" class="btn btn-warning">글 수정</router-link>
          <button @click="deletePost(post.id)" class="btn btn-danger">글 삭제</button>
          <router-link to="/qna/list" class="btn btn-primary" aria-current="page">글 목록</router-link>
        </div>
      </div>
      <div v-else>
        <p>해당 글을 찾을 수 없습니다.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Visual from '@/components/Visual.vue';
import qnas from '@/assets/qnas.json';

interface Post {
  id: number;
  lev: number;
  parno: number;
  title: string;
  author: string;
  date: string;
  content: string;
}

export default defineComponent({
  name: 'QnaDetail',
  components: {
    Breadcrumb,
    Visual
  },
  data() {
    return {
      post: null as Post | null,
      src: new URL('@/assets/vs025.jpg', import.meta.url).href,
      href: "/qna/list"
    };
  },
  created() {
    this.fetchPost();
  },
  methods: {
    fetchPost() {
      const route = useRoute();
      const id = parseInt(route.params.id as string, 10);
      const posts: Post[] = qnas;
      this.post = posts.find(post => post.id === id) || null;
    },
    deletePost(id: number) {
      const posts: Post[] = qnas;
      const updatedPosts = posts.filter(post => post.id !== id);
      console.log('Updated posts:', updatedPosts);
      alert('글이 삭제되었습니다.');
      this.$router.push('/qna/list');
    }
  }
});
</script>