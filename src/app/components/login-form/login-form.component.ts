import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/AuthService/auth-services.service';
import { SnackbarService } from 'src/app/services/SnackBarService/snack-bar-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  constructor(
    private authService: AuthService,
    private SnackBarService: SnackbarService,
    private router: Router
  ) {}
  email: string = '';
  password: string = '';

  async submit() {
    console.log('user name is ' + this.email);

    if (await this.authService.login(this.email, this.password)) {
      this.SnackBarService.showSuccessSnackbar('Login successful');
      this.clear();
      // this.router.navigate(['/home']);
      this.router.navigate(['/']);
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
