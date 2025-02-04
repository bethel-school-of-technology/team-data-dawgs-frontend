import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: { username: string; password: string }[] = [];

  register(username: string, password: string): boolean {
    const userExists = this.users.find(user => user.username === username);

    if (!userExists) {
      this.users.push({ username, password });
      return true;
    } else {
      return false; 
    }
  }

  login(username: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );
    return user !== undefined;
  }
}
