import { GetterTree } from 'vuex';
import { RootState } from '../index';

const getters: GetterTree<CartState, RootState> = {
  totalItems(state, getters, rootState) {
    // 다른 모듈의 상태 접근
    return rootState.user.name + ' has ' + state.items.length + ' items in the cart';
  }
};

export default getters;