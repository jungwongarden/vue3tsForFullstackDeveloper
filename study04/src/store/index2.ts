import { createStore, Store } from 'vuex';
import cartModule from './modules/cart';

export interface RootState {
  // 루트 상태 정의
}

const store: Store<RootState> = createStore({
  modules: {
    cart: cartModule
  }
});

export default store;