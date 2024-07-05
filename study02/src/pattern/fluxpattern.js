//src/pattern/fluxpattern.js
// Action
const actions = {
    increment(context) { context.commit('increment'); }
  };
  
  // Store (Vuex)
  const store = new Vuex.Store({
    state: { count: 0 },
    mutations: { increment(state) { state.count++; } },
    actions
  });
  
  // View (Vue Component)
  const Counter = {
    template: `<button @click="increment">{{ count }}</button>`,
    computed: { count() { return this.$store.state.count; } },
    methods: { increment() { this.$store.dispatch('increment'); } }
  };
  
  new Vue({
    el: '#app',
    store,
    components: { Counter }
  });