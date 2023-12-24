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
  }
}
