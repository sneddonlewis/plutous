import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {

  username!: string
  password!: string

  constructor(private authService: AuthService) {
  }

  newAccount() {
    this.authService.createAccount()
  }

  login() {
    console.log(this.username)
    console.log(this.password)
    this.authService.login(this.username, this.password)
      .subscribe(
        response => {
          console.log('Login successful:', response);
          const bearerToken = response.headers.get('Authorization');
          if (bearerToken) {
            console.log('Bearer Token:', bearerToken);
          }
        },
        error => {
          console.error('Login error:', error);
        }
      )
  }
}
