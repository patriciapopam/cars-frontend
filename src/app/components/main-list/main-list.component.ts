import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClientService } from 'src/app/services/HttpClientService/HttpClientService';
import { HttpErrorResponse } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FilterCarsService } from 'src/app/services/FilterCarService/filter-cars.service';
import { AddEditModalService } from 'src/app/services/EditModalService/add-edit-modal-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { FormControl } from '@angular/forms';
import { CarObject } from 'src/models/CarObject';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {

  carList: MatTableDataSource<any>;
  displayedColumns: string[] = ['brand', 'category', 'model', 'year', 'action_delete', 'action_edit'];
  public isFilterShown: boolean = false;

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

    this.filterCarsService.updatedBrandList$.subscribe((data) => {
      this.brandList = data;
    });

    this.filterCarsService.updatedCategoryList$.subscribe((data) => {
      this.categoryList = data;
    });

    this.filterCarsService.updatedModelList$.subscribe((data) => {
      this.modelList = data;
    });

    this.filterCarsService.updatedYearList$.subscribe((data) => {
      this.yearList = data;
    });
  }

  maximizeFilterMenu() {
    this.isFilterShown = true;
  }

  minimizeFilterMenu() {
    this.isFilterShown = false;
  }

  addCar() {
    this.addEditModalService.openAddDialog();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.carList.filter = filterValue.trim().toLowerCase();

    if (this.carList.paginator) {
      this.carList.paginator.firstPage();
    }
  }



  //to modify in the future
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
    var carDetail = <CarObject>{};

    this.httpService.getCarDataById(car.id).subscribe(
      (car) => {
        carDetail = car;
        console.log(carDetail);
        this.addEditModalService.openEditDialog(carDetail);
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
      }
    });
  }

  filteredCarList: any[] = [];

  brands = new FormControl('');
  categories = new FormControl('');
  models = new FormControl('');
  years = new FormControl('');

  brandList: string[];
  categoryList: string[];
  modelList: string[];
  yearList: string[];

  applyAdvancedFilter() {
    const filteredCar: CarSummary = {
      brand: this.brands.value,
      category: this.categories.value,
      model: this.models.value,
      year: this.years.value
    };

    this.httpService.filterByMultipleSelection(filteredCar).subscribe(
      (carList) => {
        this.filteredCarList = carList;
        this.filterCarsService.updateData(this.filteredCarList);
      },
      (error: HttpErrorResponse) => {
        console.log(error.status);
      }
    );
  }

  clearFilter() {
    this.brands.reset();
    this.categories.reset();
    this.models.reset();
    this.years.reset();

    this.httpService.getCarData().subscribe(
      (carList) => {
        this.filteredCarList = carList;
        this.filterCarsService.updateData(this.filteredCarList);
      },
      (error: HttpErrorResponse) => {
        console.log(error.status);
      }
    );
  }

}

interface CarSummary {
  brand: string | null;
  category: string | null;
  model: string | null;
  year: string | null;
}
