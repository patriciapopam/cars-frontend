import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClientService } from 'src/app/services/HttpClientService/HttpClientService';
import { HttpErrorResponse } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FilterCarsService } from 'src/app/services/FilterCarService/filter-cars.service';
import { AddEditModalService } from 'src/app/services/EditModalService/add-edit-modal-service.service';
import { CarObject } from 'src/models/CarObject';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {

  carList: MatTableDataSource<any>;
  displayedColumns: string[] = ['brand', 'category', 'model', 'year', 'action_delete', 'action_edit'];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private httpService: HttpClientService,
              private filterCarsService: FilterCarsService,
              private addEditModalService: AddEditModalService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCarList();
    this.filterCarsService.updatedCarList$.subscribe((data) => {
      this.carList = new MatTableDataSource(data);
      this.carList.paginator = this.paginator;
      this.carList.sort = this.sort;  
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.carList.filter = filterValue.trim().toLowerCase();

    if (this.carList.paginator) {
      this.carList.paginator.firstPage();
    }
  }

  getCarList() {

    this.httpService.getCarData().subscribe(
      (carList) => {
        this.carList = new MatTableDataSource(carList);
        
        this.carList.paginator = this.paginator;
        this.carList.sort = this.sort;
        
        let brandList = new Set<string>();
        let categoryList = new Set<string>();
        let modelList = new Set<string>();
        let yearList =  new Set<string>();

        for (let car of carList) {
          brandList.add(car.brand);
          categoryList.add(car.category);
          modelList.add(car.model);
          yearList.add(car.year);
        }
        this.filterCarsService.updateFilterLists(brandList, categoryList, modelList, yearList); 
        
      },
      (error: HttpErrorResponse) => {
        console.log(error.status);
      }
    );
  
  }

  viewCarDetails(car: any) {
    var carDetails = <CarObject>{};

    this.httpService.getCarDataById(car.id).subscribe(
      (car) => {
        carDetails = car;
        console.log(carDetails);
        this.addEditModalService.openEditDialog(carDetails);
        this.addEditModalService.dialogRef?.afterClosed().subscribe((result) => {
          if (result) {
            this.getCarList();
          }
        });
      },
      (error: HttpErrorResponse) => {
        console.log(error.status);
      }
    );

  }
  
  deleteCar(id: string) {
    const dialogRef = this.dialog.open(ConfirmationModalComponent);
    
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.httpService.deleteCar(id).subscribe(
          (response) => {
            console.log(response);
            this.getCarList();
          },
          (error: HttpErrorResponse) => {
            console.log(error.status);
          }
        );
        //result = false;
      }
    });
  }

}
