// src/actions/userActions.ts
import { ActionContext } from 'vuex';
import { State } from '@/state';
import User from '@/models/User';

export const actions = {
  async fetchUser(context: ActionContext<State, State>, userId: number) {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    const user = await response.json();
    context.commit('setUser', user);
  }
};