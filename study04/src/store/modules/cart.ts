import { Module } from 'vuex';
import { RootState } from '../index';

interface CartState {
  items: Array<string>;
}

const cartModule: Module<CartState, RootState> = {
  state: {
    items: []
  },
  mutations: {
    addItem(state, item: string) {
      state.items.push(item);
    }
  },
  actions: {
    addToCart({ commit }, item: string) {
      commit('addItem', item);
    }
  },
  getters: {
    cartItemsCount(state) {
      return state.items.length;
    }
  }
};

export default cartModule;