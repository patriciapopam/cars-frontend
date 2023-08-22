import { Injectable } from '@angular/core';
import { User } from 'src/models/User';
import { HttpClientService } from '../HttpClientService/HttpClientService.service'; // Import other services here

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClientService) {}
  private user: User | null = null;

  async login(email: string, password: string): Promise<boolean> {
    const response = await this.httpClient.login(email, password).toPromise();
    console.log(response.body); // Log the entire response body

    const accessToken = response.body?.accessToken;
    if (accessToken) {
      console.log(accessToken);
      localStorage.setItem('JWT Token', accessToken);
      //temporary if because of BE Error
      return true;
    } else {
      console.error('Access token not found in response body');
      return false;
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.user = null;
  }

  async getUserInfo(): Promise<User | null> {
    const result = await this.httpClient.getUserInfo().toPromise();
    if (result.success) {
      const user: User = {
        email: result.body.email,
        firstName: result.body.firstName,
        lastName: result.body.lastName,
        username: result.body.username,
      };
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    }
    return null;
  }

  isUserLoggedIn(): boolean {
    return this.user !== null;
  }

  getLoggedInUser(): User | null {
    return this.user;
  }
}
