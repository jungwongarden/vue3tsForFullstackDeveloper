// src/viewmodels/UserViewModel.ts
import { ref } from 'vue';
import User from '@/models/User';

export function useUserViewModel() {
  const user = ref<User | null>(null);
  
  async function fetchUser() {
    const response = await fetch('https://api.example.com/user/1');
    const data = await response.json();
    user.value = new User(data.id, data.name, data.email);
  }

  return {
    user,
    fetchUser
  };
}
