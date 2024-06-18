import { createStore, Store as VuexStore, CommitOptions, DispatchOptions, Commit } from 'vuex';

// RootState 인터페이스 정의
export interface RootState {
  count: number;
  messages: { [id: number]: string }; // messages 필드 추가
  firstName: string;
  lastName: string;
}

// 기본 상태 값
const rootState: RootState = {
  count: 0,
  messages: {},
  firstName: "",
  lastName: ""
};

// State 인터페이스 정의
export interface State {
  count: number;
  messages: { [id: number]: string }; // messages 필드 추가
  firstName: string;
  lastName: string;
}

// 기본 상태 값
const state: State = {
  count: 0,
  messages: {},
  firstName: "",
  lastName: ""
};

// 뮤테이션 타입 정의
export type Mutations<S = State> = {
  increment(state: S): void;
  setData(state: S, data: any): void;
  setError(state: S, error: any): void;
};

// 뮤테이션 정의
const mutations: Mutations = {
  increment(state) {
    state.count++;
  },
  setData(state, data) {
    // 데이터 처리 로직을 여기에 추가하세요.
  },
  setError(state, error) {
    // 에러 처리 로직을 여기에 추가하세요.
  }
};

// 액션 타입 정의
export type Actions = {
  incrementAsync({ commit }: { commit: Commit }, payload?: any): void;
  fetchData({ commit }: { commit: Commit }): void;
};

// 액션 정의
const actions: Actions = {
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit('increment');
    }, 1000);
  },
  fetchData({ commit }) {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        commit('setData', data);
      })
      .catch(error => {
        commit('setError', error);
      });
  }
};

// 게터 정의
const getters = {
  doubleCount(state: State) {
    return state.count * 2;
  }
};

// 스토어 생성
const store = createStore<State>({
  state,
  mutations,
  actions,
  getters
});

// 타입 추론을 위한 Vuex 스토어 타입 정의
export type Store = Omit<
  VuexStore<State>,
  'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1],
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};

export default store;