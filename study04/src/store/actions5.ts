import { ActionTree } from 'vuex';
import { RootState, State } from './index';

export const actions: ActionTree<State, RootState> = {
  fetchDataAndProcess({ commit }) {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        // 첫 번째 비동기 작업 완료 후 다음 작업 수행
        return fetch('https://api.example.com/process', {
          method: 'POST',
          body: JSON.stringify(data)
        });
      })
      .then(response => response.json())
      .then(processedData => {
        commit('setProcessedData', processedData); // 변이 호출
      })
      .catch(error => {
        commit('setError', error);
      });
  }
};