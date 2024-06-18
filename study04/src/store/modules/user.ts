import { Module } from 'vuex';
import { RootState } from '../index';

interface UserState {
  name: string;
}

const userModule: Module<UserState, RootState> = {
  state: {
    name: 'John Doe'
  },
  mutations: {
    setName(state, newName: string) {
      state.name = newName;
    }
  }
};

export default userModule;