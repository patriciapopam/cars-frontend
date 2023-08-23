import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService/auth-services.service';
import { HttpClientService } from 'src/app/services/HttpClientService/HttpClientService.service';
import { SnackbarService } from 'src/app/services/SnackBarService/snack-bar-service.service';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css'],
})
export class ProfileComponentComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private router: Router,
    private httpClientService: HttpClientService,
    private snackBarService: SnackbarService
  ) {}
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

  async saveChanges() {
    let UserDto = {
      username: this.username,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
    };
    this.httpClientService.updateUser({ ...UserDto }).subscribe(
      (response) => {
        // Handle success or other logic
        this.snackBarService.showSuccessSnackbar('User updated successfully');
      },
      (error) => {
        // Handle error
        this.snackBarService.showErrorSnackbar('Error updating user: ' + error);
        return;
      }
    );
    await this.authService.getUserInfo();
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['/profile']));
  }
}
