import { GetterTree } from 'vuex';
import { RootState } from './index';

export const getters: GetterTree<RootState, RootState> = {
  doubleCount(state) {
    return state.count * 2;
  },
  fullName(state, getters) {
    return `${getters.firstName} ${getters.lastName}`;
  },
  firstName(state) {
    return state.firstName;
  },
  lastName(state) {
    return state.lastName;
  }
};