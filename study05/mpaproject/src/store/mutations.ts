import { State } from './state'
import { Product } from '@/model'

export default {
  setProducts(state: State, products: Product[]) {
    state.products = products
  }
}