<template>
    <div>
      <Visual :src="src" alt="상담" />
      <Breadcrumb group="상담" current="온라인 상담" :href="href" />
      <div class="container mt-5">
        <h1>온라인 상담</h1>
        <hr />
        <form @submit.prevent="sendEmail">
          <div class="mb-3">
            <label for="email" class="form-label">보내는 사람 이메일 주소</label>
            <input type="email" class="form-control" id="email" v-model="email" required>
          </div>
          <div class="mb-3">
            <label for="title" class="form-label">상담 제목</label>
            <input type="text" class="form-control" id="title" v-model="title" required>
          </div>
          <div class="mb-3">
            <label for="content" class="form-label">상담 내용</label>
            <textarea class="form-control" id="content" v-model="content" rows="5" required></textarea>
          </div>
          <div class="btn-group">
            <button type="submit" class="btn btn-primary">메일 보내기</button>
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
        src: new URL('@/assets/vs022.jpg', import.meta.url).href,
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