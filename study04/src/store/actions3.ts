import { ActionTree } from 'vuex';
import { RootState, State } from './index';

export const actions: ActionTree<State, RootState> = {
  fetchData({ commit }, payload: string) {
    fetch(`https://api.example.com/${payload}`)
      .then(response => response.json())
      .then(data => {
        commit('setData', data);
      })
      .catch(error => {
        commit('setError', error);
      });
  }
};