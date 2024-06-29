<template>
  <div>
    <Visual :src="src" alt="상담" />
    <Breadcrumb :group="breadcrumbGroup" :current="current" :href="href" />
    <section class="section">
      <div class="container mt-5">
        <h1 class="title">온라인 상담</h1>
        <hr />
        <form @submit.prevent="sendEmail">
          <div class="field">
            <label for="email" class="label">보내는 사람 이메일 주소</label>
            <div class="control">
              <input type="email" class="input" id="email" v-model="email" required>
            </div>
          </div>
          <div class="field">
            <label for="title" class="label">상담 제목</label>
            <div class="control">
              <input type="text" class="input" id="title" v-model="title" required>
            </div>
          </div>
          <div class="field">
            <label for="content" class="label">상담 내용</label>
            <div class="control">
              <textarea class="textarea" id="content" v-model="content" rows="5" required></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button type="submit" class="button is-primary">메일 보내기</button>
            </div>
          </div>
        </form>
      </div>
    </section>
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
      breadcrumbGroup: '상담',
      current: '온라인 상담',
      href: '/send-email',
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
.container {
  margin-top: 30px;
}
</style>