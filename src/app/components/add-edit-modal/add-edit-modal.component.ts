import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../../../models/DialogData';
import { HttpClientService } from 'src/app/services/HttpClientService/HttpClientService.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilterCarsService } from 'src/app/services/FilterCarService/filter-cars.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-edit-modal',
  templateUrl: './add-edit-modal.component.html',
  styleUrls: ['./add-edit-modal.component.css'],
  encapsulation: ViewEncapsulation.None,
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData,

    private filterCarsService: FilterCarsService
  ) { }
  ngOnInit(): void {
    this.firstDisable = this.data.mode === 'edit' ? true : false;
    this.carProperties = this.getCarProperties();
    this.submitFormText = this.data.mode === 'add' ? 'Add car' : 'Save';
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
      this.HttpClient.addCar(this.data.car).subscribe(
        (response) => {
          console.log('Create Request Response:', response);
          this.dialogRef.close(true);
          
          // Get list of summarized cars again and refresh the filter options
          this.HttpClient.getCarData().subscribe(
            (carList) => {
              this.filterCarsService.updateData(carList);
              this.filterCarsService.updateFilterListWithItem(this.data.car.brand, this.data.car.category, this.data.car.model, this.data.car.year)
              console.log(this.filterCarsService.updatedBrandList$);
            },
            (error: HttpErrorResponse) => {
              console.log(error.status);
            }
          );
          
        },
        (error) => {
          console.error('Error making POST request:', error);
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

  formatPropertyName(name: string): string {
    const words = name.split(/(?=[A-Z])/); // Split by capital letters
    const transformedWords = words.map((word, index) => {
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      } else {
        return word.toLowerCase();
      }
    }).join(' ');
  
    return transformedWords;
  }
  
}
