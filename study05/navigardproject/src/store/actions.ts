import { ActionContext } from 'vuex';
import { Product, Post } from '@/model';
import state from './state';

export default {
  addProduct({ commit }: ActionContext<typeof state, any>, product: Product) {
    commit('ADD_PRODUCT', product);
  },
  deleteProduct({ commit }: ActionContext<typeof state, any>, id: number) {
    commit('DELETE_PRODUCT', id);
  },
  addPost({ commit }: ActionContext<typeof state, any>, post: Post) {
    commit('ADD_POST', post);
  },
  deletePost({ commit }: ActionContext<typeof state, any>, id: number) {
    commit('DELETE_POST', id);
  }
};