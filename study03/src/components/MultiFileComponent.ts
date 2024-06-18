import { defineComponent, ref, onMounted } from 'vue';
import template from './MultiFileComponent.template.html';

export default defineComponent({
  name: 'MyComponent',
  template,
  setup() {
    const title = ref('Hello Vue 3');
    const message = ref('This is a multi file component');
    
    // 스타일을 동적으로 로드하는 함수
    const loadStyles = (href: string) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    };

    onMounted(() => {
      // 컴포넌트가 마운트될 때 스타일을 로드합니다.
      loadStyles('./MultiFileComponent.style.css');
    });

    return {
      title,
      message
    };
  }
});