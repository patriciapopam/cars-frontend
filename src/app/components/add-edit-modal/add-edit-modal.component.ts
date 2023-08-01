import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {NgFor, NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CarObject } from 'src/models/CarObject';
export interface DialogData {
  title:string,
  car:CarObject,
  mode: "add" | "edit"
}

@Component({
  selector: 'app-add-edit-modal',
  templateUrl: './add-edit-modal.component.html',
  styleUrls: ['./add-edit-modal.component.css'],
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule,NgFor],
})
export class AddEditModalComponent implements OnInit {
  carProperties: { name: string; value: any }[] = [];
  constructor(public dialogRef: MatDialogRef<AddEditModalComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.carProperties=this.getCarProperties();
   }
  ngOnInit(): void {
    console.log("modal initiated")
  }
  
  getCarProperties(): { name: string; value: any }[] {
    return Object.entries(this.data.car).map(([name, value]) => ({ name, value }));
  }
  
  onClose():void{
    console.log("hello");
  
  }
  getInputType(value: any): string {
    // Use the typeof operator to check the type of the value
    if (typeof value === 'number') {
      return 'number'; // If the property type is number, set the input type to "number"
    } else {
      return 'text'; // If the property type is anything other than number, set the input type to "text"
    }
  }
  onNoClick():void{
    console.log("on no clicked");
  }
}
