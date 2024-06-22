<template>
  <div>
    <Visual :src="src" alt="QnA" />
    <Breadcrumb group="QnA" current="Answer Create" :href="href" />
    <div class="container mt-5">
      <h1>답변 작성</h1>
      <form @submit.prevent="createAnswer">
        <div class="mb-3">
          <label for="content" class="form-label">답변 내용</label>
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
  name: 'AnswerCreate',
  components: {
    Breadcrumb,
    Visual
  },
  data() {
    return {
      content: '',
      src: require('@/assets/vs025.jpg'),
      href: "/qna/list"
    };
  },
  methods: {
    createAnswer() {
      // 새 답변을 추가하는 로직
      alert('답변이 작성되었습니다.');
      this.$router.push('/qna/list');
    }
  }
});
</script>