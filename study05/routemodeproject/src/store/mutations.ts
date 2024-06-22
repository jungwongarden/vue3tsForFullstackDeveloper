import { Product, Post } from '@/model';
import { State } from './state';

export default {
  ADD_PRODUCT(state: State, product: Product) {
    state.products.push(product);
  },
  ADD_POST(state: State, post: Post) {
    state.posts.push(post);
  },
  DELETE_PRODUCT(state: State, id: number) {
    state.products = state.products.filter(product => product.id !== id);
  },
  DELETE_POST(state: State, id: number) {
    state.posts = state.posts.filter(post => post.id !== id);
  }
};