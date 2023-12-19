import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private client: HttpClient) { }

  createAccount() {
    const url = "/new";
    this.client.get(url).subscribe(r => console.log(r))
  }
}
