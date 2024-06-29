<template>
  <div>
    <Visual :src="src" alt="QnA" />
    <Breadcrumb :group="breadcrumbGroup" :current="current" :href="href" />
    <section class="section">
      <div class="container mt-5">
        <h1 class="title">QnA 수정하기</h1>
        <hr />
        <form @submit.prevent="editQna">
          <div class="field">
            <label for="title" class="label">제목</label>
            <div class="control">
              <input type="text" class="input" id="title" v-model="title" required />
            </div>
          </div>
          <div class="field">
            <label for="author" class="label">작성자</label>
            <div class="control">
              <input type="text" class="input" id="author" v-model="author" required />
            </div>
          </div>
          <div class="field">
            <label for="content" class="label">내용</label>
            <div class="control">
              <textarea class="textarea" id="content" v-model="content" rows="6" required></textarea>
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button type="submit" class="button is-primary">수정하기</button>
            </div>
            <div class="control">
              <router-link to="/qna/list" class="button is-secondary">취소</router-link>
            </div>
          </div>
        </form>
      </div>
    </section>
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
      breadcrumbGroup: 'QnA',
      current: 'Edit',
      href: '/qna/list'
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

<style scoped>
.title {
  margin-bottom: 1rem;
}
</style>