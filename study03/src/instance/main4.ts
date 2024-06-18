import { createApp, defineComponent, ref, computed, watch } from 'vue';

// 루트 컴포넌트 정의
const RootComponent = defineComponent({
  name: 'RootComponent',
  setup() {
    const message = ref<string>('Hello, Vue with TypeScript!');
    const newMessage = ref<string>('');

    const reversedMessage = computed<string>(() => {
      return message.value.split('').reverse().join('');
    });

    watch(message, (newValue, oldValue) => {
      console.log(`Message changed from ${oldValue} to ${newValue}`);
    });

    const updateMessage = () => {
      message.value = newMessage.value;
    };

    return {
      message,
      newMessage,
      reversedMessage,
      updateMessage
    };
  },
  // 생명주기 훅들
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  },
  template: `
    <div>
      <h1>{{ message }}</h1>
      <input v-model="newMessage" placeholder="Enter new message">
      <button @click="updateMessage">Update Message</button>
      <p>Reversed Message: {{ reversedMessage }}</p>
    </div>
  `
});

// 애플리케이션 생성 및 마운트
const app = createApp(RootComponent);
app.mount('#app');