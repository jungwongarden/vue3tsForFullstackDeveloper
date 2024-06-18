import { MutationTree } from 'vuex';
import { State } from './index';

export const mutations: MutationTree<State> = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  }
};