// src/mutations/userMutations.ts
import { State } from '@/state';
import User from '@/models/User';

export const mutations = {
  setUser(state: State, user: User) {
    state.user = user;
  }
};