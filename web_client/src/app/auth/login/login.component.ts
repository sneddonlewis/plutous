import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private username = ''
  private password = ''

  constructor(private authService: AuthService) {
  }

  newAccount() {
    this.authService.createAccount()
  }

  login() {
    console.log(this.username)
    console.log(this.password)
  }
}
