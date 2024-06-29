<template>
  <div>
    <Visual :src="src" alt="QnA" />
    <Breadcrumb group="QnA" current="Answer Create" :href="href" />
    <section class="section">
      <div class="container mt-5">
        <h1 class="title">답변 작성</h1>
        <form @submit.prevent="createAnswer">
          <div class="field">
            <label for="content" class="label">답변 내용</label>
            <div class="control">
              <textarea class="textarea" id="content" v-model="content" rows="3" required></textarea>
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button type="submit" class="button is-primary">제출하기</button>
            </div>
            <div class="control">
              <router-link to="/qna/list" class="button is-link">취소</router-link>
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
/* Bulma의 기본 스타일은 이미 여기에 적용되어 있어 추가 스타일링이 필요하지 않습니다. */
</style>