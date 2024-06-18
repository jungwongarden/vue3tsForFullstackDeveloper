import { GetterTree } from 'vuex';
import { RootState } from './index';

export const getters: GetterTree<RootState, RootState> = {
  doubleCount(state) {
    return state.count * 2;
  }
};