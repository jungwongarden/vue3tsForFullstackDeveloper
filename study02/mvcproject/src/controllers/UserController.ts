// src/controllers/UserController.ts
import User from '@/models/User';

export default class UserController {
  getUser(): User {
    return new User(1, 'John Doe', 'john@example.com');
  }
}