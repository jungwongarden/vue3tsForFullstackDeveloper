import { createApp, defineComponent, ref, computed, watch, nextTick } from 'vue';

const MyComponent = defineComponent({
  name: 'MyComponent',
  data() {
    return {
      message: 'Hello, Vue!',
      newMessage: ''
    };
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    reversedMessage(): string {
      return this.message.split('').reverse().join('');
    }
  },
  methods: {
    updateMessage(newMessage: string) {
      this.message = newMessage;
      this.$nextTick(() => {
        console.log('Message updated and DOM updated');
      });
    },
    emitEvent() {
      this.$emit('custom-event', this.message);
    }
  },
  watch: {
    message(newValue: string, oldValue: string) {
      console.log('Message changed from', oldValue, 'to', newValue);
    }
  },
  mounted() {
    console.log('Component mounted');
  },
  beforeCreate() {
    console.log('Before create');
  },
  created() {
    console.log('Created');
  },
  beforeMount() {
    console.log('Before mount');
  },
  beforeUpdate() {
    console.log('Before update');
  },
  updated() {
    console.log('Updated');
  },
  beforeUnmount() {
    console.log('Before unmount');
  },
  unmounted() {
    console.log('Unmounted');
  },
  template: `
    <div>
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
      <p>Reversed: {{ reversedMessage }}</p>
      <input v-model="newMessage" placeholder="Enter new message">
      <button @click="updateMessage(newMessage)">Update Message</button>
      <button @click="emitEvent">Emit Event</button>
    </div>
  `
});

const app = createApp(MyComponent, {
  title: 'My Vue Component'
});
app.mount('#app');