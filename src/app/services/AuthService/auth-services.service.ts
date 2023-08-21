import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from '../HttpClientService/HttpClientService.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClientService) {}

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.baseUrl}/login`, body);
  }
}
