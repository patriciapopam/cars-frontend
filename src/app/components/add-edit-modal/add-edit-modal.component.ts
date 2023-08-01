import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {NgFor} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DialogData } from '../../../models/DialogData';
import { HttpClientService } from 'src/app/services/HttpClientService/HttpClientService';

@Component({
  selector: 'app-add-edit-modal',
  templateUrl: './add-edit-modal.component.html',
  styleUrls: ['./add-edit-modal.component.css'],
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule,NgFor],
})

export class AddEditModalComponent  {
  carProperties: { name: string; value: any }[] = [];
  submitFormText:string;
  constructor(
    public dialogRef: MatDialogRef<AddEditModalComponent>,
    private HttpClient:HttpClientService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) 
    {
    this.carProperties=this.getCarProperties();
    if (data.mode==="add") this.submitFormText="Add car"
    else this.submitFormText="Edit car"
  }
  
  getCarProperties(): { name: string; value: any }[] {
    return Object.entries(this.data.car).map(([name, value]) => ({ name, value }));
  }
  
  getInputType(value: any): string {
    // Use the typeof operator to check the type of the value
    if (typeof value === 'number') {
      return 'number'; // If the property type is number, set the input type to "number"
    } else {
      return 'text'; // If the property type is anything other than number, set the input type to "text"
    }
  }

    onSubmitClick():void{
    console.log("send request")
    this.HttpClient.getCarData();
    this.dialogRef.close();
  }


  onCancelClick():void{
    this.dialogRef.close();
  }
}
