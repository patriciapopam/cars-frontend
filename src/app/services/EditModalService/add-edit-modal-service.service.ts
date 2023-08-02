// dialog.service.ts
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddEditModalComponent } from 'src/app/components/add-edit-modal/add-edit-modal.component';
import { DialogData } from '../../../models/DialogData';
import { CarObject } from 'src/models/CarObject';

@Injectable({
  providedIn: 'root',
})
export class AddEditModalService {
  dialogRef: MatDialogRef<AddEditModalComponent> | undefined;
  constructor(private dialog: MatDialog) {}

  openAddDialog(): void {
    const dialogData: DialogData = {
      id: '',
      title: 'Add Car',
      mode: 'add',
      car: {
        brand: '',
        color: '',
        model: '',
        category: '',
        engine: '',
        year: 0,
        fuelType: '',
        cylinderCapacity: 0,
        torque: 0,
        horsePower: 0,
        country: '',
        transmission: '',
      },
    };
    this.dialogRef = this.dialog.open(AddEditModalComponent, {       
      data: dialogData   
    });

    console.log('openAddDialog')
  }

  openEditDialog(carData: CarObject): void {
    const dialogData: DialogData = {
      id: carData['id'],
      title: 'Edit Car',
      mode: 'edit',
      car: { ...carData}, // Copy the carData object to avoid modifying the original data
    };
    this.dialogRef = this.dialog.open(AddEditModalComponent, {       
      data: dialogData   
    });
  }
}
