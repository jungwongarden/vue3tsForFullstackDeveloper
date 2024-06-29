<template>
  <div>
    <Visual :src="src" alt="QnA" />
    <Breadcrumb :group="breadcrumbGroup" :current="current" :href="href" />
    <section class="section">
      <div class="container mt-5">
        <h1 class="title">질문 작성</h1>
        <form @submit.prevent="createPost">
          <div class="field">
            <label for="title" class="label">제목</label>
            <div class="control">
              <input type="text" class="input" id="title" v-model="title" required />
            </div>
          </div>
          <div class="field">
            <label for="content" class="label">내용</label>
            <div class="control">
              <textarea class="textarea" id="content" v-model="content" rows="3" required></textarea>
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button type="submit" class="button is-primary">제출하기</button>
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
      breadcrumbGroup: 'QnA',
      current: 'Question Create',
      href: '/qna/list'
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