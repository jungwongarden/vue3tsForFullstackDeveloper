<template>
  <div>
    <Visual :src="src" alt="QnA" />
    <Breadcrumb group="QnA" current="Question Create" :href="href" />
    <div class="container mt-5">
      <h1 class="text-2xl font-bold">질문 작성</h1>
      <form @submit.prevent="createPost" class="mt-4">
        <div class="mb-4">
          <label for="title" class="block text-sm font-medium text-gray-700">제목</label>
          <input type="text" v-model="title" id="title" class="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" required>
        </div>
        <div class="mb-4">
          <label for="content" class="block text-sm font-medium text-gray-700">내용</label>
          <textarea v-model="content" id="content" rows="3" class="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" required></textarea>
        </div>
        <div class="flex">
          <button type="submit" class="btn btn-primary mr-2">제출하기</button>
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

<style scoped>
/* 추가적인 스타일링 필요 시 여기에 작성 */
</style>