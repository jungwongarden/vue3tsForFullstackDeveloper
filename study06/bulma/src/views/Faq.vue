<template>
  <div>
    <Visual :src="src" alt="FAQ" />
    <Breadcrumb :group="breadcrumbGroup" :current="current" :href="href" />
    <section class="section">
      <div class="container mt-5">
        <h1 class="title">자주하는 질문</h1>
        <hr />
        <div class="accordion" id="faqAccordion" style="margin-bottom: 32px; padding-bottom: 32px;">
          <!-- 자주하는 질문 반복 -->
          <div class="accordion-item" v-for="(faq, index) in faqs" :key="index">
            <h2 class="accordion-header" :id="'faqHeading' + index">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#faqCollapse' + index"
                :aria-expanded="index === 0 ? 'true' : 'false'"
                :aria-controls="'faqCollapse' + index">
                {{ faq.question }}
              </button>
            </h2>
            <div
              :id="'faqCollapse' + index"
              class="accordion-collapse collapse"
              :class="{ 'show': index === 0 }"
              :aria-labelledby="'faqHeading' + index"
              data-bs-parent="#faqAccordion">
              <div class="accordion-body" v-html="faq.answer"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Visual from '@/components/Visual.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';

interface Faq {
  question: string;
  answer: string;
}

export default defineComponent({
  name: 'Faq',
  components: {
    Visual,
    Breadcrumb
  },
  data() {
    return {
      src: new URL('@/assets/vs024.jpg', import.meta.url).href,
      breadcrumbGroup: 'FAQ',
      current: '자주하는 질문',
      href: "/community/faq",
      faqs: [
        {
          question: '질문 1',
          answer: '답변 1'
        },
        {
          question: '질문 2',
          answer: '답변 2'
        },
        {
          question: '질문 3',
          answer: '답변 3'
        },
        {
          question: '질문 4',
          answer: '답변 4'
        },
        {
          question: '질문 5',
          answer: '답변 5'
        },
        {
          question: '질문 6',
          answer: '답변 6'
        },
        {
          question: '질문 7',
          answer: '답변 7'
        },
        {
          question: '질문 8',
          answer: '답변 8'
        },
        {
          question: '질문 9',
          answer: '답변 9'
        },
        {
          question: '질문 10',
          answer: '답변 10'
        },
        {
          question: '질문 11',
          answer: '답변 11'
        },
        {
          question: '질문 12',
          answer: '답변 12'
        },
        {
          question: '질문 13',
          answer: '답변 13'
        },
        {
          question: '질문 14',
          answer: '답변 14'
        },
        {
          question: '질문 15',
          answer: '답변 15'
        },
        {
          question: '질문 16',
          answer: '답변 16'
        },
        {
          question: '질문 17',
          answer: '답변 17'
        },
      ] as Faq[]
    };
  }
});
</script>

<style scoped>
.accordion-body {
  padding: 1rem;
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
}
</style>