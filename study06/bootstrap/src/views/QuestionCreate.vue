<template>
  <div>
    <Visual :src="src" alt="QnA" />
    <Breadcrumb group="QnA" current="Question Create" :href="href" />
    <div class="container mt-5">
      <h1>질문 작성</h1>
      <form @submit.prevent="createPost">
        <div class="mb-3">
          <label for="title" class="form-label">제목</label>
          <input type="text" class="form-control" id="title" v-model="title" required />
        </div>
        <div class="mb-3">
          <label for="content" class="form-label">내용</label>
          <textarea class="form-control" id="content" v-model="content" rows="3" required></textarea>
        </div>
        <div class="btn-group">
          <button type="submit" class="btn btn-primary">제출하기</button>
          <router-link to="/qna/list" class="btn btn-secondary">취소</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Visual from '@/components/Visual.vue';

export default defineComponent({
  name: 'QuestionCreate',
  components: {
    Breadcrumb,
    Visual
  },
  data() {
    return {
      title: '',
      content: '',
      src: require('@/assets/vs025.jpg'),
      href: "/qna/list"
    };
  },
  methods: {
    createPost() {
      // 새 질문을 추가하는 로직
      alert('질문이 작성되었습니다.');
      this.$router.push('/qna/list');
    }
  }
});
</script>