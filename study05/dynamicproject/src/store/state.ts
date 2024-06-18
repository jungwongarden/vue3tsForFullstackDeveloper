import { Product } from '@/model';

export interface State {
  products: Product[];
}

export default {
  products: []
} as State;