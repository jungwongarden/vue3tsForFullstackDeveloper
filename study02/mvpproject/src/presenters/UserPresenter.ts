// src/presenters/UserPresenter.ts
import User from '@/models/User';

export default class UserPresenter {
  async getUser(): Promise<User> {
    // API 호출을 통해 사용자 데이터를 가져오는 예시
    const response = await fetch('https://api.example.com/user/1');
    const data = await response.json();
    return new User(data.id, data.name, data.email);
  }
}