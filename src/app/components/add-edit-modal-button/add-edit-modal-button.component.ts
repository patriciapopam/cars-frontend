import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddEditModalComponent,DialogData } from '../add-edit-modal/add-edit-modal.component';

@Component({
  selector: 'app-add-edit-modal-button',
  templateUrl: './add-edit-modal-button.component.html',
  styleUrls: ['./add-edit-modal-button.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    NgIf,
    MatDialogModule,
  ],
})
export class AddEditModalButtonComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogData: DialogData = { title: 'Alex', mode: 'add', car: {
      brand: '', color: '', model: '', category: '', engine: '',
      year: 0,
      fuelType: '',
      cylinderCapacity: 0,
      torque: 0,
      horsePower: 0,
      country: '',
      transmission: ''
    } };
    const dialogRef = this.dialog.open(AddEditModalComponent, {
      data: dialogData,
    });
  }
}
