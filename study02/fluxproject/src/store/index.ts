// src/store/index.ts
import { createStore } from 'vuex';
import { state } from '@/state';
import { mutations } from '@/mutations/userMutations';
import { actions } from '@/actions/userActions';
import { getters } from '@/getters/userGetters';

export default createStore({
  state,
  mutations,
  actions,
  getters
});