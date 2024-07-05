// src/state/index.ts
import User from '@/models/User';

export interface State {
  user: User | null;
}

export const state: State = {
  user: null
};