import { reactive } from 'vue';

const state = reactive({
  count: 0
});

const increment = () => {
  state.count++;
};