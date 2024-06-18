import { MutationTree } from 'vuex';
import { State } from './index';

export const mutations: MutationTree<State> = {
  updateMessage(state, payload: string) {
    state.messages = payload;
  }
};