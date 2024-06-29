<template>
  <div>
    <Visual :src="src" alt="QnA" />
    <Breadcrumb :group="breadcrumbGroup" :current="current" :href="href" />
    <section class="section">
      <div class="container mt-5">
        <h1 class="title">QnA 상세 정보</h1>
        <hr />
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
          <div class="buttons mt-4" v-if="post.lev === 0">
            <router-link :to="`/qna/answer/${post.id}`" class="button is-info">답변하기</router-link>
            <router-link :to="`/qna/edit/${post.id}`" class="button is-warning">글 수정</router-link>
            <button @click="deletePost(post.id)" class="button is-danger">글 삭제</button>
            <router-link to="/qna/list" class="button is-primary">글 목록</router-link>
          </div>
          <div class="buttons mt-4" v-else>
            <router-link :to="`/qna/edit/${post.id}`" class="button is-warning">글 수정</router-link>
            <button @click="deletePost(post.id)" class="button is-danger">글 삭제</button>
            <router-link to="/qna/list" class="button is-primary">글 목록</router-link>
          </div>
        </div>
        <div v-else>
          <p>해당 글을 찾을 수 없습니다.</p>
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
      breadcrumbGroup: 'QnA',
      current: 'Detail',
      href: '/qna/list'
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

<style scoped>
.buttons {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
}

.table {
  width: 100%;
}

.title {
  margin-bottom: 1rem;
}
</style>