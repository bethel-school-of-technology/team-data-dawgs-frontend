import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:207.244.251.209';

  constructor(private http: HttpClient) {}

  login(user: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }

  register(user: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }
}

