import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService) {}

  register() {
    this.userService.register({ email: this.email, password: this.password })
      .subscribe(response => {
        console.log('Registered successfully', response);
      }, error => {
        console.error('Registration error', error);
      });
  }

}
