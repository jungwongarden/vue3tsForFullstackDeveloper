<template>
    <div>
      <Visual :src="src" alt="QnA" />
      <Breadcrumb group="QnA" current="Answer Create" :href="href" />
      <div class="container mx-auto mt-5">
        <h1 class="text-3xl font-bold mb-5">답변 작성</h1>
        <form @submit.prevent="createAnswer" class="space-y-5">
          <div>
            <label for="content" class="block text-lg font-medium text-gray-700">답변 내용</label>
            <textarea id="content" v-model="content" rows="3" required class="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
          </div>
          <div class="flex space-x-4">
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600">제출하기</button>
            <router-link to="/qna/list" class="bg-gray-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-600">취소</router-link>
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
  
  <style scoped>
  /* 추가적인 스타일은 여기에서 작성 */
  </style>