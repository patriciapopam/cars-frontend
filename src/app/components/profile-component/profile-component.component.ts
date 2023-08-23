import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css'],
})
export class ProfileComponentComponent {
  constructor() {}
  firstName: string = 'John';
  lastName: string = 'Doe';
  username: string = 'johndoe';
  email: string = 'john@example.com';

  saveChanges() {
    // Implement logic to save changes to a backend or perform desired actions
    console.log('Changes saved');
  }
}
