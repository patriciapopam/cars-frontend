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

  submit() {
    console.log('user name is ' + this.email);
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        // Check the status code and handle it accordingly
        if (response.status === 200) {
          // Successful login
          this.SnackBarService.showSuccessSnackbar('Login successful');
        } else if (response.status === 403) {
          console.log('Status code 403: Forbidden');
          this.SnackBarService.showErrorSnackbar(
            'Username or password incorrect'
          );
          // Handle forbidden access
        }
      },
      (error) => {
        console.log('Login error:', error);
        this.SnackBarService.showErrorSnackbar(
          'Login failed, check console output for details'
        );
        // Handle error cases
      }
    );
    this.clear();
  }

  clear() {
    this.email = '';
    this.password = '';
  }
}
