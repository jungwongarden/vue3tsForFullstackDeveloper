import { ActionContext } from 'vuex'
import { State } from './state'
import { Product } from '@/model'

export default {
  fetchProducts({ commit }: ActionContext<State, State>) {
    const products: Product[] = [
      { id: 1, name: 'Product A', price: 100 },
      { id: 2, name: 'Product B', price: 200 }
    ]
    commit('setProducts', products)
  }
}