import { createApp, defineComponent, reactive, computed } from 'vue';

const app = createApp(defineComponent({
  name: 'MyComponent',
  data() {
    return {
      message: 'Hello, Vue with TypeScript!'
    };
  },
  methods: {
    updateMessage(newMessage: string) {
      this.message = newMessage;
    }
  },
  computed: {
    reversedMessage(): string {
      return this.message.split('').reverse().join('');
    }
  },
  watch: {
    message(newValue: string, oldValue: string) {
      console.log(`Message changed from ${oldValue} to ${newValue}`);
    }
  },
  components: {
    // 다른 컴포넌트들을 등록할 수 있습니다.
  }
}));

app.mount('#app');