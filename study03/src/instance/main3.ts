import { createApp, defineComponent } from 'vue';

const app = createApp(defineComponent({
  name: 'LifecycleComponent',
  data() {
    return {
      message: 'Hello, Vue!'
    };
  },
  methods: {
    updateMessage(newMessage: string) {
      this.message = newMessage;
    }
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
  }
}));

app.mount('#app');