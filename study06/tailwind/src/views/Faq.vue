<template>
  <div>
    <Visual :src="src" alt="FAQ" />
    <Breadcrumb group="FAQ" current="자주하는 질문" :href="href" />
    <div class="container mx-auto mt-5">
      <h1 class="text-3xl font-bold">자주하는 질문</h1>
      <hr class="my-4 border-2 border-gray-200" />
      <div id="faqAccordion" class="space-y-4">
        <!-- 자주하는 질문 반복 -->
        <div v-for="(faq, index) in faqs" :key="index">
          <div class="border border-gray-200 rounded-lg">
            <button
              @click="toggleAccordion(index)"
              class="w-full text-left py-3 px-4 text-lg font-medium hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-500"
              :class="{ 'bg-gray-100': activeAccordion === index }"
            >
              {{ faq.question }}
            </button>
            <div
              v-show="activeAccordion === index"
              class="p-4"
            >
              <p v-html="faq.answer"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      href: "/community/faq",
      faqs: [
        { question: '질문 1', answer: '답변 1' },
        { question: '질문 2', answer: '답변 2' },
        { question: '질문 3', answer: '답변 3' },
        { question: '질문 4', answer: '답변 4' },
        { question: '질문 5', answer: '답변 5' },
        { question: '질문 6', answer: '답변 6' },
        { question: '질문 7', answer: '답변 7' },
        { question: '질문 8', answer: '답변 8' },
        { question: '질문 9', answer: '답변 9' },
        { question: '질문 10', answer: '답변 10' },
        { question: '질문 11', answer: '답변 11' },
        { question: '질문 12', answer: '답변 12' },
        { question: '질문 13', answer: '답변 13' },
        { question: '질문 14', answer: '답변 14' },
        { question: '질문 15', answer: '답변 15' },
        { question: '질문 16', answer: '답변 16' },
        { question: '질문 17', answer: '답변 17' },
      ] as Faq[],
      activeAccordion: -1
    };
  },
  methods: {
    toggleAccordion(index: number) {
      if (this.activeAccordion === index) {
        this.activeAccordion = -1;
      } else {
        this.activeAccordion = index;
      }
    }
  }
});
</script>

<style scoped>
/* 추가적인 스타일링은 여기에 추가할 수 있습니다. */
</style>