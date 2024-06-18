import { ActionTree } from 'vuex';
import { RootState, State } from './index';

export const actions: ActionTree<State, RootState> = {
  fetchDataWithPromise({ commit }) {
    return new Promise((resolve, reject) => {
      fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
          commit('setData', data);
          resolve(data); // 성공 시 Promise를 이행
        })
        .catch(error => {
          commit('setError', error);
          reject(error); // 실패 시 Promise를 거부
        });
    });
  }
};