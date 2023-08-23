import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/AuthService/auth-services.service';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css'],
})
export class ProfileComponentComponent {
  constructor(public authService: AuthService) {}

  firstName: string = this.authService.user!.firstName;
  lastName: string = this.authService.user!.lastName;
  username: string = this.authService.user!.username;
  email: string = this.authService.user!.email;

  saveChanges() {
    // Implement logic to save changes to a backend or perform desired actions
    console.log('Changes saved');
  }
}
