import { Injectable } from '@angular/core';
import { User } from 'src/models/User';
import { HttpClientService } from '../HttpClientService/HttpClientService.service'; // Import other services here
import { LocalStorageService } from '../LocalStorageService/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClientService,
    private LocalStorageService: LocalStorageService
  ) {}
  public user: User | null = null;
  public isLoggedIn: boolean = false;
  async login(email: string, password: string): Promise<boolean> {
    const response = await this.httpClient.login(email, password).toPromise();
    console.log(response.body); // Log the entire response body

    const accessToken = response.body?.accessToken;
    if (accessToken) {
      console.log(accessToken);

      //temporary if because of BE Error
      if (accessToken !== 'adcdef') {
        this.isLoggedIn = true;
        this.LocalStorageService.setItem('JWT Token', accessToken);
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
    const result = await this.httpClient.getUserInfo().toPromise();
    if (result.success) {
      const user: User = {
        email: result.body.email,
        firstName: result.body.firstName,
        lastName: result.body.lastName,
        username: result.body.username,
      };
      this.user = user;
      console.log(user);
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

  // get isLoggedIn(): boolean {
  //   return this.isUserLoggedIn();
  // }
}
