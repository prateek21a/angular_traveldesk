import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credential } from 'src/app/Credential';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  BaseUrl = 'http://localhost:5161/api/Login';

  Authenticate(credential: Credential): Observable<Credential> {
    console.log(credential);
    return this.http.post<Credential>(this.BaseUrl, credential, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    });
  }

  SetToken(token: any): void {
    localStorage.setItem('token', token);
  }

  GetToken(): any {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return this.GetToken() !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
    console.log('Token removed:', !this.isAuthenticated());
  }
}
