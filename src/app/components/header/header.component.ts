import { Component, OnInit } from '@angular/core';
import { SideNavService } from 'src/app/services/SideNavService/side-nav.service';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from 'src/app/services/AuthService/auth-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  getUsername(): string {
    return this.authService.isLoggedIn
      ? this.authService.user?.firstName + ' ' + this.authService.user?.lastName
      : 'not logged in';
  }

  constructor(
    private sideNavService: SideNavService,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  toggleSideNav(): void {
    this.sideNavService.toggleSideNav();
  }

  test(): void {
    console.log(this.authService.isLoggedIn);
  }
}
