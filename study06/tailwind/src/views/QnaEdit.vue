<template>
  <div>
    <Visual :src="src" alt="QnA" />
    <Breadcrumb group="QnA" current="Edit" :href="href" />
    <div class="container mt-5">
      <h1 class="text-2xl font-bold">QnA 수정하기</h1>
      <hr class="my-4">
      <form @submit.prevent="editQna" class="space-y-4">
        <div>
          <label for="title" class="block text-sm font-medium text-gray-700">제목</label>
          <input type="text" v-model="title" id="title" name="title" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required>
        </div>
        <div>
          <label for="author" class="block text-sm font-medium text-gray-700">작성자</label>
          <input type="text" v-model="author" id="author" name="author" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required>
        </div>
        <div>
          <label for="content" class="block text-sm font-medium text-gray-700">내용</label>
          <textarea v-model="content" id="content" name="content" rows="3" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required></textarea>
        </div>
        <div class="flex space-x-4">
          <button type="submit" class="btn btn-primary">수정하기</button>
          <router-link to="/qna/list" class="btn btn-secondary">취소</router-link>
        </div>
      </form>
    </div>
  </div>  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouteLocationNormalizedLoaded } from 'vue-router';
import qnas from '@/assets/qnas.json';
import Visual from '@/components/Visual.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';

interface Qna {
  id: number;
  lev: number;
  parno: number;
  title: string;
  author: string;
  date: string;
  content: string;
}

export default defineComponent({
  name: 'QnaEdit',
  components: {
    Visual,
    Breadcrumb
  },
  data() {
    return {
      qna: null as Qna | null,
      title: '',
      author: '',
      content: '',
      src: new URL('@/assets/vs025.jpg', import.meta.url).href,
      href: "/qna/list"
    };
  },
  mounted() {
    this.fetchQna();
  },
  methods: {
    fetchQna() {
      const route = this.$route as RouteLocationNormalizedLoaded;
      const qnaId = Number(route.params.id);
      const qna = qnas.find(qna => qna.id === qnaId) || null;
      if (qna) {
        this.qna = qna;
        this.title = qna.title;
        this.author = qna.author;
        this.content = qna.content;
      }
    },
    editQna() {
      if (!this.qna) return;
      const qnaId = this.qna.id;
      const qnaIndex = qnas.findIndex(qna => qna.id === qnaId);
      if (qnaIndex !== -1) {
        qnas[qnaIndex].title = this.title;
        qnas[qnaIndex].author = this.author;
        qnas[qnaIndex].content = this.content;
        // 실제 파일 업데이트 로직은 서버와 통신을 통해 이루어져야 합니다.
        // JSON 파일 업데이트는 브라우저에서 직접 할 수 없습니다.
        alert('QnA가 수정되었습니다.');
        this.$router.push('/qna/list');
      }
    },
  },
});
</script>