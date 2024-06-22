import { ActionTree } from 'vuex';
import { State } from './state';
import axios from 'axios';
import { Product, Post } from '@/model';

const actions: ActionTree<State, State> = {
  async addProduct({ commit }, product: Product) {
    // 임의의 API 호출
    const response = await axios.post('/api/products', product);
    commit('ADD_PRODUCT', response.data);
  },
  async deleteProduct({ commit }, id: number) {
    // 임의의 API 호출
    await axios.delete(`/api/products/${id}`);
    commit('DELETE_PRODUCT', id);
  },
  async addPost({ commit }, post: Post) {
    // 임의의 API 호출
    const response = await axios.post('/api/posts', post);
    commit('ADD_POST', response.data);
  },
  async deletePost({ commit }, id: number) {
    // 임의의 API 호출
    await axios.delete(`/api/posts/${id}`);
    commit('DELETE_POST', id);
  }
};

export default actions;