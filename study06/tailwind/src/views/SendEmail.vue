<template>
  <div>
    <Visual :src="src" alt="상담" />
    <Breadcrumb group="상담" current="온라인 상담" :href="href" />
    <div class="container mt-5">
      <h1 class="text-2xl font-bold">온라인 상담</h1>
      <hr class="my-4">
      <form @submit.prevent="sendEmail">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">보내는 사람 이메일 주소</label>
          <input type="email" id="email" v-model="email" required
                 class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div class="mb-4">
          <label for="title" class="block text-sm font-medium text-gray-700">상담 제목</label>
          <input type="text" id="title" v-model="title" required
                 class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div class="mb-4">
          <label for="content" class="block text-sm font-medium text-gray-700">상담 내용</label>
          <textarea id="content" v-model="content" rows="5" required
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
        </div>
        <div>
          <button type="submit"
                  class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            메일 보내기
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Visual from '@/components/Visual.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';

export default defineComponent({
  name: 'SendEmail',
  components: {
    Visual,
    Breadcrumb
  },
  data() {
    return {
      src: require('@/assets/vs022.jpg'),
      href: "/send-email",
      email: '',
      title: '',
      content: ''
    };
  },
  methods: {
    sendEmail() {
      // 실제로는 이 부분에 이메일 전송 로직을 구현해야 합니다.
      // 여기서는 간단히 콘솔에 출력하는 예시를 보여드립니다.
      console.log('보내는 사람 이메일:', this.email);
      console.log('상담 제목:', this.title);
      console.log('상담 내용:', this.content);

      alert('이메일이 전송되었습니다.');
      // 메일이 성공적으로 전송된 후 홈페이지로 이동하도록 설정
      this.$router.push('/');
    }
  }
});
</script>

<style scoped>
/* 추가적인 스타일링 필요 시 여기에 작성 */
</style>