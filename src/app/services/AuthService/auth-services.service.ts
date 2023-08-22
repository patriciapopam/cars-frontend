import { Injectable } from '@angular/core';
import { User } from 'src/models/User';
import { HttpClientService } from '../HttpClientService/HttpClientService.service'; // Import other services here
import { LocalStorageService } from '../LocalStorageService/local-storage.service';
import { SpinnerService } from '../SpinnerService/spinner-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClientService,
    private localStorageService: LocalStorageService,
    private spinnerService: SpinnerService,
    private router: Router
  ) {}

  public user: User | null = null;
  public isLoggedIn: boolean = false;

  public startupCheck() {
    console.log('Auth service init');
    if (this.localStorageService.getItem('JWT Token') !== null) {
      this.spinnerService.show();
      this.isLoggedIn = true;
      this.getUserInfo();
      this.spinnerService.hide();
    } else {
      this.router.navigate(['/login']);
    }
  }

  async login(username: string, password: string): Promise<boolean> {
    const response = await this.httpClient
      .login(username, password)
      .toPromise();

    const accessToken = response.body?.accessToken;
    if (accessToken) {
      //temporary if because of BE Error
      if (accessToken !== 'adcdef') {
        this.isLoggedIn = true;
        this.localStorageService.setItem('JWT Token', accessToken);
        await this.getUserInfo();
        return true;
      }
      return false;
    } else {
      console.error('Access token not found in response body');
      return false;
    }
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('JWT Token');
    this.user = null;
    this.isLoggedIn = false;
  }

  async getUserInfo(): Promise<User | null> {
    console.log('Getting user info');
    const result = await this.httpClient.getUserInfo().toPromise();

    const responseBody = result as any; // Cast to 'any' to access properties

    if (responseBody) {
      const user: User = {
        email: responseBody.email,
        firstName: responseBody.firstName,
        lastName: responseBody.lastName,
        username: responseBody.username,
      };
      this.user = user;

      return user;
    }

    return null;
  }

  getLoggedInUser(): User | null {
    return this.user;
  }
}
