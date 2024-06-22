import { MutationTree } from 'vuex';
import { State } from './state';
import { Product, Post } from '@/model';

const mutations: MutationTree<State> = {
  ADD_PRODUCT(state, product: Product) {
    state.products.push(product);
  },
  DELETE_PRODUCT(state, id: number) {
    state.products = state.products.filter((product) => product.id !== id);
  },
  ADD_POST(state, post: Post) {
    state.posts.push(post);
  },
  DELETE_POST(state, id: number) {
    state.posts = state.posts.filter((post) => post.id !== id);
  }
};

export default mutations;