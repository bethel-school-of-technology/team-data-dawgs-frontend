import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService) {}
  
  login() {
    this.userService.login({ email: this.email, password: this.password })
      .subscribe(response => {
        console.log('Logged in successfully', response);
      }, error => {
        console.error('Login error', error);
      });
  }

}

