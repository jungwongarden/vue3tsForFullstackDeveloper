import { Product, Post } from '@/model';

export interface State {
  products: Product[];
  posts: Post[];
}

const state: State = {
  products: [],
  posts: []
};

export default state;