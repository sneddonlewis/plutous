import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private client: HttpClient) { }

  createAccount() {
    const url = "/new";
    this.client.get(url).subscribe(r => console.log(r))
  }

  login(card_number: string, pin: string): Observable<HttpResponse<unknown>> {
    const url = "/login";
    const body = {
      card_number,
      pin
    }
    return this.client.post(url, body, { observe: 'response' })
  }
}
