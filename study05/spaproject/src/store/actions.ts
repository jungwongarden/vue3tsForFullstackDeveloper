import { ActionContext } from 'vuex'
import { State } from './state'
import { Product } from '@/model'

export default {
  fetchProducts({ commit }: ActionContext<State, State>) {
    // 여기에 API 호출 또는 비동기 작업을 추가하여 제품 데이터를 가져옵니다.
    const products: Product[] = [
      { id: 1, name: 'Product A', price: 100 },
      { id: 2, name: 'Product B', price: 200 }
    ]
    commit('setProducts', products)
  }
}