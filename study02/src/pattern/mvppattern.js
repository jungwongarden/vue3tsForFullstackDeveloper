// Model (State)
const state = { count: 0 };

// View (Vue Component)
const Counter = {
  template: `<button @click="increment">{{ count }}</button>`,
  computed: { count() { return state.count; } },
  methods: { increment() { presenter.increment(); } }
};

// Presenter (Logic)
const presenter = {
  increment() { state.count++; }
};

new Vue({
  el: '#app',
  components: { Counter }
});