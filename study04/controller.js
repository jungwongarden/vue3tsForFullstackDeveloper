import store from './store.js';
import { updateMessage } from './actions.js';
import dispatcher from './dispatcher.js';

export default {
  data() {
    return {
      newMessage: ''
    };
  },
  computed: {
    message() {
      return store.getState().message;
    }
  },
  methods: {
    handleInput(event) {
      this.newMessage = event.target.value;
    },
    handleSubmit() {
      const action = updateMessage(this.newMessage);
      dispatcher.dispatch(action);
    }
  },
  created() {
    store.on('change', () => {
      this.$
      forceUpdate();
    });
  }
};