import { ActionContext } from 'vuex';
import { Product, Post } from '@/model';
import { State } from './state';

export default {
  addProduct({ commit }: ActionContext<State, any>, product: Product) {
    commit('ADD_PRODUCT', product);
  },
  addPost({ commit }: ActionContext<State, any>, post: Post) {
    commit('ADD_POST', post);
  }
};