// Model (Vuex store)
const store = new Vuex.Store({
    state: { count: 0 },
    mutations: { increment(state) { state.count++; } }
  });
  
  // View (Vue Component)
  const Counter = {
    template: `<button @click="increment">{{ count }}</button>`,
    computed: { count() { return this.$store.state.count; } },
    methods: { increment() { this.$store.commit('increment'); } }
  };
  
  // Controller (Component methods)
  const app = new Vue({
    el: '#app',
    store,
    components: { Counter }
  });