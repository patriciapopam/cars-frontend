import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../../../models/DialogData';
import { HttpClientService } from 'src/app/services/HttpClientService/HttpClientService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-modal',
  templateUrl: './add-edit-modal.component.html',
  styleUrls: ['./add-edit-modal.component.css']
})
export class AddEditModalComponent implements OnInit {
  carProperties: { name: string; value: any }[] = [];
  submitFormText: string;
  submitFormTooltip:string;
  firstDisable: boolean;
  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddEditModalComponent>,
    private HttpClient: HttpClientService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  ngOnInit(): void {
    this.firstDisable = this.data.mode === 'edit' ? true : false;
    this.carProperties = this.getCarProperties();
    this.submitFormText = this.data.mode === 'add' ? 'Add car' : 'Edit car';
    this.submitFormTooltip = this.data.mode === 'add' ? 'Add a new car' : 'Edit this car';
    this.formGroup = this.formBuilder.group({});
    this.carProperties.forEach((prop) => {
      this.formGroup.addControl(prop.name, this.formBuilder.control('', [Validators.maxLength(50),Validators.minLength(2)]));
    });
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
      this.HttpClient.editCar(this.data.id, this.data.car).subscribe(
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

  changeFirstDisable():void{
    this.firstDisable = false;
  }
}
