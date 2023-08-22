import { Injectable } from '@angular/core';
import { User } from 'src/models/User';
import { HttpClientService } from '../HttpClientService/HttpClientService.service'; // Import other services here
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private static instance: AuthService;
  private isLoggedIn: boolean = false;
  private currentUser: User | null = null;

  // Inject other services in the constructor
  constructor(private httpClientService: HttpClientService) {
    // Private constructor to enforce Singleton pattern
  }

  static getInstance(httpClientService: HttpClientService): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService(httpClientService);
    }
    return AuthService.instance;
  }

  async login(username: string, password: string): Promise<boolean> {
    try {
      const response = await this.httpClientService
        .login(username, password)
        .toPromise();
      if (response.status === 200) {
        this.isLoggedIn = true;
        console.log('Login successful');
        console.log(response.body('accessToken'));
        localStorage.setItem('JWT Token', response.body('accessToken'));
        this.fetchUserInfo();
        return true;
      } else {
        this.isLoggedIn = false;
        this.currentUser = null;
        return false;
      }
    } catch (error) {
      console.log('Login error:', error);
      this.isLoggedIn = false;
      this.currentUser = null;
      return false;
    }
  }

  fetchUserInfo() {
    this.httpClientService.getUserInfo().pipe(
      map((response: any) => {
        let user: User = {
          username: response.username,
          email: response.email,
          firstName: response.firstName,
          lastName: response.lastName,
        };
        this.currentUser = user;
      })
    );
  }

  logout() {
    this.isLoggedIn = false;
    this.currentUser = null;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}
