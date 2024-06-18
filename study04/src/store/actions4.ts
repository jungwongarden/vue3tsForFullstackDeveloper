import { ActionTree } from 'vuex';
import { RootState, State } from './index';

export const actions: ActionTree<State, RootState> = {
  fetchData({ commit }) {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        commit('setData', data); // 변이 호출
      })
      .catch(error => {
        commit('setError', error);
      });
  }
};