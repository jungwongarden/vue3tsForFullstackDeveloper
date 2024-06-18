import { defineComponent, ref } from 'vue';
import template from './MyComponent.template.html';

export default defineComponent({
  name: 'MyComponent',
  template,
  setup() {
    const title = ref('Hello Vue 3');
    const message = ref('This is a multi file component');
    return {
      title,
      message
    };
  }
});