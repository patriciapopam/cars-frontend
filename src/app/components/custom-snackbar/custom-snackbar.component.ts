import { CommonModule } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-custom-snackbar',
  templateUrl: './custom-snackbar.component.html',
  styleUrls: ['./custom-snackbar.component.css'],
  standalone:true,
  imports: [CommonModule]
})
/**
 * CustomSnackbarComponent is a component that displays a custom snackbar with an icon and a message.
 * It receives the icon and message data from the MAT_SNACK_BAR_DATA injection token.
 * The icon can be 'x' for error, 'tick' for success, or 'i' for information.
 * The component sets an emoji based on the icon value and displays it along with the message.
 */
export class CustomSnackbarComponent implements OnInit {
  @Input() icon: string = 'x';
  @Input() message: string = '';
  emoji:string | undefined ;
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}

  ngOnInit(): void {
    this.icon = this.data.icon; // Set the icon value from the data passed by the service
    this.message = this.data.message; // Set the message value from the data passed by the service

    //TODO: find a better way to do this but it will do temporary
    switch (this.icon) {
      case 'x':
        this.emoji= '❌';
        break;
      case 'tick':
        this.emoji= '✅';
        break;
      case 'i':
        this.emoji='info';
        break;
      default:
        this.emoji= ''; // Return an empty string for unknown icons or handle it as per your requirement
        break;
   }
   console.log(this.data,this.emoji);
  }
}
