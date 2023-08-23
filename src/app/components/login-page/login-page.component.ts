import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService/auth-services.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/']);
    }
  }
}
