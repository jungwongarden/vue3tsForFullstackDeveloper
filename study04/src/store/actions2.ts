import { ActionTree } from 'vuex';
import { RootState, State } from './index';

export const actions: ActionTree<State, RootState> = {
  fetchData({ commit }) {
    // 비동기 작업 수행
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        // 데이터 가져오기 성공 시 상태 변경
        commit('setData', data);
      })
      .catch(error => {
        // 오류 처리
        commit('setError', error);
      });
  }
};