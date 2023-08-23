import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/AuthService/auth-services.service';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css'],
})
export class ProfileComponentComponent implements OnInit {
  constructor(public authService: AuthService) {}
  ngOnInit(): void {
    this.firstNameCopy = this.firstName;
    this.lastNameCopy = this.lastName;
  }
  firstNameCopy: string = '';
  lastNameCopy: string = '';
  fieldsDisabled: boolean = true;
  firstName: string = this.authService.user!.firstName;
  lastName: string = this.authService.user!.lastName;
  username: string = this.authService.user!.username;
  email: string = this.authService.user!.email;

  editProfile() {
    this.fieldsDisabled = false;
  }

  saveChanges() {
    // Implement logic to save changes to a backend or perform desired actions
    console.log('Changes saved');
  }
}
