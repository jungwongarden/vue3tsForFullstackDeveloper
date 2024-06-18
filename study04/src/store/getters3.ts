import { GetterTree } from 'vuex';
import { RootState } from './index';

export const getters: GetterTree<RootState, RootState> = {
  fullName(state) {
    return `${state.firstName} ${state.lastName}`;
  }
};