import { MutationTree } from 'vuex';
import { State } from './index';

export const mutations: MutationTree<State> = {
  updateMessage(state, payload: { id: number, message: string }) {
    const { id, message } = payload;
    state.messages[id] = message;
  }
};