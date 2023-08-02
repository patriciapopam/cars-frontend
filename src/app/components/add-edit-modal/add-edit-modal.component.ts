import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../../../models/DialogData';
import { HttpClientService } from 'src/app/services/HttpClientService/HttpClientService';

@Component({
  selector: 'app-add-edit-modal',
  templateUrl: './add-edit-modal.component.html',
  styleUrls: ['./add-edit-modal.component.css']
})
export class AddEditModalComponent {
  carProperties: { name: string; value: any }[] = [];
  submitFormText: string;

  firstDisable: boolean;

  constructor(
    public dialogRef: MatDialogRef<AddEditModalComponent>,
    private HttpClient: HttpClientService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    if (data.mode === 'edit') { 
      this.firstDisable = true;
    } else {
      this.firstDisable = false;
    }

    this.carProperties = this.getCarProperties();
    this.submitFormText = data.mode === 'add' ? 'Add car' : 'Edit car';
  }

  getCarProperties(): { name: string; value: any }[] {
    const { id, ...restOfCar } = this.data.car;   return Object.entries(restOfCar).map(([name, value]) => ({ name, value }));
  }

  getInputType(value: any): string {
    // Use the typeof operator to check the type of the value
    if (typeof value === 'number') {
      return 'number'; // If the property type is number, set the input type to "number"
    } else {
      return 'text'; // If the property type is anything other than number, set the input type to "text"
    }
  }
    //TODO: change the endpoints to edit and add
    onSubmitClick(): void {
      console.log('send request');
      if(this.data.mode === 'add')
      {
      this.HttpClient.deleteCar(this.data.id).subscribe(
        (response) => {
          console.log('Delete Request Response:', response);
          this.dialogRef.close(true);
        },
        (error) => {
          console.error('Error making DELETE request:', error);
          this.dialogRef.close(true);
        }
      );
    }
    else if (this.data.mode === 'edit') {
      this.HttpClient.editCar(this.data.car).subscribe(
        (response) => {
          console.log('Put Request Response:', response);
          this.dialogRef.close(true);
        },
        (error) => {
          console.error('Error making PUT request:', error);
          this.dialogRef.close(true);
        }
      );
    }
    else{
      console.log('Error: Invalid mode');
    }
  }
  onCancelClick(): void {
    this.dialogRef.close(false);
  }

  consoleCar():void{
    console.log(this.data.car);
  }
}
