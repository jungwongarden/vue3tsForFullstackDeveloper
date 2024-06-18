import { createStore } from 'vuex';

interface State {
  count: number;
}

export default createStore<State>({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    }
  },
  getters: {
    doubleCount(state): number {
      return state.count * 2;
    }
  }
});
