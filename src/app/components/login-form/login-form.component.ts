import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/AuthService/auth-services.service';
import { SnackbarService } from 'src/app/services/SnackBarService/snack-bar-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  constructor(
    private authService: AuthService,
    private SnackBarService: SnackbarService
  ) {}
  email: string = '';
  password: string = '';

  async submit() {
    console.log('user name is ' + this.email);

    if (await this.authService.login(this.email, this.password)) {
      this.SnackBarService.showSuccessSnackbar('Login successful');
      console.log('Login successful');
      console.log(this.authService.isUserLoggedIn());
    } else {
      this.SnackBarService.showErrorSnackbar('Username or password incorrect');
      this.clear();
    }
  }
  clear() {
    this.email = '';
    this.password = '';
  }
}
